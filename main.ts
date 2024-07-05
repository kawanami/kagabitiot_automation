input.onButtonPressed(Button.B, function () {
    Tello.down(20)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        # # # # #
        `)
})
Tello.radiosetgroup(101)
basic.forever(function () {
    Tello.Setorder(1000)
})
basic.forever(function () {
    if (input.lightLevel() < 50) {
        basic.showNumber(0)
        Tello.takeoff()
        basic.pause(7000)
        basic.showNumber(1)
        Tello.forward(50)
        basic.pause(5000)
        basic.showNumber(2)
        Tello.right(50)
        basic.pause(5000)
        basic.showNumber(3)
        Tello.back(50)
        basic.pause(5000)
        basic.showNumber(4)
        Tello.left(50)
        basic.pause(5000)
        basic.showNumber(5)
        Tello.land()
        basic.pause(5000)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
