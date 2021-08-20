const { config } = require('@teclone/rollup-all');
module.exports = config({
  config: {
    srcDir: 'src',

    cjsConfig: {
      outDir: './build',
    },

    esmConfig: {
      enabled: false,
    },
  },
});
