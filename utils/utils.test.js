const utils = require('./utils');

it('should add two numbers', ()=>{
  var res = utils.add(55,5);

  if(res !== 60){
    throw new Error(`Expected 60. but got ${res}`)
  }

});

it('sholud add one number',()=>{
    var res = utils.squre(3);

    if(res !== 9){
      throw new Error(`Expected 9. but got ${res}`);
    }
});
