/**
 * Created by Sergey on 09.07.2016.
 */

$(document).ready(function() {
    // toggle child search on media screen
    $(".js-trigger-search").click(function() {
        $(".js-toggleSearch").slideToggle('fast');
    });
});