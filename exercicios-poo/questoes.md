Fonte: [Repositório](https://github.com/Keyllian7/147-Exercicios-com-POO) de [Keyllian7](https://github.com/Keyllian7)

Lista com 147 exercícios, com 7 exercícios para cada sub-tópico, organizados do mais fácil ao mais avançado:

## **1. Conceitos Fundamentais**

### **1.1. Introdução à POO**
#### Classes e Objetos
1. Crie uma classe chamada `Pessoa` com os atributos `nome` e `idade`. Instancie um objeto dessa classe e imprima os atributos.
2. Crie uma classe `Carro` com atributos `marca` e `modelo`. Instancie um objeto e modifique os atributos.
3. Crie uma classe `Produto` com atributos `nome` e `preco`. Crie 3 instâncias dessa classe e mostre o preço total dos produtos.
4. Crie uma classe `Livro` com atributos `titulo` e `autor`. Instancie três livros e mostre o nome do autor de cada um.
5. Crie uma classe `Aluno` com atributos `nome`, `nota1` e `nota2`. Implemente um método que calcula a média.
6. Crie uma classe `Funcionario` com atributos `nome`, `salario` e um método que calcula o salário anual.
7. Crie uma classe `ContaBancaria` com atributos `titular`, `saldo` e `numero`. Adicione um método para depositar dinheiro.

#### Atributos e Métodos
8. Crie uma classe `Cachorro` com atributos `nome` e `raca`. Adicione um método `latir()` que imprime "Au Au".
9. Crie uma classe `Pessoa` com atributos `nome` e `idade` e adicione um método `cumprimentar()`.
10. Crie uma classe `Carro` com o método `acelerar()`, que aumenta a velocidade, e `frear()`, que diminui.
11. Crie uma classe `Calculadora` com os métodos `somar()`, `subtrair()`, `multiplicar()`, e `dividir()`.
12. Crie uma classe `Produto` com o método `calcular_desconto()`, que recebe um valor de desconto e retorna o preço final.
13. Crie uma classe `Funcionario` com um método que aumenta o salário em uma porcentagem.
14. Crie uma classe `Pessoa` com um método que compara a idade de duas pessoas e retorna quem é mais velho.

#### Instanciamento
15. Crie uma classe `Carro` e instancie três carros com diferentes atributos.
16. Crie uma classe `Cachorro` e instancie dois cachorros, mostrando seus atributos.
17. Crie uma classe `Funcionario` e instancie 5 funcionários com salários diferentes.
18. Instancie 4 objetos `Aluno`, cada um com notas diferentes, e mostre a média de cada aluno.
19. Instancie três objetos `ContaBancaria` com diferentes saldos e imprima os saldos de cada um.
20. Crie uma classe `Veiculo` com os atributos `marca` e `ano` e instancie três veículos diferentes.
21. Instancie três objetos `Pessoa` e adicione um método para que uma pessoa apresente a outra.

### **1.2. Encapsulamento**
#### Visibilidade
22. Crie uma classe `ContaBancaria` com um atributo privado `saldo` e métodos públicos para depositar e sacar.
23. Modifique a classe `ContaBancaria` para adicionar um método público `getSaldo()` que retorna o saldo atual.
24. Crie uma classe `Produto` com atributos `nome` e `preco`. Defina `preco` como privado e adicione métodos para acessar e modificar o preço.
25. Crie uma classe `Pessoa` com atributos privados `nome` e `idade`. Adicione métodos `getNome()` e `getIdade()` para acessar esses atributos.
26. Crie uma classe `Funcionario` com um atributo privado `salario`. Adicione um método público para aumentar o salário.
27. Crie uma classe `Carro` com o atributo privado `velocidade`. Adicione um método para modificar e outro para acessar a velocidade.
28. Crie uma classe `Conta` com o atributo privado `saldo`. Faça métodos para verificar e alterar o saldo, garantindo que não fique negativo.

#### Getters e Setters
29. Crie uma classe `Aluno` com atributos privados `nome` e `nota`. Adicione métodos `getNome()` e `setNome()`.
30. Crie uma classe `Produto` com atributos `nome` e `preco`. Adicione métodos `getPreco()` e `setPreco()`.
31. Crie uma classe `Funcionario` com atributo privado `salario` e métodos `getSalario()` e `setSalario()`.
32. Crie uma classe `Pessoa` com atributos `nome` e `idade`. Adicione métodos `getIdade()` e `setIdade()`, garantindo que a idade seja maior que 0.
33. Crie uma classe `ContaBancaria` com o atributo `saldo`. Adicione métodos para sacar e depositar dinheiro com validação no `setSaldo()`.
34. Crie uma classe `Veiculo` com o atributo `velocidade`. Adicione métodos `getVelocidade()` e `setVelocidade()`, validando que a velocidade seja maior que zero.
35. Crie uma classe `Casa` com o atributo `preco` e métodos `getPreco()` e `setPreco()`, impedindo que o preço seja negativo.

### **1.3. Herança**
#### Conceito de Herança
36. Crie uma classe `Animal` com atributos `nome` e `idade`. Crie uma classe `Cachorro` que herda de `Animal` e adiciona um método `latir()`.
37. Crie uma classe `Veiculo` com atributos `marca` e `ano`. Crie uma classe `Carro` que herda de `Veiculo` e adiciona o atributo `modelo`.
38. Crie uma classe `Funcionario` com os atributos `nome` e `salario`. Crie subclasses `Gerente` e `Operario`, cada uma com atributos específicos.
39. Crie uma classe `Forma` com o método `calcularArea()`. Crie subclasses `Circulo` e `Quadrado` que implementam esse método.
40. Crie uma classe `Pessoa` e as subclasses `PessoaFisica` e `PessoaJuridica`, cada uma com atributos próprios.
41. Crie uma classe `Conta` com os métodos `depositar()` e `sacar()`. Crie subclasses `ContaCorrente` e `ContaPoupanca` com taxas específicas.
42. Crie uma classe `Jogador` com os atributos `nome` e `posicao`. Crie subclasses `Atacante` e `Defensor` com métodos específicos.

#### Sobrescrita de Métodos
43. Crie uma classe `Animal` com o método `emitirSom()`. Crie as subclasses `Cachorro` e `Gato`, sobrescrevendo o método.
44. Crie uma classe `Funcionario` com o método `calcularBonus()`. Crie subclasses `Gerente` e `Assistente`, cada uma com seu cálculo de bônus.
45. Crie uma classe `Veiculo` com o método `acelerar()`. Crie as subclasses `Moto` e `Carro`, cada uma com sua própria aceleração.
46. Crie uma classe `ContaBancaria` com o método `sacar()`. Crie as subclasses `ContaCorrente` e `ContaPoupanca` com diferentes taxas de saque.
47. Crie uma classe `Pessoa` com o método `falar()`. Crie subclasses `Aluno` e `Professor`, sobrescrevendo o método com diferentes falas.
48. Crie uma classe `Produto` com o método `calcularPrecoFinal()`. Crie subclasses `ProdutoFisico` e `ProdutoDigital`, cada uma com seu cálculo.
49. Crie uma classe `Funcionario` com o método `trabalhar()`. Crie subclasses `Gerente` e `Operario`, cada uma com seu estilo de trabalho.

### **1.4. Polimorfismo**
#### Polimorfismo em Tempo de Compilação (Sobrecarga)
50. Crie uma classe `Calculadora` com métodos `somar(int a, int b)` e `somar(double a, double b)`.
51. Crie uma classe `Mensagem` com métodos `enviar(String mensagem)` e `enviar(String mensagem, int numero)`.
52. Crie uma classe `Operacao` com métodos `executar(int a, int b)` e `executar(double a, double b)`.
53. Crie uma classe `Relatorio` com métodos `gerar(String titulo)` e `gerar(String titulo, String autor)`.
54. Crie uma classe `Aluno` com métodos `matricular(String curso)` e `matricular(String curso, String turno)`.
55. Crie uma classe `Produto` com métodos `calcularPreco(int quantidade)` e `calcularPreco(int quantidade, double desconto)`.
56. Crie uma classe `Funcionario` com métodos `aumentarSalario(double valor)` e `aumentarSalario(double valor, String motivo)`.

#### Polimorfismo em Tempo de Execução (Sobrescrita)
57. Crie uma classe `Animal` com o método `emitirSom()`. Instancie um `Cachorro` e um `Gato` e veja o comportamento polimórfico.
58. Crie

 uma classe `Veiculo` com o método `acelerar()`. Instancie uma `Moto` e um `Carro` e veja como o método se comporta.
59. Crie uma classe `Funcionario` com o método `calcularSalario()`. Instancie um `Gerente` e um `Operario` e veja o cálculo polimórfico de salário.
60. Crie uma classe `Conta` com o método `sacar()`. Instancie uma `ContaCorrente` e uma `ContaPoupanca` e veja o método `sacar()`.
61. Crie uma classe `Produto` com o método `calcularPrecoFinal()`. Instancie um `ProdutoFisico` e um `ProdutoDigital` e veja como o preço é calculado.
62. Crie uma classe `Funcionario` com o método `trabalhar()`. Instancie um `Gerente` e um `Operario` e veja os métodos diferentes.
63. Crie uma classe `Jogador` com o método `jogar()`. Instancie um `Atacante` e um `Defensor` e veja como o método é implementado.

---

## **2. POO Intermediário**

### **2.1. Abstração**
#### Criação de Classes Abstratas
64. Crie uma classe abstrata `Funcionario` com um método `calcularSalario()`. Implemente as subclasses `Gerente` e `Assistente`.
65. Crie uma classe abstrata `Animal` com o método `emitirSom()`. Crie subclasses `Cachorro` e `Gato` que implementam o método.
66. Crie uma classe abstrata `Veiculo` com o método `acelerar()`. Crie as subclasses `Moto` e `Carro` que implementam o método.
67. Crie uma classe abstrata `Forma` com o método `calcularArea()`. Crie subclasses `Circulo` e `Quadrado` que implementam o método.
68. Crie uma classe abstrata `Conta` com os métodos `sacar()` e `depositar()`. Crie subclasses `ContaCorrente` e `ContaPoupanca`.
69. Crie uma classe abstrata `Documento` com o método `imprimir()`. Crie subclasses `Relatorio` e `Contrato`.
70. Crie uma classe abstrata `Jogo` com os métodos `iniciar()` e `terminar()`. Crie subclasses `JogoFutebol` e `JogoXadrez`.

#### Implementação de Interfaces
71. Crie uma interface `Pagamento` com os métodos `realizarPagamento()` e `cancelarPagamento()`. Implemente as classes `PagamentoCartao` e `PagamentoBoleto`.
72. Crie uma interface `OperacaoMatematica` com os métodos `somar()` e `subtrair()`. Implemente as classes `CalculadoraSimples` e `CalculadoraCientifica`.
73. Crie uma interface `FormaGeometrica` com o método `calcularArea()`. Implemente as classes `Circulo` e `Quadrado`.
74. Crie uma interface `Transporte` com os métodos `iniciar()` e `parar()`. Implemente as classes `Carro` e `Aviao`.
75. Crie uma interface `Imposto` com o método `calcularImposto()`. Implemente as classes `ImpostoFederal` e `ImpostoEstadual`.
76. Crie uma interface `Arquivo` com o método `abrir()`. Implemente as classes `ArquivoPDF` e `ArquivoTXT`.
77. Crie uma interface `Jogo` com os métodos `iniciar()` e `terminar()`. Implemente as classes `JogoDeCorrida` e `JogoDeLuta`.

### **2.2. Relação Entre Classes**
#### Associação
78. Crie uma classe `Pessoa` que tem uma relação de associação com a classe `Endereco`. Instancie uma pessoa e um endereço.
79. Crie uma classe `Livro` que tem uma relação de associação com a classe `Autor`. Instancie um autor e associe a um livro.
80. Crie uma classe `Carro` que tem uma relação de associação com a classe `Motor`. Instancie um carro com um motor específico.
81. Crie uma classe `Empresa` que tem uma relação de associação com a classe `Funcionario`. Adicione e remova funcionários da empresa.
82. Crie uma classe `Time` que tem uma relação de associação com a classe `Jogador`. Adicione jogadores ao time e mostre seus nomes.
83. Crie uma classe `Cliente` que tem uma relação de associação com a classe `Pedido`. Crie clientes e associe pedidos a eles.
84. Crie uma classe `Aluno` que tem uma relação de associação com a classe `Curso`. Adicione alunos a cursos e mostre os cursos que eles frequentam.

#### Agregação
85. Crie uma classe `Departamento` que tem uma relação de agregação com a classe `Funcionario`. Um departamento pode ter vários funcionários.
86. Crie uma classe `SalaDeAula` que tem uma relação de agregação com a classe `Aluno`. Uma sala de aula pode ter vários alunos.
87. Crie uma classe `Turma` que tem uma relação de agregação com a classe `Professor`. Uma turma pode ter vários professores.
88. Crie uma classe `Biblioteca` que tem uma relação de agregação com a classe `Livro`. Uma biblioteca pode conter muitos livros.
89. Crie uma classe `Projeto` que tem uma relação de agregação com a classe `Tarefa`. Um projeto pode conter várias tarefas.
90. Crie uma classe `Equipe` que tem uma relação de agregação com a classe `Membro`. Uma equipe pode ter vários membros.
91. Crie uma classe `Construtora` que tem uma relação de agregação com a classe `Edificio`. Uma construtora pode construir vários edifícios.

#### Composição
92. Crie uma classe `Casa` que tem uma relação de composição com a classe `Comodo`. A casa possui vários cômodos que só existem dentro dela.
93. Crie uma classe `Computador` que tem uma relação de composição com a classe `PlacaMae`. O computador só existe se tiver uma placa-mãe.
94. Crie uma classe `Universidade` que tem uma relação de composição com a classe `Faculdade`. A faculdade só existe dentro da universidade.
95. Crie uma classe `CorpoHumano` que tem uma relação de composição com a classe `Coração`. O coração só existe dentro do corpo.
96. Crie uma classe `Carro` que tem uma relação de composição com a classe `Motor`. O motor só existe dentro do carro.
97. Crie uma classe `Celular` que tem uma relação de composição com a classe `Bateria`. A bateria só existe dentro do celular.
98. Crie uma classe `Empresa` que tem uma relação de composição com a classe `Setor`. O setor só existe dentro da empresa.

---

### **2.3. Sobrecarga de Operadores**
99. Implemente a sobrecarga do operador `+` para somar dois objetos da classe `NumeroComplexo`.
100. Crie uma classe `Pessoa` e sobrecarregue o operador `==` para comparar duas pessoas com base no nome e idade.
101. Crie uma classe `Ponto` e sobrecarregue o operador `-` para calcular a distância entre dois pontos.
102. Implemente a sobrecarga do operador `*` para multiplicar dois objetos da classe `Matriz`.
103. Crie uma classe `Fracao` e sobrecarregue o operador `/` para dividir duas frações.
104. Crie uma classe `Produto` e sobrecarregue o operador `==` para comparar se dois produtos têm o mesmo preço.
105. Implemente a sobrecarga do operador `>` para comparar o tamanho de dois objetos `Retangulo` com base em sua área.

### **2.4. Construtores e Destrutores**
106. Crie uma classe `Pessoa` com um construtor que inicializa `nome` e `idade` e um destrutor que imprime uma mensagem quando o objeto é destruído.
107. Implemente uma classe `Carro` com um construtor que inicializa `marca` e `modelo`. Adicione um destrutor que imprime "Carro destruído".
108. Crie uma classe `Livro` com um construtor que inicializa `titulo` e `autor`. Adicione um destrutor que imprime "Livro removido".
109. Implemente uma classe `Produto` com um construtor que inicializa `preco` e um destrutor que exibe o preço ao destruir o objeto.
110. Crie uma classe `Documento` que abre um arquivo no construtor e fecha no destrutor.
111. Crie uma classe `Banco` que inicializa uma lista de contas no construtor e esvazia a lista no destrutor.
112. Crie uma classe `Jogo` com um construtor que inicializa o nome do jogo e um destrutor que salva o progresso.

### **2.5. Exceções e Tratamento de Erros**
113. Crie um programa que pede ao usuário dois números e realiza a divisão. Trate a exceção de divisão por zero.
114. Implemente um método que lê um arquivo e trate a exceção caso o arquivo não seja encontrado.
115. Crie uma classe `ContaBancaria` que lança uma exceção personalizada se o saldo for insuficiente ao sacar.
116.

 Crie um programa que pede ao usuário um número inteiro e trate a exceção se o valor não for numérico.
117. Crie uma função que lança uma exceção personalizada se o nome do usuário for muito curto (menos de 3 caracteres).
118. Implemente um sistema de login que lança uma exceção personalizada se a senha for incorreta.
119. Crie um sistema de carrinho de compras que lança exceções se o produto não estiver em estoque.

---

## **3. POO Avançado**

### **3.1. Interfaces Gráficas (GUI)**
120. Crie uma interface gráfica simples para um formulário de cadastro de usuários, com campos de texto e um botão de enviar.
121. Crie uma interface gráfica para um sistema de login com validação de usuário e senha.
122. Implemente uma calculadora com interface gráfica, incluindo botões para números e operações básicas.
123. Crie uma interface gráfica que permite o usuário desenhar formas geométricas simples como retângulos e círculos.
124. Crie uma interface gráfica para um sistema de agenda onde o usuário pode adicionar, remover e visualizar compromissos.
125. Implemente uma interface gráfica para um jogo de adivinhação, onde o usuário deve tentar acertar um número.
126. Crie uma interface gráfica que simule um carrinho de compras, permitindo adicionar e remover itens.

### **3.2. Persistência de Dados**
127. Implemente um sistema de cadastro de produtos que salva os dados em um arquivo texto.
128. Crie um programa que lê e escreve informações de usuários em um arquivo JSON.
129. Crie um sistema de gestão de funcionários que armazena os dados em um banco de dados relacional.
130. Implemente um sistema de agenda que salva os compromissos em um arquivo CSV.
131. Crie um programa que salva e carrega o progresso de um jogo em um arquivo binário.
132. Implemente um sistema de login que armazena e valida os dados de usuários em um banco de dados.
133. Crie um programa que faz backup dos dados de um sistema de contas bancárias em um arquivo de texto.

### **3.3. Padrões de Projeto**
#### Singleton
134. Crie uma classe `Logger` que implementa o padrão Singleton, garantindo que apenas uma instância do logger seja criada.
135. Implemente uma classe `BancoDeDados` que segue o padrão Singleton para garantir que haja apenas uma conexão com o banco.
136. Crie uma classe `Config` que utiliza o padrão Singleton para armazenar as configurações da aplicação.
137. Implemente uma classe `GerenciadorDeSessao` que segue o padrão Singleton para controlar a sessão de usuário.
138. Crie uma classe `FabricaDeConexao` que utiliza o padrão Singleton para gerenciar conexões com o banco de dados.
139. Implemente uma classe `Cache` que segue o padrão Singleton para armazenar dados em cache.
140. Crie uma classe `GerenciadorDeEventos` que utiliza o padrão Singleton para gerenciar os eventos da aplicação.

#### Factory Method
141. Implemente uma classe `FabricaDeCarros` com um método que cria diferentes tipos de carros.
142. Crie uma classe `FabricaDeDocumentos` com um método que cria diferentes tipos de documentos.
143. Implemente uma classe `FabricaDeAnimais` com um método que cria diferentes tipos de animais.
144. Crie uma classe `FabricaDeProdutos` com um método que cria diferentes tipos de produtos.
145. Implemente uma classe `FabricaDeContas` com um método que cria diferentes tipos de contas bancárias.
146. Crie uma classe `FabricaDeFormas` com um método que cria diferentes tipos de formas geométricas.
147. Implemente uma classe `FabricaDeUsuarios` com um método que cria diferentes tipos de usuários.