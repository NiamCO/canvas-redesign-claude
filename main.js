// ============================================
// CANVAS REDESIGN WEBSITE - MAIN SCRIPT
// ============================================

console.log('🎨 Canvas Redesign Website loaded!');

// ============================================
// STATE MANAGEMENT
// ============================================

const state = {
  theme: 'light',
  modernUI: true,
  betterFonts: true,
  smoothAnimations: true
};

// Load saved settings from localStorage
function loadSettings() {
  const saved = localStorage.getItem('canvasRedesignSettings');
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      Object.assign(state, parsed);
      applySettings();
    } catch (e) {
      console.error('Error loading settings:', e);
    }
  }
}

// Save settings to localStorage
function saveSettings() {
  localStorage.setItem('canvasRedesignSettings', JSON.stringify(state));
  console.log('💾 Settings saved:', state);
}

// Apply current settings to the UI
function applySettings() {
  // Update theme buttons
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === state.theme);
  });
  
  // Update feature toggles
  document.getElementById('modernUI').checked = state.modernUI;
  document.getElementById('betterFonts').checked = state.betterFonts;
  document.getElementById('smoothAnimations').checked = state.smoothAnimations;
  
  // Update bookmarklet
  updateBookmarklet();
}

// ============================================
// THEME GENERATION
// ============================================

function generateThemeCSS() {
  const baseCSS = `
    /* Canvas Redesign - Applied */
    html { scroll-behavior: smooth; }
    
    * {
      -webkit-font-smoothing: antialiased !important;
      -moz-osx-font-smoothing: grayscale !important;
    }
    
    ${state.betterFonts ? `
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif !important;
    }
    ` : ''}
    
    ${state.smoothAnimations ? `
    a, button, .btn, .Button {
      transition: all 0.2s ease !important;
    }
    ` : ''}
    
    ${state.modernUI ? `
    .ic-DashboardCard {
      border-radius: 12px !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08) !important;
      transition: transform 0.2s ease, box-shadow 0.2s ease !important;
      overflow: hidden !important;
      border: none !important;
    }
    
    .ic-DashboardCard:hover {
      transform: translateY(-4px) !important;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.12) !important;
    }
    
    .btn, .Button {
      border-radius: 8px !important;
      font-weight: 500 !important;
    }
    
    input[type="text"],
    input[type="email"],
    textarea,
    select {
      border-radius: 6px !important;
      border: 2px solid #e0e0e0 !important;
      transition: border-color 0.2s ease !important;
    }
    
    input:focus,
    textarea:focus {
      border-color: #667eea !important;
      outline: none !important;
    }
    ` : ''}
  `;

  let themeCSS = '';
  
  switch (state.theme) {
    case 'dark':
      themeCSS = `
        body {
          background-color: #1a1a1a !important;
          color: #e0e0e0 !important;
        }
        
        #header {
          background-color: #242424 !important;
          border-bottom: 1px solid #3a3a3a !important;
        }
        
        .ic-DashboardCard {
          background-color: #242424 !important;
          border: 1px solid #3a3a3a !important;
        }
        
        .ic-DashboardCard__header-title,
        h1, h2, h3, h4, h5, h6 {
          color: #e0e0e0 !important;
        }
        
        #content, #main {
          background-color: #1a1a1a !important;
        }
        
        a {
          color: #4a9eff !important;
        }
        
        .section, .content-box {
          background-color: #242424 !important;
          border: 1px solid #3a3a3a !important;
        }
        
        table {
          background-color: #242424 !important;
        }
        
        table th, table td {
          color: #e0e0e0 !important;
          border-color: #3a3a3a !important;
        }
      `;
      break;
      
    case 'ocean':
      themeCSS = `
        body {
          background-color: #edf6f9 !important;
        }
        
        #header {
          background: linear-gradient(135deg, #006d77 0%, #00a8cc 100%) !important;
        }
        
        #header * {
          color: white !important;
        }
        
        .ic-DashboardCard {
          background: white !important;
          border: 2px solid #83c5be !important;
        }
        
        .ic-DashboardCard:hover {
          border-color: #006d77 !important;
        }
        
        .btn-primary, .Button--primary {
          background: #006d77 !important;
          border: none !important;
        }
        
        a {
          color: #00a8cc !important;
        }
      `;
      break;
      
    case 'forest':
      themeCSS = `
        body {
          background-color: #f1faee !important;
        }
        
        #header {
          background: linear-gradient(135deg, #2d6a4f 0%, #52b788 100%) !important;
        }
        
        #header * {
          color: white !important;
        }
        
        .ic-DashboardCard {
          background: white !important;
          border: 2px solid #52b788 !important;
        }
        
        .ic-DashboardCard:hover {
          border-color: #2d6a4f !important;
        }
        
        .btn-primary, .Button--primary {
          background: #2d6a4f !important;
          border: none !important;
        }
        
        a {
          color: #40916c !important;
        }
      `;
      break;
  }
  
  return baseCSS + themeCSS;
}

