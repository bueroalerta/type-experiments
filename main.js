function map_range(n,r,a,e,t){return e+(t-e)*(n-r)/(a-r)}
$(document).ready(function(){$(document).keydown(function(e){switch(e.which){case 49:window.location.href="index.php?file=01";break;case 50:window.location.href="index.php?file=02";break;case 51:window.location.href="index.php?file=03";break;case 52:window.location.href="index.php?file=04";break;case 53:window.location.href="index.php?file=05";break;case 54:window.location.href="index.php?file=06";break;case 55:window.location.href="index.php?file=07";break;case 56:window.location.href="index.php?file=08"}})}),$("#nav-toggle").click(function(){$("#overlay").toggleClass("active"),$(this).toggleClass("active"),$("body").removeClass("invert")}),$("#toggleColor").click(function(){$("body").toggleClass("invert")});