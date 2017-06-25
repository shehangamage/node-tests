# node-tests

## Mocha Test 101

1. Install mocha: **npm i mocha --save-dev** (-dev: this lib use only on dev mood)
2. Create basic function for test (utils.js)
3. Create test class for that (utils.test.js)
4. Edit test line in package.json: **"test": "mocha _*/_.test.js"**
5. Run **npm test**
6. To auto restart tests use: **nodemon --exec "npm test"**
7. In commit 5: **"test-watch":"nodemon --exec \"npm test\""** Run **npm run test-watch**
8. Adding Assertion library:([mjackson/expect](https://github.com/mjackson/expect)) to install this use: **npm install expect@1.20.2 --save-dev**<br>

### Using commonJs

```
it('should add two numbers', ()=>{
  var res = utils.add(55,5);

  if(res !== 60){
		throw new Error(`Expect 60 but got ${res}`);
	}

});
```

### Using expect

```
it('sholud add one number',()=>{
    var res = utils.squre(3);

    expect(res).toBe(9).toBeA('number');

});
```
### Using expect with objects
** when we working with object we need to use toEqual method .for objects toBe not working**

```
expect({name:"Shehan"}).toEqual({name:"Shehan"});
expect({name:"Shehan"}).toNotEqual({name:"Gamage"});
```

9. Asynchronous code testing with mocha
      ****when we using async function we need to tell mocha that function is a async function. for that we can use 'done()'

      ```
      module.exports.asynAdd = (a, b, callback)=>{
        setTimeout(()=>{
          callback(a+b);
        },1000);
      };
      ```

      ```
      it('should async add two numbers',(done)=>{
          utils.asynAdd(3, 4, (sum)=>{
            expect(sum).toBe(7).toBeA('number');
            done();
          });
      });
      ```
