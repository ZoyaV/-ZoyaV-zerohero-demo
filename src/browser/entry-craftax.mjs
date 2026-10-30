import {install} from './session.mjs';
const startup=install('craftax');
import('../main.js').then(()=>startup.prepare()).catch(error=>startup.fail(error.message));
