<template>
  <div>
    <h1>Admin View</h1>
    {{ status }}
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">memgpt endpoint</span>
      </div>
      <input
        type="text"
        class="form-control"
        placeholder="memgpt endpoint"
        aria-label="memgpt endpoint"
        v-model="options.url"
        aria-describedby="basic-addon1"
      />
    </div>

    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="basic-addon1">password</span>
      </div>
      <input
        type="password"
        class="form-control"
        placeholder="password"
        aria-label="password"
        v-model="options.password"
        aria-describedby="basic-addon2"
      />
    </div>

    <button class="btn btn-primary" @click="connect()">Connect</button>
    <button
      class="btn btn-primary"
      @click="createUser()"
      :disabled="status != 'connected'"
    >
      create user
    </button>
    <button class="btn btn-primary" @click="getUsers()" :disabled="status != 'connected'">
      get users
    </button>

    <ul>
      <li v-for="user in users" :key="user.id">{{ user.id }} {{ user }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data() {
    return {
      options: {
        url: "http://localhost:8283",
        password: "ilovellms",
      },
    };
  },
  methods: {
    connect() {
      console.log("createApiClient", this.options);
      this.$store.dispatch("core/createApiClient", this.options);
    },
    createUser() {
      this.$store.dispatch("core/admin_create_user");
    },
    getUsers() {
      this.$store.dispatch("core/admin_get_all_users");
    },
  },
  computed: {
    status() {
      return this.$store.state.core.status;
    },
    users() {
      return this.$store.state.core.users;
    },
  },
};
</script>

<style scoped></style>
