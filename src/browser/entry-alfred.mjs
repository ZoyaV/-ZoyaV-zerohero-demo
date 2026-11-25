import {install} from './session.mjs';

if (document.documentElement.classList.contains('paper-game')) {
  const objective = document.querySelector('.objective');
  objective.querySelector('strong').textContent = 'Objective';
  objective.append(document.querySelector('#result'), document.querySelector('#error'));
  document.querySelector('.content .world').append(objective);
}

const startup=install('alfworld');
import('../alfred.mjs').then(()=>startup.prepare()).catch(error=>startup.fail(error.message));
