//defino propiedades y consultas de schema
//como un controller
import User from "./models/user.js"

export const resolvers={
    Query:{
        async Users(){
            return User.find();
        }
    },
    Mutation:{
        async createUser(_, { input }){
            const nuevoUsuario = new User(input);
            await nuevoUsuario.save()
            return nuevoUsuario;
        },
        async updateUser(_, { _id, input}){
            return await User.findByIdAndUpdate(_id,input,{ new:true })
        },
        async deleteUser(_,{ _id }){
            return await User.findByIdAndDelete(_id)
        }
    }
}