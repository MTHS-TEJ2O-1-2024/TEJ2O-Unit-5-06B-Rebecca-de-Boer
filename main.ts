/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Rebecca de Boer
 * Created on: Oct 2024
 * This program senses distance
*/

let ObjectDistance: number = 0

//setup

basic.showIcon(IconNames.Happy)


//getting distance from sonar

    input.onButtonPressed(Button.A, function() {
        basic.clearScreen()
        ObjectDistance = sonar.ping (
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
)
basic.showNumber (ObjectDistance)
basic.showIcon(IconNames.Happy)
})