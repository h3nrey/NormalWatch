app.component('type-button',{
    emits: ["change-type"],
    template:
    /*html*/
    `
    <button v-for="(button,index) in buttons" :class="button.classes" @click="toggleActivated(index)"> <i :class="button.icon"></i>
    </button>
    `,
    data(){
        return{
            buttons: [
                {id: 1, icon:"fa-solid fa-clock", clockType:"timer", classes:"type__button text"},
                {id: 2, icon:"fa-solid fa-stopwatch", clockType:"stopwatch", classes:"type__button text active"}
            ]
        }
    },
    methods:{
        toggleActivated(index){
            this.buttons.forEach(button => {
                button.classes = "type__button text"
            });
            this.buttons[index].classes += " active"
            this.$emit("change-type", this.buttons[index].clockType) 
        }
    }
})