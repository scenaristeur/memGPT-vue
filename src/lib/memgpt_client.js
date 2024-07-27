import OpenAPIClientAxios from 'openapi-client-axios'

export class MemgptApi {
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
  async init() {
    this.headers.Authorization = `Bearer ${this.options.password}`
    const api = new OpenAPIClientAxios({
      definition: this.options.url + '/openapi.json',
      url: this.options.url
    })
    //https://openapistack.co/docs/openapi-client-axios/api/#withserverserver
    api.withServer({ url: this.options.url, description: 'Choosen Server' })
    this.client = await api.init()
  }

  async getClient() {
    return this.client
  }
}
