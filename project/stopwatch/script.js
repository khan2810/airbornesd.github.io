let current_timer = 0
let interval
const timer = document.getElementById('timer')
let is_timer_active = false

function set_timer_in_html() {
    current_timer++
    let milliseconds = current_timer%100
    let seconds = Math.trunc(current_timer/100)
    let minutes = 0

    if (seconds >= 60){
        minutes = Math.trunc(seconds/60)
        seconds = seconds%60
    }

    milliseconds = milliseconds < 10 ? `0${milliseconds}` : milliseconds
    seconds = seconds < 10 ? `0${seconds}` : seconds
    minutes = minutes < 10 ? `0${minutes}` : minutes

    timer.innerHTML = `${minutes}:${seconds}:${milliseconds}`
}

function start_timer() {
    if (!is_timer_active){
        interval = setInterval(set_timer_in_html, 10)
        is_timer_active = true
    }
}

function stop_timer() {
    clearInterval(interval)
    is_timer_active = false
}

function reset_timer() {
    stop_timer()
    current_timer = 0
    timer.innerHTML = '00:00:00'
}

