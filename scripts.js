// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    window.onresize = function(event) {
        const modal = document.getElementById('contact');
        if (modal.classList.contains('open')) {
            modal.style.display = 'none';
            setTimeout(() => {
                modal.style.display = '';
                modal.classList.remove('open');
            }, 1);
        }
    };
});
