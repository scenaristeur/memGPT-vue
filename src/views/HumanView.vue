<template>
  <div>
    <b>{{ human.name }}</b
    >: {{ human.text }}<br />
    <small>{{ human.user_id }}</small>
  </div>
</template>

<script>
export default {
  name: "HumanView",
  props: ["human"],
  // created() {
  //   // props are exposed on `this`
  //   console.log(this.human);
  // },
};
</script>

<style scoped></style>
