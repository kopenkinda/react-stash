/**
 * @type {import("eslint").Linter.Config}
 */
module.exports = {
	parser: "@typescript-eslint/parser",
	parserOptions: {
		project: "./tsconfig.json",
	},
	plugins: ["@typescript-eslint"],
	extends: ["plugin:@typescript-eslint/recommended", "prettier"],
	rules: {
		semi: "error",
		"prefer-const": "error",
		"@typescript-eslint/consistent-type-imports": [
			"error",
			{
				prefer: "type-imports",
				fixStyle: "separate-type-imports",
				disallowTypeAnnotations: true,
			},
		],
		"@typescript-eslint/consistent-type-definitions": ["error", "type"],
	},
};
