const loaderUtils = require('loader-utils');

module.exports = function() {
	var query = loaderUtils.getOptions(this);

	var outfile = loaderUtils.interpolateName(this, '[path][name].[ext]', {
		context: this.options.context
	});

	if (query && query.prod)
		outfile = 'resources/' + outfile;

	return "try {global.process.dlopen(module, '" + outfile + "'); } catch(e) {" +
		"throw new Error('Cannot open ' + " + outfile + " + ': ' + e);}";
};
