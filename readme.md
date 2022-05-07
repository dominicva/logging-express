# Logging Express

## What is it?

- A custom middleware function for node/express servers

  - see `reqLogger()` defined in `src/main.js`.

- Logging tool for continusously inspecting the state of the express request object

- Hopefully a helpful debugging and learning aid

## What does it do?

- Eeach time the server receives a request, `reqLogger()` produces a live report for various request properites.

  - see `src/data.js` for properties it currently reports on

- A report includes
  - property name e.g. `req.path`
  - description (fairly detailed for some of the more important ones)
    - see the one for req.params in the screenshots below
  - JS type of the current property value
  - current property value itself

## Example screenshots

Notice how you can see what url created the request from the logged output

![Alt Screenshot 1](./src/assets/screenshot1.png)
![Alt Screenshot 2](./src/assets/screenshot2.png)

## Why?

### Hypothesis

#### Learning node/express can be tough

> Maybe tougher than it should be?

I'm around 2 years into my coding journey. With this bit of experience, I notice that when I need to understand something, I now immediately **inspect** it in as much detail as I can.

Some useful tactics

- console.log everything I don't know the type or value of

- dive deep into nested data structures

- look into every corner of the `__proto__`/`[[Prototype]]` chain... _"So that's why I can access `res.json()`!!"_

- read docs and (with caution) stack overflow posts

The problem

- unless you're pretty advanced, those tactics are

  1. cognitively taxing

  2. time consuming

  3. confidence destroying for some people. It wouldn't surprise me if junior developer impostor syndrome begins somewhere here

> In that spirit, this middleware's purpose is to help free up some brain space. Your potential is too great to spend all day typing `console.log`. Reserve that brain power for the big stuff: learning and building.
