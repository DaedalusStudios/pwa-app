const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const event = window.deferredPrompt;
    if (!event) {
        return;
    }
    event.prompt();
    const choiceResult = await event.userChoice;
    if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
        butInstall.style.display = 'none';
    } else {
        console.log('User dismissed the A2HS prompt');
    }
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('JATE Web App was installed', event);
    butInstall.style.display = 'none';
});
