<template>
  <li class="list-group-item list-group-item-primary user">
    <b>User:</b>

    <br />
    {{ display(message) }}
    <!-- <hr />
    {{ message.text.type }}
    {{ JSON.parse(message.text).message }}
    <hr />
    {{ message }} -->
    <br /><small>
      {{ message.created_at }}
    </small>
  </li>
</template>

<script>
export default {
  name: "UserMessage",
  props: ["message"],
  methods: {
    display(message) {
      try {
        let m = JSON.parse(message.text);
        if (m.type == "user_message") {
          return m.message;
        } else if (m.type == "login") {
          return "Last Login:" + m.last_login;
        }
      } catch (e) {
        return message.text;
      }
    },
  },
};
</script>

<style scoped>
.user {
  text-align: right;
}
</style>
