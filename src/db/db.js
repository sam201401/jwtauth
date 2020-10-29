const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://sam:sam@cluster0.mmegs.mongodb.net/star-wars-quotes?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true
})
