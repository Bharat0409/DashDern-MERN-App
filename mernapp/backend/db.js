const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://DineDash:{PASSWORD}@dinedash.9a0kso6.mongodb.net/dinedashmern?retryWrites=true&w=majority&appName=DineDash"
const mongoDB = async() => {
    await mongoose.connect(mongoURI, { useNewUrlParser: true }, (err, result) => {
        if(err) console.log("---", err);
        else {
            console.log("connected");
            const fetched_data = mongoose.connection.db.collection("food_items");
            fetched_data.find({}).toArray((err, data) => {
                const foodCategory = mongoose.connection.db.collection("foodCategory");
                foodCategory.find({}).toArray((err, catData) => {
                    if(err) console.log(err);
                    else {
                        global.food_items = data;
                        global.foodCategory = catData;
                    }
                })
            })
        }
    })
}

module.exports = mongoDB;
