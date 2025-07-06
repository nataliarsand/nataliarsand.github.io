$(document).ready(function () {
    $(".tab-link").on("click", function () {
      const tabId = $(this).data("tab");
  
      // Update tab links
      $(".tab-link").removeClass("active");
      $(this).addClass("active");
  
      // Update tab content
      $(".tab-content").removeClass("active").fadeOut(200);
      $(`#${tabId}`).fadeIn(200).addClass("active");
    });

    // Quick Navigation Overlay Logic
    const quickNavOverlay = $("#quick-nav-overlay");
    const closeQuickNavButton = $("#close-quick-nav");

    // Function to open the overlay
    function openQuickNav() {
        quickNavOverlay.addClass("active");
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
  });
  

$(function () {
    $("#works a").draggable({
        containment: "body", // Restrict movement to the viewport
        cursor: "move"
    });
});
