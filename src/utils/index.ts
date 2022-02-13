export const utils = {
  numberToTime(minute: number, second: number) {
    if (!minute && !second) {
      return {
        minute: 0,
        second: 0,
      }
    }

    if (!second) {
      return {
        minute: minute - 1,
        second: 59
      }
    }
    
    return {
      minute,
      second: second - 1
    }
  },
  checkValidInput(number: number, opt = 60) {
    if (number > opt) {
      return opt
    }
    return number
  },
  convertNumber(number: number) {
    if (number >= 10) return `${number}`
    return `0${number}`
  }
}