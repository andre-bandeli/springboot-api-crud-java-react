## Site Institucional Concessionária Web - Aplicação REST Spring Boot + React

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Spring_Security](https://img.shields.io/badge/Spring_Security-6DB33F?style=for-the-badge&logo=Spring-Security&logoColor=white)
![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white)

Site Institucional com React JS e Spring Boot, com captura de leads, router, docker. login e sistema adm. 


![Badge](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)



## Começando

Essas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.
Os comandos a seguir são realizados em ambiente linux ubuntu 20 (consulte os comandos referentes ao seu sistema operacional).

### 📋 Pré-requisitos

De que coisas você precisa para instalar o software e como instalá-lo?

```
Nodejs
```
```
JDK 18
```
```
Maven
```
```
Docker e Docker compose
```

### 🔧 Instalação

Uma série de exemplos passo-a-passo que informam o que você deve executar para ter um ambiente de desenvolvimento em execução.

#### Client (frontend)
Clone o repositório para sua máquina local:
```
 git clone https://github.com/andre-bandeli/springboot-api-crud-java-react.git
```
Caminhe até a pasta :
```
 cd springboot-api-crud-java-react/frontend/page
```
Execute o comando a seguir para instalar as dependências necessárias da aplicação:
```
 npm install
```
Execute o server da aplicação (porta default: 3000)
```
 npm start
```

#### Server (backend)

Estamos dividindo o pŕojeto em 3 módulos: User, Leads e Produtos. Portanto, é necessário que cada serviço seja executado
separadamente.

entre na pasta do projeto

        cd main || cd lead  || cd user

Para cada microsserviço, instale as dependências através do maven. Para isto, caminhe até a pasta onde encontra-se 
o arquivo pom.xml de cada aplicação e rode o seguinte comando:

        mvn clean install


## 🛠️ Construído com

* [Java 11](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html) - Linguagem backend
* [Spring Boot](https://spring.io/projects/spring-boot) - Framework Web Java
* [Maven](https://maven.apache.org/) - Gerenciador de Dependência
* [React JS](https://pt-br.reactjs.org/) - Biblioteca JavaScript
* [Docker](https://www.docker.com/) - Virtualização open source

---

![1](https://user-images.githubusercontent.com/87938869/206381428-382adc8d-787f-429c-8a8c-6e82c02dd719.jpg)
![2](https://user-images.githubusercontent.com/87938869/206381444-f98c15d5-0e85-4777-93a3-716d74c54ae5.jpg)
![3](https://user-images.githubusercontent.com/87938869/206381459-959f305c-2fd5-46ce-a917-8bc9b9d960f8.jpg)