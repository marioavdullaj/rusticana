$( function() {
    var rotation = 0;
    var direction = -1;
    var oldx = 0;
    var cardWidth;
    var cardHeight;
    var logoSize;
    var logoSize2;
    var logoFontSize;
    var since;
    var description;
    var description2;
    var description3;
    var infos;
    var infosMarginTop;
    var divider;

    jQuery.fn.rotate = function(degrees) {
        $(this).css({'transform' : 'rotateY('+ degrees +'deg)'});
        return $(this);
    };

    $(".flip-card").click(function() {
        if($(this).is("a"))
            return true;

        if(rotation > 0) rotation = 0;
        else rotation = 180;
        
        $(this).rotate(rotation);
    });

    $(".flip-card a").click(function(e) {
        e.stopPropagation();
     });
    
    $('body').on('mousemove', function (e) {
        if (e.pageX < oldx) {
            direction = 1;
        } else if (e.pageX > oldx) {
            direction = -1;
        }
        direction = e.pageX - oldx;
        oldx = e.pageX;      
    });

    resize = function() {
        var flipCard = $(".flip-card-container");
        
        var scale = 1;
        var newWidth = cardWidth;
        var newHeight = cardHeight;
        if(window.innerWidth < cardWidth) {
            newHeight = ((window.innerWidth - 5) / cardWidth)*cardHeight;
            newWidth = window.innerWidth - 5;
            scale = newWidth / cardWidth;
        }

        flipCard.width(newWidth);
        flipCard.height(newHeight);

        $(".logo").width(scale*logoSize);
        $(".logo").height(scale*logoSize);
        $(".divider").height(divider*scale);
        $(".logo2").width(scale*logoSize2);
        $(".logo2").height(scale*logoSize2);
        $(".logo-title").css({ 'font-size': logoFontSize*scale });
        $(".since").css({ 'font-size': since*scale });
        $(".description").css({ 'font-size': description*scale });
        $(".description2").css({ 'font-size': description2*scale });
        $(".description3").css({ 'font-size': description3*scale });
        $(".infos").css({ 'font-size': infos*scale });
        $(".infos").css({ 'margin-top': infosMarginTop*((1/8)**(1-scale)) });
    }

    $(document).ready(function() {
        cardWidth  = $(".flip-card-container").width();
        cardHeight = $(".flip-card-container").height();
        divider = $(".divider").height();
        logoSize = $(".logo").width();
        logoSize2 = $(".logo2").width();
        logoFontSize = parseInt($(".logo-title").css("fontSize"));
        since = parseInt($(".since").css("fontSize"));
        description = parseInt($(".description").css("fontSize"));
        description2 = parseInt($(".description2").css("fontSize"));
        description3 = parseInt($(".description3").css("fontSize"));
        infos = parseInt($(".infos").css("fontSize"));
        infosMarginTop = parseInt($(".infos").css("margin-top"));

        resize();
    });

    $(window).resize(function() {
        resize();
    });
});
