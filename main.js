var allImgs = $('.slides > img')
var allButtons = $('#buttons > span')
var timeID
var index = 0

autoSlide.call()
btnLinkage.call()


function autoSlide() {
    timeID = setInterval(() => {
        slideImg.call()
    }, 2000);

    $('.slides').on('mouseenter', function () {
        window.clearInterval(timeID)
    })
    $('.slides').on('mouseleave', function () {
        timeID = setInterval(() => {
            slideImg.call()
        }, 2000);
    })
}

function slideImg() {
    if (index === allImgs.length) {
        index = index - allImgs.length
    }
    var p = index * -300
    $(allButtons[index]).addClass('red')
        .siblings('.red').removeClass('red')
    for (let i = 0; i < allImgs.length; i++) {
        $(allImgs[i]).css({
            transform: 'translateX(' + p + 'px)'
        })
    }
    index += 1
}

function btnLinkage() {
    for (let i = 0; i < allButtons.length; i++) {
        $(allButtons[i]).on('click', function (e) {
            var index = $(e.currentTarget).index()
            var p = index * -300
            $('.image').css({
                transform: 'translateX(' + p + 'px)'
            })
            $(allButtons[i]).addClass('red')
                .siblings('.red').removeClass('red')
        })
    }
}