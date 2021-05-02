/**
 * https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

 * Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

function humanReadable(seconds) {
    let hh = 00, mm = 00, ss = 00
    if (seconds < 60) {
        ss = seconds
    }
    if (seconds >= 60 && seconds <= 3600) {
        mm = Math.trunc(seconds / 60)

        let remainSeconds = seconds - (mm * 60)

        if (remainSeconds > 0 && remainSeconds < 60) {
            ss = remainSeconds
        }
    }
    if (seconds / 60 >= 60) {
        mm = 0
        hh = Math.trunc((seconds / 60) / 60)
        remainMinutes = Math.trunc(seconds / 60 - 60)
        if (remainMinutes < 60) mm = remainMinutes
        let remainSeconds = seconds - (((hh * 60) + mm) * 60)
        if (remainSeconds > 0 && remainSeconds < 60) {
            ss = remainSeconds
        }
        if (remainSeconds > 0 && remainSeconds > 60) {
            mm = Math.trunc(remainSeconds / 60)
            ss = remainSeconds - mm * 60
            console.log(remainSeconds - mm * 60)
        }



    }


    return `${hh < 9 ? `0${hh}` : hh}:${mm < 9 ? `0${mm}` : mm}:${ss < 9 ? `0${ss}` : ss}`
}

console.log(humanReadable(5000))