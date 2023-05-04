import { useState } from 'react'
import { GiDaemonSkull } from 'react-icons/gi'

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
  const [points, setPoints] = useState('')

  const handlePointsChange = (inputValue: number) => {
    console.log(inputValue)
  }

  const submitRouletteResult = () => {
    console.log(top, bottom)
  }

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center bg-gray-100'>
        <div className='flex items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='mb-5 text-5xl font-bold text-black'>どこから？</h1>
            <Roulette options={optionA} value={top} setValue={setTop} />
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='mb-5 text-5xl font-bold text-black'>どこへ？</h1>
            <Roulette options={optionB} value={bottom} setValue={setBottom} />
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='mb-5 text-5xl font-bold text-black'>何ポイント？</h1>
            <div className='ml-4 flex items-center'>
              <GiDaemonSkull className='mr-2 text-xl text-black' />
              <input
                type='number'
                value={points}
                min={0}
                max={300}
                onChange={(e) => {
                  handlePointsChange(Number(e.target.value))
                }}
                className='rounded border border-gray-300 px-3 py-2 text-black focus:border-blue-300 focus:outline-none'
              />
              <div className='text-black'>pt</div>
            </div>
          </div>
        </div>

        <button
          className='mt-20 rounded-xl bg-indigo-600 px-10 py-2 text-xl font-bold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:bg-indigo-800'
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
