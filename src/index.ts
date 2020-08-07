jQuery(document).ready( ($) => {
    const elements = $( ".scroller" ).toArray()

    elements.map( (elmClass:HTMLElement) => {
        var OUT_ANIM:string;
        var classList = $(elmClass).attr('class').split(/\s+/);

        const words = ['disappear']
        const regex = new RegExp(words.map(function(w){ return '\\b'+w+'\\b' }).join('|'),'g');
        $.each(classList, function(index, item) {
            if (regex.test(item)) { // Contains the accepted word
                var ret = item.replace(/disappear-/g,'');
                OUT_ANIM = ret;
                $(elmClass).removeClass(item)
            } else {
               
            }
        });

        const h = $(elmClass).height()
        const top = $(elmClass).offset().top
        const topCutOff = h / 2
        const bottomCutOff = h / 4

        function scan(){
            $(elmClass).stop(true,false)
                var st = $(this).scrollTop();
                var sb = st + $(window).height();

                var topDistance = (top + h) - st;
                var bottomDistance = sb - (top);
                
                if( topDistance <= bottomCutOff || bottomDistance < topCutOff){
                    var val = ((topDistance) / bottomCutOff)
                    //Start Animation
                    //$(elmClass).animate({ opacity: val}, 100)
                    $(elmClass).addClass(OUT_ANIM);
                }
                else if(topDistance >= bottomCutOff || bottomDistance > topCutOff){
                    //$(elmClass).animate({ opacity: 1}, 100)
                    
                    $(elmClass).removeClass(OUT_ANIM)
                    $(elmClass).addClass(classList);
                }
        }
        scan();

        $(document).scroll(function (event) {
            scan()
        })
    })
});