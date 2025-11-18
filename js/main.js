import { load } from './router.js';
import { setupValidation } from './formValidation.js';
import { setupA11y } from './accessibility.js';
function init(){
  document.querySelectorAll('button[data-route]').forEach(b=>{
    b.addEventListener('click',()=>{
      load(b.dataset.route);
      setupValidation();
    });
    b.addEventListener('keydown',e=>{
      if(e.key==='Enter'||e.key===' '){
        e.preventDefault();
        b.click();
      }
    });
  });
  load('home');
  setupA11y();
}
init();
