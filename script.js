let discordLink = document.getElementById('discord-link');

discordLink.onclick = function(event) {
    event.preventDefault();

    navigator.clipboard.writeText('.ovni.');

    let copyMsg = document.createElement('span');
    copyMsg.textContent = "¡Copiado!";
    copyMsg.style.position = "absolute";
    copyMsg.style.color = "#fff";
    copyMsg.style.background = "rgba(0,0,0,0.8)";
    copyMsg.style.borderRadius = "5px";
    copyMsg.style.padding = "5px 10px";
    copyMsg.style.zIndex = "100";
    copyMsg.style.top = "50%";
    copyMsg.style.left = "50%";
    copyMsg.style.transform = "translate(-50%, -50%)";
    copyMsg.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    copyMsg.style.opacity = "0";

    discordLink.append(copyMsg);

    // Trigger reflow to enable transition
    setTimeout(() => {
        copyMsg.style.opacity = "1";
        copyMsg.style.transform = "translate(-50%, -60%)";
    }, 0);

    // Hide the message after 2 seconds
    setTimeout(() => {
        copyMsg.style.opacity = "0";
        copyMsg.style.transform = "translate(-50%, -50%)";
        // Remove the element after the transition
        setTimeout(() => {
            if (copyMsg.parentNode) {
                discordLink.removeChild(copyMsg);
            }
        }, 500);
    }, 2000);
};