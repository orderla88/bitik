if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/BITIK/sw.js', { scope: '/BITIK/' })
    .then((reg) => console.log('Service worker registered:', reg))
    .catch((err) => console.error('Service worker not registered:', err));
}


document.addEventListener("DOMContentLoaded", () => {
  let deferredPrompt;
  const Btn = document.querySelector("button");

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





