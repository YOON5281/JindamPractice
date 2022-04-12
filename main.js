$(document).ready(function () {
  $("#header").css("display", "none");
  $("#header").fadeIn(1000);

  $(".vl1").fadeIn(2000);
  $(".vl2").fadeIn(3000);
  $(".vl3").fadeIn(4000);
  $(".vl4").fadeIn(5000);
  //fadingUp 부분
  const fadingUp = function () {
    $(window).scroll(function () {
      const width = $(window).width();

      if (width > 768) {
        const height = $(window).scrollTop();

        if (height > 800) {
          $(".dot").removeClass("fadeDown").addClass("fadeUp");
          $("#enComment").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $(".dot").removeClass("fadeUp").addClass("fadeDown");
          $("#enComment").removeClass("fadeUp").addClass("fadeDown");
        }

        if (height > 850) {
          $("#koComment").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#koComment").removeClass("fadeUp").addClass("fadeDown");
        }

        if (height > 1300) {
          $("#ourstory").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#ourstory").removeClass("fadeUp").addClass("fadeDown");
        }
        if (height > 1400) {
          $("#storybased").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#storybased").removeClass("fadeUp").addClass("fadeDown");
        }
        if (height > 1500) {
          $("#sales").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#sales").removeClass("fadeUp").addClass("fadeDown");
        }
        if (height > 1600) {
          $("#consulting").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#consulting").removeClass("fadeUp").addClass("fadeDown");
        }
        if (height > 1700) {
          $("#work").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#work").removeClass("fadeUp").addClass("fadeDown");
        }

        if (height > 1900) {
          $(".fourth_background .contents")
            .removeClass("fadeDown")
            .addClass("fadeUp");
        } else {
          $(".fourth_background .contents")
            .removeClass("fadeUp")
            .addClass("fadeDown");
        }

        if (height > 2000) {
          $(".fourth_background .largeIcons .row")
            .eq(0)
            .removeClass("fadeDown")
            .addClass("fadeUp");
        } else {
          $(".fourth_background .largeIcons .row")
            .eq(0)
            .removeClass("fadeUp")
            .addClass("fadeDown");
        }
        if (height > 2100) {
          $(".fourth_background .largeIcons .row")
            .eq(1)
            .removeClass("fadeDown")
            .addClass("fadeUp");
        } else {
          $(".fourth_background .largeIcons .row")
            .eq(1)
            .removeClass("fadeUp")
            .addClass("fadeDown");
        }
        if (height > 2200) {
          $(".fourth_background .largeIcons .row")
            .eq(2)
            .removeClass("fadeDown")
            .addClass("fadeUp");
        } else {
          $(".fourth_background .largeIcons .row")
            .eq(2)
            .removeClass("fadeUp")
            .addClass("fadeDown");
        }

        // console.log("큰 " + height);
      } else {
        const height = $(window).scrollTop();
        if (height > 180) {
          $(".dot").removeClass("fadeDown").addClass("fadeUp");
          $("#enComment").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $(".dot").removeClass("fadeUp").addClass("fadeDown");
          $("#enComment").removeClass("fadeUp").addClass("fadeDown");
        }

        if (height > 250) {
          $("#koComment").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#koComment").removeClass("fadeUp").addClass("fadeDown");
        }

        if (height > 500) {
          $("#ourstory").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#ourstory").removeClass("fadeUp").addClass("fadeDown");
        }
        if (height > 550) {
          $("#storybased").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#storybased").removeClass("fadeUp").addClass("fadeDown");
        }
        if (height > 600) {
          $("#sales").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#sales").removeClass("fadeUp").addClass("fadeDown");
        }
        if (height > 650) {
          $("#consulting").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#consulting").removeClass("fadeUp").addClass("fadeDown");
        }
        if (height > 700) {
          $("#work").removeClass("fadeDown").addClass("fadeUp");
        } else {
          $("#work").removeClass("fadeUp").addClass("fadeDown");
        }

        if (height > 900) {
          $(".fourth_background .contents")
            .removeClass("fadeDown")
            .addClass("fadeUp");
        } else {
          $(".fourth_background .contents")
            .removeClass("fadeUp")
            .addClass("fadeDown");
        }

        if (height > 1000) {
          $(".fourth_background .smallIcons .row")
            .eq(0)
            .removeClass("fadeDown")
            .addClass("fadeUp");
        } else {
          $(".fourth_background .smallIcons .row")
            .eq(0)
            .removeClass("fadeUp")
            .addClass("fadeDown");
        }
        if (height > 1050) {
          $(".fourth_background .smallIcons .row")
            .eq(1)
            .removeClass("fadeDown")
            .addClass("fadeUp");
        } else {
          $(".fourth_background .smallIcons .row")
            .eq(1)
            .removeClass("fadeUp")
            .addClass("fadeDown");
        }
        if (height > 1100) {
          $(".fourth_background .smallIcons .row")
            .eq(2)
            .removeClass("fadeDown")
            .addClass("fadeUp");
        } else {
          $(".fourth_background .smallIcons .row")
            .eq(2)
            .removeClass("fadeUp")
            .addClass("fadeDown");
        }
        if (height > 1150) {
          $(".fourth_background .smallIcons .row")
            .eq(3)
            .removeClass("fadeDown")
            .addClass("fadeUp");
        } else {
          $(".fourth_background .smallIcons .row")
            .eq(3)
            .removeClass("fadeUp")
            .addClass("fadeDown");
        }
        if (height > 1200) {
          $(".fourth_background .smallIcons .row")
            .eq(4)
            .removeClass("fadeDown")
            .addClass("fadeUp");
        } else {
          $(".fourth_background .smallIcons .row")
            .eq(4)
            .removeClass("fadeUp")
            .addClass("fadeDown");
        }

        // console.log("작은 " + height);
      }
    });
  };

  fadingUp();
});
