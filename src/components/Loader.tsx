import type React from 'react'
import './Loader.css'

const Loader: React.FC<{
  text: string
}> = ({ text }) => {
  return (
    <div className='flex flex-col items-center'>
      <div
        aria-label='Orange and tan hamster running in a metal wheel'
        role='img'
        className='wheel-and-hamster'>
        <div className='wheel'></div>
        <div className='hamster'>
          <div className='hamster__body'>
            <div className='hamster__head'>
              <div className='hamster__ear'></div>
              <div className='hamster__eye'></div>
              <div className='hamster__nose'></div>
            </div>
            <div className='hamster__limb hamster__limb--fr'></div>
            <div className='hamster__limb hamster__limb--fl'></div>
            <div className='hamster__limb hamster__limb--br'></div>
            <div className='hamster__limb hamster__limb--bl'></div>
            <div className='hamster__tail'></div>
          </div>
        </div>
        <div className='spoke'></div>
      </div>
        <h4 className='align-center text-md text-gray-700 font-bold text-center transition-all'>{text}</h4>
    </div>
  )
}

export default Loader
