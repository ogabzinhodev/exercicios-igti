//Aplicação: Pegar 
/* Promise.all([
  new Promise((resolve) => setTimeout(() => resolve([], 2800))),
  new Promise((resolve,reject) => setTimeout(() => reject([10]), 1200)),
  new Promise((resolve) => setTimeout(() => resolve([3, 4], 800))),
])
  .then((results) => results.length)
  .then((size) => console.info(size))
  .catch((err) => console.error(err));
 */

  const p5 = Promise.race([new Promise((resolve) => setTimeout(resolve, 2000, "P1")),
new Promise((resolve,reject) => setTimeout(reject, 3000, "P2"))])

p5.then(result => console.log(result))
p5.catch((err) => console.error(err))