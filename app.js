const form = document.querySelector('#register-form');
const message = document.querySelector('#form-message');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  const phone = data.get('phone');
  const course = data.get('course');
  const whatsapp = '201000000000';
  const text = `السلام عليكم، أريد حجز حصة تجريبية في أكاديمية نور البيان.%0Aالاسم: ${encodeURIComponent(name)}%0Aالواتساب: ${encodeURIComponent(phone)}%0Aالبرنامج: ${encodeURIComponent(course)}`;
  message.textContent = 'تم تجهيز طلبك. سيتم تحويلك إلى واتساب الأكاديمية.';
  setTimeout(() => window.open(`https://wa.me/${whatsapp}?text=${text}`, '_blank'), 500);
});
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu.addEventListener('click', () => { nav.classList.toggle('mobile-open'); });
