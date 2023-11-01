const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        await mongoose.connect('mongodb+srv://newdatabase-college:college-pro@newpro.70kdios.mongodb.net/?retryWrites=true&w=majority');
        console.log('Connected to MongoDB');
    }
    catch(error){
        console.log(error);
    }
}

module.exports = connectDB;