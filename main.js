var coroutine;

const app = Vue.createApp({
    data(){
        return{
            title: "Stopwatch",
            type: "Stopwatch",
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
            if(this.type == "Stopwatch") {
                this.stopwatch();
            } else if(this.type == "Timer") {
                this.timer();
            }    
        },
        stopwatch(){
            this.resetWatch();
            coroutine =  window.setInterval(() => {        
                if(this.secondsValue < 100) {
                    this.secondsValue++;

                    if(this.secondsValue == 100) {
                        this.minutesValue++;
                        this.secondsValue =0;
                    }
                }
            },100)
        },
        timer(){
            if(this.secondsValue > 0 || this.minutesValue > 0) {
                this.timer =  window.setInterval(() => {
                    if(this.secondsValue  == 0 && this.minutesValue > 0) {  
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
        },
        resetWatch(){
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