import express from 'express';
import categoriasRoutes from './routes/categorias.routes.js';

const app = express();
app.use(express.json());
app.use(categoriasRoutes);

const puerto = 3001;
app.listen(puerto, () => {
    console.log(`Servidor en http://localhost:${puerto}`);
});


/*
//1
app.post('/categorias', async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        const [result] = await pool.query(
            'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
            [nombre, descripcion]
        );
        res.status(201).json({
            id: result.insertId, 
            nombre: nombre,
            descripcion: descripcion
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la categoría' });
    }
});


//2
app.get('/categorias', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM categorias');

        res.status(200).json(rows);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las categorías' });
    }
});

//3
app.get('/categorias/:id', async (req, res) => {

    
    try {

        const { id } = req.params;

        const [rowsCategoria] = await pool.query(
            'SELECT * FROM categorias WHERE id = ?',
            [id]
        );

        if (rowsCategoria.length === 0) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        
        const categoria = rowsCategoria[0];

        const [rowsProductos] = await pool.query(
            'SELECT * FROM productos WHERE categoria_id = ?',
            [id] 
        );
        res.status(200).json({
            ...categoria,     
            productos: rowsProductos 
        });

    } catch (error) {
        
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la categoría' });
    }
});


//4
app.put('/categorias/:id', async (req, res) => {

    try {
        const { id } = req.params; 
        const { nombre, descripcion } = req.body;

        const [result] = await pool.query(
            'UPDATE categorias SET nombre = ?, descripcion = ? WHERE id = ?',
            [nombre, descripcion, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        res.status(200).json({
            id: id,
            nombre: nombre,
            descripcion: descripcion
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al actualizar la categoría' });
    }
});

//5
app.delete('/categorias/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query(
            'DELETE FROM categorias WHERE id = ?',
            [id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'categoria no encontrada' });
        }


        res.status(200).json({
            message: 'categoria fue eliminada'
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'erro!!' });
    }
});
*/