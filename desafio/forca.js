class Forca {

  constructor (palavraSecreta = "") {
    this.vida = 6;
    this.palavraSecreta =  new Array(...palavraSecreta);
    this.palavra = new Array(palavraSecreta.length).fill('_');
    this.letrasChutadas = [];
  }
  
  chutar(letra) 
  {
    if(this.letraValida(letra)) 
    {
        this.letrasChutadas.push(letra);

        this.letraCorreta(letra) ? this.adicionarLetraNaPalavra(letra) : this.vida--;
    }
  }

  adicionarLetraNaPalavra(chute) {
    this.palavraSecreta.forEach((l, i) => {
      this.palavra[i] = l === chute ? chute : this.palavra[i];
    });
  }

  letraCorreta(chute) {
    return this.palavraSecreta.includes(chute);
  }

  letraValida(chute) {
    return chute.length === 1 && !this.letrasChutadas.includes(chute)
  }


  buscarEstado() {
    if(this.palavra.join('') == this.palavraSecreta.join(''))
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
