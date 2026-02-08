# 🎨 Canvas Redesign

> A beautiful, modern redesign for Canvas LMS that works on school computers without extensions!

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://yourusername.github.io/canvas-redesign)
[![GitHub Pages](https://img.shields.io/badge/hosted-GitHub_Pages-blue)](https://pages.github.com/)

## ✨ Features

- 🌓 **Multiple Themes** - Light, Dark, Ocean, and Forest themes
- 🎨 **Modern UI** - Beautiful course cards, smooth animations, and better typography
- ⚡ **No Installation** - Works via bookmarklet (perfect for school computers!)
- 🔒 **Privacy First** - All settings stored locally on your device
- 🚀 **Fast & Simple** - Just drag a bookmark and click!

## 🖼️ Screenshots

*Add screenshots here once deployed!*

## 🚀 How to Use

### Method 1: Bookmarklet (Recommended)

1. **Visit the website**: [Your GitHub Pages URL]
2. **Choose your theme**: Light, Dark, Ocean, or Forest
3. **Drag the bookmark**: Drag the "📌 Canvas Redesign" button to your bookmarks bar
4. **Use on Canvas**: Go to Canvas, then click the bookmark!

### Method 2: Copy & Paste Code

1. Visit the website and copy the generated code
2. Go to Canvas
3. Press F12 to open Developer Tools
4. Click "Console" tab
5. Paste the code and press Enter

## 🎯 Why This Works on School Computers

Unlike browser extensions which require administrator privileges to install, this solution uses a **bookmarklet** - which is just a regular bookmark that runs JavaScript. Since bookmarks are a standard browser feature, they work on restricted computers!

## 🎨 Available Themes

### Light Theme ☀️
Clean, professional Canvas with modern improvements

### Dark Theme 🌙
Perfect for late-night studying with easy-on-the-eyes dark colors

### Ocean Theme 🌊
Calming blue and teal colors inspired by the ocean

### Forest Theme 🌲
Natural green tones for a refreshing study experience

## 🛠️ Features You Can Toggle

- **Modern UI** - Rounded cards, shadows, and smooth hover effects
- **Better Typography** - Improved fonts across Canvas
- **Smooth Animations** - Transitions on buttons and interactive elements

## 📖 How It Works

The website generates custom CSS based on your preferences and packages it into a bookmarklet. When you click the bookmarklet on Canvas:

1. It injects the custom CSS into the Canvas page
2. Your chosen theme is applied instantly
3. A confirmation notification appears
4. Canvas looks beautiful! ✨

All styling is done via CSS - no Canvas functionality is modified or broken.

## 🔧 For Developers

### Project Structure

```
canvas-redesign/
├── index.html              # Main webpage
├── styles/
│   ├── main.css           # Website styling
│   └── themes.css         # Canvas theme definitions
├── scripts/
│   └── main.js            # Bookmarklet generator
└── README.md              # This file!
```

### Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/canvas-redesign.git
   cd canvas-redesign
   ```

2. Open `index.html` in your browser (no build process needed!)

3. Make changes and refresh to see updates

### Deploying to GitHub Pages

1. Push your code to GitHub
2. Go to Settings → Pages
3. Source: Deploy from branch `main` or `gh-pages`
4. Your site will be live at `https://yourusername.github.io/canvas-redesign`

## 🎓 Perfect for Students

This project is especially designed for students who:
- Use Canvas on school computers with restricted permissions
- Want a better-looking Canvas experience
- Prefer dark mode for studying at night
- Don't want to install browser extensions

## 🤝 Contributing

Want to add more themes or features? Here's how:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-theme`)
3. Make your changes
4. Test thoroughly on Canvas
5. Commit (`git commit -m 'Add amazing new theme'`)
6. Push (`git push origin feature/amazing-theme`)
7. Open a Pull Request

### Ideas for Contributions

- New color themes
- Additional UI improvements
- Better mobile responsiveness
- Accessibility features
- GPA calculator integration
- Enhanced to-do list styling

## 📝 Adding a New Theme

1. Open `styles/themes.css`
2. Add your theme CSS following this pattern:
   ```css
   .canvas-theme-yourtheme {
     --your-primary: #color1;
     --your-secondary: #color2;
   }
   
   .canvas-theme-yourtheme body {
     background-color: var(--your-primary) !important;
   }
   /* ... more styles ... */
   ```

3. Open `scripts/main.js`
4. Add your theme to the `generateThemeCSS()` function
5. Add a button in `index.html`:
   ```html
   <button class="theme-btn" data-theme="yourtheme">
     🎨 Your Theme
   </button>
   ```

## ⚠️ Important Notes

- **Works best on desktop** - Mobile browsers may have limitations
- **Browser compatibility** - Tested on Chrome, Firefox, Edge, Safari
- **School restrictions** - Some schools may block JavaScript in bookmarks
- **No data collection** - All settings stored locally in your browser

## 🐛 Troubleshooting

### Bookmarklet doesn't work
- Make sure you're on a `.instructure.com` page
- Try the copy & paste method instead
- Check if JavaScript is enabled in your browser

### Styles look weird
- Hard refresh Canvas (Ctrl+Shift+R or Cmd+Shift+R)
- Try a different theme
- Clear your browser cache

### Can't drag the bookmark
- Your bookmarks bar might be hidden
  - Chrome: Ctrl+Shift+B / Cmd+Shift+B
  - Firefox: Ctrl+Shift+B / Cmd+Shift+B
- Use the copy & paste method instead

## 📱 Mobile Support

While this works on mobile browsers, the experience is best on desktop. Mobile browsers have limitations with bookmarklets, so we recommend using the copy & paste method on mobile devices.

## 🔐 Privacy & Security

- **No tracking** - We don't collect any data
- **No external requests** - Everything runs in your browser
- **Local storage only** - Settings saved in your browser's localStorage
- **Open source** - All code is visible and auditable

## 📄 License

MIT License - feel free to use, modify, and share!

## 🙏 Acknowledgments

- Inspired by [BetterCampus](https://github.com/ksucpea/BetterCanvas)
- Built for students, by a student
- Thanks to the Canvas LMS team for creating a great platform

## 📧 Support

Having issues or questions?
- Open an issue on GitHub
- Check the troubleshooting section above
- Share feedback using the website's feedback button

## 🌟 Show Your Support

If you find this helpful:
- ⭐ Star this repository
- 📣 Share with classmates
- 🐛 Report bugs
- 💡 Suggest new features

---

**Made with ❤️ for students who deserve a better Canvas experience**

*No extensions needed. No admin access required. Just better Canvas.* ✨
