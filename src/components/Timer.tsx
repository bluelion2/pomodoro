import { observer } from 'mobx-react'
import React, { useEffect } from 'react'
import store from 'src/store'
import { utils } from 'src/utils'
import TimeInput from './TimeInput'
import "./Timer.css"

const Timer = () => {

  useEffect(() => {
    localStorage.setItem('test', 'helo')
  }, [])

  return (
    <section className='timer-wrap'>
      <img src="/img/pomodoro.png" alt="토마토 아이콘" />

      {store.isStarted ? (
        <Pannel
          onStop={(restart) => store.onStop(restart)}
          minute={store.minute}
          second={store.second}
        /> 
      ) : (
        <TimeInput onStart={(data) => store.onStart(data)} />
      )}

    </section>
  )
}

export default observer(Timer)


type Prop = {
  minute: number,
  second: number,
  onStop: (restart: boolean) => void
}

const Pannel = ({ minute, second, onStop }: Prop) => {
  const [restart, setRestart] = React.useState(false)

  return (
    <div className="time-pannel">
      <p>{utils.convertNumber(minute)} : {utils.convertNumber(second)}</p>
      <button 
        onClick={() => {
          onStop(restart)
          setRestart(!restart)
        }}>
          {restart ? "restart!" : "stop!"}
        </button>
    </div>
  )
}