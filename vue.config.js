const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  /* css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "@/styles/main.scss";
        `,
      },
    },
  }, */
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
});
