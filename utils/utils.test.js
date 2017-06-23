const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', ()=>{
  var res = utils.add(55,5);

  expect(res).toBe(60).toBeA('number');

});

it('sholud add one number',()=>{
    var res = utils.squre(3);

    expect(res).toBe(9).toBeA('number');

});

it('should expect some values',()=>{
    expect(12).toNotBe(11);
    //when we use equal we need to use tiEqual method.for objects toBe not working
    expect({name:"Shehan"}).toEqual({name:"Shehan"});
    expect({name:"Shehan"}).toNotEqual({name:"Gamage"});
});
