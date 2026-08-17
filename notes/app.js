const whTooltips = { iconizeLinks: true, iconSize: 'small', renameLinks: true };

$(document).ready(function () {
    $('s').each(function () {
        let spellId = getSpellId($(this).text());
        let $a = $('<a class="q3 ' + $(this).attr('class') + '" href="https://www.wowhead.com/spell=' + spellId + '">');
        $(this).replaceWith($a);
    });

    $.getScript('https://wow.zamimg.com/js/tooltips.js');
});

function getSpellId(text) {
    switch (text.toLowerCase()) {
        case 'sr': return '23920';
        case 'tb': return '871';
        case 'inter': return '3411';
        case 'def': return '386208';
        case 'dispel': return '173127';
        default: return text;
    }
}






// TABS START
$(document).ready(function () {
    $('.tabs li').on('click', function () {
        var tab = $(this).data('tab');
        $('.tabs li').removeClass('is-active');
        $(this).addClass('is-active');
        $('#tab-content div').removeClass('is-active');
        $('div[data-content="' + tab + '"]').addClass('is-active');
    });
});
// TABS END