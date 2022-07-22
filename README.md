# StartDB_Desafio


# Propriedades:
    
- palavraSecreta: Se refere a palavra que o jogador precisa descobrir para ganhar o jogo;

- vida: A quantidade de chances (vidas) que o jogador tem. A cada erro essa variavel é diminuida;

- palavra: Se refere a palavra constituida pelas letras acertadas do jogador. No lugar das letras ainda não encontradas é posto um traço( _ );

- letras chutadas: Estrutura que recebe as letras já chutadas pelo jogador.

# Métodos:

## **chutar(letra: string):** 

-  *Recebe o chute (letra) do usuario e o processa.*

>### chutar é um método de alto nível, responsável por chamar métodos de níveis menores como: 

## *métodos de retorno booleano*:

-       éLetraValida: responsável por validar o chute do usuário;

-       éLetraCorreta: responsável por verificar se o chute do usuário está correto;
 
## *método sem retorno*:
    
-       adicionarLetraNaPalavara: responsável por adicionar a letra inserida pelo usuário no atributo palavra, caso a mesma estiver correta.


## **buscarEstado():**
-   *Verifica o estado do jogo e retorna um estado (ganhou, perdeu ou aguardando chute)*

## **buscarDadosDOJogo()**
-   *Retorna as condições que o jogo se encontra, retornando a vida e letras chutadas do jogador junto a como a palavra se encontra*;

 
