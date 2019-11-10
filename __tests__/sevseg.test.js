const {SevenSegment} = require('../components/SevenSegment')

describe('Creating new 7s instance', () => {
    it('throws error if not enough segment pins', () => {
        expect(()=>{
            new SevenSegment([1,2,3,4], [6,7,8,9,10,11])
        }).toThrow('please specify ALL your 7 segment output pin numbers')
    });

    it('throws error if no digit pins', () => {
        expect(()=>{
            new SevenSegment([6,78,9,10,11,3,5])
        }).toThrow('please add BOTH, digit output pins AND 7 segment output pins')
    });

    it('instances correctly', () => {
        let sevseg = new SevenSegment([1,2,3,4], [6,7,8,9,10,11,12])
        expect(sevseg.digitPins).toEqual([1,2,3,4])
        expect(sevseg.segmentPins).toEqual([6,7,8,9,10,11,12])
    })
});
