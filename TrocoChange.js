
/**
 Sistema de troco, fazer um sistema que  calcule a melhor das ipoteses de trocos 
 sendo a cedulas de 10, 5 e 2.
 mesmo que falte, precisa calcular a melhor ipotese
 ex: 48 => ten: 4 , five: 1, two:1 =  47
 ex: 45 => ten: 4 , five: 1, two:0 =  45
 ex: 8 => ten: 0 , five: 1, two:2 =  7


 */

function change(n) {
    let ten = 0, five = 0, two = 0

    if ((n / 10) % 1 != 0 && (n / 10) >= 1) {
        ten += Math.trunc(n / 10)
        if (((n / 10) - Math.trunc(n / 10)) >= 0.19 && ((n / 10) - Math.trunc(n / 10)) < 0.49) {
            two += 1
            return { ten, five, two }
        }
        if (((n / 10) - Math.trunc(n / 10)) >= 0.5) {
            five += 1
            if (((n / 10) - Math.trunc(n / 10)) >= 0.69) two += 1
            return { ten, five, two }
        }
    }
    if ((n / 5) % 1 != 0 && (n / 5) >= 1) {
        five += Math.trunc(n / 5)
        if (((n / 5) - Math.trunc(n / 5)) >= 0.39) {
            if (((n / 5) - Math.trunc(n / 5)) >= 0.79) {
                two += 2
                return { ten, five, two }
            }
            two += 1
            return { ten, five, two }
        }
    }

    if ((n / 10) % 1 == 0) {
        ten += n / 10
        return { ten, five, two }
    }
    else if ((n / 5) % 1 == 0) {
        five += n / 5
        return { ten, five, two }
    }
    else if ((n / 2) % 1 == 0) {
        two += n / 2
        return { ten, five, two }
    }
    return {
        ten,
        five,
        two
    }
}
console.log(change(48))