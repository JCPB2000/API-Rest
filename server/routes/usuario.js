const express = require('express');
const router = express.Router();
const getConnection = require('../conexion');

/* LISTAR TODOS */
router.get('/', (req, res) => {
  getConnection((err, conn) => {
    if (err) return res.status(500).json(err);

    conn.query('SELECT * FROM usuario', (err, rows) => {
      conn.release();
      if (err) return res.status(500).json(err);
      res.json(rows);
    });
  });
});

/* BUSCAR POR CÉDULA */
router.get('/buscar/:cedula', (req, res) => {
  getConnection((err, conn) => {
    if (err) return res.status(500).json(err);

    const cedula = req.params.cedula;
    conn.query(
      'SELECT * FROM usuario WHERE cedulausuario = ?',
      [cedula],
      (err, rows) => {
        conn.release();
        if (err) return res.status(500).json(err);
        res.json(rows);
      }
    );
  });
});

/* BUSCAR POR ID */
router.get('/:id', (req, res) => {
  getConnection((err, conn) => {
    if (err) return res.status(500).json(err);

    const id = req.params.id;
    conn.query(
      'SELECT * FROM usuario WHERE idusuario = ?',
      [id],
      (err, rows) => {
        conn.release();
        if (err) return res.status(500).json(err);
        res.json(rows[0]);
      }
    );
  });
});

/* INSERTAR USUARIO */
router.post('/', (req, res) => {
  getConnection((err, conn) => {
    if (err) return res.status(500).json(err);

    const {
      nombreusuario,
      cedulausuario,
      telefonousuario,
      direccionusuario,
      correousuario
    } = req.body;

    const sql = `
      INSERT INTO usuario
      (nombreusuario, cedulausuario, telefonousuario, direccionusuario, correousuario)
      VALUES (?, ?, ?, ?, ?)
    `;

    conn.query(
      sql,
      [nombreusuario, cedulausuario, telefonousuario, direccionusuario, correousuario],
      (err, result) => {
        conn.release();

        if (err) {
          console.error('Error SQL:', err);
          return res.status(500).json(err);
        }

        res.json({
          mensaje: 'Usuario insertado correctamente',
          id: result.insertId
        });
      }
    );
  });
});

/* ACTUALIZAR */
router.put('/actualizar/:id', (req, res) => {
  getConnection((err, conn) => {
    if (err) return res.status(500).json(err);

    const id = req.params.id;
    const data = req.body;

    conn.query(
      'UPDATE usuario SET ? WHERE idusuario = ?',
      [data, id],
      (err) => {
        conn.release();
        if (err) return res.status(500).json(err);
        res.json({ mensaje: 'Usuario actualizado correctamente' });
      }
    );
  });
});

module.exports = router;
