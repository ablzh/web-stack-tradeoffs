# Comparing Ruby and Python Through Microframeworks  
## Expressiveness vs. Explicitness in Small Web Applications

This repository contains materials for a project created as part of the **IS_214 Principles of Programming Languages** course.  
The goal is to explore how Ruby and Python express similar ideas when building simple web applications.

## Purpose

Ruby and Python promote different styles of writing and organizing code:

- Ruby often emphasizes expressiveness and concise syntax.
- Python prioritizes clarity and explicit structure.

To compare these differences in a practical setting, the project uses two lightweight web frameworks:

- **Sinatra (Ruby)**
- **Flask (Python)**

Microframeworks keep the focus on the languages themselves, without the additional conventions and abstractions found in larger frameworks.

## What the Project Examines

By implementing the same small “To-Do List” web application in both stacks, the project compares:

1. **Readability**  
   How easy it is to follow the logic in each version.

2. **Expressiveness vs. Explicitness**  
   Where the code is compact and where it requires more explicit steps.

3. **Amount of Structural Overhead**  
   How much setup or boilerplate is needed before the app becomes functional.

## Why Sinatra and Flask

Sinatra and Flask provide only minimal tools: routing, basic request handling, and simple templates or JSON responses.  
This makes it easier to observe the underlying language features directly, without the influence of full-stack frameworks like Rails or Django.

## Example Task: To-Do List App

Both versions implement:

- listing tasks  
- creating new tasks  
- updating task status  

The goal is comparison, not building a production-level application. And this project is not a formal research paper.

