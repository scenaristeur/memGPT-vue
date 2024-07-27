
# db 
/db/dockerfile.simple

## build db container
`docker build -t memgpt-db -f db/Dockerfile.simple .`

## first db run
`docker run -d --rm --name memgpt-db -p 5432:5432 -e POSTGRES_PASSWORD=password -v memgpt_db:/var/lib/postgresql/data memgpt-db:latest`

## other db_runs

``` docker run -d --rm \
   --name memgpt-db \
   -p 5432:5432 \
   -v memgpt_db:/var/lib/postgresql/data \
   memgpt-db:latest
   ```

## memgpt configure ou cat ~/.memgpt/config


cat config 
[defaults]
preset = memgpt_chat
persona = sam_pov
human = basic

[model]
model = memgpt-openai
	
model_endpoint = https://inference.memgpt.ai
model_endpoint_type = openai
context_window = 8192

[embedding]
embedding_endpoint_type = hugging-face
embedding_endpoint = https://embeddings.memgpt.ai
embedding_model = BAAI/bge-large-en-v1.5
embedding_dim = 1024
embedding_chunk_size = 300

[archival_storage]
type = postgres
path = /home/smag/.memgpt/chroma
uri = postgresql+pg8000://memgpt:memgpt@localhost:5432/memgpt

[recall_storage]
type = postgres
path = /home/smag/.memgpt
uri = postgresql+pg8000://memgpt:memgpt@localhost:5432/memgpt

[metadata_storage]
type = postgres
path = /home/smag/.memgpt
uri = postgresql+pg8000://memgpt:memgpt@localhost:5432/memgpt

[version]
memgpt_version = 0.3.18

[client]
anon_clientid = 00000000-0000-0000-0000-000000000000


## run 
export MEMGPT_SERVER_PASS=ilovellms
memgpt server


# html loader tool
- inspiration langchain https://python.langchain.com/v0.1/docs/integrations/document_loaders/url/
pip install -U unstructured langchain_community


from langchain_community.document_loaders import UnstructuredURLLoader

def load_url(self, urls: list[str]):
    """
    Load a URL into a Document. It is often more readable to load a URL into a Document than fetching with http_request.
    Prefer this function over http_request if you want to load a URL into a Document and get informations.

    Args:
        url (str): The URL to load.

    Returns:
        Document: A Document object containing the URL's contents.
    """
    # loader = SeleniumURLLoader(urls=urls)
    loader = UnstructuredURLLoader(urls=urls)
    data = loader.load()

    return data


