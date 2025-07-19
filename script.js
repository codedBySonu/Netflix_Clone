
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
