<template>
  <div>
    <h1>AgentsView</h1>
    <div v-if="status == 'connected'">
      <h2>Create Agent</h2>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Agent name</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Agent name"
          aria-label="Agent name"
          v-model="agent.name"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">Agent text</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="Agent text"
          aria-label="Agent text"
          v-model="agent.text"
          aria-describedby="basic-addon1"
        />
      </div>

      <select v-model="agent.human">
        <!-- inline object literal -->
        <option v-for="h in humans" :key="h.id" :value="h">{{ h.name }}</option>
      </select>

      <select v-model="agent.persona">
        <!-- inline object literal -->
        <option v-for="p in personas" :key="p.id" :value="p">
          {{ p.name }}
        </option>
      </select>

      <select v-model="agent.model">
        <!-- inline object literal -->
        <option v-for="m in models" :key="m.model" :value="m">
          {{ m.model }}
        </option>
      </select>

      <button class="btn btn-primary" @click="createAgent()">create Agent</button>
      <button class="btn btn-primary" @click="getAgents()">get Agents</button>

      <div class="list-group" v-if="current_agent == null">
        <button type="button" class="list-group-item list-group-item-action active">
          Cras justo odio
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          v-for="a in agents"
          :key="a.id"
          @click="selectAgent(a)"
        >
          <AgentView :agent="a" />
        </button>
      </div>

      <!-- 
      {{ Agents }} -->
    </div>
  </div>
</template>

<script>
import AgentView from "@/views/AgentView.vue";

export default {
  name: "AgentsView",
  components: {
    AgentView,
  },
  data() {
    return {
      agent: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    getAgents() {
      this.$store.commit("core/setAgent", null);
      this.$store.dispatch("core/getAgents");
    },
    createAgent() {
      console.log(this.agent);
      this.$store.dispatch("core/createAgent", this.agent);
    },
    selectAgent(agent) {
      this.$store.dispatch("core/selectAgent", agent);
    },
    getModels() {
      this.$store.dispatch("core/getModels");
    },
  },
  watch: {
    status() {
      this.getAgents();
      this.getModels();
    },
  },
  computed: {
    status() {
      return this.$store.state.core.status;
    },
    agents() {
      return this.$store.state.core.agents;
    },
    humans() {
      return this.$store.state.core.humans;
    },
    personas() {
      return this.$store.state.core.personas;
    },
    current_agent() {
      return this.$store.state.core.agent;
    },
    models() {
      return this.$store.state.core.models;
    },
  },
};
</script>

<style scoped></style>
