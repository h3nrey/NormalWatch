app.component("option-button", {
	template:
	/*html*/
	`<button v-for="(button,index) in buttons"  class="button__control text" @click="changeWatch(index)">{{button.text}}</button`,
	emits: ["start-watch", "stop-watch"],
	data(){
			return {
				buttons: [
						{
								text: "Start",
								method: "startWatch"
						},
						{
								text: "Zerar",
								method: "stopWatch"
						}
				]
			}  
	},
	methods: {
		changeWatch(index) {
				if(index == 0) {
						console.log("start");
						this.$emit("start-watch");
				} else if(index == 1) {
						console.log("stop");
						this.$emit("stop-watch");
				}
		},
	}
    
})