# Logging Express

## What is it?

- A custom middleware function for node/express servers

  - see `reqLogger()` defined in `src/main.js`.

- Logging tool for continusously inspecting the state of the express request object

- Hopefully a helpful debugging and learning aid

## What does it do?

- When the server receives a request, `reqLogger()` logs a live summary of various request properites.

  - see `src/data.js` for the properties it currently reports

## Screenshot example output

![Alt Screenshot](./src/assets/logger_screenshot.png)

## Why?

### Hypothesis

#### Learning node/express is tough for many of us

##### And maybe tougher than it should be

- I'm also early in my learning journey. As I've gained experience, a change I've noticed is that to understand something I immediately **inspect it in detail**. _Usually this literally means scattering console.logs_.

- I'd guess I produce console.logs and digest errors **much** faster that when I started out.

- I notice this when I practice with less experienced developers – logging and debugging is slow.

- I believe in learning one thing after another. So why not outsource some of your logging and debugging efforts?

> My aim is for this logger to help you with exactly this
