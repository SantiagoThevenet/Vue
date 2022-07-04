<template>
    <h2>{{ customTitle }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ getSquareValue }}</p>

    <div>
        <button @click="decrease">-1</button>
        <button @click="increase">+1</button>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        start: {
            type: Number,
            default: 100,
            // required:true,
            validator(value) {
                return value >= 0
            }
        }
    },

    data() {
        return {
            counter: this.start,
        };
    },
    methods: {
        increase() {
            this.counter++;
        },
        decrease() {
            this.counter--;
        },
    },
    computed: {
        getSquareValue() {
            return this.counter * this.counter;
        },
        customTitle() {
            return this.title || "Santi";
        }
    },
};
</script>

<style>
button {
    background: rgb(169, 47, 47);
    border-radius: 0.5rem;
    border: none;
    color: white;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    cursor: pointer;
}
</style>


