<template>
  <li v-if="message.name != 'send_message'" class="list-group-item list-group-item-light">
    <b>TOOL:</b>
    <br />{{ message.created_at }}
    <br />

    <div v-if="message.name == 'archival_memory_insert'">
      {{ message.name }} : {{ message.text }}
    </div>
    <div v-else>
      {{ message }}
    </div>
  </li>
</template>

<script>
export default {
  name: "ToolMessage",
  props: ["message"],
};
</script>

<style scoped></style>
