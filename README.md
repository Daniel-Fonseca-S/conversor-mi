*English*
***
# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

After cloning the repository, open the directory with a terminal and execute the command:

### `npm install`

This command line will install all project dependencies/modules listed in the "package.json" file.

To initialize the project locally, with Node installed, open the current directory with a terminal and execute the command down below:

### `npm start`

Then follow the terminal instructions.
This command will run the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to visualize it in the browser.\
The page will apply the changes if you make edits.
Any lint errors could be seen in the development console.

<br>
<br>
<br>

*Portuguese* 

***

# Inicializando

Este projeto usa bootstrap com [Create React App](https://github.com/facebook/create-react-app).

Ao clonar o repositório, abra o diretório em um terminal e execute o comando:

### `npm install`

Este comando irá instalar todas as dependências/modulos do projeto, localizadas no arquivo "package.json"
 
Para incializar o projeto localmente em sua máquina, com o Node instalado, basta abrir o diretório com um terminal e execute o comando:
 
### `npm start`

Logo após, siga as intruções do terminal. Esse comando irá executar a aplicação no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para vizualiza-la no navegador.

A página irá recarregar quando os arquivos do diretório forem editados.\
Os erros aparecerão no console do desenvolvedor.

<br>

# Diretórios

> ### Diretório "public"
> 
>Contem os arquivos referentes a base do site, como visualização no navegador, título, ícone (favicon), linguagem e os meta-dados.

> ### Diretório "src" (source)
> 
> É nessa pasta que se encontram os assets, componentes, páginas, utilitários, estados (states), rotas, o container, e a aplicação web própriamente dita que executa dentro dele.
>
>> **Assets**: São as imagens que estão presentes no site, todas as figuras da aplicação são importadas dessa pasta;
>
>> **Componentes**: São "módulos" contidos em todas as rotas, como nesse caso o cabeçalho, e o rodapé;
>>
>> 1. **Cabeçalho**: Contém o logotipo do site, a navbar com as rotas, e seletor de tema, claro, ou escuro;
>>
>> 2. **Rodapé**: Contém o logotipo do criador do site, um texto informativo e as redes sociais do desenvolvedor, (A resolução da tela pode afetar a vizualização desses dados).
>>
>> **Páginas**: São componentes que representam uma rota própriamente dita, e organizam cada qual, seus componentes internos, dispondo-os na tela;
>>
>> 1. **Conversões**: Apresenta uma tabela que demonstra os valores tomados como base para converter as medidas;
>>
>> 2. **Conversor**: Apresenta um *formulário* que pode alterar seu modo de conversão, com a função de converter um valor do S.I. (Sistema Internacional), para o sistema Imperial utilizado nos Estados Unidos e Inglaterra, e salvar esses dados em um histórico. A página também apresenta um *histórico* de conversões que tem a função de exibir conversões anteriores, apagar todos os itens, ou cada um individualmente;
>>
>> 3. **NotFound**: Apresenta a famosa tela de erro 404 quando a rota buscada na barra de endereço é inválida.
>>
>> **State**: Contém um arquivo *atom.ts* que armazena constantes de estado (states), chamadas de átomos pela biblioteca *recoil*, e também uma pasta hooks que armazena hooks personalizados;
>>
>> 1. hooks/delete: Contém funções que permitem apagar um item ou todos os items de um state;
>>
>> 2. hooks/set: Contém funções que permitem definir o state ou seu conteúdo;
>>
>> 3. hooks/use: Contém funções que retornam o conteúdo de um state.
>>
>>**Utilitários**: Nessa pasta estão contidos *funções*, *interfaces* e *estilos* de uso geral da aplicação.
>>
>> 1. Funções: Possui uma função responsável por inverter o valor do state de tema;
>>
>> 2. Interfaces: Possui os tipos de dados compostos, utilizados por toda a aplicação;
>>
>> 3. Estilos: Possui um arquivo scss que armazena variáveis utilizadas nos modulos de estilo de páginas e componentes.

<br>

# Página

A versão lançada da página pode ser encontrada [aqui]().
