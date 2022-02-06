module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            components: './src/components',
            containers: './src/containers',
            context: './src/context',
            views: './src/views',
            shared: './src/shared',
            styles: './src/styles',
          },
        },
      ],
    ],
  };
};
