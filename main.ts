radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        eskuineko_intermitentea()
    }
    if (receivedNumber == 2) {
        eskerreko_intermitentea()
    }
    if (receivedNumber == 3) {
        limpiaparabrisas()
    }
})
function limpiaparabrisas () {
    pins.servoWritePin(AnalogPin.P0, 180)
}
function eskerreko_intermitentea () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
function eskuineko_intermitentea () {
    music.startMelody(music.builtInMelody(Melodies.Nyan), MelodyOptions.Once)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
}
radio.setGroup(6)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    }
    // 
    if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.logoIsPressed()) {
        radio.sendNumber(3)
    }
})
