// Importa el framework Express para crear el servidor web
import express from 'express';

// Importa el módulo 'morgan' para el registro de solicitudes HTTP
import morgan from 'morgan';

// Importa la función 'config' del módulo 'dotenv' para cargar variables de entorno desde un archivo '.env'
import { config } from 'dotenv';

// Importa el enrutador de productos desde el archivo './routes/products.routes.js'
import productsRouter from './routes/products.routes.js';

// Carga las variables de entorno del archivo '.env' en el proceso
config();

// Crea una instancia de la aplicación Express
const app = express();

// Configura el motor de vistas como 'ejs'
app.set('view engine', 'ejs');

// Middleware para procesar solicitudes con formato JSON
app.use(express.json());

// Middleware para procesar solicitudes con datos codificados en la URL
app.use(express.urlencoded({ extended: false }));

// Middleware para registrar las solicitudes HTTP en la consola en modo de desarrollo
app.use(morgan('dev'));

// Middleware que maneja todas las solicitudes dirigidas a '/api/products' utilizando el enrutador de productos
app.use('/api/products', productsRouter);

// Exporta la aplicación Express para su uso en otros archivos
export default app;
