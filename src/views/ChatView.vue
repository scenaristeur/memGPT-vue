<template>
  <div>
    Chat

    <ul>
      <li v-for="message in messages" :key="message">
        <div v-if="message.role != 'system'">
          {{ message.role }} : {{ message.text }}
          <hr />
          {{ message.created }}
        </div>
      </li>
    </ul>

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="Recipient's username"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        v-model="message"
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" @click="sendMessage()">
          >
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChatView",
  props: ["agent"],
  data() {
    return {
      messages: ["j"],
      start: 0, // start
      count: 10, // number of messages to get
    };
  },
  created() {
    this.init();
  },
  methods: {
    async sendMessage() {
      let status = await this.$store.dispatch("core/sendMessage", this.message);
      console.log("send status", status);
    },
    async init() {
      let params = {
        start: this.start,
        count: this.count,
        agent_id: this.agent.id,
      };
      console.log(params);
      this.memory = await this.$store.dispatch("core/getAgentMemory", params);
      this.memory_cursor = await this.$store.dispatch(
        "core/getAgentMemoryCursor",
        this.agent.id
      );
      this.messages = await this.$store.dispatch("core/getAgentMessages", params);
      console.log("memory", this.memory);
      console.log("memory_cursor", this.memory_cursor);
      console.log("messages", this.messages.reverse());
    },
  },
  watch: {
    async agent() {
      this.init();
    },
  },
};
</script>

<style scoped></style>
