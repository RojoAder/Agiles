const mongoose = require('mongoose')

const DB_URI =
  'mongodb+srv://kayto:<1515lkmo>@clustermad.riero.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

module.exports =() => {

    const connect = () => {
        mongoose.connect(
         DB_URI,{
            keepAlive: true,
            useNewUrlParser: true,
            useUnifieldTopology: true 
         } ,

         (err) =>{

           if(err){
               console.log("BD: ERROR :(");
           } else{
               console.log("DB: Conexion Exitosa :)");
           }

         }

        )
    }

    connect();

}