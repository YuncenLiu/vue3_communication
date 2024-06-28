/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  // 2024-06-28 yun: 开启和关闭 eslint
  "root": false,
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier"
  ],
  "env": {
    "vue/setup-compiler-macros": true,
    "vue/multi-word-component-names": "off"
  }
}
