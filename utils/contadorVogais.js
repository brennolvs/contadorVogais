export const contadorVogais = (palavra) => {
    const vogais = 'AEIOUaeiou';
    let count = 0;
    
    for (let caracteres of palavra) {
      if (vogais.includes(caracteres)) {
        count++;
      }
    }
    
    return count;
  };
  