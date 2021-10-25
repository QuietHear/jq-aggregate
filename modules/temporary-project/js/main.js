/*
 * @LastEditors: afei
 * @LastEditTime: 2021-10-25 15:29:41
 */
$('body').on('click', '.pop .close', function () {
    $(this).closest('.pop').removeClass('show');
    if ($('.pop-bg').find('.pop.show').length === 0) {
        $('.pop-bg').removeClass('show');
    }
});

let showPop = (str) => {
    $(`${$('.pop-bg').hasClass('show') ? '' : '.pop-bg,'}.${str}`).addClass('show');
};

$('.back').on('click', function () {
    location.href = 'index.html';
});
