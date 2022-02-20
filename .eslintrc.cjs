module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "@phoenix35/eslint-config/node",
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {
        indent: [
            "error",
            // eslint-disable-next-line no-magic-numbers
            4,
        ],
    },
};
