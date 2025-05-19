window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('start-survey');
  
    button.addEventListener('click', () => {
      document.body.classList.add('chat-active');
    });
  });