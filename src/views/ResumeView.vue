<template>
  <div>
    <div v-if="human">human : {{ human.name }}</div>
    <div v-if="persona">persona : {{ persona.name }}</div>
    <div v-if="agent">agent : {{ agent.name }}</div>

    <ChatView v-if="agent" :agent="agent" />
  </div>
</template>

<script>
import ChatView from "./ChatView.vue";

export default {
  name: "ResumeView",
  components: {
    ChatView,
  },
  computed: {
    human() {
      return this.$store.state.core.human;
    },
    persona() {
      return this.$store.state.core.persona;
    },
    agent() {
      return this.$store.state.core.agent;
    },
  },
};
</script>

<style scoped></style>
