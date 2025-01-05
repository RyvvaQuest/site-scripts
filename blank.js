// will add target="_blank" to all external links after window is loaded
window.onload = function() {
    for (var t = location.host.replace("www.", ""), t = new RegExp(t, "i"), e = document.getElementsByTagName("a"), a = 0; a < e.length; a++) {
        var n = e[a].host;
        t.test(n) || e[a].setAttribute("target", "_blank")
    }
};
