import React from 'react'

export const AiImageRedesing = () => {
  const handleDragEnter = (e) => {
    e.preventDefault()
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    console.log('handleDropEvent', e)
  }

  const handleOnChange = (e) => {
    const files = e.target.files
    console.log(files)
    // console.log(URL.createObjectURL(file))
  }
  return (
    <section className='h-screen relative w-full flex flex-col justify-center items-between bg-gradient-to-b from-black to-gray-900'>
      <div className='flex flex-col gap-5 w-full p-4 md:w-1/2'>
        <h2 className='font-black text-white tracking-wider underline underline-offset-8 text-6xl pb-10'>
          Redesing your images!
        </h2>
        <label className='border-2 rounded border-white text-white h-96 w-full text-3xl font-bold grid place-items-center  '>
          <input
            type='file'
            accept='image/png, image/jpeg, image/jpg'
            className=' h-full w-full  border-dashed border-transparent border-8  '
            multiple
            id='upload-images'
            onDrop={handleDrop}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onChange={handleOnChange}
          />
        </label>
      </div>
    </section>
  )
}
