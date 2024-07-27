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
  agent: null,
  models: []
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
  },
  setPersonas(state, p) {
    state.personas = p
  },
  setPersona(state, p) {
    state.persona = p
  },
  setAgents(state, a) {
    state.agents = a
  },
  setAgent(state, a) {
    state.agent = a
  },
  setModels(state, m) {
    state.models = m
  }
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

  async getModels(context) {
    let resp = await context.state.client.list_models_api_models_get(null, null, {
      headers: context.state.api.headers
    })
    console.log(resp)
    context.commit('setModels', resp.data.models)
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
  },
  async deleteHuman(context, h) {
    console.log(h)
    let resp = await context.state.client.delete_human_api_humans__human_name__delete(
      h.name,
      null,
      {
        headers: context.state.api.headers
      }
    )
    console.log(resp)
    context.dispatch('getHumans')
    context.commit('setHuman', null)
  },

  //PERSONA

  async getPersonas(context) {
    let resp = await context.state.client.list_personas_api_personas_get(null, null, {
      headers: context.state.api.headers
    })
    console.log(resp)
    context.commit('setPersonas', resp.data.personas)
  },

  async selectPersona(context, p) {
    console.log(p)
    let resp = await context.state.client.get_persona_api_personas__persona_name__get(
      p.name,
      null,
      {
        headers: context.state.api.headers
      }
    )
    context.commit('setPersona', resp.data)
  },
  async createPersona(context, p) {
    console.log(p)
    let resp = await context.state.client.create_persona_api_personas_post(null, p, {
      headers: context.state.api.headers
    })
    context.commit('setPersona', resp.data)
  },
  async deletePersona(context, h) {
    console.log(h)
    let resp = await context.state.client.delete_persona_api_personas__persona_name__delete(
      h.name,
      null,
      {
        headers: context.state.api.headers
      }
    )
    console.log(resp)
    context.dispatch('getPersonas')
    context.commit('setPersona', null)
  },

  //AGENT
  async getAgents(context) {
    let resp = await context.state.client.list_agents_api_agents_get(null, null, {
      headers: context.state.api.headers
    })
    console.log(resp)
    context.commit('setAgents', resp.data.agents)
  },

  async selectAgent(context, p) {
    console.log(p)
    // let resp = await context.state.client.get_agent_api_agents__agent_name__get(p.name, null, {
    //   headers: context.state.api.headers
    // })
    context.commit('setAgent', p)
  },
  async createAgent(context, agent) {
    // user_id: "00000000-0000-0000-0000-000000000000"

    let config = {
      config: {
        name: agent.name,
        human_name: agent.human.name,
        human: agent.human.text,
        persona_name: agent.persona.name,
        persona: agent.persona.text,
        model: agent.model.model,
        function_names:
          'append_to_text_file,archival_memory_insert,archival_memory_search,conversation_search,conversation_search_date,core_memory_append,core_memory_replace,html2text,http_request,load_urls,message_chatgpt,pause_heartbeats,read_from_text_file,send_message'
      },
      user_id: '00000000-0000-0000-0000-000000000000'
    }

    let resp = await context.state.client.create_agent_api_agents_post(null, config, {
      headers: context.state.api.headers
    })
    console.log(resp)
    context.commit('setAgent', resp.data)
  },
  async deleteAgent(context, h) {
    console.log(h)
    let resp = await context.state.client.delete_agent_api_agents__agent_name__delete(
      h.name,
      null,
      {
        headers: context.state.api.headers
      }
    )
    console.log(resp)
    context.dispatch('getAgents')
    context.commit('setAgent', null)
  },
  async getAgentConfig(context, a) {
    let resp = await context.state.client.get_agent_config_api_agents__agent_id__config_get(
      a.id,
      null,
      {
        headers: context.state.api.headers
      }
    )
    console.log(resp.data)
    return resp.data
  }

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
