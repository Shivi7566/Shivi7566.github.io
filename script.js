// Scroll reveal
const els = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); }
  });
},{threshold:0.15});
els.forEach(el=>io.observe(el));

// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.navlinks');
if(menuBtn && navLinks){
  menuBtn.addEventListener('click', ()=> navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a=> a.addEventListener('click', ()=> navLinks.classList.remove('open')));
}

// Active nav link
const path = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.navlinks a').forEach(a=>{
  const href = a.getAttribute('href');
  if(href === path) a.classList.add('active');
});
