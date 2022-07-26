class Forca {
  #palavraSecreta;
  #vida;
  #palavra;
  #letrasChutadas;

  constructor (palavraSecreta = "") {
    this.#palavraSecreta =  new Array(...palavraSecreta);
    this.#vida = 6;
    this.#palavra = new Array(palavraSecreta.length).fill('_');
    this.#letrasChutadas = [];
  }
  
  chutar(letra) 
  {
    if(this.#éLetraValida(letra)) 
    {
      this.#letrasChutadas.push(letra);
      this.#éLetraCorreta(letra) ? this.#adicionarLetraNaPalavra(letra) : this.#vida--;
    }
  }

  buscarEstado() {
    if(this.#palavra.join('') == this.#palavraSecreta.join(''))
      return "ganhou";

    else if(this.#vida <= 0)
      return "perdeu";

    else
      return "aguardando chute";
  }

  buscarDadosDoJogo() {
      return {
        letrasChutadas: this.#letrasChutadas, 
        vidas: this.#vida, 
        palavra: this.#palavra
      };
  }
  
  #adicionarLetraNaPalavra(chute) {
    this.#palavraSecreta.forEach((l, i) => {
      this.#palavra[i] = l === chute ? chute : this.#palavra[i];
    });
  }

  #éLetraCorreta(chute) {
    return this.#palavraSecreta.includes(chute);
  }

  #éLetraValida(chute) {
    return chute.length === 1 && !this.#letrasChutadas.includes(chute);
  }
}

module.exports = Forca;
