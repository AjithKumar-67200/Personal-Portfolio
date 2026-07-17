(function () {
    'use strict';

    // ===== Page Loader =====
    window.addEventListener('load', function () {
        setTimeout(function () {
            document.getElementById('pageLoader').classList.add('hidden');
        }, 600);
    });

    // ===== Theme =====
    var themeToggle = document.getElementById('themeToggle');
    var html = document.documentElement;
    var savedTheme = localStorage.getItem('portfolio-theme') || 'dark';

    html.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', function () {
        var current = html.getAttribute('data-theme');
        var next = current === 'dark' ? 'light' : 'dark';
        html.setAttribute('data-theme', next);
        localStorage.setItem('portfolio-theme', next);
        updateThemeIcon(next);
    });

    function updateThemeIcon(theme) {
        themeToggle.querySelector('i').className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }

    // ===== Mobile Nav =====
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');

    navToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        navToggle.classList.toggle('open');
    });

    document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            navToggle.classList.remove('open');
        });
    });

    // ===== Scroll: nav, progress, back-to-top =====
    var navbar = document.getElementById('navbar');
    var scrollProgress = document.getElementById('scrollProgress');
    var backToTop = document.getElementById('backToTop');
    var sections = document.querySelectorAll('section[id], footer[id]');
    var navItems = document.querySelectorAll('.nav-links a');

    function onScroll() {
        var scrollY = window.scrollY;
        var docHeight = document.documentElement.scrollHeight - window.innerHeight;
        var progress = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        var hero = document.querySelector('.hero-premium');

        scrollProgress.style.width = progress + '%';
        navbar.classList.toggle('scrolled', scrollY > 40);
        backToTop.classList.toggle('visible', scrollY > 500);

        if (hero) {
            var heroFade = Math.min(1, scrollY / (window.innerHeight * 0.65));
            hero.classList.toggle('is-scrolling', scrollY > 40);
            hero.style.setProperty('--hero-fade', heroFade.toFixed(2));
        }

        sections.forEach(function (section) {
            var top = section.offsetTop - 120;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollY >= top && scrollY < top + height) {
                navItems.forEach(function (item) {
                    item.classList.toggle('active', item.getAttribute('href') === '#' + id);
                });
            }
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ===== Cursor Glow =====
    var cursorGlow = document.getElementById('cursorGlow');

    if (window.matchMedia('(pointer: fine)').matches) {
        document.addEventListener('mousemove', function (e) {
            cursorGlow.style.left = e.clientX + 'px';
            cursorGlow.style.top = e.clientY + 'px';
        });
    }

    // ===== Scroll Reveal =====
    var revealObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -60px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
        revealObserver.observe(el);
    });

    document.querySelectorAll('.hero-premium .reveal').forEach(function (el, i) {
        setTimeout(function () { el.classList.add('visible'); }, 300 + i * 120);
    });

    // ===== Animated Counters =====
    var statNums = document.querySelectorAll('.stat-num');
    var countersStarted = false;

    var counterObserver = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting && !countersStarted) {
            countersStarted = true;
            statNums.forEach(function (stat) {
                var target = parseFloat(stat.getAttribute('data-target'));
                var isDecimal = stat.hasAttribute('data-decimal');
                var suffix = stat.getAttribute('data-suffix') || '';
                var duration = 2200;
                var start = performance.now();

                function update(now) {
                    var progress = Math.min((now - start) / duration, 1);
                    var eased = 1 - Math.pow(1 - progress, 4);
                    var current = target * eased;

                    if (isDecimal) {
                        stat.textContent = current.toFixed(1) + suffix;
                    } else if (target >= 1000) {
                        stat.textContent = Math.floor(current).toLocaleString() + suffix;
                    } else {
                        stat.textContent = Math.floor(current) + suffix;
                    }

                    if (progress < 1) requestAnimationFrame(update);
                }

                requestAnimationFrame(update);
            });
        }
    }, { threshold: 0.4 });

    if (statNums.length) {
        counterObserver.observe(statNums[0].closest('.stats-premium'));
    }

    // ===== Netflix Row Drag Scroll =====
    var projectRow = document.getElementById('projectRow');
    if (projectRow) {
        var isDown = false;
        var startX;
        var scrollLeft;

        projectRow.addEventListener('mousedown', function (e) {
            if (e.target.closest('.show-visit-btn')) return;
            isDown = true;
            projectRow.classList.add('dragging');
            startX = e.pageX - projectRow.offsetLeft;
            scrollLeft = projectRow.scrollLeft;
        });

        projectRow.addEventListener('mouseleave', function () {
            isDown = false;
            projectRow.classList.remove('dragging');
        });

        projectRow.addEventListener('mouseup', function () {
            isDown = false;
            projectRow.classList.remove('dragging');
        });

        projectRow.addEventListener('mousemove', function (e) {
            if (!isDown) return;
            e.preventDefault();
            var x = e.pageX - projectRow.offsetLeft;
            projectRow.scrollLeft = scrollLeft - (x - startX) * 1.5;
        });
    }

    // ===== Copy contact details =====
    var toast = document.getElementById('toast');

    function copyToClipboard(text, message) {
        navigator.clipboard.writeText(text).then(function () {
            toast.textContent = message;
            toast.classList.add('show');
            setTimeout(function () { toast.classList.remove('show'); }, 2500);
        });
    }

    var copyEmailBtn = document.getElementById('copyEmail');
    if (copyEmailBtn) {
        copyEmailBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            copyToClipboard('ajith67200@gmail.com', 'Email copied to clipboard!');
        });
    }

    var copyPhoneBtn = document.getElementById('copyPhone');
    if (copyPhoneBtn) {
        copyPhoneBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            copyToClipboard('+917338773239', 'Phone number copied!');
        });
    }

    // ===== Typed.js =====
    if (typeof Typed !== 'undefined' && document.querySelector('.typed-text-output')) {
        var typedStrings = document.querySelector('.typed-text').textContent;
        new Typed('.typed-text-output', {
            strings: typedStrings.split(', '),
            typeSpeed: 45,
            backSpeed: 25,
            smartBackspace: false,
            loop: true,
            showCursor: true
        });
    }

    // ===== Smooth Scroll =====
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
        anchor.addEventListener('click', function (e) {
            var targetId = this.getAttribute('href');
            if (targetId === '#') return;
            var target = document.querySelector(targetId);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

})();
