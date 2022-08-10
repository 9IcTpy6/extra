const {makeAutoObservable} = require("mobx");

export default new class Counter {
    count = 0
    constructor() {
        makeAutoObservable(this)
    }
    increment(){
        this.count = this.count + 1
    }
    decrement(){
        this.count = this.count -1
    }
}