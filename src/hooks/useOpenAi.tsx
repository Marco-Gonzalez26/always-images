import { OpenAIApi, Configuration } from 'openai'

export const useOpenAi = () => {
  const config = new Configuration({
    apiKey: import.meta.env.PUBLIC_OPENAI_API_KEY
  })
  const openAi = new OpenAIApi(config)

  return { openAi }
}
