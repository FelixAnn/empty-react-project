module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint", // 使用eslint-config-prettier禁用@typescript-eslint/eslint插件中与prettier冲突的eslint规则
        "plugin:prettier/recommended" // 启用eslint-plugin-prettier和eslint-config-prettier。这将把prettier的错误显示为ESLint错误。确保这始终是extends阵列中的最后一个配置。
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
    }
};
