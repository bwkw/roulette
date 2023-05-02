import type { RouletteOption } from '@/components/Roulette'
import { Roulette } from '@/components/Roulette'

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
  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center bg-gray-100'>
        <h1 className='mb-8 text-4xl font-bold text-black'>的場クッパ</h1>
        <div className='flex'>
          <Roulette options={optionA} />
          <Roulette options={optionB} />
        </div>
      </div>
    </>
  )
}
