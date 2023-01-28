import React, { useState } from 'react'

import { useOpenAi } from '../hooks/useOpenAi'
import getUrl from '../scripts/getUrl.js'

export const AiImageRedesing = () => {
  const [fileImageUrl, setFileImageUrl] = useState('')
  const { openAi } = useOpenAi()
  const handleDragEnter = (e) => {
    e.preventDefault()
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
  }

  const handleOnChange = (e) => {
    const [file] = e.target.files
    const path = getUrl(e.target.value)
    console.log({ path })
    const url = URL.createObjectURL(file)

    setFileImageUrl(url)
  }

  const onClick = async () => {
    const response = await openAi.createImageVariation(
      fileImageUrl as any,
      2,
      '1024x1024'
    )
    const images = response.data.data
    console.log(images)
    // try {
    //   const body = JSON.stringify({
    //     image: `${fileImageUrl}`,
    //     n: 2,
    //     size: '1024x1024'
    //   })
    //   fetch('https://api.openai.com/v1/images/variations', {
    //     method: 'POST',
    //     headers: {
    //       Authorization: `Bearer ${import.meta.env.PUBLIC_OPENAI_API_KEY}`,
    //       'Content-Type': 'multipart/form-data'
    //     },
    //     body
    //   })
    //     .then((res) => res.json())
    //     .then(setFileImageUrl)
    // } catch (e) {
    //   console.error(e)
    // }
  }
  return (
    <>
      <div className='flex flex-col gap-5 w-full p-4 md:w-1/2'>
        <h2 className='font-black text-white tracking-wider underline underline-offset-8 text-6xl pb-10'>
          Redesing your images!
        </h2>
        <button onClick={onClick} className='text-white'>
          Send Image
        </button>
        <label className='border-2 rounded border-white text-white h-96 w-full text-3xl font-bold grid place-items-center relative '>
          <input
            type='file'
            accept='image/png, image/jpeg, image/jpg'
            className=' h-full w-full opacity-0'
            id='upload-images'
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onChange={handleOnChange}
          />
          <div className='absolute'>Select or drop an image!</div>
        </label>
      </div>
    </>
  )
}
