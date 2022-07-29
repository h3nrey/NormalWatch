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

            window.clearInterval(this.timer);
            this.minutesValue = 0;
            this.secondsValue = 0;
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
            } else if(this.type == "timer"  && this.secondsValue > 0 || this.minutesValue > 0) {
                this.timer =  window.setInterval(() => {
                    if(this.secondsValue > 0) {
                        this.secondsValue--;
    
                        if(this.secondsValue == 0 && this.minutesValue) {
                            this.minutesValue--;
                            this.secondsValue = 60;
                        }
                        if(this.secondsValue == 0 && this.minutesValue == 0) {
                            window.clearInterval(this.timer);
                            playAudio();
                        }
                    }
                },1000)
            }
            
        },
        inputUpdated(){
            // this.secondsValue = seconds;
            // this.minutesValue = minutes
            console.log("input changed")
        },
        stopWatch(){
            console.log("stopped");
            window.clearInterval(coroutine);
            this.minutesValue = 0;
            this.secondsValue = 0;
        },
        
    },
    // mounted () {
    //     document.getElementById('app').addEventListener('animationend', e => {
    //         this.toggleClass(e.target.id, 'shake')
    //     })
    // }
})

const audioEl = document.querySelector("audio")

function playAudio() {
audioEl.play();
}