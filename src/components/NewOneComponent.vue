<template>
  <div :style="image">
    <h3>Do you want to see the Bar Menu?</h3>

    <input id="yes" @click="yes" value="Yes" type="button" />
    <input id="no" @click="no" value="No" type="button" />
    <p id="textForNo">{{ text }}</p>
    <div v-for="cocktail in cocktails.drinks" :key="cocktail.idDrink">
      <p id="cocktail">{{ cocktail.strDrink }}</p>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        image: {
          backgroundImage: './bar.webp'
        },
        text: '',
        cocktails: {}
      }
    },
    methods: {
      yes() {
        fetch(
          'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita'
        )
          .then((response) => response.json())
          .then((result) => {
            this.cocktails = result
          })
      },
      no() {
        this.text = 'No so no. Bye bye!'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #cocktail {
    background-color: #bd93d8;
  }
  #textForNo {
    color: crimson;
  }

  p {
    list-style-type: none;
    padding: 0;
  }
</style>
