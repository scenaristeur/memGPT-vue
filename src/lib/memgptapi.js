import axios from 'axios'
import OpenAPIClientAxios from 'openapi-client-axios'

export class MemGPTAPI {
  constructor(options) {
    this.options = options

    this.headers = {
      accept: 'application/json',
      //   'Authorization': `Bearer ilovellms`,
      'Content-Type': 'application/json'
    }
    this.init()
    //this.connect()
    //this.admin_create_user()
    //this.admin_get_all_users()
  }

  log() {
    //   console.log(this.name)
    //   console.log(
    //     '#####todos doing done#####',
    //     Array.from(todos.keys()).length,
    //     Array.from(prepared.keys()).length,
    //     Array.from(doing.keys()).length,
    //     Array.from(done.keys()).length
    //   )
  }

  init() {
    console.log('init')

    const api = new OpenAPIClientAxios({ definition: 'http://localhost:8283/openapi.json' })
    api.init()
    console.log(api)

    async function createPet() {
      const client = await api.getClient()
      console.log('client', client)
      const res = await client.createPet(null, { name: 'Garfield' })
      console.log('Pet created', res.data)
    }
    createPet()
  }

  connect() {
    console.log('connect', this.options)
  }

  // AUTH

  auth_authenticate_user() {
    console.log('auth.authenticateUser')
  }

  // ADMIN
  async admin_get_all_users() {
    // get all users
    const path = '/admin/users'
    this.headers.Authorization = `Bearer ${this.options.password}`
    const api = this
    await axios
      .get(this.options.url + path, { headers: this.headers })
      .then(function (response) {
        // en cas de réussite de la requête
        console.log(response)
        api.users = response.data.user_list

        console.log(api.users)
        return api.users
      })
      .catch(function (error) {
        // en cas d’échec de la requête
        console.log(error)
      })
      .finally(function () {
        // dans tous les cas
      })

    console.log('admin.getUsers')
  }
  async admin_create_user() {
    console.log('admin.createUser')
    this.headers.Authorization = `Bearer ${this.options.password}`
    const path = '/admin/users'
    console.log(this.headers)
    const data = {}
    // axios
    //   .request({
    //     headers: {
    //       Authorization: `Bearer ${this.options.password}`
    //     },
    //     method: 'POST',
    //     url: this.options.url + path
    //   })
    await axios
      .post(this.options.url + path, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${this.options.password}`
        }
      })
      .then((response) => {
        console.log(response.data)
      })

    // axios
    //   .post(this.options.url + path, data, {
    //     accept: 'application/json',
    //     Authorization: `Bearer ilovellms`,
    //     'Content-Type': 'application/json'
    //   })
    //   .then(function (response) {
    //     // en cas de réussite de la requête
    //     console.log(response)
    //   })
    //   .catch(function (error) {
    //     // en cas d’échec de la requête
    //     console.log(error)
    //   })
    //   .finally(function () {
    //     // dans tous les cas
    //   })
  }
  admin_delete_user() {
    console.log('admin.deleteUser')
  }
  admin_create_new_api_key() {
    console.log('admin.create_new_api_key')
  }
  admin_get_api_keys() {
    console.log('admin.get_api_keys')
  }
  admin_delete_api_key() {
    console.log('admin.delete_api_key')
  }
}

// TOOLS
