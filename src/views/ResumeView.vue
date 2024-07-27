<template>
  <div v-if="human">human : {{ human.name }}</div>
</template>

<script>
export default {
  name: "ResumeView",
  computed: {
    human() {
      return this.$store.state.core.human;
    },
  },
};
</script>

<style scoped></style>
