import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const root = document.getElementById('pomodoro-root')

ReactDOM.render(<App />, root)

let swRegistration = null;
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('service worker registerd')

  navigator.serviceWorker.register('background.js').then(res => {
    console.log('registerd service worker')

    swRegistration = res
    console.log('swRegistration')
  })
}