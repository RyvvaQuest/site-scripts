// will display a clock, you need to add a division with an ID of clock
function myClock() {
    setTimeout(function() {
        const e = new Date;
        var n = e.toLocaleTimeString();
        document.getElementById("clock").innerHTML = n, myClock()
    }, 1e3)
}
myClock();
