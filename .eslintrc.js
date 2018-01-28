module.exports = {
	env: {
		node: true,
		es6: true,
	},
	parserOptions: {
		ecmaVersion: 2017,
		ecmaFeatures: { experimentalObjectRestSpread: true },
	},
	rules: {
		'for-direction': 'error',
		'getter-return': 'error',
		'no-compare-neg-zero': 'error',
		'no-cond-assign': 'error',
		'no-constant-condition': ['error', { checkLoops: false }],
		'no-control-regex': 'error',
		'no-debugger': 'error',
		'no-dupe-args': 'error',
		'no-dupe-keys': 'error',
		'no-duplicate-case': 'error',
		'no-empty': ['error', { allowEmptyCatch: true }],
		'no-empty-character-class': 'error',
		'no-ex-assign': 'error',
		'no-extra-boolean-cast': 'error',
		'no-extra-semi': 'error',
		'no-func-assign': 'error',
		'no-inner-declarations': 'error',
		'no-invalid-regexp': 'error',
		'no-irregular-whitespace': 'error',
		'no-obj-calls': 'error',
		'no-regex-spaces': 'error',
		'no-template-curly-in-string': 'error',
		'no-unexpected-multiline': 'error',
		'no-unreachable': 'error',
		'no-unsafe-finally': 'error',
		'no-unsafe-negation': 'error',
		'use-isnan': 'error',
		'valid-jsdoc': [
			'error',
			{
				requireReturnType: true,
				requireParamDescription: true,
				requireReturnDescription: true,
				prefer: {
					return: 'returns',
					arg: 'param',
				},
				preferType: {
					String: 'string',
					Number: 'number',
					Boolean: 'boolean',
					Symbol: 'symbol',
					object: 'Object',
					function: 'Function',
					array: 'Array',
					date: 'Date',
					error: 'Error',
					null: 'void',
				},
			},
		],
		'valid-typeof': 'error',

		'array-callback-return': 'error',
		'block-scoped-var': 'error',
		curly: ['error', 'multi'],
		'dot-location': ['error', 'property'],
		'dot-notation': 'error',
		eqeqeq: 'error',
		'guard-for-in': 'error',
		'no-caller': 'error',
		'no-div-regex': 'error',
		'no-else-return': 'error',
		'no-empty-pattern': 'error',
		'no-extend-native': 'error',
		'no-extra-bind': 'error',
		'no-extra-label': 'error',
		'no-floating-decimal': 'error',
		'no-global-assign': 'error',
		'no-implicit-coercion': 'error',
		'no-implicit-globals': 'error',
		'no-invalid-this': 'error',
		'no-iterator': 'error',
		'no-labels': 'error',
		'no-lone-blocks': 'error',
		'no-multi-spaces': 'error',
		'no-multi-str': 'error',
		'no-new-func': 'error',
		'no-new-wrappers': 'error',
		'no-octal': 'error',
		'no-octal-escape': 'error',
		'no-proto': 'error',
		'no-redeclare': 'error',
		'no-return-await': 'error',
		'no-script-url': 'error',
		'no-self-assign': 'error',
		'no-self-compare': 'error',
		'no-sequences': 'error',
		'no-throw-literal': 'error',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-call': 'error',
		'no-useless-concat': 'error',
		'no-useless-escape': 'error',
		'no-useless-return': 'error',
		'no-void': 'error',
		'no-with': 'error',
		'prefer-promise-reject-errors': 'error',
		'require-await': 'error',
		'wrap-iife': ['error', 'inside'],
		yoda: 'error',

		strict: ['error', 'never'],

		'no-catch-shadow': 'error',
		'no-shadow': ['error', { builtinGlobals: true }],
		'no-shadow-restricted-names': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-unused-vars': ['error', { args: 'all', argsIgnorePattern: '^_+$' }],
		'no-use-before-define': 'error',

		'callback-return': 'error',
		'global-require': 'error',
		'handle-callback-err': 'error',
		'no-buffer-constructor': 'error',
		'no-new-require': 'error',

		'array-bracket-newline': ['error', { multiline: true }],
		'array-bracket-spacing': 'error',
		'block-spacing': 'error',
		'brace-style': ['error', '1tbs'],
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': ['error', 'last'],
		'computed-property-spacing': 'error',
		'eol-last': ['error', 'never'],
		'func-call-spacing': 'error',
		'func-style': ['error', 'declaration', { allowArrowFunctions: true }],
		indent: ['error', 'tab'],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		// 'linebreak-style': 'error',
		'lines-between-class-members': 'error',
		'no-lonely-if': 'error',
		'no-mixed-spaces-and-tabs': 'error',
		'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0 }],
		'no-negated-condition': 'error',
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-newline': 'error',
		'object-curly-spacing': ['error', 'always'],
		'one-var': ['error', 'never'],
		'operator-assignment': 'error',
		'operator-linebreak': 'error',
		'padded-blocks': ['error', 'never'],
		'padding-line-between-statements': [
			'error',
			{
				blankLine: 'always',
				prev: '*',
				next: 'return',
			},
		],
		'quote-props': ['error', 'as-needed'],
		quotes: ['error', 'single'],
		semi: 'error',
		'semi-spacing': 'error',
		'semi-style': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'never',
				named: 'never',
				asyncArrow: 'always'
			},
		],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		'switch-colon-spacing': 'error',
		'template-tag-spacing': 'error',

		'arrow-body-style': ['error', 'as-needed'],
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': 'error',
		'constructor-super': 'error',
		'generator-star-spacing': ['error', 'after'],
		'no-class-assign': 'error',
		'no-const-assign': 'error',
		'no-dupe-class-members': 'error',
		'no-duplicate-imports': 'error',
		'no-new-symbol': 'error',
		'no-this-before-super': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-constructor': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-shorthand': 'error',
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-numeric-literals': 'error',
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'require-yield': 'error',
		'rest-spread-spacing': 'error',
		'symbol-description': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': ['error', 'after'],
	},
};