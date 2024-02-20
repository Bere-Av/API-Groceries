// Importa el Schema y el modelo desde Mongoose
import { Schema, model } from "mongoose";

// Define el esquema del producto utilizando el constructor Schema de Mongoose
const productSchema = new Schema({
    // Define el campo 'barcode' como un String que debe ser único y obligatorio
    barcode: {
        type: String,
        unique: true,
        required: true
    },
    // Define el campo 'description' como un String
    description: String,
    // Define el campo 'brand' como un String
    brand: String,
    // Define el campo 'price' como un Number
    price: Number,
    // Define el campo 'cost' como un Number
    cost: Number,
    // Define el campo 'stock' como un Number
    stock: Number,
    // Define el campo 'expiredDate' como un String
    expiredDate: String,
    // Define el campo 'status' como un Number
    status: Number
}, {
    // Configuraciones adicionales del esquema:
    versionKey: false, // Deshabilita la inclusión del campo "__v" en los documentos
    timestamps: true // Habilita la creación automática de campos "createdAt" y "updatedAt" en los documentos
});

// Crea y exporta el modelo 'Product' basado en el esquema definido anteriormente
export default model('Product', productSchema);
