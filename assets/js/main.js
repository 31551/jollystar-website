(function() {
    'use strict';

    // Mobile nav toggle
    var navToggle = document.getElementById('navToggle');
    var mainNav = document.getElementById('mainNav');
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            mainNav.classList.toggle('open');
        });
    }

    // Dropdown toggle on mobile (disabled - sub-menus always visible)
    // var hasChildren = document.querySelectorAll('.has-children > a');
    // hasChildren.forEach(function(link) {
    //     link.addEventListener('click', function(e) {
    //         if (window.innerWidth <= 900) {
    //             e.preventDefault();
    //             this.parentElement.classList.toggle('open');
    //         }
    //     });
    // });

    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
        if (window.innerWidth <= 900 && mainNav && mainNav.classList.contains('open')) {
            if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
                mainNav.classList.remove('open');
            }
        }
    });

    // Banner auto-slider
    var banners = document.querySelectorAll('.banner-slider .slide');
    if (banners.length > 1) {
        var current = 0;
        var dots = document.querySelectorAll('.banner-dots span');
        function showSlide(idx) {
            banners.forEach(function(s, i) {
                s.style.display = i === idx ? 'block' : 'none';
            });
            if (dots.length) {
                dots.forEach(function(d, i) {
                    d.className = i === idx ? 'active' : '';
                });
            }
            current = idx;
        }
        showSlide(0);
        if (dots.length) {
            dots.forEach(function(d, i) {
                d.addEventListener('click', function() { showSlide(i); });
            });
        }
        setInterval(function() {
            showSlide((current + 1) % banners.length);
        }, 5000);
    }

    // Tab switching on homepage
    var tabLinks = document.querySelectorAll('.tab-nav a');
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            var target = this.getAttribute('href').slice(1);
            tabLinks.forEach(function(l) { l.classList.remove('active'); });
            this.classList.add('active');
            document.querySelectorAll('.tab-panel').forEach(function(p) {
                p.classList.remove('active');
            });
            var panel = document.getElementById(target);
            if (panel) panel.classList.add('active');
        });
    });
})();
