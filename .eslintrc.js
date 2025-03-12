module.exports = {
    "env": {
        "es6":true,
		"browser": true,
		"node": true,
        "amd": true
    },
    "parserOptions": {
        "ecmaVersion": 8
    },
    "extends": "eslint:recommended",
    "rules": {
 	    "no-console": 0,
		"no-empty": [1, { "allowEmptyCatch": true }],
        "indent": [
            "off",
            "tab"
        ],
        "linebreak-style": [
            "off",
            "windows"
        ],
        "quotes": [
            "off",
            "double"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-redeclare": 0
    }
};
// npm install eslint@4.x babel-eslint@8 --save-dev
