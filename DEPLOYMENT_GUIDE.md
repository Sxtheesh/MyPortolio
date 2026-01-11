# How to Publish Your Portfolio

To publish your portfolio online for free, follow these steps using **GitHub** and **Netlify** (easiest method).

## Step 1: Push Code to GitHub

1.  **Create a GitHub Account**: If you don't have one, sign up at [github.com](https://github.com).
2.  **Create a New Repository**:
    *   Click the `+` icon in the top right -> **New repository**.
    *   Name it `portfolio` (or `satheesh-portfolio`).
    *   Keep it **Public**.
    *   Click **Create repository**.
3.  **Push Your Code**:
    *   Copy the commands shown under "…or push an existing repository from the command line".
    *   They will look like this (run these in your terminal):
        ```bash
        git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
        git branch -M main
        git push -u origin main
        ```

## Step 2: Deploy on Netlify (Easiest & Free)

1.  **Sign Up**: Go to [netlify.com](https://www.netlify.com/) and sign up with your **GitHub** account.
2.  **Add New Site**:
    *   Click **"Add new site"** -> **"Import from existing project"**.
3.  **Connect to GitHub**:
    *   Click **GitHub**.
    *   Authorize Netlify to access your repositories.
    *   Select your `portfolio` repository from the list.
4.  **Deploy**:
    *   Netlify will automatically detect the settings (Build command: `npm run build`, Publish directory: `dist`).
    *   Click **Deploy Site**.

## Step 3: Get Your URL

*   Netlify will give you a random URL (e.g., `silly-name-12345.netlify.app`).
*   You can change this in **Site Settings** -> **Change site name** to something like `satheeshvaran.netlify.app`.
*   If you bought a custom domain (like `satheeshvaran.com`), you can connect it here too!

## Step 4: Share on LinkedIn

1.  Copy your new website URL.
2.  Go to LinkedIn -> **Add profile section** -> **Featured** -> **Link**.
3.  Paste your URL and add a thumbnail/description.
