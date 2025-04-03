# SA02 Somativa

Este repositório contém três projetos distintos desenvolvidos para a avaliação somativa SA02. Cada projeto possui funcionalidades específicas e foi implementado com HTML, CSS e JavaScript. Abaixo, você encontrará uma descrição detalhada de cada projeto e seu funcionamento.

---

## Projeto 1: Piano Simples (ProjetoFacil)

Este projeto simula um piano virtual onde o usuário pode tocar notas musicais utilizando o teclado.

### Funcionalidades:
- Cada tecla do piano é mapeada para uma tecla do teclado do computador.
- Ao pressionar uma tecla, o som correspondente à nota é reproduzido.
- Efeitos visuais são aplicados às teclas pressionadas para indicar interação.

### Arquivos principais:
- **[index.html](projetoFacil/index.html)**: Página principal contendo o layout do piano.
- **[script.js](projetoFacil/script.js)**: Contém a lógica para detectar as teclas pressionadas, reproduzir os sons e aplicar os efeitos visuais.
- **[style.css](projetoFacil/style.css)**: Estilização do piano, incluindo as teclas e os efeitos visuais.


---

## Projeto 2: Temporizador e Cronômetro (ProjetoMedio)

Este projeto oferece duas funcionalidades principais: um **temporizador** e um **cronômetro**.

### Funcionalidades:
#### Temporizador:
- O usuário pode configurar horas, minutos e segundos.
- O temporizador exibe o tempo restante e emite um som quando o tempo se esgota.
- Possui botões para iniciar, pausar e parar o temporizador.

#### Cronômetro:
- O cronômetro registra o tempo decorrido em minutos, segundos e milissegundos.
- Possui botões para iniciar, parar e zerar o cronômetro.

### Arquivos principais:
- **[index.html](ProjetoMedio/index.html)**: Página inicial para selecionar entre o Temporizador e o Cronômetro.
- **[temporizador.html](ProjetoMedio/temporizador.html)**: Página do Temporizador.
- **[cronometro.html](ProjetoMedio/cronometro.html)**: Página do Cronômetro.
- **[script.js](ProjetoMedio/script.js)**: Contém a lógica do Temporizador, incluindo cálculos de tempo e controle de estado.
- **[script2.js](ProjetoMedio/script2.js)**: Contém a lógica do Cronômetro, incluindo incrementos de tempo e formatação.
- **[style.css](ProjetoMedio/style.css)**: Estilização das páginas, incluindo botões, containers e layout geral.

---

## Projeto 3: Pedra, Papel e Tesoura (ProjetoDificil)

Este projeto implementa o clássico jogo Pedra, Papel e Tesoura com dois modos de jogo: **Modo Normal** e **Modo Speedrun**.

### Funcionalidades:
- **Modo Normal**: O jogador escolhe entre Pedra, Papel ou Tesoura e compete contra o computador, que faz uma escolha aleatória.
- **Modo Speedrun**: O jogador tem apenas 3 segundos para fazer sua escolha. Caso o tempo se esgote, o jogador perde automaticamente.
- Feedback visual e textual é fornecido para indicar o resultado da rodada (vitória, derrota ou empate).
- Transições suaves para as imagens das escolhas do jogador e do computador.

### Arquivos principais:
- **[index.html](ProjetoDificil/index.html)**: Página inicial para selecionar o modo de jogo.
- **[pages/normal.html](ProjetoDificil/pages/normal.html)**: Página do Modo Normal.
- **[pages/speedrun.html](ProjetoDificil/pages/speedrun.html)**: Página do Modo Speedrun.
- **[script.js](ProjetoDificil/script.js)**: Contém a lógica do jogo, incluindo a escolha aleatória do computador, verificação de resultados e controle do modo Speedrun.
- **[style.css](ProjetoDificil/style.css)**: Estilização das páginas, incluindo botões, containers e efeitos visuais.

---

### Desafios enfrentados
- Garantir a compatibilidade entre navegadores para que os projetos funcionem corretamente em diferentes ambientes.
- Implementar a reprodução de sons no projeto do piano, considerando possíveis atrasos ou falhas em dispositivos diferentes.
- Sincronizar o temporizador e o cronômetro com precisão, evitando discrepâncias no cálculo do tempo.
- Criar uma lógica eficiente para o jogo Pedra, Papel e Tesoura, especialmente no Modo Speedrun, onde o tempo é um fator crítico.
- Desenvolver interfaces responsivas e intuitivas para melhorar a experiência do usuário em dispositivos móveis e desktops.
- Gerenciar múltiplos arquivos JavaScript e CSS, garantindo que as funcionalidades e estilos não entrem em conflito.
- Testar e corrigir bugs relacionados à interação do usuário, como cliques rápidos ou entradas inesperadas.
- Implementar transições visuais suaves sem comprometer o desempenho dos projetos.
- Lidar com a aleatoriedade no jogo Pedra, Papel e Tesoura, garantindo resultados justos e imprevisíveis.
- Documentar o código de forma clara para facilitar a manutenção e o entendimento futuro.

## Como executar os projetos:
1. Clone este repositório em sua máquina local.
2. Navegue até o diretório do projeto que deseja executar.
3. Abra o arquivo `index.html` correspondente no navegador para iniciar o projeto.

Cada projeto foi desenvolvido com foco em interatividade e usabilidade, utilizando tecnologias web modernas.