import { observer } from 'mobx-react'
import React from 'react'
import Timer from './components/Timer'
import "./global.css"

const App = () => {
  return (
    <main>
      <Timer /> 
    </main>
  )
}

export default observer(App)