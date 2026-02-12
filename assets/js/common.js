$(document).ready(function() {
  // add toggle functionality to abstract and bibtex buttons
  $('a.abstract').click(function() {
    $(this).parent().parent().find(".abstract.hidden").toggleClass('open');
    $(this).parent().parent().find(".bibtex.hidden.open").toggleClass('open');
  });
  $('a.bibtex').click(function() {
    $(this).parent().parent().find(".bibtex.hidden").toggleClass('open');
    $(this).parent().parent().find(".abstract.hidden.open").toggleClass('open');
  });
  $('a').removeClass('waves-effect waves-light');

  // bootstrap-toc
  if($('#toc-sidebar').length){
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

  // add css to jupyter notebooks
  const cssLink = document.createElement("link");
  cssLink.href  = "../css/jupyter.css";
  cssLink.rel   = "stylesheet";
  cssLink.type  = "text/css";

  let theme = localStorage.getItem("theme");
  if (theme == null || theme == "null") {
    const userPref = window.matchMedia;
    if (userPref && userPref("(prefers-color-scheme: dark)").matches) {
      theme = "dark";
    }
  }

  $('.jupyter-notebook-iframe-container iframe').each(function() {
    $(this).contents().find("head").append(cssLink);

    if (theme == "dark") {
      $(this).bind("load",function(){
        $(this).contents().find("body").attr({
          "data-jp-theme-light": "false",
          "data-jp-theme-name": "JupyterLab Dark"});
      });
    }
  });

  // Smooth scroll for anchor links (excluding GitHub links and other external links)
  // Use event delegation to handle dynamically loaded content
  $(document).on('click', 'a[href^="#"]', function(e) {
    // Skip if it's a GitHub icon link or other special links
    var $link = $(this);
    if ($link.hasClass('gh-icon') || $link.parent().hasClass('github-icon') || $link.closest('.github-icon').length) {
      return;
    }
    
    var href = this.getAttribute('href');
    if (href && href !== '#' && href !== '#!') {
      var target = $(href);
      
      // If target exists, scroll to it
      if (target.length) {
        e.preventDefault();
        e.stopPropagation();
        var offset = $('.navbar').outerHeight() || 0;
        var scrollTarget = target.offset().top - offset - 20;
        $('html, body').stop().animate({
          scrollTop: scrollTarget
        }, 500, 'swing');
      } else {
        // If target doesn't exist yet (e.g., bibliography not rendered), wait and retry
        e.preventDefault();
        e.stopPropagation();
        var attempts = 0;
        var maxAttempts = 10;
        var checkInterval = setInterval(function() {
          attempts++;
          target = $(href);
          if (target.length || attempts >= maxAttempts) {
            clearInterval(checkInterval);
            if (target.length) {
              var offset = $('.navbar').outerHeight() || 0;
              var scrollTarget = target.offset().top - offset - 20;
              $('html, body').stop().animate({
                scrollTop: scrollTarget
              }, 500, 'swing');
            }
          }
        }, 100);
      }
    }
  });
});

