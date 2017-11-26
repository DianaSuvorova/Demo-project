// polyfill PhantomJS environment
import 'babel-polyfill'
import 'whatwg-fetch'

// require all the test files in the test folder that end with Spec.js or Spec.jsx
const testsContext = require.context('.', true, /.test.js?$/);
testsContext.keys().forEach(testsContext);

// output at when the test were run
//eslint-disable-next-line
console.info(`TESTS RAN AT ${new Date().toLocaleTimeString()}`);
