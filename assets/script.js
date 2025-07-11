$(function () {
    // ========== TABS ==========
    $(".tab-link").on("click", function () {
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
    $("#works").draggable({
        containment: "body",
        cursor: "move",
        handle: ".folder-icon"
      });      
  
    // ========== BACK TO TOP BUTTON ==========
    const backToTopButton = $("#back-to-top");
  
    $(window).on("scroll", function () {
      if ($(this).scrollTop() > 200) {
        backToTopButton.fadeIn();
      } else {
        backToTopButton.fadeOut();
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
  
    // ========== STICKY SECTION NAV ==========
    const sectionNav = document.getElementById("sectionNav");
  
    if (sectionNav) {
      const stickyClass = "sticky";
      const offset = sectionNav.offsetTop;
  
      $(window).on("scroll", function () {
        if (window.pageYOffset > offset) {
          sectionNav.classList.add(stickyClass);
        } else {
          sectionNav.classList.remove(stickyClass);
        }
      });
    }
  });
  