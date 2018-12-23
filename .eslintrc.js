module.exports = {
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
            "modules": true,
            "experimentalObjectRestSpread": true
        }
    },
    "plugins": [
        "react"
    ],
    "extends": "airbnb",
    "rules": {
        "arrow-parens": 0,
        "arrow-body-style": 0,
        "comma-dangle": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-filename-extension": 0
    }
};