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
</ol>
