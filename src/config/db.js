import mongoose from "mongoose"

export const connectDB = async () => {
    try{
        const dbURI = process.env.MONGODB_URI

        mongoose.connect(dbURI)
        console.log("MongoDB conectado correctamente")
    }catch(error){
        console.error("Error al conectar mongoDB", error)
        process.exit(1)
    }
}