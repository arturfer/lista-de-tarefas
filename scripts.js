

const toDoList = {
    data() {
        return {
            newItem: {
                done: false
            },
            list:[]
        }
    },
    methods: {
        addItem: function () {
            if(this.newItem.title){
                this.list.push(this.newItem)
                this.newItem = {done: false} 
                localStorage.setItem('tarefas', JSON.stringify(this.list))
            }else{
                alert('insira um Titulo para sua tarefa')
            }
        },
        deleteItem: function(index) {
            this.list.splice(index, 1)
        }
    },
    created() {
        this.list = localStorage.getItem('tarefas') ? JSON.parse(localStorage.getItem('tarefas')) : this.list;
    },
    updated() {
        localStorage.setItem('tarefas', JSON.stringify(this.list))

    }
}

Vue.createApp(toDoList).mount('#app');

