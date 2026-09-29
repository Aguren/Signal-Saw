const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const open = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });

  siteNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const email = data.get('email') || '';
    const service = data.get('service') || 'General inquiry';
    const message = data.get('message') || '';

    const subject = `Signal & Saw inquiry — ${service}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      '',
      'What I’m trying to solve:',
      message,
      '',
      'Sent from signalandsaw.agurenbalkov.com'
    ].join('\n');

    window.location.href = `mailto:signalandsaw@agurenbalkov.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
