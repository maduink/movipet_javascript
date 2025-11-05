Entrega Final

📝 Objetivo do Projeto
Esta entrega foca na utilização de JavaScript para introduzir interatividade e validação de dados em formulários. O foco principal é a Manipulação do DOM e a criação de um sistema robusto para verificar a consistência das informações fornecidas pelo usuário, em especial a data de nascimento.

💡 Funcionalidades Chave (JavaScript)
Todo o código foi organizado em funções coesas, seguindo o princípio de modularidade.

Validação de Idade e Data (checaIdade)
Esta função é o motor de validação do projeto, garantindo a consistência dos dados de entrada:

Pré-processamento: Limpa a string de entrada (YYYY-MM-DD ou similar) removendo hífens para padronizar o formato.
Regra de Negócio (Maioridade): Verifica se o usuário tem, no mínimo, 18 anos completos na data atual. A lógica é rigorosa, checando ano, mês e dia para determinar a maioridade de forma precisa.
Filtro de Consistência: Inclui uma checagem básica para evitar datas de nascimento absurdamente antigas (getAno < 1885), aumentando a confiabilidade dos dados.

Feedback Visual e Manipulação do DOM
As funções a seguir gerenciam a experiência do usuário, adicionando e removendo mensagens de erro em tempo real:

#### addMensagens()
Criação Dinâmica: Cria um novo elemento <p> no DOM.
Injeção Contextual: Insere a mensagem de erro ("Data de nascimento inválida...") após o campo (#nascimento) que está sendo validado.
Identificação: Adiciona a classe .invalido para estilização (CSS) e fácil rastreamento pelo JavaScript.

#### removeElementos()
Limpeza da UI: Responsável por localizar todos os elementos com a classe .invalido e removê-los do DOM. Isso garante que a mensagem de erro só seja exibida enquanto a validação falhar, limpando a tela para uma nova tentativa correta.

📂 Estrutura e Modularidade
O projeto está organizado com a separação clara de responsabilidades:
