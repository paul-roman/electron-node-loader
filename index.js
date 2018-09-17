const loaderUtils = require('loader-utils');

module.exports = function() {
	var query = loaderUtils.getOptions(this);

	var outfile = loaderUtils.interpolateName(this, query.folder + '/[name].[ext]', {
		context: this.context
	});
	var path = '../'

	if (query && query.prod) {
		outfile = 'resources/' + outfile;
		path += '../../';
	}

	return `try {global.process.dlopen(module, require('path').dirname(__filename) + '/${path}${outfile}'); } catch(e) {
	throw new Error('Cannot open ${outfile}: ' + e);}`;
};

