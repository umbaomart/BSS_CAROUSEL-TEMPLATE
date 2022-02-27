$(document).ready(function () {
    var e = $(".slick-carousel"),
        r = {
            infinite: !0,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: !0,
            centerMode: !0,
            autoplay: !0,
            autoplaySpeed: 8e3,
            lazyLoad: "progressive",
            nextArrow: '<div class="arrow slick-next slick-arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
            prevArrow: '<div class="arrow slick-prev slick-arrow"><div class="arrow-top"></div><div class="arrow-bottom"></div></div>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    arrows: !1,
                    dots: !0
                }
            }, {
                breakpoint: 768,
                settings: {
                    arrows: !1,
                    dots: !1
                }
            }]
        };
    e.slick(r), e.find(".carousel-item").addClass("loaded");
    const i = o(".carousel-wrapper");
    if (i.length > 0) {
        const o = i.find(".loading-icon");
        o.length > 0 && o.remove()
    }
    var t = !1;
    o(".carousel-item").mousedown((function () {
        t = !1
    })).mousemove((function () {
        t = !0
    })).mouseup((function (i) {
        var e = t;
        if (t = !1, 1 === i.which && !e) {
            var r = o(i.target);
            if (r.hasClass("no-click") || r.closest(".no-click").length > 0) return;
            if (r.hasClass("dynamic") || r.closest(".dynamic").length > 0) return;
            let e = r.data("url");
            if (void 0 === e) {
                const o = r.closest("[data-url]");
                o.length && (e = o.data("url"))
            }
            if (void 0 !== e) {
                if (e.includes("/register")) return void o("#desktop-join-now-btn").click();
                const i = function (o) {
                    var i = {};
                    o.replace(/[?&]+([^=&]+)=([^&]*)/gi, (function (o, e, r) {
                        i[e] = r
                    }));
                    return i
                }(e).gameType;
                void 0 !== i && "lotto" === i ? window.open(e, "", "width=" + window.outerWidth + ", height=" + window.outerHeight) : window.location.href = e
            }
        }
    }))
})
