<template>
  <div>
    Chat shouldScroll {{ shouldScroll }}
    <div id="messages" ref="messages">
      <!-- {{  messages }} -->
      <ul class="list-group small list-group-flush">
        <span v-for="message in messages" :key="message.id">
          <UserMessage v-if="message.role == 'user'" :message="message" />
          <AssistantMessage v-else-if="message.role == 'assistant'" :message="message" />
          <SystemMessage v-else-if="message.role == 'system'" :message="message" />
          <ToolMessage v-else-if="message.role == 'tool'" :message="message" />
          <InternalMonologue
            v-else-if="message.internal_monologue != undefined"
            :message="message"
          />
          <FunctionCall
            v-else-if="message.function_call != undefined"
            :message="message"
          />
          <FunctionReturn
            v-else-if="message.function_return != undefined"
            :message="message"
          />
          <li v-else>
            Dev TODO : <b>{{ message.role }}</b> : {{ message }}
          </li>
          <!-- <li
            v-if="message.role != 'system'"
            :class="
              'list-group-item ' +
              (message.role == 'user'
                ? 'list-group-item-primary user'
                : 'list-group-item-dark assistant')
            "
          >
            <b>{{ message.role }} : </b> {{ message.text }}<br />
            {{ message.created }}
            <hr />
            {{ message }}
            {{ message.content }}
            <VueMarkdown :source="message.content" />
             <br>{{ message.id }} 
            <span v-if="message.partial"> ⌛</span>
          </li> -->
        </span>
      </ul>
    </div>

    <!-- <ul>
      <li v-for="message in messages" :key="message">
        <div v-if="message.role != 'system'">
          {{ message.role }} : {{ message.text }}
          <hr />
          {{ message.created }}
        </div>
      </li>
    </ul> -->

    <div class="input-group mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="your message"
        aria-label="your message"
        aria-describedby="basic-addon2"
        v-model="message"
        @keyup.enter="sendMessage()"
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
import UserMessage from "@/components/UserMessage.vue";
import AssistantMessage from "@/components/AssistantMessage.vue";
import SystemMessage from "@/components/SystemMessage.vue";
import ToolMessage from "@/components/ToolMessage.vue";
import InternalMonologue from "@/components/InternalMonologue.vue";
import FunctionCall from "@/components/FunctionCall.vue";
import FunctionReturn from "@/components/FunctionReturn.vue";

// import VueMarkdown from "vue-markdown-render";
export default {
  name: "ChatView",
  //   components: { VueMarkdown },
  components: {
    UserMessage,
    AssistantMessage,
    SystemMessage,
    ToolMessage,
    InternalMonologue,
    FunctionCall,
    FunctionReturn,
  },
  props: ["agent"],
  data() {
    return {
      message: "",
      shouldScroll: true,
      start: 0, // start
      count: 1000, // number of messages to get
    };
  },
  created() {
    this.init();
  },
  methods: {
    async sendMessage() {
      let status = await this.$store.dispatch("core/sendMessage", this.message);
      console.log("send status", status);
      this.message = "";
      this.shouldScroll = true;
    },
    async init() {
      let params = {
        start: this.start,
        count: this.count,
        agent_id: this.agent.id,
      };
      console.log("voir count vec le cursor ?", params);
      this.memory = await this.$store.dispatch("core/getAgentMemory", params);
      this.memory_cursor = await this.$store.dispatch(
        "core/getAgentMemoryCursor",
        this.agent.id
      );
      //   this.messages =
      await this.$store.dispatch("core/getAgentMessages", params);
      console.log("memory", this.memory);
      console.log("memory_cursor", this.memory_cursor);
    },
  },
  watch: {
    async agent() {
      this.init();
    },
    messages() {
      //this.messages.reverse();
      // this.shouldScroll = this.$refs.messages.scrollTop + this.$refs.messages.clientHeight === this.$refs.messages.scrollHeight;
      console.log("top", this.$refs.messages.scrollTop);
      console.log(
        "height",
        this.$refs.messages.scrollHeight,
        "offset",
        this.$refs.messages.offsetHeight,
        "subs",
        this.$refs.messages.scrollHeight - this.$refs.messages.offsetHeight
      );

      if (
        this.$refs.messages.scrollTop >
        this.$refs.messages.scrollHeight - this.$refs.messages.offsetHeight - 50
      ) {
        this.shouldScroll = true;
      } else {
        this.shouldScroll = false;
      }

      console.log("message changed", this.shouldScroll);
      if (this.shouldScroll) {
        console.log("scroll");
        this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
      }
    },
  },
  computed: {
    messages() {
      return this.$store.state.core.messages;
    },
  },
};
</script>

<style scoped>
#messages {
  height: 700px;
  width: 700px;
  overflow-y: auto;
  border: 2px solid rgb(0, 47, 255);
  padding: 10px;
  border-radius: 20px;
}
</style>
