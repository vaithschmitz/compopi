const Gpio = require('pigpio').Gpio

class SevenSegment{
    constructor(digitPinsNums, segmentPinsNums){     
        if(!digitPinsNums || !segmentPinsNums){
            throw('please add BOTH, digit output pins AND 7 segment output pins')
        }
        if(segmentPinsNums.length === 7){
            this.segmentPinsNums = segmentPinsNums
        }
        else{
            throw('please specify ALL your 7 segment output pin numbers')
        }
        this.digitPinsNums = digitPinsNums
        this.assignPins()
    }


    assignPins(){
        this.digitPinsNums.map(el => new Gpio(el, { mode: Gpio.OUTPUT }))
    }

}


module.exports.SevenSegment = SevenSegment