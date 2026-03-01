# Adwaa Saeed Alghamdi — Personal Portfolio

A modern, dark-themed portfolio built with **Next.js** (App Router), **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add your profile photo**  
   Place your image as `profile.jpeg` in the `public` folder (i.e. `public/profile.jpeg`). If the file is missing, the hero section shows initials "AS" as a fallback.

3. **Run the dev server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Contact form

The contact form is currently UI-only (submission is simulated). To make it functional, integrate a service like Formspree, Netlify Forms, or your own API endpoint and update the `handleSubmit` in `src/components/sections/Contact.tsx`.
