import { makeAutoObservable, runInAction } from "mobx";
import { utils } from "src/utils";

class Store {
  minute = 0
  second = 0;
  isStarted = false
  countInterval: NodeJS.Timer | null = null


  constructor() {
    makeAutoObservable(this)
  }

  setCountDown() {
    const {minute, second} = utils.numberToTime(this.minute, this.second)
    runInAction(() => {
      this.minute = minute
      this.second = second

      if (!minute && !second) {
        this.isStarted = false
        this.onStop()
      }
    })
  }

  onStart({ minute, second }: { minute: number, second: number}) {
    runInAction(() => {
      this.minute = minute
      this.second = second
      this.isStarted = true
      this.countInterval = setInterval(() => {
        this.setCountDown()
      }, 1000)

    })
  }

  onStop(restart = false) {
    if (restart) {
      runInAction(() => {
        this.isStarted = true
      })
      this.onStart({ minute: this.minute, second:this.second})
      return
    }

    if (this.countInterval) {
      clearInterval(this.countInterval)
      alert('Time Over!')
    }
  }
}


const store = new Store()

export default store