var _0x5707 = ['nonr-t', 'addClass', '.two\x20.owl-next', 'owlCarousel', '.item', '.slider-two\x20.left-t', '.disabled', 'width', '.left', '.slider\x20.owl-dots\x20.owl-dot', '.right', '.left-t', '.main\x20.owl-next', 'nonl-t', '.slider\x20.owl-prev', 'removeClass', '.slider\x20.owl-next', '.slider-two\x20.item', 'active', 'ready', '.slider-two\x20.owl-prev', '.slider-two\x20.owl-dots\x20.owl-dot', 'click', 'nonr', '.right-t', '.slider-two\x20.owl-next', '.thumbs', 'trigger', 'index', 'translated.owl.carousel', '.slider-two\x20.right-t', '.main', 'nonl', '.thumbs\x20.owl-prev', '.main\x20.owl-prev', '.slider\x20.owl-item.active'];
(function(_0x484b39, _0x3208ea) {
    var _0x3c0628 = function(_0x1d38ac) {
        while (--_0x1d38ac) {
            _0x484b39['push'](_0x484b39['shift']());
        }
    };
    _0x3c0628(++_0x3208ea);
}(_0x5707, 0x11b));
var _0x45be = function(_0x484b39, _0x3208ea) {
    _0x484b39 = _0x484b39 - 0x0;
    var _0x3c0628 = _0x5707[_0x484b39];
    return _0x3c0628;
};
var changeSlide = 0x4;
var slide = changeSlide;
if ($(window)[_0x45be('0xc')]() < 0x258) {
    var slide = changeSlide;
    slide--;
} else if ($(window)[_0x45be('0xc')]() > 0x3e7) {
    var slide = changeSlide;
    slide++;
} else {
    var slide = changeSlide;
}
$(document)[_0x45be('0x18')](function() {
    $(_0x45be('0x0'))[_0x45be('0x8')]({
        'nav': !![],
        'items': 0x1
    });
    $(_0x45be('0x1f'))[_0x45be('0x8')]({
        'nav': !![],
        'margin': 0xf,
        'mouseDrag': ![],
        'touchDrag': !![],
        'responsive': {
            0: {
                'items': changeSlide - 0x1,
                'slideBy': changeSlide - 0x1
            },
            600: {
                'items': changeSlide,
                'slideBy': changeSlide
            },
            1000: {
                'items': changeSlide + 0x1,
                'slideBy': changeSlide + 0x1
            }
        }
    });
    var _0x5edd22 = $(_0x45be('0x0'));
    _0x5edd22[_0x45be('0x8')]();
    _0x5edd22['on'](_0x45be('0x22'), function(_0xef8893) {
        $(_0x45be('0xf'))[_0x45be('0x14')](_0x45be('0x1c'));
        $(_0x45be('0xd'))['removeClass'](_0x45be('0x1'));
        if ($(_0x45be('0x11'))['is'](_0x45be('0xb'))) {
            $('.slider\x20.right')[_0x45be('0x6')](_0x45be('0x1c'));
        }
        if ($(_0x45be('0x3'))['is']('.disabled')) {
            $('.slider\x20.left')[_0x45be('0x6')]('nonl');
        }
        $(_0x45be('0x16'))['removeClass'](_0x45be('0x17'));
        var _0x165b15 = $(_0x45be('0x4'))[_0x45be('0x21')]();
        $(_0x45be('0x16'))['eq'](_0x165b15)[_0x45be('0x6')](_0x45be('0x17'));
        var _0x2808c6 = Math['ceil']((_0x165b15 + 0x1) / slide) - 0x1;
        $(_0x45be('0x1a'))['eq'](_0x2808c6)[_0x45be('0x20')](_0x45be('0x1b'));
    });
    $('.right')[_0x45be('0x1b')](function() {
        $(_0x45be('0x15'))['trigger'](_0x45be('0x1b'));
    });
    $(_0x45be('0xd'))['click'](function() {
        $(_0x45be('0x13'))[_0x45be('0x20')]('click');
    });
    $(_0x45be('0x16'))[_0x45be('0x1b')](function() {
        var _0x2755f1 = $(_0x45be('0x9'))[_0x45be('0x21')](this);
        $(_0x45be('0xe'))['eq'](_0x2755f1)[_0x45be('0x20')](_0x45be('0x1b'));
        $(_0x45be('0x16'))['removeClass'](_0x45be('0x17'));
        $(this)['addClass'](_0x45be('0x17'));
    });
    var _0x4f5d07 = $(_0x45be('0x1f'));
    _0x4f5d07[_0x45be('0x8')]();
    _0x4f5d07['on'](_0x45be('0x22'), function(_0x38782e) {
        $(_0x45be('0x1d'))[_0x45be('0x14')](_0x45be('0x5'));
        $(_0x45be('0x10'))[_0x45be('0x14')](_0x45be('0x12'));
        if ($(_0x45be('0x7'))['is'](_0x45be('0xb'))) {
            $(_0x45be('0x23'))[_0x45be('0x6')](_0x45be('0x5'));
        }
        if ($(_0x45be('0x2'))['is'](_0x45be('0xb'))) {
            $(_0x45be('0xa'))[_0x45be('0x6')](_0x45be('0x12'));
        }
    });
    $(_0x45be('0x1d'))[_0x45be('0x1b')](function() {
        $(_0x45be('0x1e'))[_0x45be('0x20')](_0x45be('0x1b'));
    });
    $(_0x45be('0x10'))['click'](function() {
        $(_0x45be('0x19'))['trigger'](_0x45be('0x1b'));
    });
});