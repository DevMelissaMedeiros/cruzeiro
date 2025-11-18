import { templates } from './templates.js';
export function load(route){
  const app=document.getElementById('app');
  app.innerHTML=templates[route]||templates.home;
  const main=document.getElementById('main');
  main.focus();
}
