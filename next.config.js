webpack: (config, options) => {
    config.node = {
      fs: 'empty'
    }
}