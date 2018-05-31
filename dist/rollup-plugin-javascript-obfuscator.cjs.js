'use strict';

function javascriptObfuscator(options) {
	if ( options === void 0 ) options = {};

	return {
		name: 'javascript-obfuscator',

		transformBundle: function transformBundle(code) {
			var obfuscator = options.obfuscator ? options.obfuscator : require('javascript-obfuscator');
			var obfuscationResult = obfuscator.obfuscate(code, options);
			var result = {code: obfuscationResult.getObfuscatedCode()};

			if (options.sourceMap && options.sourceMapMode !== 'inline') {
				result.map = obfuscationResult.getSourceMap();
			}

			return result;
		}
	};

}

module.exports = javascriptObfuscator;
//# sourceMappingURL=rollup-plugin-javascript-obfuscator.cjs.js.map
