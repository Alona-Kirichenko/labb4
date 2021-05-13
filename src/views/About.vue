<template>
  <div>
    <input
      id="writeComent"
      v-model="fact"
      placeholder="Write you comment"
    /><br />
    <b-button id="commentButton" @click="addComment(fact)" variant="primary"
      >Leave a comment!</b-button
    >

    <ul v-if="facts">
      <li v-for="(item, index) in facts" :key="index">
        <dt>{{ item.text }}</dt>
      </li>
    </ul>
    <p v-else>Laddar..</p>

    <li v-for="(item, index) in comments" :key="index">
      <dt id="comments">{{ item }}</dt>
    </li>
  </div>
</template>
<script>
  export default {
    created() {
      fetch('https://cat-fact.herokuapp.com/facts')
        .then((response) => response.json())
        .then((result) => {
          this.facts = result
        })
    },
    data() {
      return {
        fact: '',
        facts: [],
        comments: []
      }
    },
    methods: {
      addComment(fact) {
        this.comments.push(fact)
      }
    }
  }
</script>
<style scoped>
  #writeComent {
    margin: 10px;
  }

  dt {
    color: black;
    background-color: blueviolet;
  }
  #comments {
    color: crimson;
  }
</style>
