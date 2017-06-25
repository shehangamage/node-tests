const utils = require('./utils');
const expect = require('expect');

describe('Utils', () => {

  describe('#add', () => {
    it('should add two numbers', () => {
      var res = utils.add(55, 5);
      expect(res).toBe(60).toBeA('number');
    });
  });

  describe('#squre',()=>{
    it('sholud add one number', () => {
      var res = utils.squre(3);
      expect(res).toBe(9).toBeA('number');
    });
  });

  describe('#setName',()=>{
    it('should verify first and last names are set', () => {
      var user = {
        age: 23,
        location: "warakapola"
      }
      var res = utils.setName(user, "Shehan Gamage");

      expect(res).toInclude({
        firstName: "Shehan",
        lastName: "Gamage"
      });
    });
  });

  //Async code test--------------------------
  describe('asyncAdd',()=>{
    it('should async add two numbers', (done) => {
      utils.asynAdd(3, 4, (sum) => {
        expect(sum).toBe(7).toBeA('number');
        done();
      });
    });
  });

  describe('asyncSqure',()=>{
    it('sholud asyc squre one number', (done) => {
      utils.asynSqure(3, (squre) => {
        expect(squre).toBe(9).toBeA('number');
        done();
      });
    });
  });

  it('should expect some values', () => {
    expect(12).toNotBe(11);
    //when we working with object we need to use toEqual method .for objects toBe not working
    expect({
      name: "Shehan"
    }).toEqual({
      name: "Shehan"
    });
    expect({
      name: "Shehan"
    }).toNotEqual({
      name: "Gamage"
    });

    expect([2, 4, 5]).toInclude(2);
    expect([3, 7, 9]).toExclude(2);
    expect({
      name: "Shehan",
      age: 23,
      location: "warakapola"
    }).toInclude({
      age: 23
    });
  });

});
