var assert = require('assert');
var stringRotation = require('../solution2.js');

describe('String Rotation', function(){

  it('should return true when string is rotation of another', function(){
    assert(stringRotation('waterbottle', 'bottlewater'));
    assert(stringRotation('waterbottle', 'ewaterbottl'));
    assert(stringRotation('waterbottle', 'aterbottlew'));

    assert(stringRotation('_water_bottle_', 'er_bottle__wat'));
    assert(stringRotation('_water_bottle_', 'ater_bottle__w'));
    assert(stringRotation('_water_bottle_', 'e__water_bottl'));
  });

  it('should return false when string is not rotation of another', function(){
    assert(!stringRotation('waterbottle', 'waterbottle'));
    assert(!stringRotation('waterbottle', 'aterbottleww'));
    assert(!stringRotation('waterbottle', 'waterbottlee'));
    assert(!stringRotation('waterbottle', 'aterbottle'));
  });

});
