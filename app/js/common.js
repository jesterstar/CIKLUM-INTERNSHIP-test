/**
 * Created by Sergey on 14.06.2016.
 */

// Microsoft

$(document).ready(function() {

    var ul     =   $('.microsoft__nav-menu ul'),
        drop   =   $('.microsoft__dropdown-container');

    var subli  =   $('.microsoft__dropdown-container ul li'),
        cont   =   $('.microsoft__dropdown-tab-content'),
        tab    =   $('.microsoft__dropdown-tab'),
        list   =   $('.microsoft__dropdown-tab-list');

    var search =   $('.microsoft__toggle-search'),
        form   =   $('.microsoft__actions-form');

    var btn    =   $('.microsoft__nav-toggle'),
        menu   =   $('.microsoft__nav-menu'),
        html   =   $('.html');

    $(drop).hide();

    $(function() {

        $(ul).on('click','li.microsoft__dropdown',function(e){

            e.preventDefault();

            if ($(this).hasClass('active')){
                $(this).removeClass('active').find(drop).slideUp(150);
                return;
            }

            $(ul).find('li.active').removeClass('active').find(drop).slideUp(150);
            $(this).addClass('active');
            $(ul).find('li.active').find(drop).slideDown(150);

            $(tab).find('a').parent().click(function(){
                return false;
            });
        });
    });

    $(cont).hide();

    $(function() {

        $(subli).click('li.microsoft__dropdown-tab', function(e){

            e.preventDefault();

            if ($(window).width() < 999) {

                if ($(this).hasClass('active')){
                    $(this).removeClass('active').find(cont).slideUp(150);
                    return;
                }

                $(subli).find('li.active').removeClass('active').find(cont).slideUp(150);
                $(this).addClass('active').find(cont).css("display","block").slideDown(150);
            }
        });

    });

    $(subli).mouseover('li .microsoft__dropdown-tab',function(e){

        e.preventDefault();

        if ($(window).width() > 999) {

            $(this).addClass('active');
            if ($(this).hasClass('active')) {

                var heightParent = $(drop).height();

                $(this).find(cont).css("display", "block");
                $(this).find(cont).css("height", heightParent);

                return;
            }
        }
    });

    $(subli).mouseleave('li .microsoft__dropdown-tab',function(e){

        e.preventDefault();

        if ($(window).width() > 999) {

            $(this).removeClass('active');
            $(subli).find(cont).css("display", "none");
            $(subli).find(cont).css("height", "");

        }
    });

    $(search).click(function(){
        $(form).toggleClass('block');
    });

    $(btn).on('click', function(e){

        e.preventDefault();

        $(this).toggleClass('opened');
        $(menu).toggleClass('opened');
        $(html).toggleClass('hidden');
    });
});