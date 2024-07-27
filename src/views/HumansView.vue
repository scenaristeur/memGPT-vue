<template>
  <div>
    <h1>HumansView</h1>
    <div v-if="status == 'connected'">
      <h2>Create Human</h2>

      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">human name</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="human name"
          aria-label="human name"
          v-model="human.name"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="input-group mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="basic-addon1">human text</span>
        </div>
        <input
          type="text"
          class="form-control"
          placeholder="human text"
          aria-label="human text"
          v-model="human.text"
          aria-describedby="basic-addon1"
        />
      </div>
      <button class="btn btn-primary" @click="createHuman()">create human</button>
      <button class="btn btn-primary" @click="getHumans()">get humans</button>

      <div class="list-group" v-if="current_human == null">
        <button type="button" class="list-group-item list-group-item-action active">
          Cras justo odio
        </button>
        <button
          type="button"
          class="list-group-item list-group-item-action"
          v-for="h in humans"
          :key="h.id"
          @click="selectHuman(h)"
        >
          <HumanView :human="h" />
        </button>
      </div>

      <!-- 
      {{ humans }} -->
    </div>
  </div>
</template>

<script>
import HumanView from "@/views/HumanView.vue";

export default {
  name: "HumansView",
  components: {
    HumanView,
  },
  data() {
    return {
      human: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    getHumans() {
      this.$store.commit("core/setHuman", null);
      this.$store.dispatch("core/getHumans");
    },
    createHuman() {
      this.$store.dispatch("core/createHuman", this.human);
    },
    selectHuman(human) {
      this.$store.dispatch("core/selectHuman", human);
    },
  },
  watch: {
    status() {
      this.getHumans();
    },
  },
  computed: {
    status() {
      return this.$store.state.core.status;
    },
    humans() {
      return this.$store.state.core.humans;
    },
    current_human() {
      return this.$store.state.core.human;
    },
  },
};
</script>

<style scoped></style>
