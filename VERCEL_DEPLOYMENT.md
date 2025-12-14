# Vercel Deployment Guide

## Project Name: Avi Dedania Portfolio

### Step 1: Rename the Folder

1. Close any terminals/IDEs that have the folder open
2. Navigate to: `D:\Avi\Personal Info\`
3. Right-click on `TEST Portfolio` folder
4. Select "Rename"
5. Change it to: `My Portfolio`

### Step 2: Initialize Git (if not already done)

Open terminal in the renamed folder and run:

```bash
cd "D:\Avi\Personal Info\My Portfolio"
git init
git add .
git commit -m "Initial commit - Avi Dedania Portfolio"
```

### Step 3: Push to GitHub

1. Create a new repository on GitHub:
   - **Username**: `avidedania`
   - **Repository Name**: `My_Portfolio`
   - URL will be: `https://github.com/avidedania/My_Portfolio.git`

2. Fix the existing remote (if you got the error "remote origin already exists"):

```powershell
# Remove the old incorrect remote
git remote remove origin

# Add the correct remote
git remote add origin https://github.com/avidedania/My_Portfolio.git

# Verify it's set correctly
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 4: Deploy to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. **Project Name**: Set it to `avi-dedania-portfolio` (must be lowercase, no spaces)
   - Vercel project names must be lowercase and can only contain letters, digits, '.', '_', and '-'
5. Framework Preset: Next.js (auto-detected)
6. Root Directory: `./` (default)

### Step 5: Configure Environment Variables

In Vercel project settings, add these environment variables:

- `SMTP_USER` = your Gmail address
- `SMTP_PASSWORD` = your Gmail App Password
- `RECEIVER_EMAIL` = email where you want to receive contact form submissions

### Step 6: Deploy

Click "Deploy" and wait for the build to complete!

Your portfolio will be live at: `https://avi-dedania-portfolio.vercel.app` (or your custom domain)

**Note:** The display name in Vercel dashboard can still show "Avi Dedania Portfolio" for readability, but the actual project name/URL will be `avi-dedania-portfolio`.

---

## Quick Commands Reference

```bash
# After renaming folder, navigate to it
cd "D:\Avi\Personal Info\My Portfolio"

# If git is already initialized, just commit changes
git add .
git commit -m "Update project name and prepare for Vercel deployment"
git push
```

