class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = 0;
  }

  startClick(callback) {
    this.intervalId = setInterval(() => {
      this.currentTime++;
      console.log(this.currentTime);
    }, 1000);
  }

  getMinutes() {
    return parseInt(Math.floor(this.currentTime / 60));
  }
  getSeconds() {
    return parseInt(this.currentTime % 60);
  }
  twoDigitsNumber() {
    if (this.currentTime < 10) {
      return "0" + this.currentTime;
    }
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    let min = this.twoDigitsNumber(this.getMinutes());
    let sec = this.twoDigitsNumber(this.getSeconds());

    return `${min}:${sec}`;
  }
}
