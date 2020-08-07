jQuery(document).ready(function ($) {
    var elements = $(".scroller").toArray();
    elements.map(function (elmClass) {
        var OUT_ANIM;
        var classList = $(elmClass).attr('class').split(/\s+/);
        var words = ['disappear'];
        var regex = new RegExp(words.map(function (w) { return '\\b' + w + '\\b'; }).join('|'), 'g');
        $.each(classList, function (index, item) {
            if (regex.test(item)) {
                var ret = item.replace(/disappear-/g, '');
                OUT_ANIM = ret;
                $(elmClass).removeClass(item);
            }
            else {
            }
        });
        var h = $(elmClass).height();
        var top = $(elmClass).offset().top;
        var topCutOff = h / 2;
        var bottomCutOff = h / 4;
        function scan() {
            $(elmClass).stop(true, false);
            var st = $(this).scrollTop();
            var sb = st + $(window).height();
            var topDistance = (top + h) - st;
            var bottomDistance = sb - (top);
            if (topDistance <= bottomCutOff || bottomDistance < topCutOff) {
                var val = ((topDistance) / bottomCutOff);
                $(elmClass).addClass(OUT_ANIM);
            }
            else if (topDistance >= bottomCutOff || bottomDistance > topCutOff) {
                $(elmClass).removeClass(OUT_ANIM);
                $(elmClass).addClass(classList);
            }
        }
        scan();
        $(document).scroll(function (event) {
            scan();
        });
    });
});
//# sourceMappingURL=index.js.map