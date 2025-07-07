$(document).ready(function () {
    $(".tab-link").on("click", function () {
      const tabId = $(this).data("tab");
  
      // Update tab links
      $(".tab-link").removeClass("active").attr("aria-selected", "false");
      $(this).addClass("active").attr("aria-selected", "true");
  
      // Update tab content
      $(".tab-content").removeClass("active").fadeOut(200);
      $(`#${tabId}`).fadeIn(200).addClass("active");
    });

    // Keyboard navigation for tabs
    $(".tabs").on("keydown", ".tab-link", function(e) {
        const $currentTab = $(this);
        const $tabs = $currentTab.closest(".tabs").find(".tab-link");
        let newIndex = $tabs.index($currentTab);

        // Left arrow or Up arrow
        if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
            e.preventDefault();
            newIndex = (newIndex - 1 + $tabs.length) % $tabs.length;
            $tabs.eq(newIndex).focus().click();
        }
        // Right arrow or Down arrow
        else if (e.key === "ArrowRight" || e.key === "ArrowDown") {
            e.preventDefault();
            newIndex = (newIndex + 1) % $tabs.length;
            $tabs.eq(newIndex).focus().click();
        }
        // Enter or Space
        else if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            $currentTab.click();
        }
    });

    // Quick Navigation Overlay Logic
    const quickNavOverlay = $("#quick-nav-overlay");
    const closeQuickNavButton = $("#close-quick-nav");

    // Function to open the overlay
    function openQuickNav() {
        quickNavOverlay.addClass("active");
        // Focus the first focusable element inside the overlay
        quickNavOverlay.find("a, button").first().focus();
    }

    // Function to close the overlay
    function closeQuickNav() {
        quickNavOverlay.removeClass("active");
    }

    // Keyboard shortcut for Cmd/Ctrl+K or Shift+/
    $(document).on("keydown", function(e) {
        // Cmd+K (Mac) or Ctrl+K (Windows/Linux)
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openQuickNav();
        }
        // Shift+/
        if (e.shiftKey && e.key === '/') {
            e.preventDefault();
            openQuickNav();
        }
        // Escape key to close
        if (e.key === 'Escape') {
            closeQuickNav();
        }
    });

    // Close button click event
    closeQuickNavButton.on("click", function() {
        closeQuickNav();
    });

    // Close when clicking outside the content
    quickNavOverlay.on("click", function(e) {
        if ($(e.target).is(quickNavOverlay)) {
            closeQuickNav();
        }
    });

    // Add tabindex to h3 and h4 elements in selected works for keyboard navigation
    if ($('main#selected-works').length) {
        $('main#selected-works .content h3, main#selected-works .content h4').attr('tabindex', '0');
    }
  });
  

$(function () {
    $("#works a").draggable({
        containment: "body", // Restrict movement to the viewport
        cursor: "move"
    });

    // Back to top button
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
});
