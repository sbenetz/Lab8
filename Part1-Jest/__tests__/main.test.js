const formatVolumeIconPath = require("../assets/scripts/main");

describe('formatVolume tests',() =>{
    test('big volume', () =>{
        expect(formatVolumeIconPath(101)).toBe('./assets/media/icons/volume-level-3.svg');
    });
    test('medium volume', () =>{
        expect(formatVolumeIconPath(55)).toBe('./assets/media/icons/volume-level-2.svg');
    });
    test('small volume', () =>{
        expect(formatVolumeIconPath(15)).toBe('./assets/media/icons/volume-level-1.svg');
    });
    test('zero volume', () =>{
        expect(formatVolumeIconPath(0)).toBe('./assets/media/icons/volume-level-0.svg');
    });
    test('negative volume', () =>{
        expect(formatVolumeIconPath(-1)).toBe('./assets/media/icons/volume-level-0.svg');
    });
});