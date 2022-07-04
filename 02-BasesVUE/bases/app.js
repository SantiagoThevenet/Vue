
const app = Vue.createApp({
    // template:`
    //     <h1> Hola mundo </h1>
    //     <p> {{ 1+1 }} </p>
    //     <p> {{ !true ? 'Activo' : 'Inctivo' }} </p>
    //     `

    data() {
        return {
            author: 'Santiago',
            quote: 'Soy batman'
        }
    },
    methods: {
        changeQuote() {
            console.log('Hola mundo')
            this.author = 'Santiago Thevenet'
            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount('#myApp')