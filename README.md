# node-tests

## Mocha Test 101

1. Install mocha: **npm i mocha --save-dev** (-dev: this lib use only on dev mood)
2. Create basic function for test (utils.js)
3. Create test class for that (utils.test.js)
4. Edit test line in package.json: **"test": "mocha _*/_.test.js"**
5. Run **npm test**
6. To auto restart tests use: **nodemon --exec "npm test"**
7. In commit 5: **"test-watch":"nodemon --exec \"npm test\""** Run **npm run test-watch**
8. Adding Assertion library:([mjackson/expect](https://github.com/mjackson/expect)) to install this use: **npm install expect@1.20.2 --save-dev**
<br>

### Using commonJs

`<div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
  <pre style="margin: 0; line-height: 125%">it(<span style="background-color: #fff0f0">'should add two numbers'</span>, ()<span style="color: #333333">=&gt;</span>{
    <span style="color: #008800; font-weight: bold">var</span> res <span style="color: #333333">=</span> utils.add(<span style="color: #0000DD; font-weight: bold">55</span>,<span style="color: #0000DD; font-weight: bold">5</span>);
    <span style="color: #008800; font-weight: bold">if</span>(res <span style="color: #333333">!==</span> <span style="color: #0000DD; font-weight: bold">60</span>){
        <span style="color: #008800; font-weight: bold">throw</span> <span style="color: #008800; font-weight: bold">new</span> <span style="color: #007020">Error</span>(<span style="color: #FF0000; background-color: #FFAAAA">
  <code>&lt;/span&gt;Expected &lt;span style="color: #0000DD; font-weight: bold"&gt;60&lt;/span&gt;. but got ${res}&lt;span style="color: #FF0000; background-color: #FFAAAA"&gt;</code>
</span>)
    }
});
</pre>
</div>`

### Using expect

`<div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;">
  <pre style="margin: 0; line-height: 125%">it(<span style="background-color: #fff0f0">'should add two numbers'</span>, ()<span style="color: #333333">=&gt;</span>{
<span style="color: #008800; font-weight: bold">var</span> res <span style="color: #333333">=</span> utils.add(<span style="color: #0000DD; font-weight: bold">55</span>,<span style="color: #0000DD; font-weight: bold">5</span>);

expect(res).toBe(<span style="color: #0000DD; font-weight: bold">60</span>);

});
</pre>
</div>`
