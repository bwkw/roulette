import { useState } from 'react'

import type { RouletteOption } from '@/components/Roulette'
import { Roulette } from '@/components/Roulette'

// Rouletteコンポーネントのdataの型の都合上、option: string
const optionA: RouletteOption[] = [
  { id: 1, option: '10' },
  { id: 2, option: '-30' },
  { id: 3, option: '50' },
]

const optionB: RouletteOption[] = [
  { id: 1, option: '20' },
  { id: 2, option: '-30' },
  { id: 3, option: '50' },
]

export default function Mtb() {
  const [top, setTop] = useState('開始待ち')
  const [bottom, setBottom] = useState('開始待ち')

  const submitRouletteResult = () => {
    console.log(top, bottom)
  }

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center bg-gray-100'>
        <h1 className='mb-8 text-4xl font-bold text-black'>的場クッパ</h1>
        <div className='flex'>
          <Roulette options={optionA} value={top} setValue={setTop} />
          <Roulette options={optionB} value={bottom} setValue={setBottom} />
        </div>
        <button
          className='mt-10 rounded-md bg-indigo-600 px-10 py-2 font-bold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:bg-indigo-800'
          onClick={() => {
            submitRouletteResult()
          }}
        >
          ルーレットの結果を反映
        </button>
      </div>
    </>
  )
}
