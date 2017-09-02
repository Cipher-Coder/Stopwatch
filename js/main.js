var timer = document.getElementById('timer');
var toggleBtn = document.getElementById("toggle");
var resetBtn = document.getElementById('reset');

var watch = new Stopwatch({
    elem: timer,
    delay: 1
    /*'Delay' is how fast the 100ths of a second will go:
    1 = really really fast and up to 100 = kind of slow. */
});

function start(){
    watch.start();
    toggleBtn.textContent = 'Stop';
}

function stop(){
    watch.stop();
    toggleBtn.textContent = 'Start';
}

toggleBtn.addEventListener('click', function() {
    (watch.isOn) ? stop() : start();
});

resetBtn.addEventListener('click', function() {
    watch.reset();
});
