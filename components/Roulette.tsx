import type { FC } from 'react'

import dynamic from 'next/dynamic'
import { useState } from 'react'

export type RouletteOption = {
  id: number
  option: string
}
type RouletteProps = {
  title: string
  options: RouletteOption[]
  value: string
  setValue: (value: string) => void
}

const DynamicWheel = dynamic(
  async () => await import('react-custom-roulette').then((module) => module.Wheel),
  { ssr: false },
)

export const Roulette: FC<RouletteProps> = ({ title, options, value, setValue }) => {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

  const handleStartClick = () => {
    if (!mustSpin) {
      setPrizeNumber(Math.floor(Math.random() * options.length))
      setMustSpin(true)
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <h1 className='mb-5 text-5xl font-bold text-black'>{title}</h1>
      <div className='my-3 flex justify-center'>
        <button
          className='rounded-full bg-blue-500 px-6 py-2 font-bold text-white shadow-md transition duration-200 ease-in hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 active:bg-blue-700'
          onClick={handleStartClick}
        >
          START
        </button>
      </div>
      <DynamicWheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={options}
        onStopSpinning={() => {
          setValue(options[prizeNumber].option)
          setMustSpin(false)
        }}
        outerBorderColor={'#f2f2f2'}
        outerBorderWidth={25}
        innerBorderColor={'#f2f2f2'}
        radiusLineColor={'#dedede'}
        radiusLineWidth={10}
        textColors={['#ffffff']}
        fontSize={50}
        perpendicularText={true}
        backgroundColors={['#F22B35', '#F99533', '#24CA69']}
      />
      <div className='mt-2 text-4xl text-black'>{!mustSpin ? value : '...'}</div>
    </div>
  )
}
