

//es una forma de petición asíncrona
//hay consenso en usar resolve y reject como estándar
//para definir si salió bien o mal

//promise requiere un valor a resolver 
//y una razón por la cual la promesa no fue cumplicda


//supongamos que tenemos un proceso que dura 2 segundos
//como una solicitud a una base de datos, por ejemplo

let x = 10

const promesa = new Promise((resolve, reject)=>{
    setTimeout(() =>{
        x = x * 3 + 2;
        console.log('2. Proceso terminado')
        resolve(x)
    }, 2000)
})

console.log('1. Proceso iniciado')

//resolve => then
//reject => catch

promesa.then(res =>{
    console.log('3. El resultado es: ' + res)
})

promesa.catch(error =>{
    console.error(error);
})





