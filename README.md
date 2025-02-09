# 🚀 Nozz UI for Astro

> Beautiful, copy-pasteable components for your Astro projects. Built with Tailwind CSS and sprinkled with developer joy! ✨

## 🎭 What's this all about?

Hey there, awesome developer! Tired of installing 74,928 packages just to get some decent UI components? Same here! That's why we created Nozz UI - a collection of beautiful, ready-to-use components that you can just copy and paste into your Astro project.

## 🎯 The Cool Stuff

- 🔌 **Minimal Dependencies**: We keep it lean! Just Tailwind CSS and a couple of utility friends (`class-variance-authority` and our trusty `cn` utility)
- 🎨 **Fully Customizable**: Every component is yours to tweak, modify, or completely transform
- 🌓 **Dark Mode Ready**: Because we all know dark mode is the best mode
- ♿ **Accessible**: ARIA attributes and keyboard navigation included, because everyone deserves a great experience
- 🎪 **Interactive Goodies**: Ripple effects, loading states, and other neat interactions built-in
- 🎯 **TypeScript Support**: Full type safety, because we like our code like we like our coffee - strong!

## 📦 Quick Start

1. First, make sure you have these cool cats installed:

```bash
npm install tailwindcss class-variance-authority clsx tailwind-merge
```

2. Add our utility function to your project:

```typescript
// lib/utils.ts
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

3. Copy & paste any component you like from our collection into your project

4. Use it like it's nobody's business! 🎉

```astro
---
import Button from '@/components/ui/button.astro';
---

<Button variant="default" size="lg">
  Let's Rock! 🤘
</Button>
```

## 🎨 Components

Here's what we've got cooking:

- 🔘 **Button**: More variants than a coffee shop menu
- 🎯 **Background**: Gorgeous gradients and patterns
- 🌊 **Ripple Background**: Because static is boring
- ...and more coming soon! 

## 🎮 Features in Detail

Each component comes with:

- 🎯 Multiple variants and sizes
- 🌓 Dark mode support out of the box
- 🔄 Loading states and animations
- ⌨️ Keyboard navigation
- 🎨 Easy theming with CSS variables
- 💪 TypeScript types for all props

## 🤝 Contributing

Found a bug? Want to add a cool feature? PRs are always welcome! Just keep it fun and friendly 😊

## 📝 License

MIT - because sharing is caring! Use it, abuse it, make it better!

---

Made with ❤️ and probably too much coffee ☕ by the Nozz UI team