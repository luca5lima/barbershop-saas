const path = require("path");

// Basename: Retorna o nome do arquivo
console.log(path.basename(__filename));

// Dirname: Retorna o nome do diretório
console.log(path.dirname(__filename));

// Extname: Retorna a extensão do arquivo
console.log(path.extname(__filename));

// Parse: Retorna um objeto com as informações do caminho
console.log(path.parse(__filename));

// Resolve: Retorna o caminho
console.log(__dirname);

// Join: Junta os caminhos
console.log(path.join(__dirname, "test", "test.html"));