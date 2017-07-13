// load all js sources
const testsContext = require.context('./posts', true, /\.js$/);
testsContext.keys().forEach(testsContext);
