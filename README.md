# FitLog — Workout Library & Fitness Tracker

FitLog is a dark-themed web application designed to help fitness enthusiasts track workouts, organize daily training routines, and save essential lifts. Built with Next.js App Router and Tailwind CSS, FitLog provides an intuitive experience for gym-goers focused on consistent progress.

---

## Tech Stack

* **Framework:** Next.js (App Router with TypeScript)
* **Styling:** Tailwind CSS & DaisyUI
* **Icons:** React Icons (`react-icons`)
* **State Management:** React Context API (`WorkoutProvider`)
* **Notifications:** React Toastify (`react-toastify`)
* **API / Backend:** Cloudflare Workers (`api.abcz.workers.dev`)

---

## Key Features

### 1. Comprehensive Workout Library

Browse a curated list of workouts targeting major muscle groups, featuring information such as:

* Workout duration
* Calories burned
* Required equipment
* Ratings

### 2. Daily Workout Planner

Add specific lifts directly to your current day's routine and mark exercises as completed once finished to track active workout sessions.

### 3. Bookmark & Save Exercises

Save workouts to your personal library with a single click for future reference or routine planning.

### 4. Dynamic Global State & Live Counters

Track active planned workouts and saved exercises seamlessly across pages with responsive header indicators powered by React Context.

### 5. Instant Toast Feedback

Receive real-time feedback through custom dark-themed toast notifications whenever you log, save, or remove exercises from your schedule.

---

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/hasan-imran-nazir/fitlog-assignment-6.git
cd fitlog-assignment-6
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Development Server

```bash
npm run dev
```

### 4. Open in Browser

Navigate to:

http://localhost:3000
