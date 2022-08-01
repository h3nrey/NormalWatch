var coroutine;
let seconds = document.querySelector(".seconds")
let minutes = document.querySelector(".minutes")

const app = Vue.createApp({
    data(){
        return{
            title: "Stopwatch",
            type: "stopwatch",
            secondsValue: 0,
            minutesValue: 0,
            onStopwatchMode: true,
        }
    },
    methods: {
        changeType(clockType){
            this.title = clockType
            this.type = clockType

            this.resetWatch();
        },
        startWatch(){
            if(this.type == "stopwatch") {
                window.clearInterval(coroutine);
                coroutine =  window.setInterval(() => {        
                    if(this.secondsValue < 100) {
                        this.secondsValue++;
    
                        if(this.secondsValue == 100) {
                            this.minutesValue++;
                            this.secondsValue =0;
                        }
                    }
                },100) // --->>this need to be changed to 1000
            } else if(this.type == "timer") {
                if(this.secondsValue > 0 || this.minutesValue > 0) {
                    this.timer =  window.setInterval(() => {

                        if(this.secondsValue  == 0 && this.minutesValue > 0) {
                            console.log("test");    
                            this.minutesValue--;
                                this.secondsValue = 60;
                        }
                        if(this.secondsValue > 0) {
                            this.secondsValue--;
                            if(this.secondsValue == 0 && this.minutesValue == 0) {
                                window.clearInterval(coroutine);
                                playAudio();
                            }
                        }
                    },1000)
                }   
            }
            
        },
        stopwatch(){

        },
        resetWatch(){
            console.log("stopped");
            window.clearInterval(coroutine);
            this.minutesValue = 0;
            this.secondsValue = 0;
        },
        
    },
})

const audioEl = document.querySelector("audio")

function playAudio() {
audioEl.play();
}