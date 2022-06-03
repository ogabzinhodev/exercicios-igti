const carModel = ["Onix", "T-Cross", "Hb20", "Palio"];

// Outro exemplo:




const carModelAll = {
  allModel: {
    Fiat: ["Palio", "Cronos", "Toro"],
    Volksvagem: ["Gol", "Ups", "Nivus", "Tiguan"],
    Chevrolet: ["Onix", "Tracker", "Corsa"],
  },
  [Symbol.iterator]() {
    const brands = Object.values(this.allModel);    
    
    let currentModelIndex = 0;
    let currentBrandIndex = 0;
    return {
      next() {
          //Lista de todos os Modelos da Marca

          const models = brands[currentBrandIndex];
        //Verifico se já navegou em todos os Modelos da Marca e passa para a próxima
          if(!(currentModelIndex<models.length)){
              currentBrandIndex++;
              currentModelIndex = 0;
          }

          //Verificar se navegou em todas as marcas
          if(!(currentBrandIndex<models.length)){
             return {
                 value: undefined,
                 done: true
             }
          }

        return {
          value: brands[currentBrandIndex][currentModelIndex++],
          done: false,
        };
      },
    };
  },
};

//Como lidar e iterar? Criar um Iterator

for (const car of carModelAll){
    console.log(car)
}  
