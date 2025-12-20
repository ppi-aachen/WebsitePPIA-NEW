# PPI Aachen Website Clone

This is an exact clone of the PPI Aachen website (https://ppiaachen.de) built with React, TypeScript, and Tailwind CSS.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
├── src/
│   ├── components/       # Reusable components
│   │   ├── Layout.tsx
│   │   ├── SideNavigation.tsx
│   │   ├── HeroHeader.tsx
│   │   └── Button.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── LaporDiri.tsx
│   │   ├── Events.tsx
│   │   ├── Communities.tsx
│   │   ├── Merchandise.tsx
│   │   ├── Sejarah.tsx
│   │   ├── Kepengurusan.tsx
│   │   └── AdArt.tsx
│   ├── App.tsx          # Main app component with routing
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## 🎨 Features

- ✅ Exact visual clone of the original website
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Side navigation with collapsible groups
- ✅ Hero header sections
- ✅ Typography system matching original
- ✅ Color scheme matching original (#0061BF)
- ✅ All pages from original site
- ✅ React Router for navigation
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling

## 📱 Responsive Breakpoints

- Mobile: < 480px
- Tablet: 480px - 767px
- Desktop: ≥ 1280px

## 🎯 Pages

- `/` - Home
- `/lapor-diri` - Registration
- `/events` - Events
- `/communities` - Communities
- `/merchandise` - Merchandise
- `/sejarah` - History
- `/kepengurusan` - Management
- `/ad-art` - Constitution

## 🛠️ Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **Tailwind CSS** - Styling
- **Lato Font** - Typography

## 📝 Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
```js
colors: {
  primary: {
    DEFAULT: '#0061BF',
    dark: '#004E99',
    light: '#3482CC',
  },
}
```

### Navigation Items
Edit `src/components/SideNavigation.tsx` to modify navigation structure.

### Content
Edit individual page components in `src/pages/` to update content.

## 🚧 Future Enhancements

- [ ] Add form functionality for Lapor Diri
- [ ] Integrate with backend API
- [ ] Add event calendar
- [ ] Add image gallery
- [ ] Add search functionality
- [ ] Add dark mode toggle
- [ ] Add animations and transitions

## 📄 License

This is a clone project for educational purposes.

