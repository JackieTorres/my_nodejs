const express = require('express');
const mysql2 = require('mysql2');

const app = express();
const port = 8080;

// 配置数据库连接
const pool = mysql2.createPool({
    host: 'localhost',
    user: 'root', // 替换为你的 MySQL 用户名
    password: '123456', // 替换为你的 MySQL 密码
    database: 'torres', // 替换为你要使用的数据库名称
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// 初始化数据库表
pool.query(`
    CREATE TABLE IF NOT EXISTS todos (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        completed BOOLEAN DEFAULT FALSE
    )
`, (err, results) => {
    if (err) throw err;
    console.log('Todos table created or already exists.');
});

app.use(express.json()); // 使用中间件解析请求体

// 一个根路由
app.get('/', (req, res) => {
    res.send('Hello, world!');
});


// 获取所有 todo
app.get('/todos', (req, res) => {
    pool.query('SELECT * FROM todos', (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
            return;
        }
        res.json(results);
    });
});

// 获取指定 ID 的 todo
app.get('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('SELECT * FROM todos WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
            return;
        }
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).send('Todo not found');
        }
    });
});

// 创建一个新的 todo
app.post('/todos', (req, res) => {
    const { title, completed } = req.body;

    if (!title || typeof title !== 'string') {
        return res.status(400).json({ error: 'Title is required and must be a string' });
    }

    if (typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed must be a boolean' });
    }

    pool.query('INSERT INTO todos (title, completed) VALUES (?, ?)', [title, completed], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
            return;
        }
        res.status(201).json({ id: results.insertId, title, completed });
    });
});

// 更新一个 todo
app.put('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;

    if (typeof id !== 'number' || isNaN(id)) {
        return res.status(400).json({ error: 'ID must be a number' });
    }

    if (title && typeof title !== 'string') {
        return res.status(400).json({ error: 'Title must be a string' });
    }

    if (completed !== undefined && typeof completed !== 'boolean') {
        return res.status(400).json({ error: 'Completed must be a boolean' });
    }

    let query = 'UPDATE todos SET ';
    let values = [];

    if (title) {
        query += 'title = ?, ';
        values.push(title);
    }

    if (completed !== undefined) {
        query += 'completed = ?, ';
        values.push(completed);
    }

    query = query.slice(0, -2); // Remove the trailing comma
    query += ' WHERE id = ?';
    values.push(id);

    pool.query(query, values, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
            return;
        }
        if (results.affectedRows > 0) {
            res.json({ message: 'Todo updated successfully' });
        } else {
            res.status(404).send('Todo not found');
        }
    });
});

// 删除一个 todo
app.delete('/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM todos WHERE id = ?', [id], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Internal server error');
            return;
        }
        if (results.affectedRows > 0) {
            res.status(204).send(); // 成功删除，返回空内容
        } else {
            res.status(404).send('Todo not found');
        }
    });
});

app.listen(port, () => {
    console.log(`应用正在监听 http://localhost:${port}`);
});