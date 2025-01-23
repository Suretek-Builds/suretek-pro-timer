# Pro Timer

A highly customizable, dynamic timer utility for TypeScript and JavaScript projects.

## Features
- Customizable timer formats (`hh:mm:ss`, `mm:ss`, etc.).
- Callbacks for `onStart`, `onTick`, and `onComplete`.
- Pause, resume, and reset functionality.

## Installation
Clone the repository:
```bash
git clone https://github.com/your-username/pro-timer.git
cd pro-timer
npm install
npm run build

## Usage

import { Timer } from './dist/timer';

const timer = new Timer(3600, {
  format: 'hh:mm:ss',
  onStart: () => console.log('Timer started!'),
  onTick: (time) => console.log(`Time left: ${time}`),
  onComplete: () => console.log('Timer completed!'),
});

timer.start();


License
This project is licensed under the MIT License - see the LICENSE file for details. 