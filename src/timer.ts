// worlds-best-timer.ts

/**
 * Timer Class - A flexible and dynamic timer utility for various use cases.
 *
 * Features:
 * - Fully customizable timer formats (hours-minutes-seconds, minutes-seconds, etc.).
 * - Configurable callbacks for start, pause, resume, and complete events.
 * - Easy to integrate into any TypeScript project.
 */

type TimerFormat = 'hh:mm:ss' | 'mm:ss';

type TimerOptions = {
    format: TimerFormat; // Format of the timer output.
    onStart?: () => void; // Callback for when the timer starts.
    onPause?: () => void; // Callback for when the timer is paused.
    onResume?: () => void; // Callback for when the timer resumes.
    onComplete?: () => void; // Callback for when the timer completes.
};

export class Timer {
    private totalSeconds: number; // Total timer duration in seconds.
    private remainingSeconds: number; // Remaining time in seconds.
    private intervalId: NodeJS.Timeout | null = null; // Interval ID for the timer.
    private options: TimerOptions; // Timer options.

    constructor(durationInSeconds: number, options: TimerOptions) {
        this.totalSeconds = durationInSeconds;
        this.remainingSeconds = durationInSeconds;
        this.options = options;
    }

    /**
     * Start the timer.
     */
    start(): void {
        if (this.intervalId) return; // Prevent multiple intervals.

        this.options.onStart?.();
        this.intervalId = setInterval(() => {
            this.remainingSeconds -= 1;
            // console.log(this.getRemainingTime()); // Log the updated time each second

            if (this.remainingSeconds <= 0) {
                this.stop();
                this.options.onComplete?.();
            }
        }, 1000);
    }

    /**
     * Pause the timer.
     */
    pause(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.options.onPause?.();
        }
    }

    /**
     * Resume the timer.
     */
    resume(): void {
        if (!this.intervalId) {
            this.start();
            this.options.onResume?.();
        }
    }

    /**
     * Stop the timer completely.
     */
    stop(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
        this.remainingSeconds = this.totalSeconds; // Reset time.
    }

    /**
     * Format the remaining time based on the user-defined format.
     */
    private formatTime(): string {
        const hours = Math.floor(this.remainingSeconds / 3600);
        const minutes = Math.floor((this.remainingSeconds % 3600) / 60);
        const seconds = this.remainingSeconds % 60;

        switch (this.options.format) {
            case 'hh:mm:ss':
                return `${this.pad(hours)}:${this.pad(minutes)}:${this.pad(seconds)}`;
            case 'mm:ss':
                return `${this.pad(minutes)}:${this.pad(seconds)}`;
            default:
                throw new Error('Unsupported format');
        }
    }

    /**
     * Pad single-digit numbers with a leading zero.
     */
    private pad(value: number): string {
        return value.toString().padStart(2, '0');
    }

    /**
     * Get the remaining time in the specified format.
     */
    getRemainingTime(): string {
        return this.formatTime(); // Now this always returns the current time
    }
}

// Example usage:
// const timer = new Timer(3600, {
//   format: 'hh:mm:ss',
//   onStart: () => console.log('Timer started!'),
//   onPause: () => console.log('Timer paused!'),
//   onResume: () => console.log('Timer resumed!'),
//   onComplete: () => console.log('Timer completed!'),
// });
//
// timer.start();
//
// // You can call `getRemainingTime` to get the current time in the format specified.
