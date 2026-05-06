
// SERVICE WORKER 
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: './' })
    .then((reg) => console.log('Service worker registered:', reg))
    .catch((err) => console.error('Service worker not registered:', err));
}


// INSTALL BUTTON
document.addEventListener("DOMContentLoaded", () => {
  let deferredPrompt;
  const Btn = document.getElementById('installBtn');
  // Hide button if already installed (running in standalone mode)
  if (window.matchMedia('(display-mode: standalone)').matches) {
    Btn.style.display = "none";
  }
  // Hide button if user has already handled the prompt before
  if (localStorage.getItem("pwaHandled")) {
    Btn.style.display = "none";
  }
  // Listen for the beforeinstallprompt event
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Only show if not previously handled
    if (!localStorage.getItem("pwaHandled")) {
      Btn.style.display = "block";
    }
    Btn.addEventListener("click", async () => {
      if (!deferredPrompt) return;
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      console.log("User response:", outcome);
      // Mark as handled (either accepted or dismissed)
      localStorage.setItem("pwaHandled", "true");
      deferredPrompt = null;
      Btn.style.display = "none";
    });
  });
  // Hide button once app is installed
  window.addEventListener("appinstalled", () => {
    console.log("PWA installed");
    localStorage.setItem("pwaHandled", "true");
    Btn.style.display = "none";
  });
});


// SHARE BUTTON

document.addEventListener("DOMContentLoaded", () => {
    const shareBtn = document.getElementById('shareBtn');
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: document.title,
            url: window.location.href
          });
          console.log('Shared successfully');
        } catch (err) {
          console.error('Error sharing:', err);
        }
      } else {
        alert("Web Share API not supported on this browser.");
      }
    });
  });





