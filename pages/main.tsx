import { useState, useMemo } from 'react'
import Swal from 'sweetalert2'

import type { RouletteOption } from '@/components/Roulette'
import { Roulette } from '@/components/Roulette'
import { RoulettePointInput } from '@/components/RoulettePointInput'

// Rouletteコンポーネントのdataの型の都合上、option: string
const topOptions: RouletteOption[] = [
  { id: 1, option: 'チームA' },
  { id: 2, option: 'チームB' },
  { id: 3, option: 'チームC' },
]

const bottomOptions: RouletteOption[] = [
  { id: 1, option: 'チームD' },
  { id: 2, option: 'チームE' },
  { id: 3, option: 'チームF' },
]

export default function Mtb() {
  const [top, setTop] = useState<string>('開始待ち')
  const [bottom, setBottom] = useState<string>('開始待ち')
  const [point, setPoint] = useState<number>(0)

  const memoizedRouletteTop = useMemo(() => {
    return <Roulette options={topOptions} value={top} setValue={setTop} />
  }, [top, setTop])

  const memoizedRouletteBottom = useMemo(() => {
    return <Roulette options={bottomOptions} value={bottom} setValue={setBottom} />
  }, [bottom, setBottom])

  const submitRouletteResult = async () => {
    // データベースへの書き込み
    console.log(top, bottom)
  }

  const confirmPopup = async () => {
    const result = await Swal.fire({
      title: `${top}\n↓ ${point}pt\n${bottom}\n`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'はい',
      cancelButtonText: 'いいえ',
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    })

    if (result.isConfirmed) {
      await submitRouletteResult()
    }
  }

  return (
    <div className='m-12 flex h-screen flex-col'>
      <div className='flex flex-col md:flex-row md:space-x-4'>
        <div className='flex flex-col items-center md:w-1/3'>
          <h1 className='my-4 h-12 text-5xl font-bold text-black'>どこから？</h1>
          {topOptions.length > 0 && memoizedRouletteTop}
        </div>
        <div className='flex flex-col items-center md:w-1/3'>
          <h1 className='my-4 h-12 text-5xl font-bold text-black'>どこへ？</h1>
          {bottomOptions.length > 0 && memoizedRouletteBottom}
        </div>
        <div className='flex flex-col items-center md:w-1/3'>
          <h1 className='my-4 h-12 text-5xl font-bold text-black'>何pt？</h1>
          <RoulettePointInput point={point} setPoint={setPoint} />
        </div>
      </div>
      <div className='text-center'>
        <button
          className={`mt-16 w-1/4 rounded-xl px-10 py-2 text-xl font-bold text-white shadow-md transition duration-200 ease-in focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
            top === '開始待ち' || bottom === '開始待ち' || point === 0
              ? 'cursor-not-allowed bg-gray-300'
              : 'bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800'
          }`}
          onClick={confirmPopup}
          disabled={top === '開始待ち' || bottom === '開始待ち' || point === 0}
        >
          ルーレットの結果を反映
        </button>
      </div>
    </div>
  )
}
