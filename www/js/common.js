$(document).ready(function() {
    forSVG();

    /* ---------------------------------------------
         search effect
    --------------------------------------------- */
    $(".search").click(function() {
        $("#get-form").toggle("slow").find("input").focus();
        
    });

    /* ---------------------------------------------
        gallery
    --------------------------------------------- */
        var wall = new freewall("#freewall");
        wall.reset({
            selector: '.brick',
            animate: true,
            cellW: 250,
            cellH: 'auto',
            onResize: function() {
                wall.fitWidth();
            }
        });

        wall.container.find('.brick img').load(function() {
            wall.fitWidth();
        });

    /* ---------------------------------------------
        scrollup
    --------------------------------------------- */
    $(function () {
        $.scrollUp({
            scrollName: 'scrollUp',      // Element ID
            scrollDistance: 300,         // Distance from top/bottom before showing element (px)
            scrollFrom: 'top',           // 'top' or 'bottom'
            scrollSpeed: 300,            // Speed back to top (ms)
            easingType: 'linear',        // Scroll to top easing (see http://easings.net/)
            animation: 'fade',           // Fade, slide, none
            animationSpeed: 200,         // Animation speed (ms)
            scrollTrigger: false,        // Set a custom triggering element. Can be an HTML string or jQuery object
            scrollTarget: false,         // Set a custom target element for scrolling to. Can be element or number
            scrollText: '', // Text for element, can contain HTML
            scrollTitle: false,          // Set a custom <a> title if required.
            scrollImg: false,            // Set true to use image
            activeOverlay: false,        // Set CSS color to display scrollUp active point, e.g '#00FFFF'
            zIndex: 2147483647           // Z-Index for the overlay
        });
    });

    /* ---------------------------------------------
        MAGNIFIC POPUP FORM
    --------------------------------------------- */
    $('.open-popup').magnificPopup({
      type:'inline',
      midClick: true
    });

    /* ---------------------------------------------
        VALIDATE FORM
    --------------------------------------------- */
   





});

function forSVG(){
    $('.my_svg').each(function () {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');

        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }

        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');
    });}



