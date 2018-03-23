const loaderUtils = require('loader-utils');

module.exports = function() {
	let outfile = loaderUtils.interpolateName(this, '[path][name].node', {
		context: this.context,
	});

	if (loaderUtils.getOptions(this) && loaderUtils.getOptions(this).prod)
		outfile = 'resources/' + outfile;
	else
		outfile = '../' + outfile;

	return "try {global.process.dlopen(module, '" + outfile + "'); } catch(e) {" +
		"throw new Error('Cannot open ' + " + outfile + " + ': ' + e);}";
};
