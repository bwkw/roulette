import type { FC } from 'react'

type RoulettePointInputProps = {
  min: number
  max: number
  point: number
  setPoint: (value: number) => void
}

export const RoulettePointInput: FC<RoulettePointInputProps> = ({ min, max, point, setPoint }) => {
  const handlePointsChange = (inputValue: number) => {
    if (inputValue < min) {
      setPoint(min)
    } else if (inputValue > max) {
      setPoint(max)
    } else if (!Number.isInteger(inputValue)) {
      setPoint(Math.round(inputValue))
    } else {
      setPoint(inputValue)
    }
  }

  console.log(point)
  return (
    <div className='ml-4 flex items-center'>
      <input
        type='number'
        value={point === 0 ? '' : point}
        min={min}
        max={max}
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
            console.log('blur')
          }
        }}
        className='rounded border border-gray-300 px-3 py-2 text-3xl text-black focus:border-blue-300 focus:outline-none'
      />
      <div className='text-black'>pt</div>
    </div>
  )
}
