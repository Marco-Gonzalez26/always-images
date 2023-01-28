import React, { useState } from 'react'
import Loader from './Loader'

export const AiImageComponent = () => {
  const [value, setValue] = useState('')
  const [imageUrl, setImageUrl] = useState<string>('')
  const [loading, setLoading] = useState(false)

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target
    setValue(value)
  }

  const onClick = async () => {
    try {
      setLoading(true)
      const body = JSON.stringify({
        prompt: value,
        n: 1,
        size: '1024x1024'
      })

      const response = await fetch(
        'https://api.openai.com/v1/images/generations',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.PUBLIC_OPENAI_API_KEY}`
          },
          body: body
        }
      )
      const generatedImage = await response.json()

      if (generatedImage) {
        setImageUrl(generatedImage.data[0].url)
        setValue('')
        setLoading(false)
      }
    } catch (error: any) {
      if (error.response) {
        console.log(error.response.status)
        console.log(error.response.data)
      } else {
        console.log(error.message)
      }
    }
  }

  return (
    <section
      className='flex w-full  text-2xl justify-between items-center gap-5 flex-col-reverse relative min-h-screen md:pl-8 md:flex-row  py-4 md:py-0'
      id='generate-image'>
      <div className='flex flex-col gap-5 w-full p-4 md:w-1/2'>
        <h2 className='font-black text-zinc-800 tracking-wider underline underline-offset-8 text-5xl md:text-6xl pb-10'>
          Generate an image!
        </h2>
        <label htmlFor='#input' className='font-bold '>
          Write your prompt!
        </label>
        <textarea
          onChange={onChange}
          className='p-2 ring-2 ring-gray-900 rounded-md transition-all h-24 w-full resize-none'
          value={value}
          id='input'></textarea>
        <button
          className='rounded-xl text-gray-800 outline-black font-bold border-0 bg-black hover:[&>span]:-translate-y-[0.33em] active:[&>span]:-translate-y-[0] disabled:pointer-events-none disabled:opacity-50'
          type='submit'
          onClick={onClick}
          disabled={loading}>
          <span className='block box-border border-2 border-black rounded-xl py-3 px-6 text-black -translate-y-[0.2em] transition-transform bg-white text-lg '>
            {loading ? 'Generating your image...' : 'Send prompt'}
          </span>
        </button>
      </div>

      {!loading && imageUrl ? (
        <div className=' w-full top-0 bottom-0  flex flex-col justify-center items-center text-white  relative md:w-1/2 md:min-h-full  '>
          <img className=' w-full object-contain' src={imageUrl} />
        </div>
      ) : (
        <div className='min-h-full w-1/2 flex justify-center items-center '>
          <Loader
            text={
              loading
                ? 'Generating your image, please be patient'
                : 'Your image will appear here!'
            }
          />
        </div>
      )}
    </section>
  )
}
