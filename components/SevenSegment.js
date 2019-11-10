class SevenSegment{
    constructor(digitPins, segmentPins){
        
        if(!digitPins || !segmentPins){
            throw('please add BOTH, digit output pins AND 7 segment output pins')
        }

        if(segmentPins.length === 7){
            this.segmentPins = segmentPins
        }
        else{
            throw('please specify ALL your 7 segment output pin numbers')
        }
    }

}



module.exports.SevenSegment = SevenSegment