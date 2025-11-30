require "sinatra"
require "sequel"
require "sqlite3"

# 1. Connecting to a Database (SQLite)
DB = Sequel.connect("sqlite://todo_ruby.db")

# 2. Create a table (if not)
DB.create_table? :tasks do
  primary_key :id
  String :title
  Boolean :completed, default: false
end

# 3. Model
class Task < Sequel::Model; end

# 4. Controllers (DSL on blocks)
# The do..end block closes the execution context
get "/" do
  @tasks = Task.order(:id).all
  erb :index
end

post "/add" do
  # Sequel: Active Record pattern. The create method writes directly to the database.
  Task.create(title: params[:title])
  redirect "/"
end

post "/toggle/:id" do
  task = Task[params[:id]]
  # toggle! - Sequel method for toggling a Boolean value
  task.update(completed: !task.completed) if task
  redirect "/"
end

post "/delete/:id" do
  task = Task[params[:id]]
  task.delete if task
  redirect "/"
end
