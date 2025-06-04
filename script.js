
document.addEventListener('DOMContentLoaded', () => {
  
  const heroContent = document.querySelector('.hero-content');
  heroContent.style.opacity = 0;
  heroContent.style.transform = 'translateY(20px)';
  setTimeout(() => {
    heroContent.style.transition = 'all 1s ease';
    heroContent.style.opacity = 1;
    heroContent.style.transform = 'translateY(0)';
  }, 100);

  
  const getStartedBtn = document.querySelector('.hero button');
  getStartedBtn.addEventListener('click', () => {
    const email = prompt('Enter your email to start or restart your membership:');
    if (email) {
      alert(`Thanks! We'll send more info to: ${email}`);
    } else {
      alert('Please enter a valid email address!');
    }
  });

});


document.addEventListener('DOMContentLoaded', () => {
  
  const body = document.body;
  const toggleBtn = document.getElementById('toggle-theme');

  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    toggleBtn.textContent = '☀️';
  }

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    if (body.classList.contains('light-mode')) {
      toggleBtn.textContent = '☀️';
      localStorage.setItem('theme', 'light');
    } else {
      toggleBtn.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    }
  });

});