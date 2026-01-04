$(function () {
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
  
    // ========== QUICK NAV OVERLAY ==========
    const quickNavOverlay = $("#quick-nav-overlay");
    const closeQuickNavButton = $("#close-quick-nav");
  
    function openQuickNav() {
      quickNavOverlay.addClass("active");
      quickNavOverlay.find("a, button").first().focus();
    }
  
    function closeQuickNav() {
      quickNavOverlay.removeClass("active");
    }
  
    // Open with Cmd+K, Ctrl+K, or Shift+/
    $(document).on("keydown", function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        openQuickNav();
      }
  
      if (e.shiftKey && e.key === "/") {
        e.preventDefault();
        openQuickNav();
      }
  
      if (e.key === "Escape") {
        closeQuickNav();
      }
    });
  
    closeQuickNavButton.on("click", closeQuickNav);
  
    quickNavOverlay.on("click", function (e) {
      if ($(e.target).is(quickNavOverlay)) {
        closeQuickNav();
      }
    });
  
          
  
    // ========== DRAGGABLE FOLDER ICON ========== 
    $(".folder-link").draggable({
        containment: "body", // Restrict movement to the viewport
        cursor: "move"
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
    const passwordForm = document.getElementById('passwordForm');
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

    // Form submit
    if (passwordForm) {
      passwordForm.addEventListener('submit', function(e) {
        e.preventDefault();
        checkPassword();
      });
    }

    // Also handle button click directly
    const submitBtn = passwordForm ? passwordForm.querySelector('button') : null;
    if (submitBtn) {
      submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        checkPassword();
      });
    }

    // Also handle Enter key in input
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

    const toggleButton = document.getElementById("theme-toggle");
    const editorialThemeClass = "editorial-theme";
    const defaultThemeClass = "default-theme";

    // Check for saved theme preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === editorialThemeClass) {
        document.body.classList.remove(defaultThemeClass);
        document.body.classList.add(editorialThemeClass);
    }

    if (toggleButton) {
        toggleButton.addEventListener("click", function () {
            if (document.body.classList.contains(defaultThemeClass)) {
                document.body.classList.remove(defaultThemeClass);
                document.body.classList.add(editorialThemeClass);
                localStorage.setItem("theme", editorialThemeClass);
            } else {
                document.body.classList.remove(editorialThemeClass);
                document.body.classList.add(defaultThemeClass);
                localStorage.removeItem("theme");
            }
        });
    }

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
        // Get all work images on the page
        allImages = Array.from(document.querySelectorAll('.work-image'));
        
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
  });
