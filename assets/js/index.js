const templatetopnav = document.createElement("template");

templatetopnav.innerHTML = `
<div class="topnav" id="topnav">
<div class="dropdown">
  <a href="/more/index.html" class="topnavbutton">MORE↓</a>
  <div class="dropdown-content">
    <!-- 暂时隐藏代理和 Discord 功能 -->
    <!-- <a href="/more/apps.html" class="first">Apps</a> -->
    <!-- <a href="/more/discord.html" class="dis">Discord</a> -->
    <a href="/more/game_help.html" class="vm">Game Help</a>
    <a href="/more/takedown.html" class="vm">DMCA</a>
    <a href="/more/blank.html" class="gr last">about:blank</a>
  </div>
</div>
<a href="/about.html">📝ABOUT</a>
<a href="/leaderboard.html">🏆LEADERBOARD</a>
<a href="/game.html">🎮MOREGAME</a>
<div class="centered-fixed-blur"></div>
<div class="centered-fixed">
     <div style="width: 40px; height: 40px; background: linear-gradient(135deg, #56ab2f, #a8e063); border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 24px; cursor: pointer; transition: transform 0.25s ease;" onmouseover="this.style.transform='rotate(360deg)'" onmouseout="this.style.transform=''" onclick="home()">🎮</div>
      <span id="duckmath-header" class="duckmath-header" onmouseenter="showchildren(this);" onmouseleave="hidechildren(this);">chop chains</span>
</div>


</div>



<div id="hamburger-icon" onclick="toggleMobileMenu(this)">
<div class="bar1"></div>
<div class="bar2"></div>
<div class="bar3"></div>
<ul class="mobile-menu">
  <li><a href="/index.html">HOME</a></li>
  <li><a href="/game.html">MOREGAME</a></li>
  <li><a href="/leaderboard.html">LEADERBOARD</a></li>
  <li><a href="/about.html">ABOUT</a></li>
  <li>
    <a class="topnavbutton">MORE↓</a>
    <div class="dropdown-content">
      <!-- 暂时隐藏代理和 Discord 功能 -->
      <!-- <a href="/more/apps.html">Apps</a> -->
      <!-- <a href="/more/Virtual_Machines.html" class="vm">Virtual Machines</a> -->
      <!-- <a href="/more/discord.html" class="dis">Discord</a> -->
      <a href="/more/game_help.html" class="gr">Game Help</a>
    </div>
  </li>
</ul>
</div>
`;

function spin(element) {
  element.style.transform = "rotate(360deg)";
  element.style.transition = "transform 0.25s ease";
}

function unspin(element) {
  element.style.transform = "";
}

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

document.body.appendChild(templatetopnav.content);

// Inject global footer on every page
const templatefooter = document.createElement("template");
templatefooter.innerHTML = `
<footer id="site-footer" class="site-footer" style="margin-top: 24px; padding: 20px 16px; border-top: 1px solid rgba(255,255,255,0.1);">
  <div style="max-width: 1200px; margin: 0 auto; display: grid; gap: 16px;">
    <div style="display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: 12px;">
        <img loading="lazy" src="/assets/img/chop-chains-logo.webp" alt="Chop Chains" width="40" height="40" style="border-radius: 6px;"/>
        <div>
          <a href="/" style="font-weight: 700; font-size: 1.05rem; text-decoration: none; color: inherit;">ChopChains.com — Unofficial Chop Chains fan hub</a>
          <div style="opacity: 0.9; font-size: 0.95rem;">Chop Chains overview, guides and more kart games.</div>
        </div>
      </div>
    </div>

    <div style="display: flex; justify-content: space-between; gap: 40px; flex-wrap: wrap;">
      <div style="flex: 0 0 auto;">
        <div style="font-weight: 600; margin-bottom: 12px; font-size: 1.05rem;">Quick Links</div>
        <div style="display: grid; gap: 8px;">
          <a href="/" style="text-decoration: none; color: inherit; opacity: 0.95; transition: opacity 0.2s;">Home</a>
          <a href="/game.html" style="text-decoration: none; color: inherit; opacity: 0.95; transition: opacity 0.2s;">More Games</a>
          <a href="/leaderboard.html" style="text-decoration: none; color: inherit; opacity: 0.95; transition: opacity 0.2s;">Leaderboard</a>
        </div>
      </div>
      <div style="flex: 0 0 auto;">
        <div style="font-weight: 600; margin-bottom: 12px; font-size: 1.05rem;">Information</div>
        <div style="display: grid; gap: 8px;">
          <a href="/about.html" style="text-decoration: none; color: inherit; opacity: 0.95; transition: opacity 0.2s;">About</a>
          <a href="/more/game_help.html" style="text-decoration: none; color: inherit; opacity: 0.95; transition: opacity 0.2s;">Game Help</a>
          <a href="/more/takedown.html" style="text-decoration: none; color: inherit; opacity: 0.95; transition: opacity 0.2s;">DMCA</a>
        </div>
      </div>
      <div style="flex: 1 1 400px;">
        <div style="font-weight: 600; margin-bottom: 12px; font-size: 1.05rem;">About This Site</div>
        <div style="opacity: 0.9; font-size: 0.95rem; line-height: 1.6;">
          ChopChains.com is an unofficial fan site dedicated to Chop Chains. We provide game information, guides, and links to help players enjoy Chop Chains and discover similar puzzle games.
        </div>
      </div>
    </div>

    <div style="display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; opacity: 0.85; font-size: 0.9rem; padding-top: 16px; margin-top: 16px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
      <div>© <span id="footer-year"></span> ChopChains.com (unofficial fan site)</div>
    </div>
  </div>
</footer>
`;

document.body.appendChild(templatefooter.content);

// Set footer year dynamically
const footerYearSpan = document.getElementById("footer-year");
if (footerYearSpan) {
  const now = new Date();
  footerYearSpan.textContent = now.getFullYear();
}

// Ensure body layout supports a sticky footer at the bottom in natural flow
(function ensureFooterLayout() {
  if (!document.getElementById("global-footer-layout-style")) {
    const style = document.createElement("style");
    style.id = "global-footer-layout-style";
    style.textContent = `
      html, body { min-height: 100%; }
      body { display: flex; flex-direction: column; min-height: 100vh; }
      #site-footer { margin-top: auto !important; }
    `;
    document.head.appendChild(style);
  }
})();

// Ensure footer stays as the last element in <body> across pages that inject content late
function placeFooterAtEnd() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;
  if (document.body.lastElementChild !== footer) {
    document.body.appendChild(footer);
  }
}

document.addEventListener("DOMContentLoaded", placeFooterAtEnd);
window.addEventListener("load", placeFooterAtEnd);

const bodyObserver = new MutationObserver(function () {
  placeFooterAtEnd();
});
bodyObserver.observe(document.body, { childList: true });
