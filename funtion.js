function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".mobile-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}
document.addEventListener('DOMContentLoaded', function () {
    var tag_id = 'particles-container';
    var path_config_json = 'particlesjs-config.json';

    window.particlesJS.load(tag_id, path_config_json, function() {
        console.log('Particles.js configuration loaded and initialized.');
    });
});
