import {install} from './session.mjs';
const startup=install('alfworld');
import('../alfred.mjs').then(()=>startup.prepare()).catch(error=>startup.fail(error.message));
