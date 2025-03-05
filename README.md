# Simplify-dev

---

## About package:

React library for speeding up creation of interfaces.

It includes UI components stylized with [tailwindcss](https://tailwindcss.com/) and a set of some commonly used hooks. The main feature of the project is the changeability of library styles out of the box. Styles are applied to components directly in your project using preset and plugin with prepared default values and utilities that can be changed in tailwind configuration file.

---

## [Read documentation](https://github.com/ultrasonicdevs/simplify-dev/wiki)

## Quick start:

### 1. Init your project

_As example used vite react app_

```bash
npm create vite@latest my-app --template react-ts
```

### 2. Install packages and init config files:

Install simplify-dev, tailwindcss and its peer dependencies, then generate your tailwind.config.js and postcss.config.js files.

```bash
npm i simplify-dev
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Setup configuration

#### Configure your tailwind.config.js:

Add the paths to all of your template files in your tailwind.config.js file.

```js
import { simplifyDefaultsPlugin, simplifyUtilitiesPreset } from 'simplify-dev';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/simplify-dev/*', // styling simplify-dev components
  ],
  theme: {
    extend: {
      // your configuration
    },
  },
  plugins: [simplifyDefaultsPlugin],
  presets: [simplifyUtilitiesPreset],
};
```

You can see that we add simplify-dev files to tailwindcss content. This is done to simplify the customization of components via tailwind.config.js

### 4. Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 5. Start your build process

Run your build process with npm run dev.

```bash
npm run dev
```

### 6. Start using simplify-dev in your project

**Example:**

```js
export default function App() {
  const [count, setCount] = useState(0);

  return (
<<<<<<< HEAD
    <section className="flex flex-col items-center justify-center gap-5 min-h-screen">
      <div className="flex justify-center">
        <Button as="a" buttonType="text" href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} alt="Vite logo" width="120px" />
        </Button>
        <Button
          as="a"
          buttonType="text"
          href="https://react.dev"
          target="_blank">
          <img src={reactLogo} alt="React logo" width="120px" />
        </Button>
      </div>
      <Typography as="h1">Project with simplify-dev</Typography>
      <Button
        as="button"
        variant="reject"
        className="w-[300px]"
        onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <Typography>
        Edit <code>src/App.tsx</code> and save to test HMR
      </Typography>
      <Typography>Click on the Vite and React logos to learn more</Typography>
    </section>
  );
}
```
