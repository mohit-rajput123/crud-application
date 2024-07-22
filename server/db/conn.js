const mongoose = require('mongoose');

// Corrected connection string
const DB = 'mongodb+srv://mohit:mohit%40123@cluster0.lkrn79d.mongodb.net/mernstack?retryWrites=true&w=majority&appName=Cluster0';

try {
    mongoose.connect(DB, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }).then(() => {
        console.log("MongoDB is connected");
    }).catch((err) => {
        console.log("Failed to connect to MongoDB", err);
    });
} catch (error) {
    console.log(error);
}
