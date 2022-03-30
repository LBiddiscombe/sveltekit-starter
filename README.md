# Sveltekit Starter

My take on a basic starter pack;

Includes:
- [x] Sveltekit (Skeleton, Typescript, ESLint, Prettier, Playwright)
- [x] TailwindCSS + Typography
- [x] DaisyUI
- [ ] Vitest - depending on if Playwright approach feels off

## Creating this starter project

### [Sveltekit](https://kit.svelte.dev/)

```bash
# Select Skeleton, Typescript, ESLint, Prettier, Playwright

npm init svelte@next sveltekit-starter
```

> Note: the `@next` is temporary

### Page Specific Components

We can create a `/routes/page/_components` folder which will not expose the components as a public route

### [Less Boiler Plate-y API route](https://kit.svelte.dev/docs/routing#endpoints)

If an endpoint has the same filename as a page (except for the extension), the page will get its props from the endpoint. So a page like `src/routes/items/[id].svelte` could get its props from `src/routes/items/[id].js`

### [TailwindCSS](https://tailwindcss.com/) + [Typography](https://tailwindcss.com/docs/typography-plugin)

```bash
npx svelte-add@latest tailwindcss --typography
```

### [DaisyUI](https://daisyui.com/)

```bash
npm i daisyui
```

```js
// tailwind.config.cjs

module.exports = {
  ...
  plugins: [
    require('daisyui')
  ]
}
```

```html
<!-- src/app.html -->

<html data-theme="coffee">
```
> [See default DaisyUI Themes here](https://daisyui.com/docs/themes/)

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
