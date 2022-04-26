$('button').click(function(e) {
    if ($(this).hasClass('grid')) {
        $('#container ul').removeClass('list').addClass('grid');
        $(this).addClass('active').siblings().removeClass('active');
    }
    else if($(this).hasClass('list')) {
        $('#container ul').removeClass('grid').addClass('list');
        $(this).addClass('active').siblings().removeClass('active');
    }
});