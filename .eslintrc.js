module.exports = {
    //прочитать
    //https://rage.mp/forums/topic/582-eslint-%D0%B8%D0%BB%D0%B8-%D1%83%D1%87%D0%B8%D0%BC%D1%81%D1%8F-%D0%BF%D0%B8%D1%81%D0%B0%D1%82%D1%8C-%D0%BD%D0%B0-javascript-%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D1%8C%D0%BD%D0%BE/
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2015,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        // Каждое правило принимает тип оповещения о себе (2 или error, 1 или warn, 0 или off(не оповещать)) и непосрественно сами аргументы для правида.
        "no-console": [1] // 1 - предупреждение при выводе в console
    }
};