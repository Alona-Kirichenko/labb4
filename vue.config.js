module.exports = {
  pwa: {
    manifestOptions: {
      background_color: '#9799CA'
    },
    name: 'NEW APP',
    themeColor: '#B47AEA',
    workboxOptions: {
      runtimeCaching: [
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern: 'https://cat-fact.herokuapp.com/facts'
        },
        {
          handler: 'NetworkFirst',
          options: {
            networkTimeoutSeconds: 5
          },
          urlPattern:
            'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
        }
      ]
    }
  }
}
