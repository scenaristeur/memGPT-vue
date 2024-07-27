<template>
  <div>
    <h1>PersonasView</h1>
    <div v-if="status == 'connected'">
      <h2>Create Persona</h2>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">persona name</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="persona name"
          aria-label="persona name"
          v-model="persona.name"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">persona text</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="persona text"
          aria-label="perssona text"
          v-model="persona.text"
          aria-describedby="basic-addon1"
        />
      </div>
      <button class="btn btn-primary" @click="createPersona()">create persona</button>
      <button class="btn btn-primary" @click="getPersonas()">get personas</button>

      <div class="list-group" v-if="current_persona == null">
        <button type="button" class="list-group-item list-group-item-action active">
          Cras justo odio
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          v-for="p in personas"
          :key="p.id"
          @click="selectPersona(p)"
        >
          <PersonaView :persona="p" />
        </button>
      </div>

      <!-- {{ personas }} -->
    </div>
  </div>
</template>

<script>
import PersonaView from "@/views/PersonaView.vue";

export default {
  name: "PersonasView",
  components: {
    PersonaView,
  },

  data() {
    return {
      persona: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    getPersonas() {
      this.$store.commit("core/setPersona", null);
      this.$store.dispatch("core/getPersonas");
    },
    createPersona() {
      this.$store.dispatch("core/createPersona", this.persona);
    },
    selectPersona(persona) {
      this.$store.dispatch("core/selectPersona", persona);
    },
  },
  watch: {
    status() {
      this.getPersonas();
    },
  },
  computed: {
    status() {
      return this.$store.state.core.status;
    },
    personas() {
      return this.$store.state.core.personas;
    },
    current_persona() {
      return this.$store.state.core.persona;
    },
  },
};
</script>

<style scoped></style>
