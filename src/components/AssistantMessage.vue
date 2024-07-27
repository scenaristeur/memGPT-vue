<template>
  <li class="list-group-item list-group-item-dark">
    <b>Assistant: </b>
    <br />
    <div v-if="message.text" style="inline">
      Pensée:
      <div class="alert alert-light" role="alert">
        {{ message.text }}
      </div>
    </div>

    <div v-for="tc in message.tool_calls" :key="tc.id">
      <div
        v-if="tc.tool_call_type == 'function' && tc.function.name == 'send_message'"
        class="alert alert-info"
        role="alert"
      >
        {{ JSON.parse(tc.function.arguments).message }}
      </div>
      <div v-else>
        {{ tc }}
      </div>
    </div>

    <!-- <br />
    {{ message }}

    <br /> -->
    <small> {{ message.created_at }}</small>
  </li>
</template>

<script>
export default {
  name: "AssistantMessage",
  props: ["message"],
};
</script>

<style scoped></style>
