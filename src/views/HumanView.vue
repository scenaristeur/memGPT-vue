<template>
  <div>
    <b>{{ human.name }}</b
    >: {{ human.text }}<br />
    <small>{{ human.user_id }}</small>
    <button class="btn btn-danger" @click="deleteHuman()">create human</button>
  </div>
</template>

<script>
export default {
  name: "HumanView",
  props: ["human"],
  methods: {
    deleteHuman() {
      const remove = confirm(`Are you sure you want to delete ${this.human.name}?`);
      if (remove) {
        this.$store.dispatch("core/deleteHuman", this.human);
      }
    },
  },
  // created() {
  //   // props are exposed on `this`
  //   console.log(this.human);
  // },
};
</script>

<style scoped></style>
