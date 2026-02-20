const fs = require("fs");
const path = require("path");

// Criando uma pasta
fs.mkdir(path.join(__dirname, "/test"), (error) => {
  if (error) {
    return console.log("Erro ao criar a pasta: ", error);
  };
  console.log("Pasta criada com sucesso!");
});

// Criando um arquivo
fs.writeFile(
  path.join(__dirname, "/test", "test.txt"),
  "Hello Node!",
  (error) => {
    if (error) {
      return console.log("Erro ao criar o arquivo: ", error);
    }
    console.log("Arquivo criado com sucesso!");
    //Adicionando conteúdo a um arquivo
    fs.appendFile(
      path.join(__dirname, "/test", "test.txt"),
      " Hello world!",
      (error) => {
        if (error) {
          return console.log("Erro ao adicionar conteúdo ao arquivo: ", error);
        }
        console.log("Conteúdo adicionado ao arquivo com sucesso!");
      },
    );
    // Lendo um arquivo
    fs.readFile(
      path.join(__dirname, "/test", "test.txt"), 
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro ao ler o arquivo: ", error);
        }
        console.log("Conteúdo do arquivo: ", data);
      },
    );

  },
);
