$(document).on("pageinit", ":jqmData(role='page')", function () {

    $(":jqmData(slidemenu)").addClass('slidemenu_btn');
    var sm = $($(":jqmData(slidemenu)").data('slidemenu'));
    sm.addClass('slidemenu');

    $(document).on("swipeleft", ".ui-page-active", function () {
        only_close = false;
        swipe = 'left';
        slidemenu(sm, only_close, swipe);
    });
    $(document).on("swiperight", ".ui-page-active", function () {
        only_close = false;
        swipe = 'right';
        slidemenu(sm, only_close, swipe);
    });
    $(document).on("click", ":jqmData(slidemenu)", function (event) {
        event.preventDefault(); // Stops jQuery mobile from reloading the index page.
        event.stopImmediatePropagation();
        slidemenu(sm);
    });
    $(document).on("click", "a:not(:jqmData(slidemenu))", function (event) {
        only_close = true;
        slidemenu(sm, only_close);
        event.preventDefault(); // Stops jQuery Mobile from reloading to a new page without styles and just load the page into the dom.
        event.stopImmediatePropagation(); // Prevents jQuery Mobile from firing multiple click events. #facepalm
        $.mobile.changePage($(this).attr('href')); // Makes jQuery Mobile transition to the new page without loosing the navigation.
    });

    $(window).on('resize', function () {

        if ($(":jqmData(slidemenu)").data('slideopen')) {

            var sm = $($(":jqmData(slidemenu)").data('slidemenu'));
            var w = '240px';

            sm.css('width', w);
            sm.height(viewport().height);

            $(":jqmData(role='page')").css('left', w);
        }

    });

});

function slidemenu(sm, only_close, swipe) {

    sm.height(viewport().height);

    // Forces swipe left to only close the side menu and swipe right to only open it.
    if (swipe) {
        if (swipe == 'left') {
            only_close = true;
            $(this).data('slideopen', true);
        } else {
            only_close = false;
            $(this).data('slideopen', false);
        }
    }

    if (!$(this).data('slideopen') && !only_close) {

        sm.show();
        var w = '240px';
        $.mobile.activePage.animate({
            left:w,
            avoidTransforms:false,
            useTranslate3d:true
        }, {
            duration:'fast',
            complete:function () {
               console.log('This should fire on all pages...');
                if ($(":jqmData(role='header')").data('position') == 'fixed') {
                    $(":jqmData(role='header')").css('left', w); //TODO: Figure out why this only works on the index page.
                }
            }
        });

        $(this).data('slideopen', true);

    } else {
        var w = '0px';
        //sm.animate({
        // width: w,
        // avoidTransforms: false,
        // useTranslate3d: true
        // },
        // 'fast',
        // function(){
        // sm.hide()
        // });
        //$(":jqmData(role='page')").animate({left:'0px', avoidTransforms:false, useTranslate3d:true}, { duration:'fast', queue:false });
        $(":jqmData(role='page')").animate({
            left:'0px',
            avoidTransforms:true,
            useTranslate3d:true
        }, {
            duration:'fast'
        });
        $(this).data('slideopen', false);
        //$(":jqmData(slidemenu)").css('margin-left', '0px');
        $(":jqmData(role='header')").animate({left:'0px', avoidTransforms:true, useTranslate3d:true}, { duration:'fast', queue:false, complete:function(){ sm.hide() } });
    }
}

function viewport() {
    var e = window;
    var a = 'inner';
    if (!('innerWidth' in window)) {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width:e[ a + 'Width' ], height:e[ a + 'Height' ] }
}
