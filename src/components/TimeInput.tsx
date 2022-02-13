import React from 'react'
import { utils } from 'src/utils'


type Props = {
  onStart: (data: {
    minute: number,
    second: number
  }) => void
}

const TimeInput = ({ onStart }: Props) => {
  const [minute, setMinute] = React.useState(1)
  const [second, setSecond] = React.useState(0)
  const onSubmit = () => {
    if (!minute && !second) {
      alert("시간을 확인해주세요.")
      return 
    }

    onStart({ minute, second })
  }

  return (
    <div className="time-input-wrap">
      <div className="input-box">
        <input 
          type="number" 
          min={1}
          max={60}
          value={minute}
          onChange={e => setMinute(
            utils.checkValidInput(Number(e.target.value))
          )}
        /> 
        <input 
          type="number" 
          min={0}
          max={59}
          value={Number(second)}
          onChange={e => setSecond(
            utils.checkValidInput(Number(e.target.value), 59)
          )}
        /> 
      </div>
      <button onClick={onSubmit}>Start!</button>
    </div>
  )
}

export default TimeInput