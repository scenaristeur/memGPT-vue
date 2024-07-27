<template>
  <li v-if="message.function_return != 'None' && message.status != 'success'">
    <b>FunctionReturn:</b>
    <br />{{ message.created_at }}
    <br />

    {{ message }}
  </li>
</template>

<script>
export default {
  name: "FunctionReturn",
  props: ["message"],
};
</script>

<style scoped></style>
