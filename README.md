# Pedagogical Trade-offs in Web Microframeworks: Ruby, Python, and JavaScript
## Analyzing Expressiveness, Explicitness, and Structural Clarity

This repository contains source code and materials for a project created as part of the IS_214 Principles of Programming Languages course.

The project explores the pedagogical implications of choosing a programming language for introductory web development. It moves beyond general syntax comparisons to analyze how different language philosophies: Ruby, Python, and JavaScript, impact the cognitive load and syntactic noise experienced by novice developers.

## Purpose
Since the adoption of Python in introductory courses, the focus has shifted toward "ideas over syntax." However, as curricula expand to web development, the trade-offs between different types of explicitness require rethinking.

This project argues that the choice of framework significantly alters the learning curve. I compare three distinct approaches:
1. Syntactic Expressiveness (Ruby / Sinatra): Focuses on human-centered design and conciseness via Domain Specific Languages (DSL).
2. Semantic Clarity (Python / Flask): Prioritizes explicit structure and readability ("There should be one obvious way to do it").
3. Structural Clarity (JavaScript / Express.js): Introduces C-style syntax and event-driven architecture, common in modern full-stack development.

## The Frameworks
I utilize "microframeworks" to isolate the language features from the heavy abstractions found in full-stack tools like Rails or Django.

| **Language**   | **Framework**  | **Key Characteristic** | **Philosophy**                                                                        |
| -------------- | -------------- | ---------------------- | ------------------------------------------------------------------------------------- |
| **Ruby**       | **Sinatra**    | **Expressiveness**     | Uses metaprogramming to treat HTTP handling as a DSL, minimizing boilerplate.         |
| **Python**     | **Flask**      | **Explicitness**       | Treats HTTP handling as explicit function decorators and clearly defined imports.     |
| **JavaScript** | **Express.js** | **Structure**          | Uses C-style syntax (braces, semicolons) and callbacks/promises for request handling. |

## What the Project Examines

By implementing the exact same "To-Do List" application in all three stacks, this project evaluates:

1. Syntactic Noise & Boilerplate
How much code is required just to make the app "work" (imports, server setup, bracket nesting) versus code that actually describes the business logic.

2. Request Routing & Processing
   * Sinatra: Matches routes via DSL blocks (e.g., get '/' do).
   * Flask: Matches routes via decorators (e.g., @app.route('/')).
   * Express: Matches routes via chained methods and callbacks (e.g., app.get('/', (req, res) => { ... })).

3. Server-Side Rendering (SSR) & Database Interaction
How the languages handle templating and data persistence, and which approach allows novices to most intuitively represent these concepts.

## Implementation: To-Do List App
To ensure a fair comparison, all three implementations cover the same scope without production-level complexity:
* Listing tasks (Read)
* Creating new tasks (Create)
* Updating task status (Update)
