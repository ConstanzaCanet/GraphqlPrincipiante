import express from 'express';
//middlewere de express que funciona con graphql
import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';
import schema from './schema.js';
import {connect} from './database.js'

const app=express();
connect();

const server = app.listen(8080,()=>console.log(`Escuchando`)) 

app.get('/',(req,res)=>{
    res.json({
        message:'Hola amigo'
    })
})



app.use('/graphql',graphqlHTTP({
    graphiql: true,
    schema:schema,
    context:{
        messageId:'test'
    }
}))



















/*
let clients=[];
let counter=1;
let schema = buildSchema(`
    type Client{
        id:Int
        name:String
        phone:String
    }
    type Query{
        getClients:[Client]
        getClientById(id:Int):Client
    }
    type Mutation{
        addClient(name:String,phone:String):Client
    }
`)

//objeto root--> especifica las declaraciones del schema, funcionalidades
const root ={
    getClients: () =>clients,
    getClientById:(data)=>{
        for(let i=0;i<clients.length;i++){
            if(clients[i].id===data.id) return clients[i]
        }
        return null;
    },
    addClient:(data)=>{
        let client = {'id':counter,'name':data.name,'phone':data.phone}
        clients.push(client);
        counter++;
        return client;
    }
}

app.use('/graphql',graphqlHTTP({
    schema:schema,
    rootValue:root,
    graphiql:true
}))
*/