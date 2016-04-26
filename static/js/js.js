$(function() {
    chartsColor = ['#1abc9c', '#ecf0f1'];

    $('.skill-chart').each(function(index, node) {
        var $node = $(node);
        var level = parseInt($node.attr('data-skill-level'));

        config = [{value: level, color: chartsColor[0]}, {value: 100-level, color: chartsColor[1]}];
        new Chart($node[0].getContext("2d")).Doughnut(config);

        var $desc = $('<div class="donut-inner">');
        $desc.append('<h3>' + level + ' %</h3>')

        $(node).after($desc);
    });

    $('.smooth-scroll').on('click', function(e) {
        e.preventDefault();

        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - $('#section-topbar').height()
            }, 500);
        }

        return false;
    });
});