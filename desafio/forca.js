class Forca {

  constructor (palavraSecreta = "") {
    this.vida = 6;
    this.palavraSecreta = palavraSecreta;
    this.palavra = new Array(palavraSecreta.length).fill('_');
    this.letrasChutadas = [];
  }
  
  chutar(letra) 
  {
    if(letra.length === 1) 
    {
      if(!this.letrasChutadas.includes(letra))
      {
        this.letrasChutadas.push(letra);
        
        if(this.palavraSecreta.includes(letra))
        {
          for(let i = 0; i < this.palavraSecreta.length; i++)
          {
            if(this.palavraSecreta[i] === letra)
            {
              this.palavra[i] = letra
            }
          }
        }
        else
          this.vida--; 
      }
    }
  }

  buscarEstado() {
    if(this.palavra.join('') == this.palavraSecreta)
      return "ganhou"
    else if(this.vida <= 0)
      return "perdeu"
    else if(this.palavra !== this.palavraSecreta && this.vida > 0)
      return "aguardando chute"
  }

  buscarDadosDoJogo() {
      return {
        letrasChutadas: this.letrasChutadas, 
        vidas: this.vida, 
        palavra: this.palavra 
      }
  }
}

module.exports = Forca;
