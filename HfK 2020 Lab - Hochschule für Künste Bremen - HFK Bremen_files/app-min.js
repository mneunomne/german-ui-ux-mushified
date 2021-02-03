function initJs(){resizeFn(),wg_toggleNavTrigger(),wg_toogle_filter(),searchHeight(),openSearch(),closeSearchIcon(),searchValue(),wg_toggleSidebar(),wg_sidebarHeight(),wg_linkClasses(),wg_linkExternAltOverlay(),wg_linkExternAltOverlayEN(),wg_linkHervorgehoben(),wg_linkPfeil(),wg_footerHeight(),scrollTopOfPage()}function reInitJs(){var e=$(window).width();(e>=breakpoint&&breakpoint>w||breakpoint>e&&w>=breakpoint)&&resizeFn(),wg_LinkOverlayCircle(),wg_sidebarHeight()}function resizeFn(){w=$(window).width(),w>=breakpoint,wg_footerHeight()}function wg_toggleNavTrigger(){$("#nav-trigger").click(function(){wg_toggleNav()}),$("#nav-trigger-close").click(function(){wg_toggleNav()})}function wg_toggleNav(){$("#navigation").toggleClass("toggle-height"),$("#nav-trigger").toggleClass("open"),$("body").toggleClass("overflow"),wg_navScroll()}function wg_navScroll(){$("header").outerHeight(),$(window).height()}function openSearch(){$(".search-trigger").click(function(){var e=$("#suche-overlay");"block"==$(e).css("display")?($(e).slideUp(500),$("body").removeClass("overflow")):($("#navigation").hasClass("toggle-height")?($("#navigation").removeClass("toggle-height"),$("#nav-trigger").removeClass("open"),$("body").removeClass("overflow"),$(e).delay(500).slideDown(500,function(){$("#suche").focus()})):$(e).slideDown(500,function(){$("#suche").focus()}),searchHeight(),$("body").addClass("overflow"))})}function closeSearchIcon(){$("#suche-overlay .l-close").click(function(){closeSearch()})}function closeSearch(){$("#suche-overlay").slideUp(500),$("body").removeClass("overflow")}function searchHeight(){var e=$("header").outerHeight(),n=$(window).height(),i=n-e;if(i>550)$("#search-pos").css("align-items","center");else{var i=450;$("#search-pos").css("align-items","normal")}$("#suche-overlay").css("max-height",i),$("#search-pos").css("height",i),$("#suche-overlay").css("top",e)}function searchValue(){$("#volltextsuche").submit(function(){url="https://www.hfk-bremen.de/search/apachesolr_search/",search=$("#suche").val();var e=url+search;$(this).attr("action",e),$("#suche").val(""),closeSearch()})}function wg_toggleSidebar(){$("#trigger").click(function(){$(".sidebar").toggleClass("open",500)})}function wg_sidebarHeight(){w=$(window).width(),w>=breakpoint2?(sidebarHeight=$(".sidebar-content").outerHeight(),$(".sidebar-trigger.left").css("width",sidebarHeight),$(".sidebar").css("visibility","visible")):$(".sidebar").css("visibility","hidden")}function wg_linkClasses(){window.location.href.indexOf("/en/")>-1?$('a[href^="https://www.hfk-bremen.de"]:not(.link-overlay):not(.header-icon):not(.footer-link):not(.footer-icon)').addClass("link-extern-alt-en"):$('a[href^="https://www.hfk-bremen.de"]:not(.link-overlay):not(.header-icon):not(.footer-link):not(.footer-icon)').addClass("link-extern-alt"),$('a[href^="http"]:not(.link-extern-alt):not(.link-extern-alt-en):not(.link-overlay):not(.header-icon):not(.footer-link):not(.footer-icon)').addClass("link-extern").attr("target","_blank"),wg_linkExternAltIcon(),wg_linkExternIcon()}function wg_linkExternIcon(){$(".link-extern").append('<svg class="link-extern-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 276.5 275.5"><g data-name="Ebene 2"><g data-name="Ebene 1"><polygon points="0 29.5 0 275.5 245 275.5 245 140 216.5 140 216.5 247 29.5 247 29.5 58.5 139 58.5 139 28.5 0 29.5"/><polygon points="142.5 153.5 247.5 50.5 247.5 97 276.5 97 276.5 0 178.5 0 178.5 29.5 224.5 29.5 122 133.5 142.5 153.5"/></g></g></svg>')}function wg_linkExternAltIcon(){$(".link-extern-alt,.link-extern-alt-en").append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 605.73 589.99"><g data-name="Ebene 2"><g data-name="Ebene 1"><path class="link-alte-seite" d="M444.64,15.69,422.42,38.13l107.08,106L164.05,146l.16,31.63,365.44-1.89-106,107.07L446.13,305,590,159.6Z"/><path class="link-alte-seite" d="M161.1,574.3l22.21-22.44-107.07-106L441.68,444l-.15-31.63L76.08,414.26l106-107.07L159.6,285,15.69,430.39Z"/></g></g></svg>')}function wg_linkHervorgehoben(){$(".link-hervorgehoben").append("&nbsp; &rarr;")}function wg_linkPfeil(){$(".link-pfeil").append("&nbsp; &rarr;")}function wg_linkExternAltOverlay(){Cookies.get("hfk-link-extern")?$(".link-extern-alt").click(function(){}):($(".link-extern-alt").click(function(){var e=$(this).attr("href");return $("#link-target-alt").attr("href",e),$("#link-overlay").css("display","block"),$("#link-overlay").animate({height:"100%"},500),wg_LinkOverlayCircle(),!1}),$("#link-target-alt").click(function(){Cookies.set("hfk-link-extern","true",{expires:365}),$("#link-overlay").css("display","none")}))}function wg_linkExternAltOverlayEN(){Cookies.get("hfk-link-extern-en")?$(".link-extern-alt").click(function(){}):($(".link-extern-alt-en").click(function(){var e=$(this).attr("href");return $("#link-target-alt-en").attr("href",e),$("#link-overlay-en").css("display","block"),$("#link-overlay-en").animate({height:"100%"},500),wg_LinkOverlayCircle(),!1}),$("#link-target-alt-en").click(function(){Cookies.set("hfk-link-extern-en","true",{expires:365}),$("#link-overlay-en").css("display","none")}))}function wg_closeLinkOverlay(){$(".link-overlay-wrapper").animate({height:"0"},500,function(){$(".link-overlay-wrapper").css("display","none")})}function wg_LinkOverlayCircle(){$(".link-overlay-wrapper").is(":visible")&&(w=$(window).width(),w>=breakpoint?(circleWidth=$(".circle").outerWidth(),$(".circle").animate({height:circleWidth},300),$(".circle-wrapper").animate({height:circleWidth},300)):($(".circle").css("height","inherit"),$(".circle-wrapper").css("height","inherit")))}function scrollTopOfPage(){var e=['<a href="#top" class="back-to-top"></a>'].join("");$("body").append(e),$(".back-to-top").hide(),$(function(){$(window).scroll(function(){$(this).scrollTop()>100?$(".back-to-top").fadeIn():$(".back-to-top").fadeOut()}),$(".back-to-top").click(function(){return $("body,html").animate({scrollTop:0},800),!1})})}function wg_footerHeight(){footerHeight=$(".page-footer").outerHeight(),$("body").css("padding-bottom",footerHeight)}function wg_maps_laden(){Cookies.set("custom_google_maps","true",{expires:7}),location.reload()}function wg_maps_loeschen(){Cookies.remove("custom_google_maps"),location.reload()}function wg_toogle_filter(){$(".filter-toggle").click(function(){$(".filter-mix").slideToggle("slow","linear")})}function video_loeschen(){Cookies.remove("custom_video"),location.reload()}$(document).foundation(),$(document).ready(function(){initJs(),$(window).resize($.debounce(500,function(){reInitJs()})),$(window).scroll(function(){})});var w=!1,breakpoint=768,breakpoint2=1e3;$(document).on("open.zf.drilldown",function(){$("#navigation").scrollTop(0)});
//# sourceMappingURL=app-min.js.map