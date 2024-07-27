import OpenAPIClientAxios from 'openapi-client-axios'

export class MemgptApi {
  constructor(options) {
    this.options = options

    this.headers = {
      accept: 'application/json',
      //   'Authorization': `Bearer ilovellms`,
      'Content-Type': 'application/json'
    }
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
