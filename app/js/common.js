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

    var subli  = $('.microsoft__dropdown-container ul li'),
        cont   = $('.microsoft__dropdown-tab-content'),
        tab    = $('.microsoft__dropdown-tab'),
        list   = $('.microsoft__dropdown-tab-list');

    $(subli).mouseover('li .microsoft__dropdown-tab',function(e){

        e.preventDefault();

        $(this).addClass('active');
        if($(this).hasClass('active')){

            var heightParent = $(drop).height();

            $(this).find(cont).css("display", "block");
            $(this).find(cont).css("height", heightParent);

            return;
        }
    });

    $(subli).mouseleave('li .microsoft__dropdown-tab',function(e){

        e.preventDefault();

        $(this).removeClass('active');
        $(subli).find(cont).css("display", "none");
        $(subli).find(cont).css("height", "");

    });

    var search = $('.microsoft__toggle-search'),
        form   = $('.microsoft__actions-form');

    $(search).click(function(){
        $(form).toggle();
    });

});
