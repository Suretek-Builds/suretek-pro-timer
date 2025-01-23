# Suretek Pro Timer

**Suretek Pro Timer** is a versatile and dynamic TypeScript-based timer utility designed for customizable and flexible use in various projects. It allows you to easily integrate timers with custom formats, and it supports callbacks for timer events like start, pause, resume, and completion.

## Features

- **Customizable Timer Formats**: Supports `hh:mm:ss` and `mm:ss` formats, giving you flexibility in how the time is displayed.
- **Timer Control**: Provides methods to start, pause, resume, and stop the timer, offering full control over its behavior.
- **Event Callbacks**: Includes customizable callbacks for events such as start, pause, resume, and completion.
- **TypeScript Integration**: Built using TypeScript for better type safety, code clarity, and developer experience.
- **Easy Integration**: Simple to integrate into any TypeScript or JavaScript project.

## Installation

To use **Suretek Pro Timer** in your project, follow these installation steps:

- Clone this repository to your local machine:
   ```bash
   git clone https://github.com/your-username/suretek-pro-timer.git

- Install the dependencies:
   ```bash
   cd suretek-pro-timer
   npm install

- Build the TypeScript files into JavaScript:
   ```bash
   npm run build

## Usage
After building the project, you can use the Suretek Pro Timer from the ./dist directory.

Here’s an example of how to use the Timer class:

- Import the Timer class from the ./dist/timer file:
   ```bash
   import { Timer } from './dist/timer';

- Create a timer instance and specify the timer options:
   ```bash
   const timer = new Timer(3600, { // 3600 seconds = 1 hour
  format: 'hh:mm:ss',
  onStart: () => console.log('Timer started!'),
  onPause: () => console.log('Timer paused!'),
  onResume: () => console.log('Timer resumed!'),
  onComplete: () => console.log('Timer completed!'),
  });

- Start the timer:
   ```bash
   timer.start();
   
- You can pause, resume, or stop the timer:
   ```bash
   // Pause the timer
   timer.pause();

   // Resume the timer
   timer.resume();

   // Stop the timer completely (resets the time)
   timer.stop();

- Get the remaining time in the specified format:
  ```bash
  console.log(timer.getRemainingTime());

  ## License

The **Suretek Pro Timer** is open-source software licensed under the [MIT License](LICENSE).

### MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


