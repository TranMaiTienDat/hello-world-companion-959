# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/5845ff4b-91cf-4137-b568-d1aeacaef59f

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/5845ff4b-91cf-4137-b568-d1aeacaef59f) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/5845ff4b-91cf-4137-b568-d1aeacaef59f) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

---

## Pomodoro Web App (Next.js + TypeScript)

Demo

- Vietnamese: https://pomodoro-web-fawn.vercel.app/vi
- English: https://pomodoro-web-fawn.vercel.app/en

Source

- GitHub: https://github.com/TranMaiTienDat/Pomodoro-Web

Features

- Pomodoro timer with phases: Work, Short Break, Long Break
- Auto transition and optional auto-start next phase
- Custom durations and cycles before a long break
- LocalStorage persistence for settings, timer state, tasks, inbox, stats
- Browser notifications and end-of-session alert sound (customizable)
- i18n with routes: Vietnamese and English (/vi, /en)
- Task List: add/select/complete/delete; auto-complete active task at end of work session
- Inbox (distraction capture): quick add via I hotkey; shown only during breaks
- Achievements & Stats: no-pause streak, early tasks, minutes and “km flown” metric
- Review: simple 28-day heatmap of focused minutes
- Ambient sound: brown noise, toggle and volume, plays during work (requires user gesture)
- Journey/Flight visualization: a fun plane progress bar and optional gallery/video

Screens and panels

- PomodoroTimer (src/components/PomodoroTimer.tsx): core timer, settings, alerts
- TaskList (src/components/TaskList.tsx): manage tasks, set active task
- FocusBoard (src/components/FocusBoard.tsx): composes timer + panels
- InboxPanel (src/components/InboxPanel.tsx): distraction inbox (I hotkey)
- AchievementsPanel (src/components/AchievementsPanel.tsx): badges + distance
- ReviewPanel (src/components/ReviewPanel.tsx): 28-day heatmap
- AmbientSound (src/components/AmbientSound.tsx): brown noise control
- FlightProgress (src/components/FlightProgress.tsx): journey media and plane

i18n

- Dictionaries at src/i18n/dictionaries.ts
- Provider and hook at src/i18n/I18nProvider.tsx
- Locale routes in src/app/[lang]/page.tsx (/vi default)

Settings (Timer)

- Work/Short/Long durations, cycles before long break
- Auto-start next phase toggle
- Alerts: enable/disable, sound type (Beep/Ding/Chime/Pop), volume, and Test button

Optional media (Journey panel)

- Images: place any of .jpg/.jpeg/.png/.webp/.gif into public/journey/
- Video: add public/flight.mp4
- The app lists available media via /api/journey and renders only what exists (no 404 spam)

Development

Start the dev server:

```sh
npm run dev
```

Open http://localhost:3000 and navigate to /vi or /en.

Build

```sh
npm run build
npm run start
```

Deploy

- Works well on Vercel. Any Node host that supports Next.js App Router is fine.
- Live: https://pomodoro-web-fawn.vercel.app

License

MIT (see LICENSE if added). Contributions welcome.
