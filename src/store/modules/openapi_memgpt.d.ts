import type {
  OpenAPIClient,
  Parameters,
  UnknownParamsObject,
  OperationResponse,
  AxiosRequestConfig,
} from 'openapi-client-axios';

declare namespace Components {
    namespace Schemas {
        /**
         * AgentRenameRequest
         */
        export interface AgentRenameRequest {
            /**
             * Agent Name
             * New name for the agent.
             */
            agent_name: string;
        }
        /**
         * AgentStateModel
         */
        export interface AgentStateModel {
            /**
             * Id
             * The unique identifier of the agent.
             */
            id: string; // uuid
            /**
             * Name
             * The name of the agent.
             */
            name: string;
            /**
             * Description
             * The description of the agent.
             */
            description?: /**
             * Description
             * The description of the agent.
             */
            string | null;
            /**
             * User Id
             * The unique identifier of the user associated with the agent.
             */
            user_id: string; // uuid
            /**
             * Created At
             * The unix timestamp of when the agent was created.
             */
            created_at: number;
            /**
             * Tools
             * The tools used by the agent.
             */
            tools: string[];
            /**
             * System
             * The system prompt used by the agent.
             */
            system: string;
            /**
             * LLMConfigModel
             * The LLM configuration used by the agent.
             */
            llm_config: {
                /**
                 * Model
                 */
                model?: /* Model */ string | null;
                /**
                 * Model Endpoint Type
                 */
                model_endpoint_type?: /* Model Endpoint Type */ string | null;
                /**
                 * Model Endpoint
                 */
                model_endpoint?: /* Model Endpoint */ string | null;
                /**
                 * Model Wrapper
                 */
                model_wrapper?: /* Model Wrapper */ string | null;
                /**
                 * Context Window
                 */
                context_window?: /* Context Window */ number | null;
            };
            /**
             * EmbeddingConfigModel
             * The embedding configuration used by the agent.
             */
            embedding_config: {
                /**
                 * Embedding Endpoint Type
                 */
                embedding_endpoint_type?: /* Embedding Endpoint Type */ string | null;
                /**
                 * Embedding Endpoint
                 */
                embedding_endpoint?: /* Embedding Endpoint */ string | null;
                /**
                 * Embedding Model
                 */
                embedding_model?: /* Embedding Model */ string | null;
                /**
                 * Embedding Dim
                 */
                embedding_dim?: /* Embedding Dim */ number | null;
                /**
                 * Embedding Chunk Size
                 */
                embedding_chunk_size?: /* Embedding Chunk Size */ number | null;
            };
            /**
             * State
             * The state of the agent.
             */
            state?: /**
             * State
             * The state of the agent.
             */
            {
                [key: string]: any;
            } | null;
            /**
             * Metadata
             * The metadata of the agent.
             */
            metadata?: /**
             * Metadata
             * The metadata of the agent.
             */
            {
                [key: string]: any;
            } | null;
        }
        /**
         * ArchivalMemoryObject
         */
        export interface ArchivalMemoryObject {
            /**
             * Id
             * Unique identifier for the memory object inside the archival memory store.
             */
            id: string; // uuid
            /**
             * Contents
             * The memory contents.
             */
            contents: string;
        }
        /**
         * AssistantFile
         */
        export interface AssistantFile {
            /**
             * Id
             * The unique identifier of the file.
             */
            id: string;
            /**
             * Object
             */
            object?: string;
            /**
             * Created At
             * The unix timestamp of when the file was created.
             */
            created_at: number;
            /**
             * Assistant Id
             * The unique identifier of the assistant.
             */
            assistant_id: string;
        }
        /**
         * AssistantMessage
         */
        export interface AssistantMessage {
            /**
             * Content
             */
            content?: /* Content */ string | null;
            /**
             * Role
             */
            role?: string;
            /**
             * Name
             */
            name?: /* Name */ string | null;
            /**
             * Tool Calls
             */
            tool_calls?: /* Tool Calls */ /* ToolCall */ MemgptModelsChatCompletionRequestToolCall[] | null;
        }
        /**
         * AuthRequest
         */
        export interface AuthRequest {
            /**
             * Password
             * Admin password provided when starting the MemGPT server
             */
            password?: string;
        }
        /**
         * AuthResponse
         */
        export interface AuthResponse {
            /**
             * Uuid
             * UUID of the user
             */
            uuid: string; // uuid
        }
        /**
         * Body_upload_file_to_source_api_sources__source_id__upload_post
         */
        export interface BodyUploadFileToSourceApiSourcesSourceIdUploadPost {
            /**
             * File
             */
            file: string; // binary
        }
        /**
         * ChatCompletionRequest
         * https://platform.openai.com/docs/api-reference/chat/create
         */
        export interface ChatCompletionRequest {
            /**
             * Model
             */
            model: string;
            /**
             * Messages
             */
            messages: (/* SystemMessage */ SystemMessage | /* UserMessage */ UserMessage | /* AssistantMessage */ AssistantMessage | /* ToolMessage */ ToolMessage)[];
            /**
             * Frequency Penalty
             */
            frequency_penalty?: /* Frequency Penalty */ number | null;
            /**
             * Logit Bias
             */
            logit_bias?: /* Logit Bias */ {
                [name: string]: number;
            } | null;
            /**
             * Logprobs
             */
            logprobs?: /* Logprobs */ boolean | null;
            /**
             * Top Logprobs
             */
            top_logprobs?: /* Top Logprobs */ number | null;
            /**
             * Max Tokens
             */
            max_tokens?: /* Max Tokens */ number | null;
            /**
             * N
             */
            n?: /* N */ number | null;
            /**
             * Presence Penalty
             */
            presence_penalty?: /* Presence Penalty */ number | null;
            response_format?: /* ResponseFormat */ ResponseFormat | null;
            /**
             * Seed
             */
            seed?: /* Seed */ number | null;
            /**
             * Stop
             */
            stop?: /* Stop */ string | string[] | null;
            /**
             * Stream
             */
            stream?: /* Stream */ boolean | null;
            /**
             * Temperature
             */
            temperature?: /* Temperature */ number | null;
            /**
             * Top P
             */
            top_p?: /* Top P */ number | null;
            /**
             * User
             */
            user?: /* User */ string | null;
            /**
             * Tools
             */
            tools?: /* Tools */ /* Tool */ Tool[] | null;
            /**
             * Tool Choice
             */
            tool_choice?: /* Tool Choice */ ("none" | "auto") | /* ToolFunctionChoice */ ToolFunctionChoice | null;
            /**
             * Functions
             */
            functions?: /* Functions */ /* FunctionSchema */ FunctionSchema[] | null;
            /**
             * Function Call
             */
            function_call?: /* Function Call */ ("none" | "auto") | /* FunctionCall */ FunctionCallInput | null;
        }
        /**
         * ChatCompletionResponse
         * https://platform.openai.com/docs/api-reference/chat/object
         */
        export interface ChatCompletionResponse {
            /**
             * Id
             */
            id: string;
            /**
             * Choices
             */
            choices: /* Choice */ Choice[];
            /**
             * Created
             */
            created: string; // date-time
            /**
             * Model
             */
            model?: /* Model */ string | null;
            /**
             * System Fingerprint
             */
            system_fingerprint?: /* System Fingerprint */ string | null;
            /**
             * Object
             */
            object?: "chat.completion";
            usage: /* UsageStatistics */ UsageStatistics;
        }
        /**
         * Choice
         */
        export interface Choice {
            /**
             * Finish Reason
             */
            finish_reason: string;
            /**
             * Index
             */
            index: number;
            message: /* Message */ Message;
            /**
             * Logprobs
             */
            logprobs?: /* Logprobs */ {
                [name: string]: /* MessageContentLogProb */ MessageContentLogProb[] | null;
            } | null;
        }
        /**
         * CommandRequest
         */
        export interface CommandRequest {
            /**
             * Command
             * The command to be executed by the agent.
             */
            command: string;
        }
        /**
         * CommandResponse
         */
        export interface CommandResponse {
            /**
             * Response
             * The result of the executed command.
             */
            response: string;
        }
        /**
         * ConfigResponse
         */
        export interface ConfigResponse {
            /**
             * Config
             * The server configuration object.
             */
            config: {
                [key: string]: any;
            };
            /**
             * Defaults
             * The defaults for the configuration.
             */
            defaults: {
                [key: string]: any;
            };
        }
        /**
         * CoreMemory
         */
        export interface CoreMemory {
            /**
             * Human
             * Human element of the core memory.
             */
            human?: /**
             * Human
             * Human element of the core memory.
             */
            string | null;
            /**
             * Persona
             * Persona element of the core memory.
             */
            persona?: /**
             * Persona
             * Persona element of the core memory.
             */
            string | null;
        }
        /**
         * CreateAPIKeyRequest
         */
        export interface CreateAPIKeyRequest {
            /**
             * User Id
             * Identifier of the user (UUID).
             */
            user_id: string; // uuid
            /**
             * Name
             * Name for the API key (optional).
             */
            name?: /**
             * Name
             * Name for the API key (optional).
             */
            string | null;
        }
        /**
         * CreateAPIKeyResponse
         */
        export interface CreateAPIKeyResponse {
            /**
             * Api Key
             * New API key generated.
             */
            api_key: string;
        }
        /**
         * CreateAgentRequest
         */
        export interface CreateAgentRequest {
            /**
             * Config
             * The agent configuration object.
             */
            config: {
                [key: string]: any;
            };
        }
        /**
         * CreateAgentResponse
         */
        export interface CreateAgentResponse {
            /**
             * AgentStateModel
             * The state of the newly created agent.
             */
            agent_state: {
                /**
                 * Id
                 * The unique identifier of the agent.
                 */
                id: string; // uuid
                /**
                 * Name
                 * The name of the agent.
                 */
                name: string;
                /**
                 * Description
                 * The description of the agent.
                 */
                description?: /**
                 * Description
                 * The description of the agent.
                 */
                string | null;
                /**
                 * User Id
                 * The unique identifier of the user associated with the agent.
                 */
                user_id: string; // uuid
                /**
                 * Created At
                 * The unix timestamp of when the agent was created.
                 */
                created_at: number;
                /**
                 * Tools
                 * The tools used by the agent.
                 */
                tools: string[];
                /**
                 * System
                 * The system prompt used by the agent.
                 */
                system: string;
                /**
                 * LLMConfigModel
                 * The LLM configuration used by the agent.
                 */
                llm_config: {
                    /**
                     * Model
                     */
                    model?: /* Model */ string | null;
                    /**
                     * Model Endpoint Type
                     */
                    model_endpoint_type?: /* Model Endpoint Type */ string | null;
                    /**
                     * Model Endpoint
                     */
                    model_endpoint?: /* Model Endpoint */ string | null;
                    /**
                     * Model Wrapper
                     */
                    model_wrapper?: /* Model Wrapper */ string | null;
                    /**
                     * Context Window
                     */
                    context_window?: /* Context Window */ number | null;
                };
                /**
                 * EmbeddingConfigModel
                 * The embedding configuration used by the agent.
                 */
                embedding_config: {
                    /**
                     * Embedding Endpoint Type
                     */
                    embedding_endpoint_type?: /* Embedding Endpoint Type */ string | null;
                    /**
                     * Embedding Endpoint
                     */
                    embedding_endpoint?: /* Embedding Endpoint */ string | null;
                    /**
                     * Embedding Model
                     */
                    embedding_model?: /* Embedding Model */ string | null;
                    /**
                     * Embedding Dim
                     */
                    embedding_dim?: /* Embedding Dim */ number | null;
                    /**
                     * Embedding Chunk Size
                     */
                    embedding_chunk_size?: /* Embedding Chunk Size */ number | null;
                };
                /**
                 * State
                 * The state of the agent.
                 */
                state?: /**
                 * State
                 * The state of the agent.
                 */
                {
                    [key: string]: any;
                } | null;
                /**
                 * Metadata
                 * The metadata of the agent.
                 */
                metadata?: /**
                 * Metadata
                 * The metadata of the agent.
                 */
                {
                    [key: string]: any;
                } | null;
            };
            /**
             * PresetModel
             * The preset that the agent was created from.
             */
            preset: {
                /**
                 * Name
                 * The name of the preset.
                 */
                name: string;
                /**
                 * Id
                 * The unique identifier of the preset.
                 */
                id?: string; // uuid
                /**
                 * User Id
                 * The unique identifier of the user who created the preset.
                 */
                user_id?: /**
                 * User Id
                 * The unique identifier of the user who created the preset.
                 */
                string /* uuid */ | null;
                /**
                 * Description
                 * The description of the preset.
                 */
                description?: /**
                 * Description
                 * The description of the preset.
                 */
                string | null;
                /**
                 * Created At
                 * The unix timestamp of when the preset was created.
                 */
                created_at?: string; // date-time
                /**
                 * System
                 * The system prompt of the preset.
                 */
                system: string;
                /**
                 * System Name
                 * The name of the system prompt of the preset.
                 */
                system_name?: /**
                 * System Name
                 * The name of the system prompt of the preset.
                 */
                string | null;
                /**
                 * Persona
                 * The persona of the preset.
                 */
                persona?: string;
                /**
                 * Persona Name
                 * The name of the persona of the preset.
                 */
                persona_name?: /**
                 * Persona Name
                 * The name of the persona of the preset.
                 */
                string | null;
                /**
                 * Human
                 * The human of the preset.
                 */
                human?: string;
                /**
                 * Human Name
                 * The name of the human of the preset.
                 */
                human_name?: /**
                 * Human Name
                 * The name of the human of the preset.
                 */
                string | null;
                /**
                 * Functions Schema
                 * The functions schema of the preset.
                 */
                functions_schema: {
                    [key: string]: any;
                }[];
            };
        }
        /**
         * CreateAssistantFileRequest
         */
        export interface CreateAssistantFileRequest {
            /**
             * File Id
             * The unique identifier of the file.
             */
            file_id: string;
        }
        /**
         * CreateAssistantRequest
         */
        export interface CreateAssistantRequest {
            /**
             * Model
             * The model to use for the assistant.
             */
            model: string;
            /**
             * Name
             * The name of the assistant.
             */
            name: string;
            /**
             * Description
             * The description of the assistant.
             */
            description?: string;
            /**
             * Instructions
             * The instructions for the assistant.
             */
            instructions: string;
            /**
             * Tools
             * The tools used by the assistant.
             */
            tools?: string[];
            /**
             * File Ids
             * List of file IDs associated with the assistant.
             */
            file_ids?: string[];
            /**
             * Metadata
             * Metadata associated with the assistant.
             */
            metadata?: {
                [key: string]: any;
            };
            /**
             * Embedding Model
             * The model to use for the assistant.
             */
            embedding_model?: string;
        }
        /**
         * CreateHumanRequest
         */
        export interface CreateHumanRequest {
            /**
             * Text
             * The human text.
             */
            text: string;
            /**
             * Name
             * The name of the human.
             */
            name: string;
        }
        /**
         * CreateMessageRequest
         */
        export interface CreateMessageRequest {
            /**
             * Role
             * Role of the message sender (either 'user' or 'system')
             */
            role: string;
            /**
             * Content
             * The message content to be processed by the agent.
             */
            content: string;
            /**
             * File Ids
             * List of file IDs associated with the message.
             */
            file_ids?: /**
             * File Ids
             * List of file IDs associated with the message.
             */
            string[] | null;
            /**
             * Metadata
             * Metadata associated with the message.
             */
            metadata?: /**
             * Metadata
             * Metadata associated with the message.
             */
            {
                [key: string]: any;
            } | null;
        }
        /**
         * CreatePersonaRequest
         */
        export interface CreatePersonaRequest {
            /**
             * Text
             * The persona text.
             */
            text: string;
            /**
             * Name
             * The name of the persona.
             */
            name: string;
        }
        /**
         * CreatePresetResponse
         */
        export interface CreatePresetResponse {
            /**
             * PresetModel
             * The newly created preset.
             */
            preset: {
                /**
                 * Name
                 * The name of the preset.
                 */
                name: string;
                /**
                 * Id
                 * The unique identifier of the preset.
                 */
                id?: string; // uuid
                /**
                 * User Id
                 * The unique identifier of the user who created the preset.
                 */
                user_id?: /**
                 * User Id
                 * The unique identifier of the user who created the preset.
                 */
                string /* uuid */ | null;
                /**
                 * Description
                 * The description of the preset.
                 */
                description?: /**
                 * Description
                 * The description of the preset.
                 */
                string | null;
                /**
                 * Created At
                 * The unix timestamp of when the preset was created.
                 */
                created_at?: string; // date-time
                /**
                 * System
                 * The system prompt of the preset.
                 */
                system: string;
                /**
                 * System Name
                 * The name of the system prompt of the preset.
                 */
                system_name?: /**
                 * System Name
                 * The name of the system prompt of the preset.
                 */
                string | null;
                /**
                 * Persona
                 * The persona of the preset.
                 */
                persona?: string;
                /**
                 * Persona Name
                 * The name of the persona of the preset.
                 */
                persona_name?: /**
                 * Persona Name
                 * The name of the persona of the preset.
                 */
                string | null;
                /**
                 * Human
                 * The human of the preset.
                 */
                human?: string;
                /**
                 * Human Name
                 * The name of the human of the preset.
                 */
                human_name?: /**
                 * Human Name
                 * The name of the human of the preset.
                 */
                string | null;
                /**
                 * Functions Schema
                 * The functions schema of the preset.
                 */
                functions_schema: {
                    [key: string]: any;
                }[];
            };
        }
        /**
         * CreatePresetsRequest
         */
        export interface CreatePresetsRequest {
            /**
             * Name
             * The name of the preset.
             */
            name: string;
            /**
             * Id
             * The unique identifier of the preset.
             */
            id?: /**
             * Id
             * The unique identifier of the preset.
             */
            string | null;
            /**
             * Description
             * The description of the preset.
             */
            description?: /**
             * Description
             * The description of the preset.
             */
            string | null;
            /**
             * System
             * The system prompt of the preset.
             */
            system?: /**
             * System
             * The system prompt of the preset.
             */
            string | null;
            /**
             * Persona
             * The persona of the preset.
             */
            persona?: /**
             * Persona
             * The persona of the preset.
             */
            string | null;
            /**
             * Human
             * The human of the preset.
             */
            human?: /**
             * Human
             * The human of the preset.
             */
            string | null;
            /**
             * Functions Schema
             * The functions schema of the preset.
             */
            functions_schema: {
                [key: string]: any;
            }[];
            /**
             * Persona Name
             * The name of the persona of the preset.
             */
            persona_name?: /**
             * Persona Name
             * The name of the persona of the preset.
             */
            string | null;
            /**
             * Human Name
             * The name of the human of the preset.
             */
            human_name?: /**
             * Human Name
             * The name of the human of the preset.
             */
            string | null;
            /**
             * System Name
             * The name of the system prompt of the preset.
             */
            system_name?: /**
             * System Name
             * The name of the system prompt of the preset.
             */
            string | null;
        }
        /**
         * CreateRunRequest
         */
        export interface CreateRunRequest {
            /**
             * Assistant Id
             * The unique identifier of the assistant.
             */
            assistant_id: string;
            /**
             * Model
             * The model used by the run.
             */
            model?: /**
             * Model
             * The model used by the run.
             */
            string | null;
            /**
             * Instructions
             * The instructions for the run.
             */
            instructions: string;
            /**
             * Additional Instructions
             * Additional instructions for the run.
             */
            additional_instructions?: /**
             * Additional Instructions
             * Additional instructions for the run.
             */
            string | null;
            /**
             * Tools
             * The tools used by the run (overrides assistant).
             */
            tools?: /**
             * Tools
             * The tools used by the run (overrides assistant).
             */
            /* ToolCall */ MemgptModelsOpenaiToolCall[] | null;
            /**
             * Metadata
             * Metadata associated with the run.
             */
            metadata?: /**
             * Metadata
             * Metadata associated with the run.
             */
            {
                [key: string]: any;
            } | null;
        }
        /**
         * CreateSourceRequest
         */
        export interface CreateSourceRequest {
            /**
             * Name
             * The name of the source.
             */
            name: string;
            /**
             * Description
             * The description of the source.
             */
            description?: /**
             * Description
             * The description of the source.
             */
            string | null;
        }
        /**
         * CreateThreadRequest
         */
        export interface CreateThreadRequest {
            /**
             * Messages
             * List of message IDs associated with the thread.
             */
            messages?: /**
             * Messages
             * List of message IDs associated with the thread.
             */
            string[] | null;
            /**
             * Metadata
             * Metadata associated with the thread.
             */
            metadata?: /**
             * Metadata
             * Metadata associated with the thread.
             */
            {
                [key: string]: any;
            } | null;
            /**
             * Assistant Name
             * The name of the assistant (i.e. MemGPT preset)
             */
            assistant_name?: /**
             * Assistant Name
             * The name of the assistant (i.e. MemGPT preset)
             */
            string | null;
        }
        /**
         * CreateThreadRunRequest
         */
        export interface CreateThreadRunRequest {
            /**
             * Assistant Id
             * The unique identifier of the assistant.
             */
            assistant_id: string;
            /**
             * OpenAIThread
             * The thread to run.
             */
            thread: {
                /**
                 * Id
                 * The unique identifier of the thread.
                 */
                id: string;
                /**
                 * Object
                 */
                object?: string;
                /**
                 * Created At
                 * The unix timestamp of when the thread was created.
                 */
                created_at: number;
                /**
                 * Metadata
                 * Metadata associated with the thread.
                 */
                metadata?: {
                    [key: string]: any;
                };
            };
            /**
             * Model
             * The model used by the run.
             */
            model: string;
            /**
             * Instructions
             * The instructions for the run.
             */
            instructions: string;
            /**
             * Tools
             * The tools used by the run (overrides assistant).
             */
            tools?: /**
             * Tools
             * The tools used by the run (overrides assistant).
             */
            /* ToolCall */ MemgptModelsOpenaiToolCall[] | null;
            /**
             * Metadata
             * Metadata associated with the run.
             */
            metadata?: /**
             * Metadata
             * Metadata associated with the run.
             */
            {
                [key: string]: any;
            } | null;
        }
        /**
         * CreateUserRequest
         */
        export interface CreateUserRequest {
            /**
             * User Id
             * Identifier of the user (optional, generated automatically if null).
             */
            user_id?: /**
             * User Id
             * Identifier of the user (optional, generated automatically if null).
             */
            string /* uuid */ | null;
            /**
             * Api Key Name
             * Name for API key autogenerated on user creation (optional).
             */
            api_key_name?: /**
             * Api Key Name
             * Name for API key autogenerated on user creation (optional).
             */
            string | null;
        }
        /**
         * CreateUserResponse
         */
        export interface CreateUserResponse {
            /**
             * User Id
             * Identifier of the user (UUID).
             */
            user_id: string; // uuid
            /**
             * Api Key
             * New API key generated for user.
             */
            api_key: string;
        }
        /**
         * DeleteAPIKeyResponse
         */
        export interface DeleteAPIKeyResponse {
            /**
             * Message
             */
            message: string;
            /**
             * Api Key Deleted
             */
            api_key_deleted: string;
        }
        /**
         * DeleteAssistantFileResponse
         */
        export interface DeleteAssistantFileResponse {
            /**
             * Id
             * The unique identifier of the file.
             */
            id: string;
            /**
             * Object
             */
            object?: string;
            /**
             * Deleted
             * Whether the file was deleted.
             */
            deleted: boolean;
        }
        /**
         * DeleteAssistantResponse
         */
        export interface DeleteAssistantResponse {
            /**
             * Id
             * The unique identifier of the agent.
             */
            id: string;
            /**
             * Object
             */
            object?: string;
            /**
             * Deleted
             * Whether the agent was deleted.
             */
            deleted: boolean;
        }
        /**
         * DeleteThreadResponse
         */
        export interface DeleteThreadResponse {
            /**
             * Id
             * The unique identifier of the agent.
             */
            id: string;
            /**
             * Object
             */
            object?: string;
            /**
             * Deleted
             * Whether the agent was deleted.
             */
            deleted: boolean;
        }
        /**
         * DeleteUserResponse
         */
        export interface DeleteUserResponse {
            /**
             * Message
             */
            message: string;
            /**
             * User Id Deleted
             */
            user_id_deleted: string; // uuid
        }
        /**
         * DocumentModel
         */
        export interface DocumentModel {
            /**
             * User Id
             * The unique identifier of the user associated with the document.
             */
            user_id: string; // uuid
            /**
             * Text
             * The text of the document.
             */
            text: string;
            /**
             * Data Source
             * The data source of the document.
             */
            data_source: string;
            /**
             * Id
             * The unique identifier of the document.
             */
            id?: string; // uuid
            /**
             * Metadata
             * The metadata of the document.
             */
            metadata?: /**
             * Metadata
             * The metadata of the document.
             */
            {
                [key: string]: any;
            } | null;
        }
        /**
         * EmbeddingConfigModel
         */
        export interface EmbeddingConfigModel {
            /**
             * Embedding Endpoint Type
             */
            embedding_endpoint_type?: /* Embedding Endpoint Type */ string | null;
            /**
             * Embedding Endpoint
             */
            embedding_endpoint?: /* Embedding Endpoint */ string | null;
            /**
             * Embedding Model
             */
            embedding_model?: /* Embedding Model */ string | null;
            /**
             * Embedding Dim
             */
            embedding_dim?: /* Embedding Dim */ number | null;
            /**
             * Embedding Chunk Size
             */
            embedding_chunk_size?: /* Embedding Chunk Size */ number | null;
        }
        /**
         * Function
         */
        export interface Function {
            /**
             * Name
             * The name of the function.
             */
            name: string;
            /**
             * Arguments
             * The arguments of the function.
             */
            arguments: string;
        }
        /**
         * FunctionCall
         */
        export interface FunctionCallInput {
            /**
             * Name
             */
            name: string;
        }
        /**
         * FunctionCall
         */
        export interface FunctionCallOutput {
            /**
             * Arguments
             */
            arguments: string;
            /**
             * Name
             */
            name: string;
        }
        /**
         * FunctionSchema
         */
        export interface FunctionSchema {
            /**
             * Name
             */
            name: string;
            /**
             * Description
             */
            description?: /* Description */ string | null;
            /**
             * Parameters
             */
            parameters?: /* Parameters */ {
                [key: string]: any;
            } | null;
        }
        /**
         * GetAPIKeysResponse
         */
        export interface GetAPIKeysResponse {
            /**
             * Api Key List
             * Identifier of the user (UUID).
             */
            api_key_list: string[];
        }
        /**
         * GetAgentArchivalMemoryResponse
         */
        export interface GetAgentArchivalMemoryResponse {
            /**
             * Archival Memory
             * A list of all memory objects in archival memory.
             */
            archival_memory: /* ArchivalMemoryObject */ ArchivalMemoryObject[];
        }
        /**
         * GetAgentMemoryResponse
         */
        export interface GetAgentMemoryResponse {
            /**
             * CoreMemory
             * The state of the agent's core memory.
             */
            core_memory: {
                /**
                 * Human
                 * Human element of the core memory.
                 */
                human?: /**
                 * Human
                 * Human element of the core memory.
                 */
                string | null;
                /**
                 * Persona
                 * Persona element of the core memory.
                 */
                persona?: /**
                 * Persona
                 * Persona element of the core memory.
                 */
                string | null;
            };
            /**
             * Recall Memory
             * Size of the agent's recall memory.
             */
            recall_memory: number;
            /**
             * Archival Memory
             * Size of the agent's archival memory.
             */
            archival_memory: number;
        }
        /**
         * GetAgentMessagesResponse
         */
        export interface GetAgentMessagesResponse {
            /**
             * Messages
             * List of message objects.
             */
            messages: any[];
        }
        /**
         * GetAgentResponse
         */
        export interface GetAgentResponse {
            /**
             * AgentStateModel
             * The state of the agent.
             */
            agent_state: {
                /**
                 * Id
                 * The unique identifier of the agent.
                 */
                id: string; // uuid
                /**
                 * Name
                 * The name of the agent.
                 */
                name: string;
                /**
                 * Description
                 * The description of the agent.
                 */
                description?: /**
                 * Description
                 * The description of the agent.
                 */
                string | null;
                /**
                 * User Id
                 * The unique identifier of the user associated with the agent.
                 */
                user_id: string; // uuid
                /**
                 * Created At
                 * The unix timestamp of when the agent was created.
                 */
                created_at: number;
                /**
                 * Tools
                 * The tools used by the agent.
                 */
                tools: string[];
                /**
                 * System
                 * The system prompt used by the agent.
                 */
                system: string;
                /**
                 * LLMConfigModel
                 * The LLM configuration used by the agent.
                 */
                llm_config: {
                    /**
                     * Model
                     */
                    model?: /* Model */ string | null;
                    /**
                     * Model Endpoint Type
                     */
                    model_endpoint_type?: /* Model Endpoint Type */ string | null;
                    /**
                     * Model Endpoint
                     */
                    model_endpoint?: /* Model Endpoint */ string | null;
                    /**
                     * Model Wrapper
                     */
                    model_wrapper?: /* Model Wrapper */ string | null;
                    /**
                     * Context Window
                     */
                    context_window?: /* Context Window */ number | null;
                };
                /**
                 * EmbeddingConfigModel
                 * The embedding configuration used by the agent.
                 */
                embedding_config: {
                    /**
                     * Embedding Endpoint Type
                     */
                    embedding_endpoint_type?: /* Embedding Endpoint Type */ string | null;
                    /**
                     * Embedding Endpoint
                     */
                    embedding_endpoint?: /* Embedding Endpoint */ string | null;
                    /**
                     * Embedding Model
                     */
                    embedding_model?: /* Embedding Model */ string | null;
                    /**
                     * Embedding Dim
                     */
                    embedding_dim?: /* Embedding Dim */ number | null;
                    /**
                     * Embedding Chunk Size
                     */
                    embedding_chunk_size?: /* Embedding Chunk Size */ number | null;
                };
                /**
                 * State
                 * The state of the agent.
                 */
                state?: /**
                 * State
                 * The state of the agent.
                 */
                {
                    [key: string]: any;
                } | null;
                /**
                 * Metadata
                 * The metadata of the agent.
                 */
                metadata?: /**
                 * Metadata
                 * The metadata of the agent.
                 */
                {
                    [key: string]: any;
                } | null;
            };
            /**
             * Sources
             * The list of data sources associated with the agent.
             */
            sources: string[];
            /**
             * Last Run At
             * The unix timestamp of when the agent was last run.
             */
            last_run_at?: /**
             * Last Run At
             * The unix timestamp of when the agent was last run.
             */
            number | null;
        }
        /**
         * GetAllUsersResponse
         */
        export interface GetAllUsersResponse {
            /**
             * Cursor
             * Cursor for the next page in the response.
             */
            cursor?: /**
             * Cursor
             * Cursor for the next page in the response.
             */
            string /* uuid */ | null;
            /**
             * User List
             * A list of users.
             */
            user_list: {
                [key: string]: any;
            }[];
        }
        /**
         * GetSourceDocumentsResponse
         */
        export interface GetSourceDocumentsResponse {
            /**
             * Documents
             * List of documents from the source.
             */
            documents: /* DocumentModel */ DocumentModel[];
        }
        /**
         * GetSourcePassagesResponse
         */
        export interface GetSourcePassagesResponse {
            /**
             * Passages
             * List of passages from the source.
             */
            passages: /* PassageModel */ PassageModel[];
        }
        /**
         * HTTPValidationError
         */
        export interface HTTPValidationError {
            /**
             * Detail
             */
            detail?: /* ValidationError */ ValidationError[];
        }
        /**
         * HumanModel
         */
        export interface HumanModel {
            /**
             * Text
             * The human text.
             */
            text?: string;
            /**
             * Name
             * The name of the human.
             */
            name: string;
            /**
             * Id
             * The unique identifier of the human.
             */
            id?: string; // uuid
            /**
             * User Id
             * The unique identifier of the user associated with the human.
             */
            user_id: /**
             * User Id
             * The unique identifier of the user associated with the human.
             */
            string /* uuid */ | null;
        }
        /**
         * ImageFile
         */
        export interface ImageFile {
            /**
             * Type
             */
            type?: string;
            /**
             * File Id
             */
            file_id: string;
        }
        /**
         * InsertAgentArchivalMemoryRequest
         */
        export interface InsertAgentArchivalMemoryRequest {
            /**
             * Content
             * The memory contents to insert into archival memory.
             */
            content: string;
        }
        /**
         * InsertAgentArchivalMemoryResponse
         */
        export interface InsertAgentArchivalMemoryResponse {
            /**
             * Ids
             * Unique identifier for the new archival memory object. May return multiple ids if insert contents are chunked.
             */
            ids: string[];
        }
        /**
         * JobModel
         */
        export interface JobModel {
            /**
             * Id
             * The unique identifier of the job.
             */
            id?: string; // uuid
            /**
             * JobStatus
             * The status of the job.
             */
            status?: "created" | "running" | "completed" | "failed";
            /**
             * Created At
             * The unix timestamp of when the job was created.
             */
            created_at?: string; // date-time
            /**
             * Completed At
             * The unix timestamp of when the job was completed.
             */
            completed_at?: /**
             * Completed At
             * The unix timestamp of when the job was completed.
             */
            string /* date-time */ | null;
            /**
             * User Id
             * The unique identifier of the user associated with the job.
             */
            user_id: string; // uuid
            /**
             * Metadata
             * The metadata of the job.
             */
            metadata_?: /**
             * Metadata
             * The metadata of the job.
             */
            {
                [key: string]: any;
            } | null;
        }
        /**
         * JobStatus
         */
        export type JobStatus = "created" | "running" | "completed" | "failed";
        /**
         * LLMConfigModel
         */
        export interface LLMConfigModel {
            /**
             * Model
             */
            model?: /* Model */ string | null;
            /**
             * Model Endpoint Type
             */
            model_endpoint_type?: /* Model Endpoint Type */ string | null;
            /**
             * Model Endpoint
             */
            model_endpoint?: /* Model Endpoint */ string | null;
            /**
             * Model Wrapper
             */
            model_wrapper?: /* Model Wrapper */ string | null;
            /**
             * Context Window
             */
            context_window?: /* Context Window */ number | null;
        }
        /**
         * ListAgentsResponse
         */
        export interface ListAgentsResponse {
            /**
             * Num Agents
             * The number of agents available to the user.
             */
            num_agents: number;
            /**
             * Agents
             * List of agent configurations.
             */
            agents: {
                [key: string]: any;
            }[];
        }
        /**
         * ListHumansResponse
         */
        export interface ListHumansResponse {
            /**
             * Humans
             * List of human configurations.
             */
            humans: /* HumanModel */ HumanModel[];
        }
        /**
         * ListMessagesResponse
         */
        export interface ListMessagesResponse {
            /**
             * Messages
             * List of message objects.
             */
            messages: /* OpenAIMessage */ OpenAIMessage[];
        }
        /**
         * ListModelsResponse
         */
        export interface ListModelsResponse {
            /**
             * Models
             * List of model configurations.
             */
            models: /* LLMConfigModel */ LLMConfigModel[];
        }
        /**
         * ListPersonasResponse
         */
        export interface ListPersonasResponse {
            /**
             * Personas
             * List of persona configurations.
             */
            personas: /* PersonaModel */ PersonaModel[];
        }
        /**
         * ListPresetsResponse
         */
        export interface ListPresetsResponse {
            /**
             * Presets
             * List of available presets.
             */
            presets: /* PresetModel */ PresetModel[];
        }
        /**
         * ListSourcesResponse
         */
        export interface ListSourcesResponse {
            /**
             * Sources
             * List of available sources.
             */
            sources: /* SourceModel */ SourceModel[];
        }
        /**
         * ListToolsResponse
         */
        export interface ListToolsResponse {
            /**
             * Tools
             * List of tools (functions).
             */
            tools: /* ToolModel */ ToolModel[];
        }
        /**
         * LogProbToken
         */
        export interface LogProbToken {
            /**
             * Token
             */
            token: string;
            /**
             * Logprob
             */
            logprob: number;
            /**
             * Bytes
             */
            bytes: /* Bytes */ number[] | null;
        }
        /**
         * MemGPTUsageStatistics
         */
        export interface MemGPTUsageStatistics {
            /**
             * Completion Tokens
             */
            completion_tokens: number;
            /**
             * Prompt Tokens
             */
            prompt_tokens: number;
            /**
             * Total Tokens
             */
            total_tokens: number;
            /**
             * Step Count
             */
            step_count: number;
        }
        /**
         * ToolCall
         */
        export interface MemgptModelsChatCompletionRequestToolCall {
            /**
             * Id
             */
            id: string;
            /**
             * Type
             */
            type?: "function";
            function: /* ToolCallFunction */ ToolCallFunction;
        }
        /**
         * ToolCall
         */
        export interface MemgptModelsChatCompletionResponseToolCall {
            /**
             * Id
             */
            id: string;
            /**
             * Type
             */
            type?: "function";
            function: /* FunctionCall */ FunctionCallOutput;
        }
        /**
         * ToolCall
         */
        export interface MemgptModelsOpenaiToolCall {
            /**
             * Id
             * The unique identifier of the tool call.
             */
            id: string;
            /**
             * Type
             */
            type?: string;
            /**
             * Function
             * The function call.
             */
            function: {
                /**
                 * Name
                 * The name of the function.
                 */
                name: string;
                /**
                 * Arguments
                 * The arguments of the function.
                 */
                arguments: string;
            };
        }
        /**
         * CreateToolRequest
         */
        export interface MemgptServerRestApiAdminToolsCreateToolRequest {
            /**
             * Json Schema
             * JSON schema of the tool.
             */
            json_schema: {
                [key: string]: any;
            };
            /**
             * Source Code
             * The source code of the function.
             */
            source_code: string;
            /**
             * Source Type
             * The type of the source code.
             */
            source_type?: /**
             * Source Type
             * The type of the source code.
             */
            ("python") | null;
            /**
             * Tags
             * Metadata tags.
             */
            tags?: /**
             * Tags
             * Metadata tags.
             */
            string[] | null;
        }
        /**
         * CreateToolRequest
         */
        export interface MemgptServerRestApiToolsIndexCreateToolRequest {
            /**
             * Json Schema
             * JSON schema of the tool.
             */
            json_schema: {
                [key: string]: any;
            };
            /**
             * Source Code
             * The source code of the function.
             */
            source_code: string;
            /**
             * Source Type
             * The type of the source code.
             */
            source_type?: /**
             * Source Type
             * The type of the source code.
             */
            ("python") | null;
            /**
             * Tags
             * Metadata tags.
             */
            tags?: /**
             * Tags
             * Metadata tags.
             */
            string[] | null;
            /**
             * Update
             * Update the tool if it already exists.
             */
            update?: /**
             * Update
             * Update the tool if it already exists.
             */
            boolean | null;
        }
        /**
         * Message
         */
        export interface Message {
            /**
             * Content
             */
            content?: /* Content */ string | null;
            /**
             * Tool Calls
             */
            tool_calls?: /* Tool Calls */ /* ToolCall */ MemgptModelsChatCompletionResponseToolCall[] | null;
            /**
             * Role
             */
            role: string;
            function_call?: /* FunctionCall */ FunctionCallOutput | null;
        }
        /**
         * MessageContentLogProb
         */
        export interface MessageContentLogProb {
            /**
             * Token
             */
            token: string;
            /**
             * Logprob
             */
            logprob: number;
            /**
             * Bytes
             */
            bytes: /* Bytes */ number[] | null;
            /**
             * Top Logprobs
             */
            top_logprobs: /* Top Logprobs */ /* LogProbToken */ LogProbToken[] | null;
        }
        /**
         * MessageFile
         */
        export interface MessageFile {
            /**
             * Id
             * The unique identifier of the file.
             */
            id: string;
            /**
             * Object
             */
            object?: string;
            /**
             * Created At
             * The unix timestamp of when the file was created.
             */
            created_at: number;
            /**
             * Message Id
             * The unique identifier of the message.
             */
            message_id: string;
        }
        /**
         * MessageRoleType
         */
        export type MessageRoleType = "user" | "system";
        /**
         * ModifyMessageRequest
         */
        export interface ModifyMessageRequest {
            /**
             * Metadata
             * Metadata associated with the message.
             */
            metadata?: {
                [key: string]: any;
            };
        }
        /**
         * ModifyRunRequest
         */
        export interface ModifyRunRequest {
            /**
             * Metadata
             * Metadata associated with the run.
             */
            metadata?: {
                [key: string]: any;
            };
        }
        /**
         * ModifyThreadRequest
         */
        export interface ModifyThreadRequest {
            /**
             * Metadata
             * Metadata associated with the thread.
             */
            metadata?: {
                [key: string]: any;
            };
        }
        /**
         * OpenAIAssistant
         * Represents an OpenAI assistant (equivalent to MemGPT preset)
         */
        export interface OpenAIAssistant {
            /**
             * Id
             * The unique identifier of the assistant.
             */
            id: string;
            /**
             * Name
             * The name of the assistant.
             */
            name: string;
            /**
             * Object
             */
            object?: string;
            /**
             * Description
             * The description of the assistant.
             */
            description?: /**
             * Description
             * The description of the assistant.
             */
            string | null;
            /**
             * Created At
             * The unix timestamp of when the assistant was created.
             */
            created_at: number;
            /**
             * Model
             * The model used by the assistant.
             */
            model: string;
            /**
             * Instructions
             * The instructions for the assistant.
             */
            instructions: string;
            /**
             * Tools
             * The tools used by the assistant.
             */
            tools?: /**
             * Tools
             * The tools used by the assistant.
             */
            string[] | null;
            /**
             * File Ids
             * List of file IDs associated with the assistant.
             */
            file_ids?: /**
             * File Ids
             * List of file IDs associated with the assistant.
             */
            string[] | null;
            /**
             * Metadata
             * Metadata associated with the assistant.
             */
            metadata?: /**
             * Metadata
             * Metadata associated with the assistant.
             */
            {
                [key: string]: any;
            } | null;
        }
        /**
         * OpenAIError
         */
        export interface OpenAIError {
            /**
             * Code
             * The error code.
             */
            code: string;
            /**
             * Message
             * The error message.
             */
            message: string;
        }
        /**
         * OpenAIMessage
         */
        export interface OpenAIMessage {
            /**
             * Id
             * The unique identifier of the message.
             */
            id: string;
            /**
             * Object
             */
            object?: string;
            /**
             * Created At
             * The unix timestamp of when the message was created.
             */
            created_at: number;
            /**
             * Thread Id
             * The unique identifier of the thread.
             */
            thread_id: string;
            /**
             * Role
             * Role of the message sender (either 'user' or 'system')
             */
            role: string;
            /**
             * Content
             * The message content to be processed by the agent.
             */
            content?: (/* Text */ Text | /* ImageFile */ ImageFile)[];
            /**
             * Assistant Id
             * The unique identifier of the assistant.
             */
            assistant_id: string;
            /**
             * Run Id
             * The unique identifier of the run.
             */
            run_id?: /**
             * Run Id
             * The unique identifier of the run.
             */
            string | null;
            /**
             * File Ids
             * List of file IDs associated with the message.
             */
            file_ids?: /**
             * File Ids
             * List of file IDs associated with the message.
             */
            string[] | null;
            /**
             * Metadata
             * Metadata associated with the message.
             */
            metadata?: /**
             * Metadata
             * Metadata associated with the message.
             */
            {
                [key: string]: any;
            } | null;
        }
        /**
         * OpenAIMessageCreationStep
         */
        export interface OpenAIMessageCreationStep {
            /**
             * Type
             */
            type?: string;
            /**
             * Message Id
             * The unique identifier of the message.
             */
            message_id: string;
        }
        /**
         * OpenAIRun
         */
        export interface OpenAIRun {
            /**
             * Id
             * The unique identifier of the run.
             */
            id: string;
            /**
             * Object
             */
            object?: string;
            /**
             * Created At
             * The unix timestamp of when the run was created.
             */
            created_at: number;
            /**
             * Thread Id
             * The unique identifier of the thread.
             */
            thread_id: string;
            /**
             * Assistant Id
             * The unique identifier of the assistant.
             */
            assistant_id: string;
            /**
             * Status
             * The status of the run.
             */
            status: string;
            /**
             * The required action of the run.
             */
            required_action?: /* The required action of the run. */ /* RequiredAction */ RequiredAction | null;
            /**
             * The last error of the run.
             */
            last_error?: /* The last error of the run. */ /* OpenAIError */ OpenAIError | null;
            /**
             * Expires At
             * The unix timestamp of when the run expires.
             */
            expires_at: number;
            /**
             * Started At
             * The unix timestamp of when the run started.
             */
            started_at?: /**
             * Started At
             * The unix timestamp of when the run started.
             */
            number | null;
            /**
             * Cancelled At
             * The unix timestamp of when the run was cancelled.
             */
            cancelled_at?: /**
             * Cancelled At
             * The unix timestamp of when the run was cancelled.
             */
            number | null;
            /**
             * Failed At
             * The unix timestamp of when the run failed.
             */
            failed_at?: /**
             * Failed At
             * The unix timestamp of when the run failed.
             */
            number | null;
            /**
             * Completed At
             * The unix timestamp of when the run completed.
             */
            completed_at?: /**
             * Completed At
             * The unix timestamp of when the run completed.
             */
            number | null;
            /**
             * Model
             * The model used by the run.
             */
            model: string;
            /**
             * Instructions
             * The instructions for the run.
             */
            instructions: string;
            /**
             * Tools
             * The tools used by the run.
             */
            tools?: /**
             * Tools
             * The tools used by the run.
             */
            /* ToolCall */ MemgptModelsOpenaiToolCall[] | null;
            /**
             * File Ids
             * List of file IDs associated with the run.
             */
            file_ids?: /**
             * File Ids
             * List of file IDs associated with the run.
             */
            string[] | null;
            /**
             * Metadata
             * Metadata associated with the run.
             */
            metadata?: /**
             * Metadata
             * Metadata associated with the run.
             */
            {
                [key: string]: any;
            } | null;
            /**
             * The usage of the run.
             */
            usage?: /* The usage of the run. */ /* OpenAIUsage */ OpenAIUsage | null;
        }
        /**
         * OpenAIRunStep
         */
        export interface OpenAIRunStep {
            /**
             * Id
             * The unique identifier of the run step.
             */
            id: string;
            /**
             * Object
             */
            object?: string;
            /**
             * Created At
             * The unix timestamp of when the run step was created.
             */
            created_at: number;
            /**
             * Assistant Id
             * The unique identifier of the assistant.
             */
            assistant_id: string;
            /**
             * Thread Id
             * The unique identifier of the thread.
             */
            thread_id: string;
            /**
             * Run Id
             * The unique identifier of the run.
             */
            run_id: string;
            /**
             * Type
             * The type of the run step.
             */
            type: string;
            /**
             * Status
             * The status of the run step.
             */
            status: string;
            /**
             * Step Defaults
             * The step defaults.
             */
            step_defaults: /**
             * Step Defaults
             * The step defaults.
             */
            /* OpenAIToolCallsStep */ OpenAIToolCallsStep | /* OpenAIMessageCreationStep */ OpenAIMessageCreationStep;
            /**
             * The last error of the run step.
             */
            last_error?: /* The last error of the run step. */ /* OpenAIError */ OpenAIError | null;
            /**
             * Expired At
             * The unix timestamp of when the run step expired.
             */
            expired_at?: /**
             * Expired At
             * The unix timestamp of when the run step expired.
             */
            number | null;
            /**
             * Failed At
             * The unix timestamp of when the run failed.
             */
            failed_at?: /**
             * Failed At
             * The unix timestamp of when the run failed.
             */
            number | null;
            /**
             * Completed At
             * The unix timestamp of when the run completed.
             */
            completed_at?: /**
             * Completed At
             * The unix timestamp of when the run completed.
             */
            number | null;
            /**
             * The usage of the run.
             */
            usage?: /* The usage of the run. */ /* OpenAIUsage */ OpenAIUsage | null;
        }
        /**
         * OpenAIThread
         * Represents an OpenAI thread (equivalent to MemGPT agent)
         */
        export interface OpenAIThread {
            /**
             * Id
             * The unique identifier of the thread.
             */
            id: string;
            /**
             * Object
             */
            object?: string;
            /**
             * Created At
             * The unix timestamp of when the thread was created.
             */
            created_at: number;
            /**
             * Metadata
             * Metadata associated with the thread.
             */
            metadata?: {
                [key: string]: any;
            };
        }
        /**
         * OpenAIToolCallsStep
         */
        export interface OpenAIToolCallsStep {
            /**
             * Type
             */
            type?: string;
            /**
             * Tool Calls
             * The tool calls.
             */
            tool_calls: /* ToolCall */ MemgptModelsOpenaiToolCall[];
        }
        /**
         * OpenAIUsage
         */
        export interface OpenAIUsage {
            /**
             * Completion Tokens
             * The number of tokens used for the run.
             */
            completion_tokens: number;
            /**
             * Prompt Tokens
             * The number of tokens used for the prompt.
             */
            prompt_tokens: number;
            /**
             * Total Tokens
             * The total number of tokens used for the run.
             */
            total_tokens: number;
        }
        /**
         * PassageModel
         */
        export interface PassageModel {
            /**
             * User Id
             * The unique identifier of the user associated with the passage.
             */
            user_id?: /**
             * User Id
             * The unique identifier of the user associated with the passage.
             */
            string /* uuid */ | null;
            /**
             * Agent Id
             * The unique identifier of the agent associated with the passage.
             */
            agent_id?: /**
             * Agent Id
             * The unique identifier of the agent associated with the passage.
             */
            string /* uuid */ | null;
            /**
             * Text
             * The text of the passage.
             */
            text: string;
            /**
             * Embedding
             * The embedding of the passage.
             */
            embedding?: /**
             * Embedding
             * The embedding of the passage.
             */
            number[] | null;
            /**
             * The embedding configuration used by the passage.
             */
            embedding_config?: /* The embedding configuration used by the passage. */ /* EmbeddingConfigModel */ EmbeddingConfigModel | null;
            /**
             * Data Source
             * The data source of the passage.
             */
            data_source?: /**
             * Data Source
             * The data source of the passage.
             */
            string | null;
            /**
             * Doc Id
             * The unique identifier of the document associated with the passage.
             */
            doc_id?: /**
             * Doc Id
             * The unique identifier of the document associated with the passage.
             */
            string /* uuid */ | null;
            /**
             * Id
             * The unique identifier of the passage.
             */
            id?: string; // uuid
            /**
             * Metadata
             * The metadata of the passage.
             */
            metadata?: /**
             * Metadata
             * The metadata of the passage.
             */
            {
                [key: string]: any;
            } | null;
        }
        /**
         * PersonaModel
         */
        export interface PersonaModel {
            /**
             * Text
             * The persona text.
             */
            text?: string;
            /**
             * Name
             * The name of the persona.
             */
            name: string;
            /**
             * Id
             * The unique identifier of the persona.
             */
            id?: string; // uuid
            /**
             * User Id
             * The unique identifier of the user associated with the persona.
             */
            user_id: /**
             * User Id
             * The unique identifier of the user associated with the persona.
             */
            string /* uuid */ | null;
        }
        /**
         * PresetModel
         */
        export interface PresetModel {
            /**
             * Name
             * The name of the preset.
             */
            name: string;
            /**
             * Id
             * The unique identifier of the preset.
             */
            id?: string; // uuid
            /**
             * User Id
             * The unique identifier of the user who created the preset.
             */
            user_id?: /**
             * User Id
             * The unique identifier of the user who created the preset.
             */
            string /* uuid */ | null;
            /**
             * Description
             * The description of the preset.
             */
            description?: /**
             * Description
             * The description of the preset.
             */
            string | null;
            /**
             * Created At
             * The unix timestamp of when the preset was created.
             */
            created_at?: string; // date-time
            /**
             * System
             * The system prompt of the preset.
             */
            system: string;
            /**
             * System Name
             * The name of the system prompt of the preset.
             */
            system_name?: /**
             * System Name
             * The name of the system prompt of the preset.
             */
            string | null;
            /**
             * Persona
             * The persona of the preset.
             */
            persona?: string;
            /**
             * Persona Name
             * The name of the persona of the preset.
             */
            persona_name?: /**
             * Persona Name
             * The name of the persona of the preset.
             */
            string | null;
            /**
             * Human
             * The human of the preset.
             */
            human?: string;
            /**
             * Human Name
             * The name of the human of the preset.
             */
            human_name?: /**
             * Human Name
             * The name of the human of the preset.
             */
            string | null;
            /**
             * Functions Schema
             * The functions schema of the preset.
             */
            functions_schema: {
                [key: string]: any;
            }[];
        }
        /**
         * RequiredAction
         */
        export interface RequiredAction {
            /**
             * Type
             */
            type?: string;
            /**
             * Submit Tool Outputs
             */
            submit_tool_outputs: /* ToolCall */ MemgptModelsOpenaiToolCall[];
        }
        /**
         * ResponseFormat
         */
        export interface ResponseFormat {
            /**
             * Type
             */
            type?: string; // ^(text|json_object)$
        }
        /**
         * SourceModel
         */
        export interface SourceModel {
            /**
             * Name
             * The name of the source.
             */
            name: string;
            /**
             * Description
             * The description of the source.
             */
            description?: /**
             * Description
             * The description of the source.
             */
            string | null;
            /**
             * User Id
             * The unique identifier of the user associated with the source.
             */
            user_id: string; // uuid
            /**
             * Created At
             * The unix timestamp of when the source was created.
             */
            created_at?: string; // date-time
            /**
             * Id
             * The unique identifier of the source.
             */
            id?: string; // uuid
            /**
             * The embedding configuration used by the passage.
             */
            embedding_config?: /* The embedding configuration used by the passage. */ /* EmbeddingConfigModel */ EmbeddingConfigModel | null;
            /**
             * Metadata
             * Metadata associated with the source.
             */
            metadata_?: /**
             * Metadata
             * Metadata associated with the source.
             */
            {
                [key: string]: any;
            } | null;
        }
        /**
         * SubmitToolOutputsToRunRequest
         */
        export interface SubmitToolOutputsToRunRequest {
            /**
             * Tools Outputs
             * The tool outputs to submit.
             */
            tools_outputs: /* ToolCallOutput */ ToolCallOutput[];
        }
        /**
         * SystemMessage
         */
        export interface SystemMessage {
            /**
             * Content
             */
            content: string;
            /**
             * Role
             */
            role?: string;
            /**
             * Name
             */
            name?: /* Name */ string | null;
        }
        /**
         * Text
         */
        export interface Text {
            /**
             * Object
             */
            object?: string;
            /**
             * Text
             * The text content to be processed by the agent.
             */
            text: string;
        }
        /**
         * Tool
         */
        export interface Tool {
            /**
             * Type
             */
            type?: "function";
            function: /* FunctionSchema */ FunctionSchema;
        }
        /**
         * ToolCallFunction
         */
        export interface ToolCallFunction {
            /**
             * Name
             */
            name: string;
            /**
             * Arguments
             */
            arguments: string;
        }
        /**
         * ToolCallOutput
         */
        export interface ToolCallOutput {
            /**
             * Tool Call Id
             * The unique identifier of the tool call.
             */
            tool_call_id: string;
            /**
             * Output
             * The output of the tool call.
             */
            output: string;
        }
        /**
         * ToolFunctionChoice
         */
        export interface ToolFunctionChoice {
            /**
             * Type
             */
            type?: "function";
            function: /* FunctionCall */ FunctionCallInput;
        }
        /**
         * ToolMessage
         */
        export interface ToolMessage {
            /**
             * Content
             */
            content: string;
            /**
             * Role
             */
            role?: string;
            /**
             * Tool Call Id
             */
            tool_call_id: string;
        }
        /**
         * ToolModel
         */
        export interface ToolModel {
            /**
             * Name
             * The name of the function.
             */
            name: string;
            /**
             * Id
             * The unique identifier of the function.
             */
            id?: string; // uuid
            /**
             * Tags
             * Metadata tags.
             */
            tags: string[];
            /**
             * Source Type
             * The type of the source code.
             */
            source_type?: /**
             * Source Type
             * The type of the source code.
             */
            string | null;
            /**
             * Source Code
             * The source code of the function.
             */
            source_code: /**
             * Source Code
             * The source code of the function.
             */
            string | null;
            /**
             * Module
             * The module of the function.
             */
            module?: /**
             * Module
             * The module of the function.
             */
            string | null;
            /**
             * Json Schema
             * The JSON schema of the function.
             */
            json_schema?: {
                [key: string]: any;
            };
            /**
             * User Id
             * The unique identifier of the user associated with the function.
             */
            user_id?: /**
             * User Id
             * The unique identifier of the user associated with the function.
             */
            string /* uuid */ | null;
        }
        /**
         * UpdateAgentMemoryRequest
         */
        export interface UpdateAgentMemoryRequest {
            /**
             * Human
             * Human element of the core memory.
             */
            human?: string;
            /**
             * Persona
             * Persona element of the core memory.
             */
            persona?: string;
        }
        /**
         * UpdateAgentMemoryResponse
         */
        export interface UpdateAgentMemoryResponse {
            /**
             * CoreMemory
             * The previous state of the agent's core memory.
             */
            old_core_memory: {
                /**
                 * Human
                 * Human element of the core memory.
                 */
                human?: /**
                 * Human
                 * Human element of the core memory.
                 */
                string | null;
                /**
                 * Persona
                 * Persona element of the core memory.
                 */
                persona?: /**
                 * Persona
                 * Persona element of the core memory.
                 */
                string | null;
            };
            /**
             * CoreMemory
             * The updated state of the agent's core memory.
             */
            new_core_memory: {
                /**
                 * Human
                 * Human element of the core memory.
                 */
                human?: /**
                 * Human
                 * Human element of the core memory.
                 */
                string | null;
                /**
                 * Persona
                 * Persona element of the core memory.
                 */
                persona?: /**
                 * Persona
                 * Persona element of the core memory.
                 */
                string | null;
            };
        }
        /**
         * UsageStatistics
         */
        export interface UsageStatistics {
            /**
             * Completion Tokens
             */
            completion_tokens?: number;
            /**
             * Prompt Tokens
             */
            prompt_tokens?: number;
            /**
             * Total Tokens
             */
            total_tokens?: number;
        }
        /**
         * UserMessage
         */
        export interface UserMessage {
            /**
             * Content
             */
            content: /* Content */ string | string[];
            /**
             * Role
             */
            role?: string;
            /**
             * Name
             */
            name?: /* Name */ string | null;
        }
        /**
         * UserMessageRequest
         */
        export interface UserMessageRequest {
            /**
             * Message
             * The message content to be processed by the agent.
             */
            message: string;
            /**
             * Name
             * Name of the message request sender
             */
            name?: /**
             * Name
             * Name of the message request sender
             */
            string | null;
            /**
             * MessageRoleType
             * Role of the message sender (either 'user' or 'system')
             */
            role?: "user" | "system";
            /**
             * Stream Steps
             * Flag to determine if the response should be streamed. Set to True for streaming agent steps.
             */
            stream_steps?: boolean;
            /**
             * Stream Tokens
             * Flag to determine if individual tokens should be streamed. Set to True for token streaming (requires stream_steps = True).
             */
            stream_tokens?: boolean;
            /**
             * Timestamp
             * Timestamp to tag the message with (in ISO format). If null, timestamp will be created server-side on receipt of message.
             */
            timestamp?: /**
             * Timestamp
             * Timestamp to tag the message with (in ISO format). If null, timestamp will be created server-side on receipt of message.
             */
            string /* date-time */ | null;
            /**
             * Stream
             * Legacy flag for old streaming API, will be deprecrated in the future.
             */
            stream?: boolean;
        }
        /**
         * UserMessageResponse
         */
        export interface UserMessageResponse {
            /**
             * Messages
             * List of messages generated by the agent in response to the received message.
             */
            messages: {
                [key: string]: any;
            }[];
            /**
             * MemGPTUsageStatistics
             * Usage statistics for the completion.
             */
            usage: {
                /**
                 * Completion Tokens
                 */
                completion_tokens: number;
                /**
                 * Prompt Tokens
                 */
                prompt_tokens: number;
                /**
                 * Total Tokens
                 */
                total_tokens: number;
                /**
                 * Step Count
                 */
                step_count: number;
            };
        }
        /**
         * ValidationError
         */
        export interface ValidationError {
            /**
             * Location
             */
            loc: (string | number)[];
            /**
             * Message
             */
            msg: string;
            /**
             * Error Type
             */
            type: string;
        }
    }
}
declare namespace Paths {
    namespace AttachSourceToAgentApiSourcesSourceIdAttachPost {
        namespace Parameters {
            /**
             * Agent Id
             * The unique identifier of the agent to attach the source to.
             */
            export type AgentId = string; // uuid
            /**
             * Source Id
             */
            export type SourceId = string; // uuid
        }
        export interface PathParameters {
            source_id: /* Source Id */ Parameters.SourceId /* uuid */;
        }
        export interface QueryParameters {
            agent_id: /**
             * Agent Id
             * The unique identifier of the agent to attach the source to.
             */
            Parameters.AgentId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* SourceModel */ Components.Schemas.SourceModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace AuthenticateUserApiAuthPost {
        export type RequestBody = /* AuthRequest */ Components.Schemas.AuthRequest;
        namespace Responses {
            export type $200 = /* AuthResponse */ Components.Schemas.AuthResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace CreateAgentApiAgentsPost {
        export type RequestBody = /* CreateAgentRequest */ Components.Schemas.CreateAgentRequest;
        namespace Responses {
            export type $200 = /* CreateAgentResponse */ Components.Schemas.CreateAgentResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace CreateHumanApiHumansPost {
        export type RequestBody = /* CreateHumanRequest */ Components.Schemas.CreateHumanRequest;
        namespace Responses {
            export type $200 = /* HumanModel */ Components.Schemas.HumanModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace CreateNewApiKeyAdminUsersKeysPost {
        export type RequestBody = /* CreateAPIKeyRequest */ Components.Schemas.CreateAPIKeyRequest;
        namespace Responses {
            export type $200 = /* CreateAPIKeyResponse */ Components.Schemas.CreateAPIKeyResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace CreatePersonaApiPersonasPost {
        export type RequestBody = /* CreatePersonaRequest */ Components.Schemas.CreatePersonaRequest;
        namespace Responses {
            export type $200 = /* PersonaModel */ Components.Schemas.PersonaModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace CreatePresetApiPresetsPost {
        export type RequestBody = /* CreatePresetsRequest */ Components.Schemas.CreatePresetsRequest;
        namespace Responses {
            export type $200 = /* CreatePresetResponse */ Components.Schemas.CreatePresetResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace CreateSourceApiSourcesPost {
        export type RequestBody = /* CreateSourceRequest */ Components.Schemas.CreateSourceRequest;
        namespace Responses {
            export type $200 = /* SourceModel */ Components.Schemas.SourceModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace CreateToolAdminToolsPost {
        export type RequestBody = /* CreateToolRequest */ Components.Schemas.MemgptServerRestApiAdminToolsCreateToolRequest;
        namespace Responses {
            export type $200 = /* ToolModel */ Components.Schemas.ToolModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace CreateToolApiToolsPost {
        export type RequestBody = /* CreateToolRequest */ Components.Schemas.MemgptServerRestApiToolsIndexCreateToolRequest;
        namespace Responses {
            export type $200 = /* ToolModel */ Components.Schemas.ToolModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace CreateUserAdminUsersPost {
        /**
         * Request
         */
        export type RequestBody = /* Request */ /* CreateUserRequest */ Components.Schemas.CreateUserRequest | null;
        namespace Responses {
            export type $200 = /* CreateUserResponse */ Components.Schemas.CreateUserResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DeleteAgentApiAgentsAgentIdDelete {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DeleteAgentArchivalMemoryApiAgentsAgentIdArchivalDelete {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
            /**
             * Id
             * Unique ID of the memory to be deleted.
             */
            export type Id = string;
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        export interface QueryParameters {
            id: /**
             * Id
             * Unique ID of the memory to be deleted.
             */
            Parameters.Id;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DeleteApiKeyAdminUsersKeysDelete {
        namespace Parameters {
            /**
             * Api Key
             * The API key to be deleted.
             */
            export type ApiKey = string;
        }
        export interface QueryParameters {
            api_key: /**
             * Api Key
             * The API key to be deleted.
             */
            Parameters.ApiKey;
        }
        namespace Responses {
            export type $200 = /* DeleteAPIKeyResponse */ Components.Schemas.DeleteAPIKeyResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DeleteHumanApiHumansHumanNameDelete {
        namespace Parameters {
            /**
             * Human Name
             */
            export type HumanName = string;
        }
        export interface PathParameters {
            human_name: /* Human Name */ Parameters.HumanName;
        }
        namespace Responses {
            export type $200 = /* HumanModel */ Components.Schemas.HumanModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DeletePersonaApiPersonasPersonaNameDelete {
        namespace Parameters {
            /**
             * Persona Name
             */
            export type PersonaName = string;
        }
        export interface PathParameters {
            persona_name: /* Persona Name */ Parameters.PersonaName;
        }
        namespace Responses {
            export type $200 = /* PersonaModel */ Components.Schemas.PersonaModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DeletePresetApiPresetsPresetIdDelete {
        namespace Parameters {
            /**
             * Preset Id
             */
            export type PresetId = string; // uuid
        }
        export interface PathParameters {
            preset_id: /* Preset Id */ Parameters.PresetId /* uuid */;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DeleteSourceApiSourcesSourceIdDelete {
        namespace Parameters {
            /**
             * Source Id
             */
            export type SourceId = string; // uuid
        }
        export interface PathParameters {
            source_id: /* Source Id */ Parameters.SourceId /* uuid */;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DeleteToolAdminToolsToolNameDelete {
        namespace Parameters {
            /**
             * Tool Name
             */
            export type ToolName = string;
        }
        export interface PathParameters {
            tool_name: /* Tool Name */ Parameters.ToolName;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DeleteToolApiToolsToolNameDelete {
        namespace Parameters {
            /**
             * Tool Name
             */
            export type ToolName = string;
        }
        export interface PathParameters {
            tool_name: /* Tool Name */ Parameters.ToolName;
        }
        namespace Responses {
            export type $200 = any;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DeleteUserAdminUsersDelete {
        namespace Parameters {
            /**
             * User Id
             * The user_id key to be deleted.
             */
            export type UserId = string; // uuid
        }
        export interface QueryParameters {
            user_id: /**
             * User Id
             * The user_id key to be deleted.
             */
            Parameters.UserId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* DeleteUserResponse */ Components.Schemas.DeleteUserResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace DetachSourceFromAgentApiSourcesSourceIdDetachPost {
        namespace Parameters {
            /**
             * Agent Id
             * The unique identifier of the agent to detach the source from.
             */
            export type AgentId = string; // uuid
            /**
             * Source Id
             */
            export type SourceId = string; // uuid
        }
        export interface PathParameters {
            source_id: /* Source Id */ Parameters.SourceId /* uuid */;
        }
        export interface QueryParameters {
            agent_id: /**
             * Agent Id
             * The unique identifier of the agent to detach the source from.
             */
            Parameters.AgentId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* SourceModel */ Components.Schemas.SourceModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetAgentArchivalMemoryAllApiAgentsAgentIdArchivalAllGet {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* GetAgentArchivalMemoryResponse */ Components.Schemas.GetAgentArchivalMemoryResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetAgentArchivalMemoryApiAgentsAgentIdArchivalGet {
        namespace Parameters {
            /**
             * After
             * Unique ID of the memory to start the query range at.
             */
            export type After = /**
             * After
             * Unique ID of the memory to start the query range at.
             */
            number | null;
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
            /**
             * Before
             * Unique ID of the memory to end the query range at.
             */
            export type Before = /**
             * Before
             * Unique ID of the memory to end the query range at.
             */
            number | null;
            /**
             * Limit
             * How many results to include in the response.
             */
            export type Limit = /**
             * Limit
             * How many results to include in the response.
             */
            number | null;
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        export interface QueryParameters {
            after?: /**
             * After
             * Unique ID of the memory to start the query range at.
             */
            Parameters.After;
            before?: /**
             * Before
             * Unique ID of the memory to end the query range at.
             */
            Parameters.Before;
            limit?: /**
             * Limit
             * How many results to include in the response.
             */
            Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* GetAgentArchivalMemoryResponse */ Components.Schemas.GetAgentArchivalMemoryResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetAgentConfigApiAgentsAgentIdConfigGet {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* GetAgentResponse */ Components.Schemas.GetAgentResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetAgentMemoryApiAgentsAgentIdMemoryGet {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* GetAgentMemoryResponse */ Components.Schemas.GetAgentMemoryResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetAgentMessagesApiAgentsAgentIdMessagesGet {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
            /**
             * Count
             * How many messages to retrieve.
             */
            export type Count = number;
            /**
             * Start
             * Message index to start on (reverse chronological).
             */
            export type Start = number;
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        export interface QueryParameters {
            start: /**
             * Start
             * Message index to start on (reverse chronological).
             */
            Parameters.Start;
            count: /**
             * Count
             * How many messages to retrieve.
             */
            Parameters.Count;
        }
        namespace Responses {
            export type $200 = /* GetAgentMessagesResponse */ Components.Schemas.GetAgentMessagesResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetAgentMessagesCursorApiAgentsAgentIdMessagesCursorGet {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
            /**
             * Before
             * Message before which to retrieve the returned messages.
             */
            export type Before = /**
             * Before
             * Message before which to retrieve the returned messages.
             */
            string /* uuid */ | null;
            /**
             * Limit
             * Maximum number of messages to retrieve.
             */
            export type Limit = number;
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        export interface QueryParameters {
            before?: /**
             * Before
             * Message before which to retrieve the returned messages.
             */
            Parameters.Before;
            limit?: /**
             * Limit
             * Maximum number of messages to retrieve.
             */
            Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* GetAgentMessagesResponse */ Components.Schemas.GetAgentMessagesResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetAllUsersAdminUsersGet {
        namespace Parameters {
            /**
             * Cursor
             */
            export type Cursor = /* Cursor */ string /* uuid */ | null;
            /**
             * Limit
             */
            export type Limit = /* Limit */ number | null;
        }
        export interface QueryParameters {
            cursor?: /* Cursor */ Parameters.Cursor;
            limit?: /* Limit */ Parameters.Limit;
        }
        namespace Responses {
            export type $200 = /* GetAllUsersResponse */ Components.Schemas.GetAllUsersResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetApiKeysAdminUsersKeysGet {
        namespace Parameters {
            /**
             * User Id
             * The unique identifier of the user.
             */
            export type UserId = string; // uuid
        }
        export interface QueryParameters {
            user_id: /**
             * User Id
             * The unique identifier of the user.
             */
            Parameters.UserId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* GetAPIKeysResponse */ Components.Schemas.GetAPIKeysResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetHumanApiHumansHumanNameGet {
        namespace Parameters {
            /**
             * Human Name
             */
            export type HumanName = string;
        }
        export interface PathParameters {
            human_name: /* Human Name */ Parameters.HumanName;
        }
        namespace Responses {
            export type $200 = /* HumanModel */ Components.Schemas.HumanModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetJobStatusApiSourcesStatusJobIdGet {
        namespace Parameters {
            /**
             * Job Id
             */
            export type JobId = string; // uuid
        }
        export interface PathParameters {
            job_id: /* Job Id */ Parameters.JobId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* JobModel */ Components.Schemas.JobModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetPersonaApiPersonasPersonaNameGet {
        namespace Parameters {
            /**
             * Persona Name
             */
            export type PersonaName = string;
        }
        export interface PathParameters {
            persona_name: /* Persona Name */ Parameters.PersonaName;
        }
        namespace Responses {
            export type $200 = /* PersonaModel */ Components.Schemas.PersonaModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetPresetApiPresetsPresetNameGet {
        namespace Parameters {
            /**
             * Preset Name
             */
            export type PresetName = string;
        }
        export interface PathParameters {
            preset_name: /* Preset Name */ Parameters.PresetName;
        }
        namespace Responses {
            export type $200 = /* PresetModel */ Components.Schemas.PresetModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetServerConfigApiConfigGet {
        namespace Responses {
            export type $200 = /* ConfigResponse */ Components.Schemas.ConfigResponse;
        }
    }
    namespace GetToolAdminToolsToolNameGet {
        namespace Parameters {
            /**
             * Tool Name
             */
            export type ToolName = string;
        }
        export interface PathParameters {
            tool_name: /* Tool Name */ Parameters.ToolName;
        }
        namespace Responses {
            export type $200 = /* ToolModel */ Components.Schemas.ToolModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace GetToolApiToolsToolNameGet {
        namespace Parameters {
            /**
             * Tool Name
             */
            export type ToolName = string;
        }
        export interface PathParameters {
            tool_name: /* Tool Name */ Parameters.ToolName;
        }
        namespace Responses {
            export type $200 = /* ToolModel */ Components.Schemas.ToolModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace InsertAgentArchivalMemoryApiAgentsAgentIdArchivalPost {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        export type RequestBody = /* InsertAgentArchivalMemoryRequest */ Components.Schemas.InsertAgentArchivalMemoryRequest;
        namespace Responses {
            export type $200 = /* InsertAgentArchivalMemoryResponse */ Components.Schemas.InsertAgentArchivalMemoryResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace ListAgentsApiAgentsGet {
        namespace Responses {
            export type $200 = /* ListAgentsResponse */ Components.Schemas.ListAgentsResponse;
        }
    }
    namespace ListAllToolsAdminToolsGet {
        namespace Responses {
            export type $200 = /* ListToolsResponse */ Components.Schemas.ListToolsResponse;
        }
    }
    namespace ListAllToolsApiToolsGet {
        namespace Responses {
            export type $200 = /* ListToolsResponse */ Components.Schemas.ListToolsResponse;
        }
    }
    namespace ListDocumentsApiSourcesSourceIdDocumentsGet {
        namespace Parameters {
            /**
             * Source Id
             */
            export type SourceId = string; // uuid
        }
        export interface PathParameters {
            source_id: /* Source Id */ Parameters.SourceId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* GetSourceDocumentsResponse */ Components.Schemas.GetSourceDocumentsResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace ListHumansApiHumansGet {
        namespace Responses {
            export type $200 = /* ListHumansResponse */ Components.Schemas.ListHumansResponse;
        }
    }
    namespace ListModelsApiModelsGet {
        namespace Responses {
            export type $200 = /* ListModelsResponse */ Components.Schemas.ListModelsResponse;
        }
    }
    namespace ListPassagesApiSourcesSourceIdPassagesGet {
        namespace Parameters {
            /**
             * Source Id
             */
            export type SourceId = string; // uuid
        }
        export interface PathParameters {
            source_id: /* Source Id */ Parameters.SourceId /* uuid */;
        }
        namespace Responses {
            export type $200 = /* GetSourcePassagesResponse */ Components.Schemas.GetSourcePassagesResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace ListPersonasApiPersonasGet {
        namespace Responses {
            export type $200 = /* ListPersonasResponse */ Components.Schemas.ListPersonasResponse;
        }
    }
    namespace ListPresetsApiPresetsGet {
        namespace Responses {
            export type $200 = /* ListPresetsResponse */ Components.Schemas.ListPresetsResponse;
        }
    }
    namespace ListSourcesApiSourcesGet {
        namespace Responses {
            export type $200 = /* ListSourcesResponse */ Components.Schemas.ListSourcesResponse;
        }
    }
    namespace RunCommandApiAgentsAgentIdCommandPost {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        export type RequestBody = /* CommandRequest */ Components.Schemas.CommandRequest;
        namespace Responses {
            export type $200 = /* CommandResponse */ Components.Schemas.CommandResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace SendMessageApiAgentsAgentIdMessagesPost {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        export type RequestBody = /* UserMessageRequest */ Components.Schemas.UserMessageRequest;
        namespace Responses {
            export type $200 = /* UserMessageResponse */ Components.Schemas.UserMessageResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace UpdateAgentMemoryApiAgentsAgentIdMemoryPost {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        export type RequestBody = /* UpdateAgentMemoryRequest */ Components.Schemas.UpdateAgentMemoryRequest;
        namespace Responses {
            export type $200 = /* UpdateAgentMemoryResponse */ Components.Schemas.UpdateAgentMemoryResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace UpdateAgentNameApiAgentsAgentIdRenamePatch {
        namespace Parameters {
            /**
             * Agent Id
             */
            export type AgentId = string; // uuid
        }
        export interface PathParameters {
            agent_id: /* Agent Id */ Parameters.AgentId /* uuid */;
        }
        export type RequestBody = /* AgentRenameRequest */ Components.Schemas.AgentRenameRequest;
        namespace Responses {
            export type $200 = /* GetAgentResponse */ Components.Schemas.GetAgentResponse;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
    namespace UploadFileToSourceApiSourcesSourceIdUploadPost {
        namespace Parameters {
            /**
             * Source Id
             */
            export type SourceId = string; // uuid
        }
        export interface PathParameters {
            source_id: /* Source Id */ Parameters.SourceId /* uuid */;
        }
        export type RequestBody = /* Body_upload_file_to_source_api_sources__source_id__upload_post */ Components.Schemas.BodyUploadFileToSourceApiSourcesSourceIdUploadPost;
        namespace Responses {
            export type $200 = /* JobModel */ Components.Schemas.JobModel;
            export type $422 = /* HTTPValidationError */ Components.Schemas.HTTPValidationError;
        }
    }
}

export interface OperationMethods {
  /**
   * authenticate_user_api_auth_post - Authenticate User
   * 
   * Authenticates the user and sends response with User related data.
   * 
   * Currently, this is a placeholder that simply returns a UUID placeholder
   */
  'authenticate_user_api_auth_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.AuthenticateUserApiAuthPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AuthenticateUserApiAuthPost.Responses.$200>
  /**
   * get_all_users_admin_users_get - Get All Users
   * 
   * Get a list of all users in the database
   */
  'get_all_users_admin_users_get'(
    parameters?: Parameters<Paths.GetAllUsersAdminUsersGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAllUsersAdminUsersGet.Responses.$200>
  /**
   * create_user_admin_users_post - Create User
   * 
   * Create a new user in the database
   */
  'create_user_admin_users_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateUserAdminUsersPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateUserAdminUsersPost.Responses.$200>
  /**
   * delete_user_admin_users_delete - Delete User
   */
  'delete_user_admin_users_delete'(
    parameters?: Parameters<Paths.DeleteUserAdminUsersDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteUserAdminUsersDelete.Responses.$200>
  /**
   * get_api_keys_admin_users_keys_get - Get Api Keys
   * 
   * Get a list of all API keys for a user
   */
  'get_api_keys_admin_users_keys_get'(
    parameters?: Parameters<Paths.GetApiKeysAdminUsersKeysGet.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetApiKeysAdminUsersKeysGet.Responses.$200>
  /**
   * create_new_api_key_admin_users_keys_post - Create New Api Key
   * 
   * Create a new API key for a user
   */
  'create_new_api_key_admin_users_keys_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateNewApiKeyAdminUsersKeysPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateNewApiKeyAdminUsersKeysPost.Responses.$200>
  /**
   * delete_api_key_admin_users_keys_delete - Delete Api Key
   */
  'delete_api_key_admin_users_keys_delete'(
    parameters?: Parameters<Paths.DeleteApiKeyAdminUsersKeysDelete.QueryParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteApiKeyAdminUsersKeysDelete.Responses.$200>
  /**
   * get_tool_admin_tools__tool_name__get - Get Tool
   * 
   * Get a tool by name
   */
  'get_tool_admin_tools__tool_name__get'(
    parameters?: Parameters<Paths.GetToolAdminToolsToolNameGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetToolAdminToolsToolNameGet.Responses.$200>
  /**
   * delete_tool_admin_tools__tool_name__delete - Delete Tool
   * 
   * Delete a tool by name
   */
  'delete_tool_admin_tools__tool_name__delete'(
    parameters?: Parameters<Paths.DeleteToolAdminToolsToolNameDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteToolAdminToolsToolNameDelete.Responses.$200>
  /**
   * list_all_tools_admin_tools_get - List All Tools
   * 
   * Get a list of all tools available to agents created by a user
   */
  'list_all_tools_admin_tools_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListAllToolsAdminToolsGet.Responses.$200>
  /**
   * create_tool_admin_tools_post - Create Tool
   * 
   * Create a new tool
   */
  'create_tool_admin_tools_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateToolAdminToolsPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateToolAdminToolsPost.Responses.$200>
  /**
   * run_command_api_agents__agent_id__command_post - Run Command
   * 
   * Execute a command on a specified agent.
   * 
   * This endpoint receives a command to be executed on an agent. It uses the user and agent identifiers to authenticate and route the command appropriately.
   * 
   * Raises an HTTPException for any processing errors.
   */
  'run_command_api_agents__agent_id__command_post'(
    parameters?: Parameters<Paths.RunCommandApiAgentsAgentIdCommandPost.PathParameters> | null,
    data?: Paths.RunCommandApiAgentsAgentIdCommandPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.RunCommandApiAgentsAgentIdCommandPost.Responses.$200>
  /**
   * get_agent_config_api_agents__agent_id__config_get - Get Agent Config
   * 
   * Retrieve the configuration for a specific agent.
   * 
   * This endpoint fetches the configuration details for a given agent, identified by the user and agent IDs.
   */
  'get_agent_config_api_agents__agent_id__config_get'(
    parameters?: Parameters<Paths.GetAgentConfigApiAgentsAgentIdConfigGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAgentConfigApiAgentsAgentIdConfigGet.Responses.$200>
  /**
   * update_agent_name_api_agents__agent_id__rename_patch - Update Agent Name
   * 
   * Updates the name of a specific agent.
   * 
   * This changes the name of the agent in the database but does NOT edit the agent's persona.
   */
  'update_agent_name_api_agents__agent_id__rename_patch'(
    parameters?: Parameters<Paths.UpdateAgentNameApiAgentsAgentIdRenamePatch.PathParameters> | null,
    data?: Paths.UpdateAgentNameApiAgentsAgentIdRenamePatch.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateAgentNameApiAgentsAgentIdRenamePatch.Responses.$200>
  /**
   * delete_agent_api_agents__agent_id__delete - Delete Agent
   * 
   * Delete an agent.
   */
  'delete_agent_api_agents__agent_id__delete'(
    parameters?: Parameters<Paths.DeleteAgentApiAgentsAgentIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteAgentApiAgentsAgentIdDelete.Responses.$200>
  /**
   * list_agents_api_agents_get - List Agents
   * 
   * List all agents associated with a given user.
   * 
   * This endpoint retrieves a list of all agents and their configurations associated with the specified user ID.
   */
  'list_agents_api_agents_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListAgentsApiAgentsGet.Responses.$200>
  /**
   * create_agent_api_agents_post - Create Agent
   * 
   * Create a new agent with the specified configuration.
   */
  'create_agent_api_agents_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateAgentApiAgentsPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateAgentApiAgentsPost.Responses.$200>
  /**
   * get_agent_memory_api_agents__agent_id__memory_get - Get Agent Memory
   * 
   * Retrieve the memory state of a specific agent.
   * 
   * This endpoint fetches the current memory state of the agent identified by the user ID and agent ID.
   */
  'get_agent_memory_api_agents__agent_id__memory_get'(
    parameters?: Parameters<Paths.GetAgentMemoryApiAgentsAgentIdMemoryGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAgentMemoryApiAgentsAgentIdMemoryGet.Responses.$200>
  /**
   * update_agent_memory_api_agents__agent_id__memory_post - Update Agent Memory
   * 
   * Update the core memory of a specific agent.
   * 
   * This endpoint accepts new memory contents (human and persona) and updates the core memory of the agent identified by the user ID and agent ID.
   */
  'update_agent_memory_api_agents__agent_id__memory_post'(
    parameters?: Parameters<Paths.UpdateAgentMemoryApiAgentsAgentIdMemoryPost.PathParameters> | null,
    data?: Paths.UpdateAgentMemoryApiAgentsAgentIdMemoryPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UpdateAgentMemoryApiAgentsAgentIdMemoryPost.Responses.$200>
  /**
   * get_agent_archival_memory_all_api_agents__agent_id__archival_all_get - Get Agent Archival Memory All
   * 
   * Retrieve the memories in an agent's archival memory store (non-paginated, returns all entries at once).
   */
  'get_agent_archival_memory_all_api_agents__agent_id__archival_all_get'(
    parameters?: Parameters<Paths.GetAgentArchivalMemoryAllApiAgentsAgentIdArchivalAllGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAgentArchivalMemoryAllApiAgentsAgentIdArchivalAllGet.Responses.$200>
  /**
   * get_agent_archival_memory_api_agents__agent_id__archival_get - Get Agent Archival Memory
   * 
   * Retrieve the memories in an agent's archival memory store (paginated query).
   */
  'get_agent_archival_memory_api_agents__agent_id__archival_get'(
    parameters?: Parameters<Paths.GetAgentArchivalMemoryApiAgentsAgentIdArchivalGet.QueryParameters & Paths.GetAgentArchivalMemoryApiAgentsAgentIdArchivalGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAgentArchivalMemoryApiAgentsAgentIdArchivalGet.Responses.$200>
  /**
   * insert_agent_archival_memory_api_agents__agent_id__archival_post - Insert Agent Archival Memory
   * 
   * Insert a memory into an agent's archival memory store.
   */
  'insert_agent_archival_memory_api_agents__agent_id__archival_post'(
    parameters?: Parameters<Paths.InsertAgentArchivalMemoryApiAgentsAgentIdArchivalPost.PathParameters> | null,
    data?: Paths.InsertAgentArchivalMemoryApiAgentsAgentIdArchivalPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.InsertAgentArchivalMemoryApiAgentsAgentIdArchivalPost.Responses.$200>
  /**
   * delete_agent_archival_memory_api_agents__agent_id__archival_delete - Delete Agent Archival Memory
   * 
   * Delete a memory from an agent's archival memory store.
   */
  'delete_agent_archival_memory_api_agents__agent_id__archival_delete'(
    parameters?: Parameters<Paths.DeleteAgentArchivalMemoryApiAgentsAgentIdArchivalDelete.QueryParameters & Paths.DeleteAgentArchivalMemoryApiAgentsAgentIdArchivalDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteAgentArchivalMemoryApiAgentsAgentIdArchivalDelete.Responses.$200>
  /**
   * get_agent_messages_api_agents__agent_id__messages_get - Get Agent Messages
   * 
   * Retrieve the in-context messages of a specific agent. Paginated, provide start and count to iterate.
   */
  'get_agent_messages_api_agents__agent_id__messages_get'(
    parameters?: Parameters<Paths.GetAgentMessagesApiAgentsAgentIdMessagesGet.QueryParameters & Paths.GetAgentMessagesApiAgentsAgentIdMessagesGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAgentMessagesApiAgentsAgentIdMessagesGet.Responses.$200>
  /**
   * send_message_api_agents__agent_id__messages_post - Send Message
   * 
   * Process a user message and return the agent's response.
   * 
   * This endpoint accepts a message from a user and processes it through the agent.
   * It can optionally stream the response if 'stream' is set to True.
   */
  'send_message_api_agents__agent_id__messages_post'(
    parameters?: Parameters<Paths.SendMessageApiAgentsAgentIdMessagesPost.PathParameters> | null,
    data?: Paths.SendMessageApiAgentsAgentIdMessagesPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.SendMessageApiAgentsAgentIdMessagesPost.Responses.$200>
  /**
   * get_agent_messages_cursor_api_agents__agent_id__messages_cursor_get - Get Agent Messages Cursor
   * 
   * Retrieve the in-context messages of a specific agent. Paginated, provide start and count to iterate.
   */
  'get_agent_messages_cursor_api_agents__agent_id__messages_cursor_get'(
    parameters?: Parameters<Paths.GetAgentMessagesCursorApiAgentsAgentIdMessagesCursorGet.QueryParameters & Paths.GetAgentMessagesCursorApiAgentsAgentIdMessagesCursorGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetAgentMessagesCursorApiAgentsAgentIdMessagesCursorGet.Responses.$200>
  /**
   * list_humans_api_humans_get - List Humans
   */
  'list_humans_api_humans_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListHumansApiHumansGet.Responses.$200>
  /**
   * create_human_api_humans_post - Create Human
   */
  'create_human_api_humans_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateHumanApiHumansPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateHumanApiHumansPost.Responses.$200>
  /**
   * get_human_api_humans__human_name__get - Get Human
   */
  'get_human_api_humans__human_name__get'(
    parameters?: Parameters<Paths.GetHumanApiHumansHumanNameGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetHumanApiHumansHumanNameGet.Responses.$200>
  /**
   * delete_human_api_humans__human_name__delete - Delete Human
   */
  'delete_human_api_humans__human_name__delete'(
    parameters?: Parameters<Paths.DeleteHumanApiHumansHumanNameDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteHumanApiHumansHumanNameDelete.Responses.$200>
  /**
   * list_personas_api_personas_get - List Personas
   */
  'list_personas_api_personas_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListPersonasApiPersonasGet.Responses.$200>
  /**
   * create_persona_api_personas_post - Create Persona
   */
  'create_persona_api_personas_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreatePersonaApiPersonasPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreatePersonaApiPersonasPost.Responses.$200>
  /**
   * get_persona_api_personas__persona_name__get - Get Persona
   */
  'get_persona_api_personas__persona_name__get'(
    parameters?: Parameters<Paths.GetPersonaApiPersonasPersonaNameGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPersonaApiPersonasPersonaNameGet.Responses.$200>
  /**
   * delete_persona_api_personas__persona_name__delete - Delete Persona
   */
  'delete_persona_api_personas__persona_name__delete'(
    parameters?: Parameters<Paths.DeletePersonaApiPersonasPersonaNameDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeletePersonaApiPersonasPersonaNameDelete.Responses.$200>
  /**
   * list_models_api_models_get - List Models
   */
  'list_models_api_models_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListModelsApiModelsGet.Responses.$200>
  /**
   * get_tool_api_tools__tool_name__get - Get Tool
   * 
   * Get a tool by name
   */
  'get_tool_api_tools__tool_name__get'(
    parameters?: Parameters<Paths.GetToolApiToolsToolNameGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetToolApiToolsToolNameGet.Responses.$200>
  /**
   * delete_tool_api_tools__tool_name__delete - Delete Tool
   * 
   * Delete a tool by name
   */
  'delete_tool_api_tools__tool_name__delete'(
    parameters?: Parameters<Paths.DeleteToolApiToolsToolNameDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteToolApiToolsToolNameDelete.Responses.$200>
  /**
   * list_all_tools_api_tools_get - List All Tools
   * 
   * Get a list of all tools available to agents created by a user
   */
  'list_all_tools_api_tools_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListAllToolsApiToolsGet.Responses.$200>
  /**
   * create_tool_api_tools_post - Create Tool
   * 
   * Create a new tool
   */
  'create_tool_api_tools_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateToolApiToolsPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateToolApiToolsPost.Responses.$200>
  /**
   * list_sources_api_sources_get - List Sources
   * 
   * List all data sources created by a user.
   */
  'list_sources_api_sources_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListSourcesApiSourcesGet.Responses.$200>
  /**
   * create_source_api_sources_post - Create Source
   * 
   * Create a new data source.
   */
  'create_source_api_sources_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreateSourceApiSourcesPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreateSourceApiSourcesPost.Responses.$200>
  /**
   * delete_source_api_sources__source_id__delete - Delete Source
   * 
   * Delete a data source.
   */
  'delete_source_api_sources__source_id__delete'(
    parameters?: Parameters<Paths.DeleteSourceApiSourcesSourceIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeleteSourceApiSourcesSourceIdDelete.Responses.$200>
  /**
   * attach_source_to_agent_api_sources__source_id__attach_post - Attach Source To Agent
   * 
   * Attach a data source to an existing agent.
   */
  'attach_source_to_agent_api_sources__source_id__attach_post'(
    parameters?: Parameters<Paths.AttachSourceToAgentApiSourcesSourceIdAttachPost.QueryParameters & Paths.AttachSourceToAgentApiSourcesSourceIdAttachPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.AttachSourceToAgentApiSourcesSourceIdAttachPost.Responses.$200>
  /**
   * detach_source_from_agent_api_sources__source_id__detach_post - Detach Source From Agent
   * 
   * Detach a data source from an existing agent.
   */
  'detach_source_from_agent_api_sources__source_id__detach_post'(
    parameters?: Parameters<Paths.DetachSourceFromAgentApiSourcesSourceIdDetachPost.QueryParameters & Paths.DetachSourceFromAgentApiSourcesSourceIdDetachPost.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DetachSourceFromAgentApiSourcesSourceIdDetachPost.Responses.$200>
  /**
   * get_job_status_api_sources_status__job_id__get - Get Job Status
   * 
   * Get the status of a job.
   */
  'get_job_status_api_sources_status__job_id__get'(
    parameters?: Parameters<Paths.GetJobStatusApiSourcesStatusJobIdGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetJobStatusApiSourcesStatusJobIdGet.Responses.$200>
  /**
   * upload_file_to_source_api_sources__source_id__upload_post - Upload File To Source
   * 
   * Upload a file to a data source.
   */
  'upload_file_to_source_api_sources__source_id__upload_post'(
    parameters?: Parameters<Paths.UploadFileToSourceApiSourcesSourceIdUploadPost.PathParameters> | null,
    data?: Paths.UploadFileToSourceApiSourcesSourceIdUploadPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.UploadFileToSourceApiSourcesSourceIdUploadPost.Responses.$200>
  /**
   * list_passages_api_sources__source_id__passages__get - List Passages
   * 
   * List all passages associated with a data source.
   */
  'list_passages_api_sources__source_id__passages__get'(
    parameters?: Parameters<Paths.ListPassagesApiSourcesSourceIdPassagesGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListPassagesApiSourcesSourceIdPassagesGet.Responses.$200>
  /**
   * list_documents_api_sources__source_id__documents_get - List Documents
   * 
   * List all documents associated with a data source.
   */
  'list_documents_api_sources__source_id__documents_get'(
    parameters?: Parameters<Paths.ListDocumentsApiSourcesSourceIdDocumentsGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListDocumentsApiSourcesSourceIdDocumentsGet.Responses.$200>
  /**
   * get_preset_api_presets__preset_name__get - Get Preset
   * 
   * Get a preset.
   */
  'get_preset_api_presets__preset_name__get'(
    parameters?: Parameters<Paths.GetPresetApiPresetsPresetNameGet.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetPresetApiPresetsPresetNameGet.Responses.$200>
  /**
   * list_presets_api_presets_get - List Presets
   * 
   * List all presets created by a user.
   */
  'list_presets_api_presets_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.ListPresetsApiPresetsGet.Responses.$200>
  /**
   * create_preset_api_presets_post - Create Preset
   * 
   * Create a preset.
   */
  'create_preset_api_presets_post'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: Paths.CreatePresetApiPresetsPost.RequestBody,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.CreatePresetApiPresetsPost.Responses.$200>
  /**
   * delete_preset_api_presets__preset_id__delete - Delete Preset
   * 
   * Delete a preset.
   */
  'delete_preset_api_presets__preset_id__delete'(
    parameters?: Parameters<Paths.DeletePresetApiPresetsPresetIdDelete.PathParameters> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.DeletePresetApiPresetsPresetIdDelete.Responses.$200>
  /**
   * get_server_config_api_config_get - Get Server Config
   * 
   * Retrieve the base configuration for the server.
   */
  'get_server_config_api_config_get'(
    parameters?: Parameters<UnknownParamsObject> | null,
    data?: any,
    config?: AxiosRequestConfig  
  ): OperationResponse<Paths.GetServerConfigApiConfigGet.Responses.$200>
}

export interface PathsDictionary {
  ['/api/auth']: {
    /**
     * authenticate_user_api_auth_post - Authenticate User
     * 
     * Authenticates the user and sends response with User related data.
     * 
     * Currently, this is a placeholder that simply returns a UUID placeholder
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.AuthenticateUserApiAuthPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AuthenticateUserApiAuthPost.Responses.$200>
  }
  ['/admin/users']: {
    /**
     * get_all_users_admin_users_get - Get All Users
     * 
     * Get a list of all users in the database
     */
    'get'(
      parameters?: Parameters<Paths.GetAllUsersAdminUsersGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAllUsersAdminUsersGet.Responses.$200>
    /**
     * create_user_admin_users_post - Create User
     * 
     * Create a new user in the database
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateUserAdminUsersPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateUserAdminUsersPost.Responses.$200>
    /**
     * delete_user_admin_users_delete - Delete User
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteUserAdminUsersDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteUserAdminUsersDelete.Responses.$200>
  }
  ['/admin/users/keys']: {
    /**
     * create_new_api_key_admin_users_keys_post - Create New Api Key
     * 
     * Create a new API key for a user
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateNewApiKeyAdminUsersKeysPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateNewApiKeyAdminUsersKeysPost.Responses.$200>
    /**
     * get_api_keys_admin_users_keys_get - Get Api Keys
     * 
     * Get a list of all API keys for a user
     */
    'get'(
      parameters?: Parameters<Paths.GetApiKeysAdminUsersKeysGet.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetApiKeysAdminUsersKeysGet.Responses.$200>
    /**
     * delete_api_key_admin_users_keys_delete - Delete Api Key
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteApiKeyAdminUsersKeysDelete.QueryParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteApiKeyAdminUsersKeysDelete.Responses.$200>
  }
  ['/admin/tools/{tool_name}']: {
    /**
     * delete_tool_admin_tools__tool_name__delete - Delete Tool
     * 
     * Delete a tool by name
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteToolAdminToolsToolNameDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteToolAdminToolsToolNameDelete.Responses.$200>
    /**
     * get_tool_admin_tools__tool_name__get - Get Tool
     * 
     * Get a tool by name
     */
    'get'(
      parameters?: Parameters<Paths.GetToolAdminToolsToolNameGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetToolAdminToolsToolNameGet.Responses.$200>
  }
  ['/admin/tools']: {
    /**
     * list_all_tools_admin_tools_get - List All Tools
     * 
     * Get a list of all tools available to agents created by a user
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListAllToolsAdminToolsGet.Responses.$200>
    /**
     * create_tool_admin_tools_post - Create Tool
     * 
     * Create a new tool
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateToolAdminToolsPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateToolAdminToolsPost.Responses.$200>
  }
  ['/api/agents/{agent_id}/command']: {
    /**
     * run_command_api_agents__agent_id__command_post - Run Command
     * 
     * Execute a command on a specified agent.
     * 
     * This endpoint receives a command to be executed on an agent. It uses the user and agent identifiers to authenticate and route the command appropriately.
     * 
     * Raises an HTTPException for any processing errors.
     */
    'post'(
      parameters?: Parameters<Paths.RunCommandApiAgentsAgentIdCommandPost.PathParameters> | null,
      data?: Paths.RunCommandApiAgentsAgentIdCommandPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.RunCommandApiAgentsAgentIdCommandPost.Responses.$200>
  }
  ['/api/agents/{agent_id}/config']: {
    /**
     * get_agent_config_api_agents__agent_id__config_get - Get Agent Config
     * 
     * Retrieve the configuration for a specific agent.
     * 
     * This endpoint fetches the configuration details for a given agent, identified by the user and agent IDs.
     */
    'get'(
      parameters?: Parameters<Paths.GetAgentConfigApiAgentsAgentIdConfigGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAgentConfigApiAgentsAgentIdConfigGet.Responses.$200>
  }
  ['/api/agents/{agent_id}/rename']: {
    /**
     * update_agent_name_api_agents__agent_id__rename_patch - Update Agent Name
     * 
     * Updates the name of a specific agent.
     * 
     * This changes the name of the agent in the database but does NOT edit the agent's persona.
     */
    'patch'(
      parameters?: Parameters<Paths.UpdateAgentNameApiAgentsAgentIdRenamePatch.PathParameters> | null,
      data?: Paths.UpdateAgentNameApiAgentsAgentIdRenamePatch.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateAgentNameApiAgentsAgentIdRenamePatch.Responses.$200>
  }
  ['/api/agents/{agent_id}']: {
    /**
     * delete_agent_api_agents__agent_id__delete - Delete Agent
     * 
     * Delete an agent.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteAgentApiAgentsAgentIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteAgentApiAgentsAgentIdDelete.Responses.$200>
  }
  ['/api/agents']: {
    /**
     * list_agents_api_agents_get - List Agents
     * 
     * List all agents associated with a given user.
     * 
     * This endpoint retrieves a list of all agents and their configurations associated with the specified user ID.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListAgentsApiAgentsGet.Responses.$200>
    /**
     * create_agent_api_agents_post - Create Agent
     * 
     * Create a new agent with the specified configuration.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateAgentApiAgentsPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateAgentApiAgentsPost.Responses.$200>
  }
  ['/api/agents/{agent_id}/memory']: {
    /**
     * get_agent_memory_api_agents__agent_id__memory_get - Get Agent Memory
     * 
     * Retrieve the memory state of a specific agent.
     * 
     * This endpoint fetches the current memory state of the agent identified by the user ID and agent ID.
     */
    'get'(
      parameters?: Parameters<Paths.GetAgentMemoryApiAgentsAgentIdMemoryGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAgentMemoryApiAgentsAgentIdMemoryGet.Responses.$200>
    /**
     * update_agent_memory_api_agents__agent_id__memory_post - Update Agent Memory
     * 
     * Update the core memory of a specific agent.
     * 
     * This endpoint accepts new memory contents (human and persona) and updates the core memory of the agent identified by the user ID and agent ID.
     */
    'post'(
      parameters?: Parameters<Paths.UpdateAgentMemoryApiAgentsAgentIdMemoryPost.PathParameters> | null,
      data?: Paths.UpdateAgentMemoryApiAgentsAgentIdMemoryPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UpdateAgentMemoryApiAgentsAgentIdMemoryPost.Responses.$200>
  }
  ['/api/agents/{agent_id}/archival/all']: {
    /**
     * get_agent_archival_memory_all_api_agents__agent_id__archival_all_get - Get Agent Archival Memory All
     * 
     * Retrieve the memories in an agent's archival memory store (non-paginated, returns all entries at once).
     */
    'get'(
      parameters?: Parameters<Paths.GetAgentArchivalMemoryAllApiAgentsAgentIdArchivalAllGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAgentArchivalMemoryAllApiAgentsAgentIdArchivalAllGet.Responses.$200>
  }
  ['/api/agents/{agent_id}/archival']: {
    /**
     * get_agent_archival_memory_api_agents__agent_id__archival_get - Get Agent Archival Memory
     * 
     * Retrieve the memories in an agent's archival memory store (paginated query).
     */
    'get'(
      parameters?: Parameters<Paths.GetAgentArchivalMemoryApiAgentsAgentIdArchivalGet.QueryParameters & Paths.GetAgentArchivalMemoryApiAgentsAgentIdArchivalGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAgentArchivalMemoryApiAgentsAgentIdArchivalGet.Responses.$200>
    /**
     * insert_agent_archival_memory_api_agents__agent_id__archival_post - Insert Agent Archival Memory
     * 
     * Insert a memory into an agent's archival memory store.
     */
    'post'(
      parameters?: Parameters<Paths.InsertAgentArchivalMemoryApiAgentsAgentIdArchivalPost.PathParameters> | null,
      data?: Paths.InsertAgentArchivalMemoryApiAgentsAgentIdArchivalPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.InsertAgentArchivalMemoryApiAgentsAgentIdArchivalPost.Responses.$200>
    /**
     * delete_agent_archival_memory_api_agents__agent_id__archival_delete - Delete Agent Archival Memory
     * 
     * Delete a memory from an agent's archival memory store.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteAgentArchivalMemoryApiAgentsAgentIdArchivalDelete.QueryParameters & Paths.DeleteAgentArchivalMemoryApiAgentsAgentIdArchivalDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteAgentArchivalMemoryApiAgentsAgentIdArchivalDelete.Responses.$200>
  }
  ['/api/agents/{agent_id}/messages']: {
    /**
     * get_agent_messages_api_agents__agent_id__messages_get - Get Agent Messages
     * 
     * Retrieve the in-context messages of a specific agent. Paginated, provide start and count to iterate.
     */
    'get'(
      parameters?: Parameters<Paths.GetAgentMessagesApiAgentsAgentIdMessagesGet.QueryParameters & Paths.GetAgentMessagesApiAgentsAgentIdMessagesGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAgentMessagesApiAgentsAgentIdMessagesGet.Responses.$200>
    /**
     * send_message_api_agents__agent_id__messages_post - Send Message
     * 
     * Process a user message and return the agent's response.
     * 
     * This endpoint accepts a message from a user and processes it through the agent.
     * It can optionally stream the response if 'stream' is set to True.
     */
    'post'(
      parameters?: Parameters<Paths.SendMessageApiAgentsAgentIdMessagesPost.PathParameters> | null,
      data?: Paths.SendMessageApiAgentsAgentIdMessagesPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.SendMessageApiAgentsAgentIdMessagesPost.Responses.$200>
  }
  ['/api/agents/{agent_id}/messages-cursor']: {
    /**
     * get_agent_messages_cursor_api_agents__agent_id__messages_cursor_get - Get Agent Messages Cursor
     * 
     * Retrieve the in-context messages of a specific agent. Paginated, provide start and count to iterate.
     */
    'get'(
      parameters?: Parameters<Paths.GetAgentMessagesCursorApiAgentsAgentIdMessagesCursorGet.QueryParameters & Paths.GetAgentMessagesCursorApiAgentsAgentIdMessagesCursorGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetAgentMessagesCursorApiAgentsAgentIdMessagesCursorGet.Responses.$200>
  }
  ['/api/humans']: {
    /**
     * list_humans_api_humans_get - List Humans
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListHumansApiHumansGet.Responses.$200>
    /**
     * create_human_api_humans_post - Create Human
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateHumanApiHumansPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateHumanApiHumansPost.Responses.$200>
  }
  ['/api/humans/{human_name}']: {
    /**
     * delete_human_api_humans__human_name__delete - Delete Human
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteHumanApiHumansHumanNameDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteHumanApiHumansHumanNameDelete.Responses.$200>
    /**
     * get_human_api_humans__human_name__get - Get Human
     */
    'get'(
      parameters?: Parameters<Paths.GetHumanApiHumansHumanNameGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetHumanApiHumansHumanNameGet.Responses.$200>
  }
  ['/api/personas']: {
    /**
     * list_personas_api_personas_get - List Personas
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListPersonasApiPersonasGet.Responses.$200>
    /**
     * create_persona_api_personas_post - Create Persona
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreatePersonaApiPersonasPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreatePersonaApiPersonasPost.Responses.$200>
  }
  ['/api/personas/{persona_name}']: {
    /**
     * delete_persona_api_personas__persona_name__delete - Delete Persona
     */
    'delete'(
      parameters?: Parameters<Paths.DeletePersonaApiPersonasPersonaNameDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeletePersonaApiPersonasPersonaNameDelete.Responses.$200>
    /**
     * get_persona_api_personas__persona_name__get - Get Persona
     */
    'get'(
      parameters?: Parameters<Paths.GetPersonaApiPersonasPersonaNameGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPersonaApiPersonasPersonaNameGet.Responses.$200>
  }
  ['/api/models']: {
    /**
     * list_models_api_models_get - List Models
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListModelsApiModelsGet.Responses.$200>
  }
  ['/api/tools/{tool_name}']: {
    /**
     * delete_tool_api_tools__tool_name__delete - Delete Tool
     * 
     * Delete a tool by name
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteToolApiToolsToolNameDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteToolApiToolsToolNameDelete.Responses.$200>
    /**
     * get_tool_api_tools__tool_name__get - Get Tool
     * 
     * Get a tool by name
     */
    'get'(
      parameters?: Parameters<Paths.GetToolApiToolsToolNameGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetToolApiToolsToolNameGet.Responses.$200>
  }
  ['/api/tools']: {
    /**
     * list_all_tools_api_tools_get - List All Tools
     * 
     * Get a list of all tools available to agents created by a user
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListAllToolsApiToolsGet.Responses.$200>
    /**
     * create_tool_api_tools_post - Create Tool
     * 
     * Create a new tool
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateToolApiToolsPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateToolApiToolsPost.Responses.$200>
  }
  ['/api/sources']: {
    /**
     * list_sources_api_sources_get - List Sources
     * 
     * List all data sources created by a user.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListSourcesApiSourcesGet.Responses.$200>
    /**
     * create_source_api_sources_post - Create Source
     * 
     * Create a new data source.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreateSourceApiSourcesPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreateSourceApiSourcesPost.Responses.$200>
  }
  ['/api/sources/{source_id}']: {
    /**
     * delete_source_api_sources__source_id__delete - Delete Source
     * 
     * Delete a data source.
     */
    'delete'(
      parameters?: Parameters<Paths.DeleteSourceApiSourcesSourceIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeleteSourceApiSourcesSourceIdDelete.Responses.$200>
  }
  ['/api/sources/{source_id}/attach']: {
    /**
     * attach_source_to_agent_api_sources__source_id__attach_post - Attach Source To Agent
     * 
     * Attach a data source to an existing agent.
     */
    'post'(
      parameters?: Parameters<Paths.AttachSourceToAgentApiSourcesSourceIdAttachPost.QueryParameters & Paths.AttachSourceToAgentApiSourcesSourceIdAttachPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.AttachSourceToAgentApiSourcesSourceIdAttachPost.Responses.$200>
  }
  ['/api/sources/{source_id}/detach']: {
    /**
     * detach_source_from_agent_api_sources__source_id__detach_post - Detach Source From Agent
     * 
     * Detach a data source from an existing agent.
     */
    'post'(
      parameters?: Parameters<Paths.DetachSourceFromAgentApiSourcesSourceIdDetachPost.QueryParameters & Paths.DetachSourceFromAgentApiSourcesSourceIdDetachPost.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DetachSourceFromAgentApiSourcesSourceIdDetachPost.Responses.$200>
  }
  ['/api/sources/status/{job_id}']: {
    /**
     * get_job_status_api_sources_status__job_id__get - Get Job Status
     * 
     * Get the status of a job.
     */
    'get'(
      parameters?: Parameters<Paths.GetJobStatusApiSourcesStatusJobIdGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetJobStatusApiSourcesStatusJobIdGet.Responses.$200>
  }
  ['/api/sources/{source_id}/upload']: {
    /**
     * upload_file_to_source_api_sources__source_id__upload_post - Upload File To Source
     * 
     * Upload a file to a data source.
     */
    'post'(
      parameters?: Parameters<Paths.UploadFileToSourceApiSourcesSourceIdUploadPost.PathParameters> | null,
      data?: Paths.UploadFileToSourceApiSourcesSourceIdUploadPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.UploadFileToSourceApiSourcesSourceIdUploadPost.Responses.$200>
  }
  ['/api/sources/{source_id}/passages ']: {
    /**
     * list_passages_api_sources__source_id__passages__get - List Passages
     * 
     * List all passages associated with a data source.
     */
    'get'(
      parameters?: Parameters<Paths.ListPassagesApiSourcesSourceIdPassagesGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListPassagesApiSourcesSourceIdPassagesGet.Responses.$200>
  }
  ['/api/sources/{source_id}/documents']: {
    /**
     * list_documents_api_sources__source_id__documents_get - List Documents
     * 
     * List all documents associated with a data source.
     */
    'get'(
      parameters?: Parameters<Paths.ListDocumentsApiSourcesSourceIdDocumentsGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListDocumentsApiSourcesSourceIdDocumentsGet.Responses.$200>
  }
  ['/api/presets/{preset_name}']: {
    /**
     * get_preset_api_presets__preset_name__get - Get Preset
     * 
     * Get a preset.
     */
    'get'(
      parameters?: Parameters<Paths.GetPresetApiPresetsPresetNameGet.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetPresetApiPresetsPresetNameGet.Responses.$200>
  }
  ['/api/presets']: {
    /**
     * list_presets_api_presets_get - List Presets
     * 
     * List all presets created by a user.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.ListPresetsApiPresetsGet.Responses.$200>
    /**
     * create_preset_api_presets_post - Create Preset
     * 
     * Create a preset.
     */
    'post'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: Paths.CreatePresetApiPresetsPost.RequestBody,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.CreatePresetApiPresetsPost.Responses.$200>
  }
  ['/api/presets/{preset_id}']: {
    /**
     * delete_preset_api_presets__preset_id__delete - Delete Preset
     * 
     * Delete a preset.
     */
    'delete'(
      parameters?: Parameters<Paths.DeletePresetApiPresetsPresetIdDelete.PathParameters> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.DeletePresetApiPresetsPresetIdDelete.Responses.$200>
  }
  ['/api/config']: {
    /**
     * get_server_config_api_config_get - Get Server Config
     * 
     * Retrieve the base configuration for the server.
     */
    'get'(
      parameters?: Parameters<UnknownParamsObject> | null,
      data?: any,
      config?: AxiosRequestConfig  
    ): OperationResponse<Paths.GetServerConfigApiConfigGet.Responses.$200>
  }
}

export type Client = OpenAPIClient<OperationMethods, PathsDictionary>

