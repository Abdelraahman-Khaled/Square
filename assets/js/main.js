!function(e){"use strict";e(".header-button").on("click",function(){e(".body-overlay").toggleClass("show")}),e(".body-overlay").on("click",function(){e(".header-button").trigger("click"),e(this).removeClass("show")}),e(window).on("scroll",function(){e(window).scrollTop()>=300?e(".header").addClass("fixed-header"):e(".header").removeClass("fixed-header")});var t,a=e(".scroll-top");if(e(window).on("scroll",function(){e(window).scrollTop()>300?a.addClass("show"):a.removeClass("show")}),a.on("click",function(t){t.preventDefault(),e("html, body").animate({scrollTop:0},"300")}),e(".navbar-toggler.header-button").on("click",function(){e("body").toggleClass("scroll-hide-sm")}),e(".body-overlay").on("click",function(){e("body").removeClass("scroll-hide-sm")}),e(".dropdown-item").on("click",function(){e(this).closest(".dropdown-menu").addClass("d-block")}),e(".bg-img").css("background",function(){return"url("+e(this).data("background-image")+")"}),e("ul.sidebar-menu-list").length){let o;t=e("ul.sidebar-menu-list"),o=window.location.pathname.split("/").reverse()[0],t.find("li").each(function(){let t=e(this).find("a");e(t).attr("href")==o&&e(this).addClass("active")}),t.children("li").each(function(){e(this).find(".active").length&&e(this).addClass("active")}),""==o&&t.find("li").eq(0).addClass("active")}if(document.querySelectorAll(".footer__circle__text").forEach(e=>{let t=e.querySelector("p");t&&(t.innerHTML=t.innerText.split("").map((e,t)=>`<span style="transform:rotate(${7.8*t}deg)">${e}</span>`).join(""))}),e(".testimonial__wrap").owlCarousel({dots:!0,loop:!0,nav:!1,navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],autoplay:!0,smartSpeed:2e3,autoplayTimeout:2500,items:3,margin:80,slideToScroll:1,center:!0,autoplayHoverPause:!0,stagePadding:50,responsive:{0:{items:1,stagePadding:30},320:{items:1,stagePadding:30},450:{items:1,stagePadding:30},575:{items:2,stagePadding:0,margin:40},768:{items:2,stagePadding:0,margin:50},992:{items:2,stagePadding:0},1100:{items:2},1200:{items:3},1360:{items:3},1449:{items:3},1500:{items:3},1600:{items:3},1700:{items:3}}}),e(".payment__main__slider").owlCarousel({dots:!1,loop:!0,nav:!1,navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],autoplay:!0,smartSpeed:3e3,autoplayTimeout:4500,items:1,margin:20,slideToScroll:1,autoplayHoverPause:!1}),e(".service__brand__main").owlCarousel({dots:!1,loop:!0,nav:!1,navText:['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],autoplay:!0,smartSpeed:3e3,autoplayTimeout:2500,items:6,margin:40,slideToScroll:1,autoplayHoverPause:!1,responsive:{0:{items:1,center:!0,margin:20},320:{items:2,center:!0,margin:20},450:{items:3,center:!0,margin:20},575:{items:3},768:{items:4},992:{items:5},1100:{items:5},1200:{items:6}}}),e(".counter").counterUp({delay:10,time:1e3}),e(document).on("click",".has-dropdown > a",function(){e(".sidebar-submenu").slideUp(200),e(this).parent().hasClass("active")?(e(".has-dropdown").removeClass("active"),e(this).parent().removeClass("active")):(e(".has-dropdown").removeClass("active"),e(this).next(".sidebar-submenu").slideDown(200),e(this).parent().addClass("active"))}),e(".navigation-bar").on("click",function(){e(".sidebar-menu").addClass("show-sidebar"),e(".sidebar-overlay").addClass("show")}),e(".sidebar-menu__close, .sidebar-overlay").on("click",function(){e(".sidebar-menu").removeClass("show-sidebar"),e(".sidebar-overlay").removeClass("show")}),e(".service__main__single").on("mouseenter",function(){e(".service__main__single").removeClass("active"),e(this).addClass("active")}),e(".service__main__single").on("mouseleave",function(){e(".service__main__single").removeClass("active"),e(this).addClass("active")}),e(".accordion").length&&e(".accordion").on("show.bs.collapse hide.bs.collapse",function(t){let a=e(t.target).closest(".accordion-item");a.toggleClass("active","show"===t.type)}),AOS.init({easing:"ease-out-back"}),gsap.registerPlugin(ScrollTrigger,ScrollToPlugin),window.matchMedia("(max-width: 767px)").matches||(e(".hero__wrap__title").length&&gsap.to(".hero__wrap__title",{scale:.6,scrollTrigger:{trigger:".hero__thumb",start:"top bottom",end:"bottom center",scrub:!0}}),e(".hero__thumb").length&&gsap.to(".hero__thumb",{scale:1.1,rotateX:0,scrollTrigger:{trigger:".hero__thumb",start:"top bottom",end:"bottom center",scrub:!0}}),e(".hero__thumb__sr1").length&&gsap.to(".hero__thumb__sr1",{top:-30,scrollTrigger:{trigger:".hero__thumb",start:"top bottom",end:"bottom top",scrub:!0}}),e(".hero__thumb__sr2").length&&gsap.to(".hero__thumb__sr2",{top:-60,scrollTrigger:{trigger:".hero__thumb",start:"top bottom",end:"bottom top",scrub:!0}})),e(".app__main__img").length&&gsap.to(".app__main__img",{scrollTrigger:{trigger:".app__main__img",start:"top top+=100px",endTrigger:".app__main__platform",end:"top center",pin:!0,pinSpacing:!0}}),e(".app__main__sp.sp1").length&&gsap.to(".app__main__sp.sp1",{scrollTrigger:{trigger:".app__main__sp.sp1",start:"top top+=500px",endTrigger:".app__main__platform",end:"top bottom",pin:!0,pinSpacing:!0}}),e(".app__main__sp.sp2").length&&gsap.to(".app__main__sp.sp2",{scrollTrigger:{trigger:".app__main__sp.sp2",start:"top top+=500px",endTrigger:".app__main__platform",end:"top bottom",pin:!0,pinSpacing:!0}}),e(".app__main__sp.sp3").length&&gsap.to(".app__main__sp.sp3",{scrollTrigger:{trigger:".app__main__sp.sp3",start:"top top+=300px",endTrigger:".app__main__platform",end:"top bottom",pin:!0,pinSpacing:!0}}),e(".app__main__sp.sp4").length&&gsap.to(".app__main__sp.sp4",{scrollTrigger:{trigger:".app__main__sp.sp4",start:"top top+=300px",endTrigger:".app__main__platform",end:"top bottom",pin:!0,pinSpacing:!0}}),e(".counter__main__single").length&&gsap.to(".counter__main__single",{rotate:0,scrollTrigger:{trigger:".counter__main__single",start:"top center",end:"bottom bottom",scrub:!0}}),e(".blog__details__wrap__sidebar").length&&gsap.to(".blog__details__wrap__sidebar",{scrollTrigger:{trigger:".blog__details__wrap__sidebar",start:"top top+=80",endTrigger:".blog__details__wrap__main",end:"bottom center+=400",pin:!0,pinSpacing:!1,scrub:!0}}),window.matchMedia("(max-width: 769px)").matches||(e(".service__details__left").length&&gsap.to(".service__details__left",{scrollTrigger:{trigger:".service__details__left",start:"top top",endTrigger:".service__details__main",end:"bottom bottom",pin:!0,pinSpacing:!0}}),e(".service__dsp").length&&gsap.to(".service__dsp",{scrollTrigger:{trigger:".service__dsp",start:"top top",endTrigger:".service__details__main",end:"bottom bottom+=200",pin:!0,pinSpacing:!0}})),e(".cursor").length){gsap.set(".cursor",{xPercent:-50,yPercent:-50});let r=gsap.quickTo(".cursor","x",{duration:.6,ease:"power3"}),i=gsap.quickTo(".cursor","y",{duration:.6,ease:"power3"});window.addEventListener("mousemove",e=>{r(e.clientX),i(e.clientY)})}e(".preloader").length&&(e("body").addClass("loading-s"),e(window).on("load",function(){e(".preloader").fadeOut(),e("body").removeClass("loading-s")}))}(jQuery);function sendMail(){let e=document.getElementById("contactForm"),t=e.querySelector("[name='name']").value.trim(),a=e.querySelector("[name='email']").value.trim(),o=e.querySelector("[name='number']").value.trim(),r=e.querySelector("[name='subject']").value.trim(),i=e.querySelector("[name='message']").value.trim(),s=e.querySelector("[name='message']"),n=e.querySelector("[name='link']");if(!t||!a||!o||!r||null!==n&&!n.value.trim()||s.hasAttribute("required")&&!i){Toastify({text:"يرجى ملء جميع الحقول المطلوبة",duration:3e3,close:!0,gravity:"top",position:"right",style:{background:"linear-gradient(to right, #ff5f6d, #ffc371)",fontSize:"16px"},onClick:function(){}}).showToast();return}emailjs.sendForm("service_zywfsrs","template_0gs6p97","#contactForm").then(()=>{Toastify({text:"تم الإرسال بنجاح",duration:3e3,close:!0,gravity:"top",position:"right",style:{background:"linear-gradient(to right, #45bfbb, #22234d)",fontSize:"16px"},onClick:function(){}}).showToast(),e.reset()},e=>{Toastify({text:"يوجد مشكلة في  الإرسال",duration:3e3,close:!0,gravity:"top",position:"right",style:{background:"linear-gradient(to right, #45bfbb, #22234d)",fontSize:"16px"},onClick:function(){}}).showToast(),console.error("Error:",e)})}