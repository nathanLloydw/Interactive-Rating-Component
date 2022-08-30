module.exports = {
  content: [
      './index.html',
      './public/**/*.html',
      './src/**/*.js',
      './src/**/*.css',
  ],
  theme: {
    extend: {
        fontFamily:{
            'overpass':['Overpass']
        },
        colors:
        {
            'orange':'hsl(25, 97%, 53%)',
            'light-gray':'hsl(217, 12%, 63%)',
            'medium-gray':'hsl(216, 12%, 54%)',
            'dark-blue':'hsl(213, 19%, 18%)',
            'darker-blue':'hsl(216 28% 11%)',
            'v-dark-blue':'hsl(216, 12%, 8%)'
        }
    },
  },
  plugins: [],
}
