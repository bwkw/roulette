import { useState } from 'react'
import Swal from 'sweetalert2'

import type { RouletteOption } from '@/components/Roulette'
import { Roulette } from '@/components/Roulette'
import { RoulettePointInput } from '@/components/RoulettePointInput'

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
  const [top, setTop] = useState<string>('開始待ち')
  const [bottom, setBottom] = useState<string>('開始待ち')
  const [point, setPoint] = useState<number>(0)

  const submitRouletteResult = () => {
    console.log(top, bottom)
  }

  const confirmPopup = async () => {
    const result = await Swal.fire({
      title: `${top}から${bottom}に${point}ptを譲渡しますか？`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'はい',
      cancelButtonText: 'いいえ',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    })

    if (result.isConfirmed) {
      submitRouletteResult()
    }
  }

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center bg-gray-100'>
        <div className='flex items-start'>
          <div className='flex flex-col items-center'>
            <h1 className='mb-4 mt-10 h-12 text-5xl font-bold text-black'>どこから？</h1>
            <Roulette options={optionA} value={top} setValue={setTop} />
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='mb-4 mt-10 h-12 text-5xl font-bold text-black'>どこへ？</h1>
            <Roulette options={optionB} value={bottom} setValue={setBottom} />
          </div>
          <div className='flex flex-col items-center'>
            <h1 className='mb-4 mt-10 h-12 text-5xl font-bold text-black'>何ポイント？</h1>{' '}
            <RoulettePointInput max={300} min={0} point={point} setPoint={setPoint} />
          </div>
        </div>
        <button
          className='mt-16 rounded-xl bg-indigo-600 px-10 py-2 text-xl font-bold text-white shadow-md transition duration-200 ease-in hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:bg-indigo-800'
          onClick={confirmPopup}
        >
          ルーレットの結果を反映
        </button>
      </div>
    </>
  )
}
