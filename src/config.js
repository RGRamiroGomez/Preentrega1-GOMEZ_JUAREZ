import * as url from 'url'

export const config={
    PORT:8080,
    DIRNAME:url.fileURLToPath(new URL('.', import.meta.url))
}