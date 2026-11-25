"""Stock Crafter simulation running inside the page's Pyodide worker."""
from pathlib import Path
import json, base64
from io import BytesIO
import numpy as np
from PIL import Image
from crafter import Env
from crafter.engine import LocalView, Textures

def png(array):
    stream = BytesIO()
    Image.fromarray(array.astype(np.uint8, copy=False)).save(stream, format='PNG')
    return 'data:image/png;base64,' + base64.b64encode(stream.getvalue()).decode()

def reset(seed):
    global env, pixels, view, turn
    env = Env(seed=seed, size=(256,256), length=2001)
    env.reset()
    pixels, _, _, _ = env.step(0)
    turn = 1
    robot = Textures(Path('/home/pyodide/robot'))
    class SpectatorTextures:
        def get(self, name, size):
            if name and name.startswith('player-'):
                return robot.get('player-down', size)
            return env._textures.get(name, size)
    view = LocalView(env._world, SpectatorTextures(), (25,11))

def screen():
    return pixels.tobytes()

def frame():
    rng = env._world.random.get_state()
    try:
        scene = view(env._player, np.array([16,16])).transpose(1,0,2)
    finally:
        env._world.random.set_state(rng)
    return json.dumps(dict(turn=turn,image=png(scene),focus=png(pixels),
        achievements=env._player.achievements, inventory=env._player.inventory),default=int)

def step(index):
    global pixels, turn
    pixels, _, done, _ = env.step(index)
    while not done and env._player.sleeping and env._player.inventory['energy'] < 9:
        pixels, _, done, _ = env.step(6)
    turn += 1
    return bool(done or turn > 2000)
