export default function javascriptObfuscator(options = {}) {
	return {
		name: 'javascript-obfuscator',

		transformBundle(code) {
			const obfuscator = options.obfuscator ? options.obfuscator : require('javascript-obfuscator');
			const obfuscationResult = obfuscator.obfuscate(code, options);
			let result = {code: obfuscationResult.getObfuscatedCode()};

			if (options.sourceMap && options.sourceMapMode !== 'inline') {
				result.map = obfuscationResult.getSourceMap();
			}

			return result;
		}
	};

}