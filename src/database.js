import mongoose from "mongoose";



export async function connect(){
    try {        
        mongoose.connect('mongodb+srv://Constanza:Konecta+865@products.fq2mz.mongodb.net/graphql?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
        console.log('Base de mongo conectada')
    } catch (e) {
        console.log(e)
    }
}
