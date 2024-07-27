<template>
  <div>
    <b>{{ persona.name }}</b
    >: {{ persona.text }}<br />
    <small>{{ persona.user_id }}</small>
    <button class="btn btn-danger" @click="deletePersona()">delete persona</button>
  </div>
</template>

<script>
export default {
  name: "PersonaView",
  props: ["persona"],
  methods: {
    deletePersona() {
      const remove = confirm(`Are you sure you want to delete ${this.persona.name}?`);
      if (remove) {
        this.$store.dispatch("core/deletePersona", this.persona);
      }
    },
  },
};
</script>

<style scoped></style>
