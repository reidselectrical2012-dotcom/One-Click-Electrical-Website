const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#enquiry-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Website enquiry – ${data.get('type')}`);
  const body = encodeURIComponent(
    `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\nService: ${data.get('type')}\n\nProject details:\n${data.get('message')}`
  );
  document.querySelector('#form-status').textContent = 'Your email app should open with the enquiry details ready to send.';
  window.location.href = `mailto:Karl.Reid@oneclickelectrical.co.uk?subject=${subject}&body=${body}`;
});


// Only show the drone gallery when at least one real video file is available.
const droneSection = document.querySelector('#drone-showcase');
const droneCards = [...document.querySelectorAll('[data-video-card]')];
let availableDroneVideos = 0;
droneCards.forEach(card => {
  const video = card.querySelector('video');
  const source = video?.querySelector('source');
  if (!video || !source) return;
  video.addEventListener('loadedmetadata', () => {
    availableDroneVideos += 1;
    droneSection.hidden = false;
  }, { once: true });
  video.addEventListener('error', () => {
    card.hidden = true;
    if (availableDroneVideos === 0 && droneCards.every(item => item.hidden)) droneSection.hidden = true;
  }, { once: true });
});
