import type { FC } from 'react'

type RoulettePointInputProps = {
  point: number
  setPoint: (value: number) => void
}

export const RoulettePointInput: FC<RoulettePointInputProps> = ({ point, setPoint }) => {
  const handlePointsChange = (inputValue: number) => {
    if (!Number.isInteger(inputValue)) {
      setPoint(Math.round(inputValue))
    } else {
      setPoint(inputValue)
    }
  }

  return (
    <div className='flex items-center'>
      <input
        type='number'
        value={point === 0 ? '' : point}
        onChange={(e) => {
          handlePointsChange(Number(e.target.value))
        }}
        onFocus={(e) => {
          if (e.target.value === '0') {
            e.target.value = ''
          }
        }}
        onBlur={(e) => {
          if (e.target.value === '') {
            e.target.value = '0'
          }
        }}
        className='rounded border border-gray-300 px-3 py-2 text-3xl text-black focus:border-blue-300 focus:outline-none'
      />
      <div className='text-2xl text-black'>pt</div>
    </div>
  )
}
