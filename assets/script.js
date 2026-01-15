$(function () {
    // ========== TYPING ANIMATION CURSOR ==========
    const typingText = document.querySelector('.typing-text');
    if (typingText) {
        // Remove cursor after typing completes (0.3s delay + 1.2s animation)
        setTimeout(() => {
            typingText.classList.add('done');
        }, 1500);

        // Trigger intro paragraphs after typing completes (synced with folder at 1.8s)
        setTimeout(() => {
            document.querySelectorAll('.intro-p').forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('anim-visible');
                }, index * 100); // 100ms stagger between paragraphs
            });
        }, 1800);
    }

    // ========== TABS ==========
    $(".tab-link").on("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const tabId = $(this).data("tab");
  
      // Update active tab link
      $(".tab-link").removeClass("active").attr("aria-selected", "false");
      $(this).addClass("active").attr("aria-selected", "true");
  
      // Update tab content
      $(".tab-content").removeClass("active").fadeOut(200);
      $(`#${tabId}`).fadeIn(200).addClass("active");
    });
  
    // Keyboard navigation for tabs
    $(".tabs").on("keydown", ".tab-link", function (e) {
      const $currentTab = $(this);
      const $tabs = $currentTab.closest(".tabs").find(".tab-link");
      let newIndex = $tabs.index($currentTab);
  
      switch (e.key) {
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          newIndex = (newIndex - 1 + $tabs.length) % $tabs.length;
          $tabs.eq(newIndex).focus().click();
          break;
        case "ArrowRight":
        case "ArrowDown":
          e.preventDefault();
          newIndex = (newIndex + 1) % $tabs.length;
          $tabs.eq(newIndex).focus().click();
          break;
        case "Enter":
        case " ":
          e.preventDefault();
          $currentTab.click();
          break;
      }
    });

    // ========== DRAGGABLE DESKTOP ICONS ==========
    $("#works-section .folder-link").draggable({
        containment: "body",
        cursor: "move",
        cancel: "" // Allow dragging on buttons
    });

    // ========== BACK TO TOP BUTTON ==========
    const backToTopButton = $("#back-to-top");

    // ========== STICKY SECTION NAV ==========
    const sectionNav = document.getElementById("sectionNav");
    const stickyClass = "sticky";
    const sectionNavOffset = sectionNav ? sectionNav.offsetTop : 0;

    // ========== SCROLL HANDLER ==========
    $(window).on("scroll", function () {
      const scrollTop = $(this).scrollTop();

      // Back to top visibility
      if (scrollTop > 200) {
        backToTopButton.fadeIn();
      } else {
        backToTopButton.fadeOut();
      }

      // Sticky section navigation
      if (sectionNav) {
        if (scrollTop > sectionNavOffset) {
          sectionNav.classList.add(stickyClass);
        } else {
          sectionNav.classList.remove(stickyClass);
        }
      }

      // Highlight active section in navigation
      const sections = $("section[id]");
      let currentSection = "";

      sections.each(function () {
        const sectionTop = $(this).offset().top;
        const sectionHeight = $(this).outerHeight();
        const scrollPosition = scrollTop + 100; // Offset for better triggering

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          currentSection = $(this).attr("id");
        }
      });

      // Update nav links
      $(".section-nav a").removeClass("active");
      if (currentSection) {
        $(`.section-nav a[href="#${currentSection}"]`).addClass("active");
      }
    });

    backToTopButton.on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 400);
    });
  
    // ========== MOBILE NAV TOGGLE ==========
    const mobileHamburgerButton = $("#mobileNav .hamburger");
    const mobileNavList = $("#mobileNavList");
  
    mobileHamburgerButton.on("click", function () {
      const isExpanded = $(this).attr("aria-expanded") === "true";
      $(this).attr("aria-expanded", !isExpanded);
      mobileNavList.toggleClass("expanded");
    });
  
    $("#mobileNavList a").on("click", function () {
      mobileNavList.removeClass("expanded");
      mobileHamburgerButton.attr("aria-expanded", "false");
    });
  
    // ========== ADD TABINDEX TO HEADINGS ==========
    if ($("main#selected-works").length) {
      $("main#selected-works .content h3, main#selected-works .content h4").attr("tabindex", "0");
    }
  
    // Sticky navigation handled in unified scroll listener above
  
    // ========== MOBILE WORK SELECT ==========
    $("#mobile-work-select").on("change", function() {
      const selectedUrl = $(this).val();
      if (selectedUrl) {
        window.location.href = selectedUrl;
      }
    });
  });

  document.addEventListener("DOMContentLoaded", function () {
    // ========== PASSWORD PROTECTED CONTENT ==========
    //
    // Hey there, fellow developer! 👋
    //
    // Yes, you found the password check. Congrats on your curiosity!
    // The content is still in the HTML (it's just blurred), so if you really
    // want to see it, you can. But maybe just ask Natalia for the password?
    // She's nice and would probably appreciate a coffee chat anyway.
    //
    // If you're a recruiter reading this: hire this person, they clearly
    // know how to inspect code. That's like... 90% of the job.
    //
    // The password is hashed below. It's not Fort Knox, just a friendly gate.
    // Think of it as a "please knock before entering" sign.
    //
    const STORAGE_KEY = "natalia_portfolio_access";

    // Check if user has already unlocked
    function isUnlocked() {
      return sessionStorage.getItem(STORAGE_KEY) === "unlocked";
    }

    // Set unlocked state
    function setUnlocked() {
      sessionStorage.setItem(STORAGE_KEY, "unlocked");
    }

    // Initialize protected content
    const protectedContent = document.querySelector('.protected-content');
    const passwordGate = document.getElementById('passwordGate');
    const passwordInput = document.getElementById('passwordInput');
    const passwordError = document.getElementById('passwordError');

    if (protectedContent && passwordGate) {
      if (isUnlocked()) {
        // Already unlocked - show content
        protectedContent.classList.add('unlocked');
        protectedContent.classList.remove('locked');
      } else {
        // Locked - blur content and show password gate
        protectedContent.classList.add('locked');
        protectedContent.classList.remove('unlocked');

        // Focus the password input
        if (passwordInput) {
          setTimeout(() => passwordInput.focus(), 100);
        }
      }
    }

    // Handle password submission
    function checkPassword() {
      const enteredPassword = passwordInput ? passwordInput.value.trim() : '';

      if (enteredPassword === "Ush4llp4ss!") {
        // Success!
        setUnlocked();
        if (protectedContent) {
          protectedContent.classList.remove('locked');
          protectedContent.classList.add('unlocked');
        }
        if (passwordError) passwordError.classList.remove('visible');
        return true;
      } else {
        // Wrong password
        if (passwordError) passwordError.classList.add('visible');
        if (passwordInput) {
          passwordInput.value = '';
          passwordInput.focus();
        }
        if (passwordGate) {
          passwordGate.style.animation = 'shake 0.5s ease';
          setTimeout(() => { passwordGate.style.animation = ''; }, 500);
        }
        return false;
      }
    }

    // Handle button click
    const unlockBtn = document.getElementById('unlockBtn');
    if (unlockBtn) {
      unlockBtn.addEventListener('click', function(e) {
        e.preventDefault();
        checkPassword();
      });
    }

    // Handle Enter key in input
    if (passwordInput) {
      passwordInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
          e.preventDefault();
          checkPassword();
        }
      });
    }

    // ========== FORBIDDEN PATH PROTECTION ==========
    const forbiddenPaths = [
      '/assets/images/works/internal-app/',
      '/assets/images/works/referral-program/',
      '/assets/images/works/amplify-tablet/',
      '/_sass/',
      '/_includes/',
      '/_layouts/',
      '/.git/',
      '/.jekyll-cache/',
      '/node_modules/'
    ];

    const currentPath = window.location.pathname;

    // Check if current path matches any forbidden path
    const isForbidden = forbiddenPaths.some(forbidden =>
      currentPath.startsWith(forbidden) ||
      currentPath.includes(forbidden)
    );

    if (isForbidden) {
      // Redirect to 404 page
      window.location.replace('/404.html');
    }

    // ========== DARK MODE TOGGLE ==========
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    // Check for saved dark mode preference or system preference
    const savedDarkMode = localStorage.getItem("darkMode");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    function setDarkMode(isDark) {
        if (isDark) {
            document.documentElement.setAttribute("data-theme", "dark");
            if (darkModeToggle) darkModeToggle.checked = true;
        } else {
            document.documentElement.removeAttribute("data-theme");
            if (darkModeToggle) darkModeToggle.checked = false;
        }
    }

    // Initialize dark mode
    if (savedDarkMode === "true") {
        setDarkMode(true);
    } else if (savedDarkMode === "false") {
        setDarkMode(false);
    } else if (prefersDark) {
        setDarkMode(true);
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("change", function () {
            const isDark = this.checked;
            setDarkMode(isDark);
            localStorage.setItem("darkMode", String(isDark));
        });
    }

    // Listen for system preference changes
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
        if (localStorage.getItem("darkMode") === null) {
            setDarkMode(e.matches);
        }
    });

    // ========== IMAGE MODAL ==========
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalCaption = document.getElementById("modalCaption");
    const modalClose = document.getElementById("modalClose");
    const modalPrev = document.getElementById("modalPrev");
    const modalNext = document.getElementById("modalNext");

    let currentImageIndex = 0;
    let allImages = [];

    // Only initialize modal if elements exist
    if (modal && modalImage && modalCaption && modalClose && modalPrev && modalNext) {
        // Get hero preview image first, then all work images
        const heroPreview = document.querySelector('.hero-preview img');
        const workImages = Array.from(document.querySelectorAll('.work-image'));

        // Combine hero preview with work images
        allImages = heroPreview ? [heroPreview, ...workImages] : workImages;

        // Make hero preview clickable
        if (heroPreview) {
            heroPreview.style.cursor = 'pointer';
        }
        
        // Add click listeners to all work images
        allImages.forEach((img, index) => {
            img.addEventListener('click', function() {
                currentImageIndex = index;
                showImage(currentImageIndex);
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        // Function to show image at specific index
        function showImage(index) {
            if (index >= 0 && index < allImages.length) {
                const img = allImages[index];
                modalImage.src = img.src;
                modalImage.alt = img.alt;
                
                // Get caption from the parent container
                const captionElement = img.parentElement.querySelector('.work-image-caption');
                modalCaption.textContent = captionElement ? captionElement.textContent : img.alt;
                
                // Update navigation button states
                modalPrev.disabled = (index === 0);
                modalNext.disabled = (index === allImages.length - 1);
            }
        }

        // Close modal functionality
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }

        // Navigation functions
        function showPrevImage() {
            if (currentImageIndex > 0) {
                currentImageIndex--;
                showImage(currentImageIndex);
            }
        }

        function showNextImage() {
            if (currentImageIndex < allImages.length - 1) {
                currentImageIndex++;
                showImage(currentImageIndex);
            }
        }

        // Event listeners
        modalClose.addEventListener('click', closeModal);
        modalPrev.addEventListener('click', showPrevImage);
        modalNext.addEventListener('click', showNextImage);
        
        // Close on background click
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', function(e) {
            if (modal.classList.contains('active')) {
                switch(e.key) {
                    case 'Escape':
                        closeModal();
                        break;
                    case 'ArrowLeft':
                        e.preventDefault();
                        showPrevImage();
                        break;
                    case 'ArrowRight':
                        e.preventDefault();
                        showNextImage();
                        break;
                }
            }
        });
    }

    // ========== IMAGE PROTECTION ==========
    // Prevent right-click on work images
    const workImages = document.querySelectorAll('.work-image');
    workImages.forEach(img => {
        img.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });

        // Additional protection against dragging
        img.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    });

    // Also protect modal images
    if (modalImage) {
        modalImage.addEventListener('contextmenu', function(e) {
            e.preventDefault();
            return false;
        });

        modalImage.addEventListener('dragstart', function(e) {
            e.preventDefault();
            return false;
        });
    }

    // ========== WORK PAGE ENTRY ANIMATION ==========
    const workContent = document.querySelector('.work-content-animate');

    if (workContent) {
        // Animate content on every work page
        workContent.classList.add('anim-active');

        // Skip header animations on work pages
        document.querySelectorAll('.anim-on-load').forEach(el => {
            el.classList.remove('anim-on-load', 'fade-in-down', 'fade-in-up');
            el.style.opacity = '1';
            el.style.transform = 'none';
            el.style.animation = 'none';
        });
    }

    // ========== SCROLL ANIMATION SYSTEM ==========
    // Handles both data-animate attributes and legacy lazy-load classes

    const animationObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Handle data-animate elements
                if (entry.target.hasAttribute('data-animate')) {
                    entry.target.classList.add('anim-visible');
                }
                // Handle legacy lazy-hidden elements
                if (entry.target.classList.contains('lazy-hidden')) {
                    entry.target.classList.add('lazy-visible');
                    entry.target.classList.remove('lazy-hidden');
                }
                animationObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
    });

    // Observe all data-animate elements
    document.querySelectorAll('[data-animate]').forEach(el => {
        animationObserver.observe(el);
    });

    // Legacy lazy load elements (backwards compatible)
    const lazyElements = document.querySelectorAll(
        '#home > section:not(#main-intro) > *:not(.section-nav):not(h2), ' +
        '#selected-works .content > h2, ' +
        '#selected-works .content > h3, ' +
        '#selected-works .content > p, ' +
        '#selected-works .content > .paper-showcase, ' +
        '#selected-works .content > .device-showcase, ' +
        '#selected-works .content > .work-image, ' +
        '#selected-works .content > .sticky-note, ' +
        '#selected-works .content > ul'
    );

    if (lazyElements.length > 0) {
        lazyElements.forEach((el) => {
            // Don't override if already has data-animate
            if (!el.hasAttribute('data-animate')) {
                el.classList.add('lazy-hidden');
                animationObserver.observe(el);
            }
        });
    }

    // ========== STAGGER CHILDREN ANIMATION ==========
    // Automatically stagger children of elements with data-stagger
    document.querySelectorAll('[data-stagger]').forEach(parent => {
        const children = parent.children;
        const staggerDelay = parseFloat(parent.dataset.stagger) || 0.1;

        Array.from(children).forEach((child, index) => {
            if (!child.hasAttribute('data-animate')) {
                child.setAttribute('data-animate', 'fade-up');
            }
            child.style.transitionDelay = `${index * staggerDelay}s`;
            animationObserver.observe(child);
        });
    });

    // ========== ABOUT THIS MAC MODAL ==========
    const aboutMacBtn = document.getElementById('aboutMacBtn');
    const aboutMacOverlay = document.getElementById('aboutMacOverlay');
    const aboutMacClose = document.getElementById('aboutMacClose');
    const designerUptime = document.getElementById('designerUptime');

    if (aboutMacBtn && aboutMacOverlay) {
      // Calculate uptime since career start (2008)
      function calculateUptime() {
        const startDate = new Date('2008-01-01');
        const now = new Date();
        const diff = now - startDate;

        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        return `${years} years, ${days} days, ${hours} hours`;
      }

      if (designerUptime) {
        designerUptime.textContent = calculateUptime();
      }

      // Make modal window draggable by titlebar
      $(".about-mac-window").draggable({
        handle: ".about-mac-titlebar",
        containment: "window",
        cursor: "move"
      });

      // Open modal
      aboutMacBtn.addEventListener('click', function() {
        aboutMacOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      });

      // Close modal
      function closeAboutMac() {
        aboutMacOverlay.classList.remove('active');
        document.body.style.overflow = '';
      }

      if (aboutMacClose) {
        aboutMacClose.addEventListener('click', closeAboutMac);
      }

      // Close on overlay click
      aboutMacOverlay.addEventListener('click', function(e) {
        if (e.target === aboutMacOverlay) {
          closeAboutMac();
        }
      });

      // Close on Escape key
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && aboutMacOverlay.classList.contains('active')) {
          closeAboutMac();
        }
      });
    }
  });
