console.log("Início")

setTimeout(() => {console.log("Aguarde")}, 5000)

console.log("Fim!")
Promise.resolve("Sucess").then((value) => {console.log(value)})