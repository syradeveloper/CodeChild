document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                navLinks.forEach(link => {
                    if (link.getAttribute('href').slice(1) === entry.target.id) {
                        link.style.color = 'var(--accent-color)';
                    } else {
                        link.style.color = 'var(--text-color)';
                    }
                });
            } else {
                entry.target.classList.remove('visible');
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const scrollToTopButton = document.getElementById('scrollToTopButton');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        if (currentScroll > 650) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }

        if (currentScroll > lastScrollTop) {
            scrollToTopButton.style.transform = 'translateY(-20px)';
        } else {
            // Скроллим вверх, перемещаем кнопку вниз
            scrollToTopButton.style.transform = 'translateY(20px)'; 
        }

        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    scrollToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
