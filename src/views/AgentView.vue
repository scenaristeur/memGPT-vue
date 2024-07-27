<template>
  <div>
    <b>{{ agent.name }}</b
    >: {{ agent.text }}<br />

    human: {{ agent.human }}<br />
    persona: {{ agent.persona }}<br />
    tools: {{ agent.tools.length }}<br />
    sources: {{ agent.sources }}<br />
    <button class="btn btn-danger" @click="deleteAgent()">delete agent</button>
    <!-- {{ config }} -->
  </div>
</template>

<script>
export default {
  name: "AgentView",
  props: ["agent"],
  data() {
    return {
      config: {},
    };
  },
  created() {
    // this.getConfig();
  },
  methods: {
    async getConfig() {
      this.config = await this.$store.dispatch("core/getAgentConfig", this.agent);
    },
    deleteAgent() {
      const remove = confirm(`Are you sure you want to delete ${this.agent.name}?`);
      if (remove) {
        this.$store.dispatch("core/deleteAgent", this.agent);
      }
    },
  },
  // created() {
  //   // props are exposed on `this`
  //   console.log(this.agent);
  // },
};
</script>

<style scoped></style>
