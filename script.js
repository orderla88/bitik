
// SERVICE WORKER 
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js', { scope: './' })
    .then((reg) => console.log('Service worker registered:', reg))
    .catch((err) => console.error('Service worker not registered:', err));
}

// INSTALL BUTTON 
document.addEventListener("DOMContentLoaded", () => {

    const desktopContainer = document.getElementById("desktopTipContainer");

    const iosContainer = document.getElementById("iosTipContainer");

    const androidContainer = document.getElementById("androidTipContainer");

    const androidInstallContainer = document.getElementById("androidInstallContainer");

    const androidInstallBtn = document.getElementById("androidInstallBtn");

    function hideAllInstallButtons() {
        if (desktopContainer)
            desktopContainer.style.display = "none";

        if (iosContainer)
            iosContainer.style.display = "none";

        if (androidContainer)
            androidContainer.style.display = "none";

        if (androidInstallContainer)
            androidInstallContainer.style.display = "none";
    }

    // 1. Detect if already installed
    const isInstalled =
        window.matchMedia('(display-mode: standalone)').matches ||
        window.navigator.standalone === true;
    if (isInstalled) {
        hideAllInstallButtons();
        return;
    }

    const ua = navigator.userAgent;
    const isIOS = /iPhone|iPad|iPod/i.test(ua);
    const isAndroid = /Android/i.test(ua);
    // Explicitly target desktop (checking against common mobile identifiers)
    const isDesktop = !isIOS && !isAndroid;

    // Hide all initially
    hideAllInstallButtons();

    // 2. Show buttons based on strict device checks
    if (isIOS && iosContainer) {
        iosContainer.style.display = "block";
    } else if (isDesktop && desktopContainer) {
        desktopContainer.style.display = "block";
    } else if (isAndroid && androidContainer) {
        androidContainer.style.display = "block";
    }

    // 3. Android installation handling
    let deferredPrompt;
    if ( 
        isAndroid &&
        androidContainer &&
        androidInstallContainer &&
        androidInstallBtn
    ) {
        window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            deferredPrompt = e;
            // Hide fallback instructions
            androidContainer.style.display = "none";
            // Show real install button
            androidInstallContainer.style.display = "block";
        });

        androidInstallBtn.addEventListener("click", async () => {
            if (!deferredPrompt) return;
            deferredPrompt.prompt();
            const { outcome } =
                await deferredPrompt.userChoice;
            console.log("User response:", outcome);
            if (outcome === "accepted") {
                androidInstallContainer.style.display = "none";
            } else {
                // Restore fallback instructions
                androidInstallContainer.style.display = "none";
                androidContainer.style.display = "block";
            }
            deferredPrompt = null;
        });

        window.addEventListener("appinstalled", () => {
            console.log("PWA installed successfully");
            hideAllInstallButtons();
            deferredPrompt = null;
});
    }

// SHARE BUTTON
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





// Have an issue with share button. It works in website version, but does not respond in PWA