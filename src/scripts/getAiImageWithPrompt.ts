import { OpenAIApi, Configuration } from 'openai'

const configuration = new Configuration({
  apiKey: import.meta.env.PUBLIC_OPENAI_API_KEY
})

const openAi = new OpenAIApi(configuration)

export const getImageByPrompt = async (prompt: string) => {
  try {
    const responseImage = await openAi.createImage({
      prompt,
      n: 1,
      size: '1024x1024'
    })
    return responseImage.data.data[0].url
  } catch (e) {
    console.log(e)
  }
}

// const response = await openAi.createCompletion({
//   model: 'text-davinci-003',
//   prompt: 'Cual es tu genero?',
//   temperature: 0.9,
//   max_tokens: 10
// })
