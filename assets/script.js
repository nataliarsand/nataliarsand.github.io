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
  });
  

$(function () {
    $("#works a").draggable({
        containment: "body", // Restrict movement to the viewport
        cursor: "move"
    });
});
