### Desafio Front
Objetivo: Desenvolver um site para geração de mensagens dinâmicas.

#### Requisitos
- O site deve cadastrar e remover dinâmicamente nome de variáveis, por exemplo: ```{{name}}```, ou ```{{email}}```.

- O site deve cadastrar e remover diversos templates de mensagens dinâmicamente. Como por exemplo: ```Oi {{name}}!``` ou ```Olá {{name}}, por favor verifique seu {{email}}```.

- O site deve pegar uma lista de contatos com qualquer atributo, como nos exemplo abaixo: 
    ```
    // Exemplo de uma lista de contatos
    [
        {
            "name": "Nome",
            "cellphone": "557122224444"
        },
        {
            "name": "Nome",
            "cellphone": "557122224444",
            "email": "email@gmail.com"
        },
        {
            "name": "Nome",
            "cellphone": "557122224444",
            "email": "email@gmail.com"
            "qualquer": "qualquer"
        }
    ]
    ```

- O site deve ter um botão de "Gerar mensagens", que gera uma mensagem através de um template escolhido aleatoriamente entre os templates disponíveis.

- Além de funcional, o site deve ser o mais bonito possível.

- O site deve ser responsivo






#### Requisitos
- Utilizar React
- Utilizar Componentes funcionais
- Criar componentes quando necessário

#### Dicas
- Utilize o máximo de conceitos do React possíveis
- Type é preferível
- Utilize o git como se estivesse desenvolvendo em equipe
