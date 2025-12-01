const express = require('express');
const Sequelize = require('sequelize');

const app = express();

// Setting up EJS (template engine)
app.set('view engine', 'ejs');
// Middleware for parsing form data
app.use(express.urlencoded({ extended: false }));

// 1. Connecting to the database (SQLite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: 'todo_node.db',
  // Turn off unnecessary noise in the console
  logging: false 
});

// 2. Model
const Task = sequelize.define('Task', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

// 3. Database synchronization (table creation)
// IIFE (Immediately Invoked Function Expression) for async code
(async () => {
  await sequelize.sync();
  console.log("Database synced");
})();

// --- Routes ---

// GET: Home page
app.get('/', async (req, res) => {
// Wait until the database returns the data
    const tasks = await Task.findAll({
    // Sorting syntax
    order: [['id', 'ASC']] 
  });
  res.render('index', { tasks: tasks });
});

// POST: Add
app.post('/add', async (req, res) => {
  await Task.create({ title: req.body.title });
  res.redirect('/');
});

// POST: Toggle status
app.post('/toggle/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
// In JS we change the field and save the object
    task.completed = !task.completed;
    await task.save();
  }
  res.redirect('/');
});

// POST: Delete
app.post('/delete/:id', async (req, res) => {
  const task = await Task.findByPk(req.params.id);
  if (task) {
    await task.destroy();
  }
  res.redirect('/');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});