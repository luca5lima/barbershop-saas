const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@clusterlucas.umzeq.mongodb.net/?appName=ClusterLucas`
    );
    console.log("Conexão com o banco de dados realizada com sucesso!");
  } catch (error) {
    console.log("Erro ao conectar com o banco de dados: ", error);
  }
};

module.exports = connectToDatabase;