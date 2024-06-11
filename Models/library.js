const mongoose=require("mongoose")
const schema=mongoose.Schema
(
    {
        "title":String,
        "category":String,
        "year":String,
        "author":String,
        "distributor":String,
        "publisher":String,
        "price":String,
        "edition":String
    }
)

let librarymodel=mongoose.model("librarys",schema);
module.exports={librarymodel}
