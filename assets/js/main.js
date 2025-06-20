
// slider js
 var $carousel = $('[data-owl-carousel]');
 if ($carousel.length) {
     $carousel.each(function (index, el) {
         $(this).owlCarousel($(this).data('owl-carousel'));
     });
 }

// marque starts
    $(document).ready(function () {
      const setCalculatedAnimationDuration = ($marqueeGroup, $el) => {
        if ($marqueeGroup.outerWidth() > $el.outerWidth()) {
          $marqueeGroup[0].style.animationDuration = "";

          const animationDuration = parseInt(
            window
              .getComputedStyle($marqueeGroup[0])
              .getPropertyValue("animation-duration"),
            10
          );

          $el
            .find(".marquee__group")
            .css(
              "animationDuration",
              `${(
                ($marqueeGroup.outerWidth() / $el.outerWidth()) *
                animationDuration
              ).toFixed(1)}s`
            );
        }
      };

      $(".js-marquee").each((i, el) => {
        const $el = $(el);
        const $marqueeGroup = $el.find(".marquee__group");
        const marqueeItemsCount = $marqueeGroup.children().length;

        while ($marqueeGroup.outerWidth() < $el.outerWidth()) {
          for (let i = 0; i < marqueeItemsCount; i++) {
            $marqueeGroup.append($marqueeGroup.children().eq(i).clone());
          }
        }

        $el.append($marqueeGroup.clone());
        $el.addClass("initialized");

        $(window).on("load resize", () => {
          setCalculatedAnimationDuration($marqueeGroup, $el);
        });
      });
    });


// header link
  document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    navLinks.forEach(link => {
      const linkHref = link.getAttribute("href").trim();

      // Remove existing active class (if any)
      link.classList.remove("active");

      // Match current page
      if (linkHref === currentPage) {
        link.classList.add("active");
      }
    });
  });

   




 



