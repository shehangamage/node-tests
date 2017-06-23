const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', ()=>{
  var res = utils.add(55,5);

  expect(res).toBe(60).toBeA('number');

});

it('sholud add one number',()=>{
    var res = utils.squre(3);

    expect(res).toBe(9);

});
