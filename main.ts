serial.setBaudRate(BaudRate.BaudRate115200)
basic.forever(function () {
    basic.showNumber(BMP180.alt())
    serial.writeValue("ALtitud", BMP180.alt())
})
