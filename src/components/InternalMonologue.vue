<template>
  <li class="list-group-item list-group-item-light">
    <!-- <b>Internal Monologue:</b> -->
    <!-- <br />{{ message.date }}
    <br /> -->

    <div class="alert alert-light" role="alert">
      {{ message.internal_monologue }}
    </div>
  </li>
</template>

<script>
export default {
  name: "InternalMonologue",
  props: ["message"],
};
</script>

<style scoped></style>
