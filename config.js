// =========================================================
// GLOBAL ENVIRONMENT CONFIGURATION
// =========================================================

const CONFIG = {
  // Replace these with your actual deployment URLs
  PROD_API_URL: "https://script.google.com/macros/s/AKfycby3PKx1WSI2t1THzGC7iTVzN-BAKZriTcC9MyghZ6Kbcx4jKsxYRIJ8pzDrodEsyiknxg/exec",
  DEV_API_URL:  "https://script.google.com/macros/s/AKfycbwmBPo05Po7iRzNozR50AdppafZ6vLqODjzLVzKG_xEZ-1at7SZTPN4qjYLQoBCkKPm4A/exec"
};

// Detect if URL contains ?env=dev or if testing on localhost
const urlParams = new URLSearchParams(window.location.search);
const IS_DEV = (urlParams.has('env') && urlParams.get('env').toLowerCase() === 'dev') || 
               window.location.hostname === '127.0.0.1' || 
               window.location.hostname === 'localhost';

// Global active backend URL used by index.html and intake.html
const ACTIVE_API_URL = IS_DEV ? CONFIG.DEV_API_URL : CONFIG.PROD_API_URL;

// Visual DEV banner indicator
document.addEventListener('DOMContentLoaded', function() {
  if (IS_DEV) {
    console.log("%c 🛠️ DEV MODE ACTIVE", "color: #ff9800; font-weight: bold; font-size: 14px;");
    var devBanner = document.createElement('div');
    devBanner.style.cssText = "position:fixed;top:0;left:0;right:0;background:#ff9800;color:#000;text-align:center;font-weight:bold;font-size:12px;padding:4px;z-index:99999;";
    devBanner.textContent = "⚠️ DEV ENVIRONMENT ACTIVE — Connected to DEV Apps Script Backend";
    document.body.prepend(devBanner);
  }
});
