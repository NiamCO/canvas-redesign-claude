# 🚀 Deployment Guide - GitHub Pages

## Complete Guide to Hosting Your Canvas Redesign Website

This guide will walk you through deploying your Canvas Redesign website to GitHub Pages so it's accessible online!

---

## 📋 Prerequisites

Before you start, you'll need:
- ✅ A GitHub account (free at [github.com](https://github.com))
- ✅ All the project files
- ✅ About 15 minutes

---

## 🎯 Step 1: Create a GitHub Account

If you don't have one already:

1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Choose a username (this will be in your website URL!)
4. Follow the signup process

**Username Tips:**
- Choose something professional (you might use this for college/jobs)
- Keep it simple and memorable
- Example: `johndoe`, `jane-smith`, `yourschoolname-canvas`

---

## 🎯 Step 2: Create a New Repository

A repository (or "repo") is like a folder for your project.

1. **Log in to GitHub**
2. **Click the "+" icon** in the top-right
3. **Select "New repository"**
4. **Fill in the details:**
   - Repository name: `canvas-redesign` (or any name you like)
   - Description: "A beautiful redesign for Canvas LMS"
   - Visibility: **Public** (required for free GitHub Pages)
   - ✅ Check "Add a README file"
5. **Click "Create repository"**

**Important:** Your website URL will be: `https://yourusername.github.io/canvas-redesign`

---

## 🎯 Step 3: Upload Your Files

There are two ways to do this:

### Method A: Web Upload (Easiest for Beginners)

1. **In your new repository, click "Add file"** → "Upload files"

2. **Drag and drop all these files:**
   ```
   index.html
   README.md
   styles/
     ├── main.css
     └── themes.css
   scripts/
     └── main.js
   ```

3. **Scroll down and click "Commit changes"**

**Note:** Make sure you upload the entire folder structure! The `styles` and `scripts` folders should be maintained.

### Method B: Using Git (For Those Comfortable with Command Line)

```bash
# Navigate to your project folder
cd path/to/canvas-redesign

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit"

# Add remote repository (replace USERNAME and REPO)
git remote add origin https://github.com/USERNAME/REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🎯 Step 4: Enable GitHub Pages

1. **In your repository, click "Settings"** (top menu)

2. **Scroll down to "Pages"** (left sidebar under "Code and automation")

3. **Under "Build and deployment":**
   - Source: Select **"Deploy from a branch"**
   - Branch: Select **"main"** (or "master" if that's your default)
   - Folder: Select **"/ (root)"**

4. **Click "Save"**

5. **Wait about 2-3 minutes** for GitHub to build your site

6. **Refresh the page** - you should see:
   ```
   Your site is live at https://yourusername.github.io/canvas-redesign/
   ```

---

## 🎯 Step 5: Test Your Website

1. **Click the link** GitHub provides
2. **You should see your Canvas Redesign website!**
3. **Test the features:**
   - Switch between themes
   - Toggle features on/off
   - Try the bookmarklet

**If you see a 404 error:**
- Wait a few more minutes
- Check that your `index.html` is in the root folder
- Make sure GitHub Pages is enabled in Settings

---

## 🎯 Step 6: Update Your Canvas URL

By default, the website points to `issaquah.instructure.com`. Let's change it to your school's Canvas:

1. **In GitHub, click on `scripts/main.js`**
2. **Click the pencil icon** (Edit this file)
3. **Find this line** (near the bottom):
   ```javascript
   window.open('https://issaquah.instructure.com/', '_blank');
   ```
4. **Change it to your Canvas URL:**
   ```javascript
   window.open('https://yourschool.instructure.com/', '_blank');
   ```
5. **Scroll down and click "Commit changes"**
6. **Wait a minute** for the site to rebuild

---

## 🎯 Step 7: Share with Friends!

Your website is now live! Share it:

1. **Copy your URL**: `https://yourusername.github.io/canvas-redesign/`
2. **Share with classmates**
3. **Post in your school's Discord/Slack**
4. **Add it to your Canvas as a link**

---

## 🛠️ Making Updates

Whenever you want to change your website:

### Via GitHub Web Interface:
1. Navigate to the file you want to edit
2. Click the pencil icon (Edit)
3. Make your changes
4. Scroll down and click "Commit changes"
5. Wait ~1 minute for updates to appear

### Via Git Command Line:
```bash
# Make your changes to files
# Then:
git add .
git commit -m "Description of changes"
git push
```

---

## 🎨 Customization Ideas

Now that it's live, try these customizations:

### Add Your School Name
Edit `index.html` and change:
```html
<h1>🎨 Welcome to Canvas Redesign</h1>
```
To:
```html
<h1>🎨 [Your School] Canvas Redesign</h1>
```

### Create a New Theme
1. Edit `styles/themes.css`
2. Add your theme CSS
3. Edit `scripts/main.js` to include it
4. Edit `index.html` to add a theme button
5. Commit and push!

### Change the Color Scheme
Edit the `:root` variables in `styles/main.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --accent-color: #667eea;
}
```

---

## 📱 Adding a Custom Domain (Optional)

Want `canvas.yourname.com` instead of `yourusername.github.io/canvas-redesign`?

1. **Buy a domain** (from Namecheap, Google Domains, etc.)
2. **In your repository Settings → Pages**
3. **Under "Custom domain"**, enter your domain
4. **In your domain registrar's DNS settings:**
   - Add a CNAME record pointing to `yourusername.github.io`
5. **Wait for DNS to propagate** (can take 24-48 hours)

---

## 🔧 Troubleshooting

### Site Not Loading
- **Wait 5 minutes** - GitHub Pages can take time to build
- **Check Settings → Pages** - Make sure it's enabled
- **Verify files are uploaded** - Check your repository

### Bookmarklet Not Working
- **Test locally first** - Open `index.html` in a browser
- **Check browser console** (F12) for errors
- **Try on actual Canvas** - It won't work on your GitHub Pages site itself

### Styles Look Broken
- **Hard refresh** - Press Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
- **Check file paths** - Make sure `styles/main.css` and `scripts/main.js` paths are correct
- **Look for errors** - F12 → Console tab

### Can't Edit Files
- **Make sure you're logged in** to GitHub
- **Check you're in the right repository**
- **You need to be the repository owner** or have write access

---

## 📊 Tracking Usage (Optional)

Want to see how many people use your site?

### Add Google Analytics:
1. Create a Google Analytics account
2. Get your tracking code
3. Add it to `index.html` before `</head>`

### Add GitHub Stats:
GitHub automatically tracks:
- Repository stars
- Forks
- Traffic (in Insights → Traffic)

---

## 🔐 Security Best Practices

- ✅ **Never commit passwords** or sensitive data
- ✅ **Keep repository public** (required for free GitHub Pages)
- ✅ **Review code before merging** pull requests from others
- ✅ **Enable branch protection** if collaborating with others

---

## 🚀 Advanced: Custom 404 Page

Create a custom "page not found" page:

1. Create `404.html` in your repository
2. Design it however you like
3. GitHub Pages will show it for broken links

Example:
```html
<!DOCTYPE html>
<html>
<head>
  <title>404 - Page Not Found</title>
</head>
<body>
  <h1>🎨 Oops! Page Not Found</h1>
  <p><a href="/">Go back to Canvas Redesign</a></p>
</body>
</html>
```

---

## 📈 Next Steps

Now that your site is live:

1. ✅ **Test all features** on your actual Canvas
2. ✅ **Get feedback** from friends
3. ✅ **Add more themes** based on requests
4. ✅ **Create screenshots** for your README
5. ✅ **Share widely** with your school

---

## 🎓 Learning Resources

Want to improve your website?

- **HTML/CSS/JavaScript**: [MDN Web Docs](https://developer.mozilla.org/)
- **Git & GitHub**: [GitHub Skills](https://skills.github.com/)
- **Web Design**: [CSS Tricks](https://css-tricks.com/)
- **Color Schemes**: [Coolors.co](https://coolors.co/)

---

## 💡 Pro Tips

1. **Use meaningful commit messages**
   - ❌ "update"
   - ✅ "Add ocean theme and improve mobile responsiveness"

2. **Test before pushing**
   - Open files locally in a browser
   - Check for JavaScript errors
   - Test on different browsers

3. **Keep a local backup**
   - Save copies of your files
   - Use Git to track changes
   - Don't rely solely on GitHub

4. **Document your changes**
   - Update README when adding features
   - Comment your code
   - Help others understand your work

---

## 🤝 Getting Help

Stuck? Here's where to get help:

1. **GitHub Community**: [GitHub Community Forum](https://github.community/)
2. **Stack Overflow**: Search for GitHub Pages issues
3. **GitHub Pages Docs**: [Official Documentation](https://docs.github.com/en/pages)
4. **Web Development Discord**: Find communities for beginners

---

## ✨ Success Checklist

After deployment, verify:
- [ ] Website loads at your GitHub Pages URL
- [ ] All themes work correctly
- [ ] Bookmarklet can be dragged to bookmarks bar
- [ ] Copy code button works
- [ ] Settings persist after page refresh
- [ ] "Open Canvas Directly" button goes to your school's Canvas
- [ ] Mobile responsive (test on phone)
- [ ] Works on different browsers (Chrome, Firefox, Safari)

---

## 🎉 Congratulations!

You've successfully deployed your Canvas Redesign website to the internet! 

You now have:
- ✅ A live website anyone can access
- ✅ A working bookmarklet for Canvas
- ✅ A portfolio project to show off
- ✅ Experience with GitHub and web deployment

**Next challenge:** Get 10 classmates to use it! 🚀

---

*Made with ❤️ for students learning to build and deploy websites*
