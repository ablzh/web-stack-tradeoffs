from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo_python.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# 1. Model
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    completed = db.Column(db.Boolean, default=False)

# 2. Initializing the database (application context needed)
with app.app_context():
    db.create_all()

# 3. Controllers (Decorators)
# A decorator wraps a standard function
@app.route('/')
def index():
    tasks = Task.query.order_by(Task.id).all()
# Data is passed explicitly in the named argument tasks=
    return render_template('index.html', tasks=tasks)

@app.route('/add', methods=['POST'])
def add():
    title = request.form.get('title')
    new_task = Task(title=title)

# Data Mapper approach: working through a session (Unit of Work) 
    db.session.add(new_task)
    db.session.commit()
    return redirect(url_for('index'))

@app.route('/toggle/<int:id>', methods=['POST'])
def toggle(id):
    task = Task.query.get(id)
    if task:
        task.completed = not task.completed
        # Explicitly save the changes
        db.session.commit() 
    return redirect(url_for('index'))

@app.route('/delete/<int:id>', methods=['POST'])
def delete(id):
    task = Task.query.get(id)
    if task:
        db.session.delete(task)
        # And again we explicitly save the changes   
        db.session.commit() 
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True, port=5000)