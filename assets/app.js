
(function () {
  const data = window.SITE_DATA;
  const depth = Number(document.body.dataset.depth || 0);
  const root = "../".repeat(depth);
  const page = document.body.dataset.page;
  const nav = [
    ["home", "Home", root + "index.html"],
    ["games", "Games", root + "games/index.html"],
    ["editor", "Game Editor", root + "game-editor/index.html"],
    ["tools", "Tools", root + "tools/index.html"],
    ["about", "About / Circle", root + "about/index.html"],
    ["about", "Member", root + "about/index.html#member"]
  ];
  const header = document.querySelector("[data-site-header]");
  if (header) header.innerHTML = `<header class="site-header"><div class="header-inner wrap"><a class="brand" href="${root}index.html" aria-label="${data.siteName} ホーム"><img src="${root}assets/images/green-dragon-logo-transparent.png" alt=""><span>${data.siteName}<small>HUMAN × AI AGENT</small></span></a><button class="menu-button" aria-expanded="false" aria-controls="site-nav">MENU</button><nav id="site-nav" aria-label="メインナビゲーション">${nav.map(([id,label,url]) => `<a href="${url}"${page===id?' aria-current="page"':''}>${label}</a>`).join("")}<a data-external="x" href="#">X ↗</a><a data-external="youtube" href="#">YouTube ↗</a></nav></div></header>`;
  const footer = document.querySelector("[data-site-footer]");
  if (footer) footer.innerHTML = `<footer class="site-footer"><div class="wrap footer-main"><div><a class="brand inverse" href="${root}index.html"><img src="${root}assets/images/green-dragon-logo-transparent.png" alt=""><span>${data.siteName}<small>HUMAN × AI AGENT</small></span></a><p>Learn through play. Take to the sky.</p></div><div class="footer-links"><div><h2>Explore</h2><a href="${root}games/index.html">Games</a><a href="${root}game-editor/index.html">Game Editor</a><a href="${root}about/index.html">About / Circle</a><a href="${root}about/index.html#member">Member</a><a class="r18-link" href="${root}r18/index.html">R18 Entrance</a></div><div><h2>External</h2><a data-external="x" href="#">X ↗</a><a data-external="youtube" href="#">YouTube ↗</a><a data-external="pixiv" href="#">pixiv ↗</a><a data-external="fanza" href="#">FANZA ↗</a><a data-external="dlsite" href="#">DLsite ↗</a></div><div class="footer-contact"><h2>Contact</h2><p>仕事・制作のご相談</p><a href="mailto:${data.contactEmail}">${data.contactEmail}</a></div></div></div><div class="wrap footer-bottom"><small>© 2026 ${data.creatorName}. All rights reserved.</small><small>ALL AGES TOP</small></div></footer>`;
  const footerExplore = footer && footer.querySelector(".footer-links > div:first-child");
  if (footerExplore) footerExplore.insertAdjacentHTML("beforeend", `<a href="${root}tools/index.html">Tools</a><a href="${root}news/index.html">News</a><a href="${root}development-log/index.html">Development Log</a>`);
  document.querySelectorAll("[data-external]").forEach(a => { const url=data.externalLinks[a.dataset.external]; a.href=url; a.target="_blank"; a.rel="noopener noreferrer"; });
  const button = document.querySelector(".menu-button");
  if (button) button.addEventListener("click", () => { const open=button.getAttribute("aria-expanded")==="true"; button.setAttribute("aria-expanded", String(!open)); document.querySelector("#site-nav").classList.toggle("open", !open); });
  const news = document.querySelector("[data-news-list]");
  if (news) news.innerHTML = data.news.map(n => `<a href="${n.href}"><time>${n.date}</time><span>${n.category}</span><strong>${n.title}</strong><i>→</i></a>`).join("");
  document.querySelectorAll("[data-games]").forEach(list => { const type=list.dataset.games; list.innerHTML=data.games.filter(g=>g.type===type).map(g=>`<article class="game-card"><a class="thumb thumb-${g.visual}${g.disabled?' disabled':''}" href="${g.href}" ${g.disabled?'aria-disabled="true" tabindex="-1"':''} role="img" aria-label="${g.title} のサムネイル"><span>${g.type==='free'?'FREE GAME':'PAID GAME'}</span><b>${g.title}</b></a><div class="game-info"><div><span>${g.genre}</span><time>${g.date}</time></div><h3>${g.title}</h3><p>${g.description}</p>${g.disabled?'<span class="text-link muted">準備中</span>':`<a class="text-link" href="${g.href}">作品詳細を見る →</a>`}</div></article>`).join(""); });
})();