// ============================================
// BOOKMARKLET GENERATION
// ============================================

function generateBookmarkletCode() {
  const css = generateThemeCSS();
  
  // Escape the CSS for JavaScript
  const escapedCSS = css
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '');
  
  return `
(function() {
  // Remove any existing Canvas Redesign styles
  const existing = document.getElementById('canvas-redesign-styles');
  if (existing) existing.remove();
  
  // Create and inject new styles
  const style = document.createElement('style');
  style.id = 'canvas-redesign-styles';
  style.textContent = '${escapedCSS}';
  document.head.appendChild(style);
  
  // Show confirmation
  const notification = document.createElement('div');
  notification.textContent = '✨ Canvas Redesign Applied! (${state.theme} theme)';
  notification.style.cssText = 'position:fixed;top:20px;right:20px;background:linear-gradient(135deg,#667eea,#764ba2);color:white;padding:15px 25px;border-radius:8px;box-shadow:0 4px 12px rgba(0,0,0,0.2);z-index:999999;font-family:sans-serif;font-weight:600;animation:slideIn 0.3s ease;';
  
  const keyframes = document.createElement('style');
  keyframes.textContent = '@keyframes slideIn{from{transform:translateX(400px);opacity:0}to{transform:translateX(0);opacity:1}}';
  document.head.appendChild(keyframes);
  
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease';
    keyframes.textContent += '@keyframes slideOut{from{transform:translateX(0);opacity:1}to{transform:translateX(400px);opacity:0}}';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
})();
`.trim();
}

function updateBookmarklet() {
  const code = generateBookmarkletCode();
  
  // Update the bookmarklet link
  const bookmarklet = document.getElementById('bookmarklet');
  bookmarklet.href = 'javascript:' + encodeURIComponent(code);
  
  // Update the code display
  document.getElementById('injectionCode').textContent = code;
  
  console.log('📌 Bookmarklet updated for theme:', state.theme);
}

// ============================================
// EVENT HANDLERS
// ============================================

// Panel toggle
document.getElementById('toggle-panel').addEventListener('click', () => {
  document.querySelector('.control-panel').classList.toggle('collapsed');
});

// Theme selection
document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    state.theme = btn.dataset.theme;
    saveSettings();
    applySettings();
  });
});

// Feature toggles
document.getElementById('modernUI').addEventListener('change', (e) => {
  state.modernUI = e.target.checked;
  saveSettings();
  updateBookmarklet();
});

document.getElementById('betterFonts').addEventListener('change', (e) => {
  state.betterFonts = e.target.checked;
  saveSettings();
  updateBookmarklet();
});

document.getElementById('smoothAnimations').addEventListener('change', (e) => {
  state.smoothAnimations = e.target.checked;
  saveSettings();
  updateBookmarklet();
});

// Open Canvas
document.getElementById('openCanvas').addEventListener('click', () => {
  window.open('https://issaquah.instructure.com/', '_blank');
});

// Reset settings
document.getElementById('resetSettings').addEventListener('click', () => {
  if (confirm('Reset all settings to default?')) {
    localStorage.removeItem('canvasRedesignSettings');
    state.theme = 'light';
    state.modernUI = true;
    state.betterFonts = true;
    state.smoothAnimations = true;
    applySettings();
    alert('✅ Settings reset!');
  }
});

// Copy code button
document.getElementById('copyCode').addEventListener('click', () => {
  const code = document.getElementById('injectionCode').textContent;
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.getElementById('copyCode');
    const originalText = btn.textContent;
    btn.textContent = '✅ Copied!';
    setTimeout(() => {
      btn.textContent = originalText;
    }, 2000);
  });
});

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Initializing Canvas Redesign...');
  loadSettings();
  
  // Make bookmarklet draggable on mobile
  const bookmarklet = document.getElementById('bookmarklet');
  bookmarklet.addEventListener('dragstart', (e) => {
    e.dataTransfer.effectAllowed = 'copy';
  });
});

console.log('✅ Canvas Redesign Website ready!');
