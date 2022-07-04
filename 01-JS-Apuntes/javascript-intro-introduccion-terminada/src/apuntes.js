// ///////////////////////
// OPERADOR SPREAD Y MAP//
// //////////////////////

// let array1 = [1, 2, 3, 4, 5]
// let array2 = [...array1]
// array2.push(6)
// array3 = array1.map(i => i * 2)
// console.log(array1);
// console.log(array2);
// console.log(array3);


// ///////////////////
// DESESTRUCTURACION//
// //////////////////

// const heroes = [{
//   id: 1,
//   name: 'batman'
// }, {
//   id: 2,
//   name: 'superman'
// }]

// const existe = heroes.some(heroe => heroe.id === 2)
// console.log(existe);

// const existe = heroes.find(heroe => heroe.id === 2)
// console.log(existe.name);

// const { name, id } = heroes.find(heroe => heroe.id === 1)
// console.log(name);


// ///////////////////////////////
// DESESTRUCTURACION DE OBJETOS//
// //////////////////////////////

// const person = {
//   name: 'santi',
//   age: 45,
//   codeName: 'Ironman'
// }

// const { age, name, codeName, power = 'No tiene poder' } = person

// const createHero = ({ id, name, power }) => {
//   return {
//     id: 1123123,
//     name,
//     power: 123,
//     codeName: 'El alpha',
//     power

//   }
// }

// console.log(createHero(person))



// /////////////////////////////
// DESESTRUCTURACION DE ARRAYS//
// ////////////////////////////

// const charcater = ['vegeta', 'goku', 'dios']

// const [v, g, d] = charcater
// const [v, ,] = charcater


// const returnArray = () => ['ABC', 123]
// const [letras, numeros] = returnArray()

// console.log(letras, numeros);



// ////////////
// PROMESAS //
// ///////////

// console.log('Inicio');

// new Promise((resolve, reject) => {
//   console.log('Cuerpo de la promesa');
//   resolve('Promesa resuelta')
//   // reject('Promesa resuelta con error')
// })
//   // .then(res => console.log(res))
//   .catch(err => console.log(err))

// console.log('Fin');



// //////////////////////////
// ARGUMENTOS DE PROMESAS //
// //////////////////////////

// import { getHeroById } from './bases/08-imp-exp'

// const getHeroByIdAsync = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const heroe = getHeroById(id)
//         if (heroe) {
//           resolve(heroe)
//         } else {
//           reject(console.log('error'))
//         }
//     },1000)
//   })
// }

// getHeroByIdAsync(1)
//   .then(res => console.log(res))
//   .catch(err=> console.log(err))


// ////////////
// FETCH API//
// ///////////

// const apiKey = '9SldW3E7UuJFvREhZkmt6vmXteIIRk1G'

// const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

// fetch(apiUrl)
//   .then(res => res.json())
//   .then(({ data }) => {
//     const { url } = data.images.original
//   })



//   ///////////////
//   / AXIOS   ///
// //////////////

import axios from "axios";
const apiKey = '9SldW3E7UuJFvREhZkmt6vmXteIIRk1G'
const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`

const apiGif = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
  params: {
    apiKey: apiKey
  }
})


// apiGif.get('/random')
//   .then(res => {
//     console.log(res);
//     const {url} = res.data.data.images.original
//     const img = document.createElement('img')
//     img.src = url
//     console.log(img);
//     document.body.append(img)
//   })






// /////////////////
// ///ASYNC AWAIT///
// ////////////////

const getImg = async() =>{
  try {
    const {data} = await apiGif.get('/random')
    const {url} = data.data.images.original

    const img = document.createElement('img')
    
    img.src = url

    document.body.append(img)



  } catch (error) {
    console.log(error)
    throw error
  }
}

getImg()

//   //////////////////////
//   / TERNARIO FULL NECK///
// /////////////////////

// let firstName
// let lastName = 'Thevenet'

// // console.log(`${firstName ||'No fist name'} ${lastName||'No last name'}`)

// const isActive = true
// const message = isActive ? 'Activo' : 'Inactivo'

// console.log(message);