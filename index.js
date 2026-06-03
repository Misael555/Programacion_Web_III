import express from 'express';
import categoriasRoutes from './routes/categorias.routes.js';

const app = express();
const puerto = 3001;
app.use(express.json());
app.use(categoriasRoutes);
app.listen(puerto, () => {
    console.log(`Servidor en http://localhost:${puerto}`);
});


