document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', function () {
      const content = this.previousElementSibling; // Get the <p> element
      if (content.style.webkitLineClamp) {
        content.style.webkitLineClamp = null; // Remove the line clamp
        content.style.display = 'block'; // Ensure full content is shown
        this.textContent = 'Read less';
      } else {
        content.style.webkitLineClamp = '3'; // Apply the line clamp
        content.style.display = '-webkit-box';
        this.textContent = 'Read more';
      }
    });
  });


  function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(() => {
      minutes = Math.floor(timer / 60);
      seconds = timer % 60;
  
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
  
      display.textContent = `${minutes}:${seconds}`;
  
      if (--timer < 0) {
        timer = duration; // Reset the timer
      }
    }, 1000);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const timerDisplay = document.getElementById("timer");
    const countdownDuration = 30 * 60; // 30 minutes in seconds
    startTimer(countdownDuration, timerDisplay);
  });