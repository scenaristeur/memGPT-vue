<template>
  <li class="list-group-item list-group-item-dark">
    <b>AI:</b>

    <br />

    {{ display(message) }}
    <br />
    <small>{{ message.date }}</small>
    <!-- {{ message }} -->
    <br />
  </li>
</template>

<script>
export default {
  name: "FunctionCall",
  props: ["message"],
  methods: {
    display(message) {
      if (message.function_call.name == "send_message") {
        return JSON.parse(message.function_call.arguments).message;
      } else {
        return message;
      }
    },
  },
};
</script>

<style scoped></style>
