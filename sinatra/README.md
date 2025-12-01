## Installation
1. bundle init
2. bundle add sinatra sequel sqlite3 rackup puma
## Run
1. bundle exec ruby app.rb

## What is what
| **Gem**     | **Role**          | **Description**                                                                    |
| ----------- | ----------------- | ---------------------------------------------------------------------------------- |
| **Sinatra** | **The Framework** | A lightweight tool for creating web applications in Ruby with minimal effort.      |
| **Sequel**  | **The ORM**       | A toolkit to interact with database using Ruby code instead of raw SQL.       |
| **SQLite3** | **The Database**  | The driver that allows app to talk to a file-based SQLite database.           |
| **Rackup**  | **The Interface** | Rackup provides a CLI for running a Rack-compatible application. It is not designed for production use.             |
| **Puma**    | **The Server**    | A fast HTTP web server that actually receives requests and passes them to Sinatra. |
