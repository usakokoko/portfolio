$(function () {

  //ページ内スクロール
  var $nav = $(".header");
  var navHeight = $nav.outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate(
      {
        scrollTop: position,
      },
      300,
      "swing"
    );
    return false;
  });

  //スクロールに応じてヘッダーの背景色が変化
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

// アコーディオン
$('.accordion-header').click(function() { 
  $(this).next().slideToggle();
  $(this).toggleClass('active');
});

// タイトルバウンス
$(function () {
  $('.title').each(function () {
    const text = $(this).text().trim();
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      newText += `<span style="--i:${i}">${text[i]}</span>`;
    }
    $(this).html(newText);
  });

  $(window).on('scroll', function () {
    $('.title').each(function () {
      const offset = $(this).offset().top;
      const scrollTop = $(window).scrollTop();
      const windowHeight = $(window).height();
      if (scrollTop + windowHeight > offset - 100) {
        $(this).addClass('show');
      }
    });
  });
});
