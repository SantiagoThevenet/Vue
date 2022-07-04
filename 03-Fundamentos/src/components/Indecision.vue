<template>
    <img v-if="img" :src="img" alt="bg">
    <h1>Write a question</h1>
    <div class="bg-darg"></div>

    <div class="indecision-container">
        <input 
            type="text" 
            v-model="quesiton" 
            />
        <div>
            <h2 v-if="trueQuesiton">{{ quesiton }}</h2>
            <h2>{{ answer }}</h2>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quesiton: "",
            answer: "",
            trueQuesiton: false,
            img: null
        };
    },
    methods: {
        async getAnswer() {
            const { answer, image } = await fetch("https://yesno.wtf/api").then(
                (res) => res.json()
            );
            this.answer = answer;

            this.img = image
            this.trueQuesiton = true;
        },
    },
    watch:{
        quesiton(value, oldValue){
            this.trueQuesiton = false
            if (!value.includes('?')) return
            this.getAnswer()
        }
    }
};
</script>

<style>
img,
.bg-dark {
    height: 100vh;
    left: 0px;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
}

.bg-dark {
    background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
    position: relative;
    z-index: 99;
}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

input:focus {
    outline: none;
}

p {
    color: white;
    font-size: 20px;
    margin-top: 0px;
}

h1,
h2 {
    color: white;
}

h2 {
    margin-top: 150px;
}
</style>
