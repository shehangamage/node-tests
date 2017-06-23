# node-tests

<h2>Mocha Test 101</h2>

<ol>
	<li>Install mocha: <strong>npm i mocha --save-dev</strong> (-dev: this lib use only on dev mood)</li>
	<li>Create basic function for test (utils.js)</li>
	<li>Create test class for that (utils.test.js)</li>
	<li>Edit test line in package.json: <strong>"test": "mocha **/*.test.js"</strong> </li>
	<li>Run <strong>npm test</strong></li>
	<li>To auto restart tests use: <strong>nodemon --exec "npm test"</strong></li>
	<li>In commit 5: <strong> "test-watch":"nodemon --exec \"npm test\"" </strong> Run <strong>npm run test-watch</strong></li>
	<li>Adding Assertion library:(<a href="https://github.com/mjackson/expect">mjackson/expect</a>) to install this use: <strong>npm install expect@1.20.2 --save-dev
</strong></li>
<br>
<code>
<!-- HTML generated using hilite.me --><div style="background: #ffffff; overflow:auto;width:auto;border:solid gray;border-width:.1em .1em .1em .8em;padding:.2em .6em;"><pre style="margin: 0; line-height: 125%">it(<span style="background-color: #fff0f0">&#39;should add two numbers&#39;</span>, ()<span style="color: #333333">=&gt;</span>{
	<span style="color: #008800; font-weight: bold">var</span> res <span style="color: #333333">=</span> utils.add(<span style="color: #0000DD; font-weight: bold">55</span>,<span style="color: #0000DD; font-weight: bold">5</span>);
	<span style="color: #008800; font-weight: bold">if</span>(res <span style="color: #333333">!==</span> <span style="color: #0000DD; font-weight: bold">60</span>){
		<span style="color: #008800; font-weight: bold">throw</span> <span style="color: #008800; font-weight: bold">new</span> <span style="color: #007020">Error</span>(<span style="color: #FF0000; background-color: #FFAAAA">`</span>Expected <span style="color: #0000DD; font-weight: bold">60</span>. but got ${res}<span style="color: #FF0000; background-color: #FFAAAA">`</span>)
	}
});
</pre></div>
</code>
</ol>
