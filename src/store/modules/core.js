// import OpenAPIClientAxios from 'openapi-client-axios'
// import { Client as MemGPTClient } from './openapi_memgpt.d.ts'
import { MemgptApi } from '@/lib/memgpt_client'

const state = () => ({
  api: null,
  client: null,
  status: 'disconnected',
  users: [],
  humans: [],
  human: null,
  personas: [],
  persona: null,
  tools: [],
  data_sources: [],
  agents: [],
  agent: null
})

const mutations = {
  setApi(state, a) {
    state.api = a
  },
  setClient(state, c) {
    state.client = c
  },
  setUsers(state, u) {
    console.log(u)
    state.users = u
  },
  setHumans(state, h) {
    state.humans = h
  },
  setHuman(state, h) {
    state.human = h
  }
  //   setResponse(state, r) {
  //     state.response = r
  //     console.log(state.response)
  //   },
}

const actions = {
  async createApiClient(context, options) {
    console.log(options)
    const api = new MemgptApi(options)
    await api.init()
    context.commit('setApi', api)
    const client = await api.getClient()
    console.log(client)
    context.commit('setClient', client)
    context.state.status = 'connected'
  },

  // ADMIN
  async admin_get_all_users(context) {
    let resp = await context.state.client.get_all_users_admin_users_get(null, null, {
      headers: context.state.api.headers
    })
    context.commit('setUsers', resp.data.user_list)
  },

  // HUMAN

  async getHumans(context) {
    let resp = await context.state.client.list_humans_api_humans_get(null, null, {
      headers: context.state.api.headers
    })
    console.log(resp)
    context.commit('setHumans', resp.data.humans)
  },

  async selectHuman(context, h) {
    console.log(h)
    let resp = await context.state.client.get_human_api_humans__human_name__get(h.name, null, {
      headers: context.state.api.headers
    })
    context.commit('setHuman', resp.data)
  },
  async createHuman(context, h) {
    console.log(h)
    let resp = await context.state.client.create_human_api_humans_post(null, h, {
      headers: context.state.api.headers
    })
    context.commit('setHuman', resp.data)
  }

  //PERSONA

  //AGENT

  // vuexAction(context, data) {
  //   console.log(data)
  // },
  // connect(context, options) {
  //   console.log(options)
  //   context.state.api = new MemGPTAPI(options)
  //   console.log(context.state.api)
  //   context.state.status = 'connected'
  // },
  // admin_create_user(context) {
  //   context.state.api.admin_create_user()
  // },
  // async admin_get_all_users(context) {
  //   let users = await context.state.api.admin_get_all_users()
  //   console.log('users', users)
  //   return users
  // }
  //   async embedGraph(context, input) {
  //     //let documents = [input]
  //     let uid = context.state.uid
  //     if (uid == undefined) {
  //       uid = uuidv4()
  //       context.commit('setUid', uid)
  //     }

  //     let query = {
  //       rid: uuidv4(),
  //       uid: uid,
  //       documents: input
  //     }

  //     await axios
  //       .post(context.state.server_url+"/embedAndSim", {
  //         query
  //       })
  //       .then((response) => {
  //         console.log('response', response)
  //         context.commit('setResponse', response.data)
  //         // this.messages.push({
  //         //   role: 'assistant',
  //         //   content: response.data, // Access the 'data' property of the response object
  //         // });
  //         //console.log(this.context.state.allEmbeds)
  //       })
  //   }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
