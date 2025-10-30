# 🧩 Browser Extension Manager UI

A responsive React application built as a **Frontend Mentor – Junior Challenge**.  
The project simulates a browser extension manager where users can toggle, filter, remove, and theme their extensions.  

This challenge helped me strengthen my understanding of **state management**, **derived data**, **conditional rendering**, **component composition**, and **responsive design with Tailwind CSS v4**.

---

## 🎯 Features

✅ **Dynamic Data**
- The extensions are fetched from a local `data.json` file and rendered dynamically.

✅ **Filtering**
- Users can filter between **All**, **Active**, and **Inactive** extensions.  
- Filtering is managed through derived state logic - no redundant state is stored.

✅ **Toggle Activation**
- Each extension can be toggled between *active* and *inactive*.
- The toggle state updates immediately and affects the filtered view.

✅ **Remove Extensions**
- Extensions can be removed from the list with an immutable state update.
- A smooth fade animation plays before removal using [AutoAnimate](https://github.com/formkit/auto-animate).

✅ **Color Theme**
- Includes a **light/dark mode toggle**.
- The theme preference is stored in `localStorage` and persists across sessions.

✅ **Hover & Focus States**
- All interactive elements include hover, focus, and keyboard-visible outlines.  
- Uses a consistent red accent for accessibility and clarity.

✅ **Motion-Safe Animations**
- AutoAnimate handles card entry/removal transitions.
- Respects users’ `prefers-reduced-motion` settings.

---

## 🧠 What I Practiced

- Building reusable UI components with props (`Header`, `Filter`, `Extensions`)
- Lifting state up and passing actions down via props
- Deriving visible data from existing state (`filterExtensions()` function)
- Managing immutable updates with `.filter()` and `.map()`
- Applying dark/light themes with Tailwind v4 custom tokens and variants
- Handling focus, hover, and selected states in both themes
- Integrating [@formkit/auto-animate](https://github.com/formkit/auto-animate) for motion
- Writing responsive layouts using Tailwind’s `md:` and `lg:` breakpoints
- Practicing clean commit messages and incremental development

---

## 🛠️ Tech Stack

- **React + Vite**
- **Tailwind CSS v4**
- **AutoAnimate** (for add/remove animations)
- **Frontend Mentor design & assets (Figma)**
- **Local data.json** for dynamic rendering

---
## 🔗 Live Site

[View Live Site](https://maz-hub.github.io/browser-extension-manager-ui/)