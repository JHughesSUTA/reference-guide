1. Set the base in vite.config.js
   Create or edit vite.config.js in your project root:

```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/demo-students-filter/', // <-- repo name with slashes
});
```

2. Install gh-pages

```
npm install --save-dev gh-pages
```

3. Add Deploy Scripts to package.json
   Add these scripts:

```
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

4. Push Your Code to GitHub
   Make sure all your changes are committed and pushed to your repo.

5. Deploy

Run:

```
npm run deploy
```

This will build your app and push the dist folder to the gh-pages branch.

6. Configure GitHub Pages
   Go to your repo on GitHub.
   Click Settings → Pages.
   Under Source, select the gh-pages branch and / (root) folder.
   Save.
7. Access Your Site
   Your app will be live at:
   https://jhughessuta.github.io/repo-name/

Summary:

- Set base in vite.config.js
- Add deploy scripts
- Run npm run deploy
- Set GitHub Pages source to gh-pages branch
