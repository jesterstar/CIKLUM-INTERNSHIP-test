/**
 * Created by Sergey on 14.06.2016.
 */

// Microsoft

$(document).ready(function() {

    var ul   =  $('.microsoft__nav-menu ul'),
        drop =  $('.microsoft__dropdown-container');

    $(drop).hide();

    $(function() {

        $(ul).on('click','li.microsoft__dropdown',function(e){

            e.preventDefault();

            if($(this).hasClass('active')){
                $(this).removeClass('active').find(drop).slideUp(150);
                return;
            }

            $(ul).find('li.active').removeClass('active').find(drop).slideUp(150);
            $(this).addClass('active');
            $(ul).find('li.active').find(drop).slideDown(150);

        });
    });

    var subli = $('.microsoft__dropdown-container ul li'),
        cont  = $('.microsoft__dropdown-tab-content'),
        tab   = $('.microsoft__dropdown-tab'),
        list  = $('.microsoft__dropdown-tab-list');

    $(subli).mouseenter('li .microsoft__dropdown-tab',function(e){

        e.preventDefault();

        $(this).addClass('active');
        $(subli).find(cont).css("display", "block");
        // $(subli).find(tab).hasClass('active').find(list).css("display", "block");

    });

    $(subli).mouseleave('li .microsoft__dropdown-tab',function(e){

        e.preventDefault();

        $(this).removeClass('active');
        $(subli).find(cont).css("display", "none");
        // $(subli).find(tab).hasClass('active').find(list).css("display", "none");

    });

});
