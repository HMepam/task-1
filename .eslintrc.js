module.exports = {
    env: {
        "browser": true,
        "es2021": true,
        "node": true
    },
    parser: '@babel/eslint-parser',
    extends: ["eslint:recommended", "prettier"],
    parserOptions: {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    rules: {
        "semi": ["error", "always"],
        "quotes": ["error", "single"]
    }
}
