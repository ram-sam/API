const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// conectar ao MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('MongoDB Conectado :)');
    } catch (err) {
        console.error(err.message);
        // encerrar a aplicação em caso de erro
        process.exit(1);
    }
}

module.export = connectDB;