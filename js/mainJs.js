$(document).ready(function(){
    /*popup function*/
    function popupWindow(targetClick, showCurrentForm) {
        targetClick.on('click', function (e) {
            e.preventDefault();

            var bgPopup = $('#bg-popup'),
                fotoPopup = $('#wrap-popup');

            bgPopup.addClass('show_js');
            fotoPopup.animate({'opacity': 1}, 500);
            showCurrentForm.addClass('show_js');

            bgPopup.height($(document).height());

            var fotoInPopupW = fotoPopup.width(),
                scrollTop = window.pageYOffset;

            fotoPopup.css({
                'top': scrollTop,
                'left': '50%',
                'margin-left': - (fotoInPopupW / 2)
            });

            $('.btn-close, #bg-popup').on('click', function() {
                bgPopup.removeClass('show_js');
                showCurrentForm.removeClass('show_js');

                $(showCurrentForm).find('.show_js').removeClass('show_js');

                fotoPopup.css({
                    'opacity' : 0,
                    'top': 0,
                    'left': 0,
                    'margin-left': 0
                });
            });

            $("#wrap-popup").click(function(e) {
                e.stopPropagation();
            });
        });
    }
    /*end*/

    var curLinkAuthorization = $('.popup-js'),
        curBlockShow = $('.free-ads-popup');

    popupWindow(curLinkAuthorization, curBlockShow);
});