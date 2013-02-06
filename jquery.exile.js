(function($){
    $.fn.exile = function (options) {
        var stage = $(options.stage || '#stage');
        if (stage.size() == 0) return;
        this.appendTo(stage).css({
            position : "absolute",
            top  : (stage.height() / 2) - (this.height() / 2),
            left : (stage.width() / 2) - (this.width() / 2),
        });
        var memberCount = this.size();
        this.each(function (index) {
            var self = this;
            var n = (memberCount - index) * 800;
            setTimeout(function() {
                var r = 0;
                var a = -180;
                var x0 = parseInt($(self).css("left"));
                var y0 = parseInt($(self).css("top"));
                setInterval(function () {
                    x = x0 + r * Math.cos(a * Math.PI / 180);
                    y = y0 + r * Math.sin(a * Math.PI / 180);
                    $(self).css({
                        left : x,
                        top : y
                    });
                    (a < 180) ? a += 1 : a = -180;
                    if (r < 100) r += 1/2;
                },15);
            },n);
        });
    };
})(jQuery);
