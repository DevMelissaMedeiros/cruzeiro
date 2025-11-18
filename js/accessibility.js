export function setupA11y(){
  const themeToggle=document.getElementById('themeToggle');
  const contrastToggle=document.getElementById('contrastToggle');
  function applyTheme(){
    document.documentElement.classList.remove('high-contrast','dark-mode');
    const t=localStorage.getItem('theme');
    if(t==='dark') document.documentElement.classList.add('dark-mode');
    if(t==='high') document.documentElement.classList.add('high-contrast');
    if(t==='both') document.documentElement.classList.add('dark-mode','high-contrast');
  }
  if(themeToggle){
    themeToggle.addEventListener('click',()=>{
      const cur=localStorage.getItem('theme')||'';
      const next=cur==='dark'?'':'dark';
      localStorage.setItem('theme',next);
      applyTheme();
      themeToggle.setAttribute('aria-pressed', next==='dark');
    });
  }
  if(contrastToggle){
    contrastToggle.addEventListener('click',()=>{
      const cur=localStorage.getItem('theme')||'';
      const next=cur==='high'?'':'high';
      localStorage.setItem('theme',next);
      applyTheme();
      contrastToggle.setAttribute('aria-pressed', next==='high');
    });
  }
  document.addEventListener('keydown',e=>{
    if(e.key==='/'&&document.activeElement.tagName!=='INPUT'&&document.activeElement.tagName!=='TEXTAREA'){
      e.preventDefault();
      const first=document.querySelector('button[data-route]');
      if(first) first.focus();
    }
  });
  applyTheme();
}
