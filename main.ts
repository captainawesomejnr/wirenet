basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.clearScreen()
    }
    if (pins.digitalReadPin(DigitalPin.P0) == 1) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        music.ringTone(392)
    } else {
        basic.clearScreen()
        music.stopAllSounds()
    }
})
