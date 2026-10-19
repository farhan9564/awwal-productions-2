/* Awwal Productions / Interactive motion & navigation */
(() => {
  'use strict';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const $ = (s, scope=document) => scope.querySelector(s);
  const $$ = (s, scope=document) => [...scope.querySelectorAll(s)];
  const header = $('.site-header');
  const toggle = $('#mobileToggle');
  const nav = $('#mainNav');
  const preloader = $('#sitePreloader');
  const pageWipe = $('.page-wipe');

  // Animated A-mark loader is deliberately short on repeat visits.
  if (preloader) {
    const bar = $('#loadingProgress');
    const count = $('#loadingCount');
    const repeat = (() => {try{return sessionStorage.getItem('awwal-loaded') === '1'}catch{return false}})();
    const duration = reduceMotion ? 80 : (repeat ? 180 : 680);
    let start;
    const tick = t => {
      if (start === undefined) start = t;
      const x = Math.min(1,(t-start)/duration);
      const eased = 1-Math.pow(1-x,2);
      const n = Math.round(eased*100);
      if (bar) bar.style.width=n+'%';
      if (count) count.textContent=String(n).padStart(2,'0')+'%';
      if(x<1)requestAnimationFrame(tick);
      else {
        preloader.classList.add('done');
        preloader.setAttribute('aria-hidden','true');
        document.body.classList.remove('lock-scroll');
        window.setTimeout(()=>preloader.remove(),650);
        try{sessionStorage.setItem('awwal-loaded','1')}catch{}
      }
    };
    requestAnimationFrame(tick);
    // Safety net, including browser tabs with throttled frames.
    window.setTimeout(()=>{if(!preloader.classList.contains('done')){preloader.classList.add('done');document.body.classList.remove('lock-scroll')}},1600);
  }
  // Sticky header and mobile navigation.
  const updateHeader=()=>{header?.classList.toggle('scrolled',window.scrollY>35);if(header){const height=document.documentElement.scrollHeight-innerHeight;header.style.setProperty('--scroll-progress',height>0?((scrollY/height)*100).toFixed(2)+'%':'0%')}};
  updateHeader(); window.addEventListener('scroll',updateHeader,{passive:true});
  const setMenu = open => {
    if(!nav||!toggle)return;
    nav.classList.toggle('open',open);
    header?.classList.toggle('menu-visible',open);
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'Close menu':'Open menu');
    document.body.classList.toggle('lock-scroll',open);
  };
  toggle?.addEventListener('click',()=>setMenu(toggle.getAttribute('aria-expanded')!=='true'));
  nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));
  window.addEventListener('keydown',e=>{if(e.key==='Escape')setMenu(false)});
  window.addEventListener('resize',()=>{if(innerWidth>850)setMenu(false)});
  // Scroll reveals with fallback and motion accessibility.
  const reveals = $$('.reveal');
  if(reduceMotion || !('IntersectionObserver' in window)) reveals.forEach(el=>el.classList.add('visible'));
  else {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if(entry.isIntersecting){entry.target.classList.add('visible');revealObserver.unobserve(entry.target)}
    }),{threshold:.09,rootMargin:'0px 0px -25px 0px'});
    reveals.forEach(el=>revealObserver.observe(el));
  }
  // The centerpiece subtly switches through the four stages of an agency project.
  const big = $('#studioHeadline'), desc = $('#studioDescription'), phase = $('#studioPhase');
  if(big&&desc&&phase&&!reduceMotion){
    const stages=[
      ['IDEAS.<br><em>IN MOTION.</em>','From the first conversation to the final pixel.','DISCOVER / 01'],
      ['DESIGN.<br><em>WITH PURPOSE.</em>','Meaningful design that makes every interaction count.','DESIGN / 02'],
      ['BUILD.<br><em>TO PERFORM.</em>','A robust digital foundation for ambitious brands.','DEVELOP / 03'],
      ['GROW.<br><em>WITH CLARITY.</em>','Creative thinking meets practical performance.','EVOLVE / 04']
    ];
    let step=0;
    setInterval(()=>{
      if(document.hidden)return;
      step=(step+1)%stages.length;
      big.classList.remove('changing');void big.offsetWidth;
      big.innerHTML=stages[step][0];desc.textContent=stages[step][1];phase.textContent=stages[step][2];
      big.classList.add('changing');
    },3200);
  }
  // Filter supplied projects by one or multiple taxonomy tokens.
  const filters = $$('.filter[data-filter]'), cards = $$('.portfolio-project[data-category]');
  filters.forEach(btn=>btn.addEventListener('click',()=>{
    const f=btn.dataset.filter;
    filters.forEach(b=>{b.classList.toggle('active',b===btn);b.setAttribute('aria-pressed',String(b===btn))});
    cards.forEach(c=>{c.hidden = f!=='all' && !c.dataset.category.split(/\s+/).includes(f)});
  }));
  // Contact form hands message to email or WhatsApp; never implies a backend exists.
  const form=$('#enquiryForm');
  if(form){
    const getData = () => {
      if(!form.reportValidity())return null;
      const d=new FormData(form);
      const fields=['Name: '+d.get('name'),'Email: '+d.get('email'),'Business: '+(d.get('company')||'Not specified'),'Service: '+d.get('service'),'Budget: '+(d.get('budget')||'Not specified'),'Timeline: '+(d.get('timeline')||'Not specified'),'','Project details:',''+d.get('message')];
      return {subject:'Project enquiry — '+d.get('service'),body:fields.join('\n')};
    };
    form.addEventListener('submit',e=>{e.preventDefault();const d=getData();if(d)window.location.href='mailto:info@awwalproductions.com?subject='+encodeURIComponent(d.subject)+'&body='+encodeURIComponent(d.body)});
    $('#sendWhatsApp')?.addEventListener('click',()=>{const d=getData();if(d)window.open('https://wa.me/923034045884?text='+encodeURIComponent(d.subject+'\n\n'+d.body),'_blank','noopener,noreferrer')});
  }
  $$('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
  // Seamless lime transition between internal static HTML pages.
  if(!reduceMotion && pageWipe){
    document.addEventListener('click',e=>{
      const a=e.target.closest?.('a[href]');
      if(!a||e.defaultPrevented||e.ctrlKey||e.metaKey||e.shiftKey||e.altKey||e.button!==0||a.target||a.hasAttribute('download'))return;
      const u=new URL(a.href,location.href);
      if(u.origin!==location.origin||!u.pathname.endsWith('.html')||u.pathname===location.pathname)return;
      e.preventDefault();pageWipe.classList.add('active');setMenu(false);
      setTimeout(()=>location.assign(u.href),260);
    });
    window.addEventListener('pageshow',()=>pageWipe.classList.remove('active'));
  }
})();



/* V8: project visuals load locally. If an image was removed or damaged,
   the existing branded portfolio fallback remains visible. */
(() => {
 document.querySelectorAll('img.site-preview-image').forEach(img => {
   img.addEventListener('error', () => {
     img.classList.remove('is-ready');img.hidden=true;
     img.closest('.site-preview')?.classList.add('preview-unavailable');
   });
 });
})();
