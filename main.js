(function () {
  const S = window.SITE;
  const root = document.documentElement;
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

  const UI = {
    zh: {
      "nav.projects": "项目",
      "nav.experience": "经历",
      "nav.skills": "技能",
      "nav.education": "教育",
      hello: "正在寻找工作机会",
      featuredTitle: "代表作",
      moreTitle: "更多项目",
      skillsHint: "高亮的是主力技能",
      awards: "荣誉奖项",
      all: "全部",
      more: "展开详情",
      less: "收起",
      backToTop: "回到顶部 ↑",
      lang: "EN",
    },
    en: {
      "nav.projects": "Projects",
      "nav.experience": "Experience",
      "nav.skills": "Skills",
      "nav.education": "Education",
      hello: "Open to opportunities",
      featuredTitle: "Featured work",
      moreTitle: "More projects",
      skillsHint: "Highlighted skills are the ones I use most",
      awards: "Awards",
      all: "All",
      more: "Show details",
      less: "Hide details",
      backToTop: "Back to top ↑",
      lang: "中文",
    },
  };

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) {} },
  };

  let lang = store.get("lang") || (navigator.language.startsWith("zh") ? "zh" : "en");
  let filter = "all";

  // 取当前语言的文字；纯字符串原样返回；缺失时退回另一种语言
  const t = (v) => {
    if (v == null) return "";
    if (typeof v === "string" || typeof v === "number") return String(v);
    return v[lang] || v.zh || v.en || "";
  };
  const has = (v) => t(v).trim() !== "";
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  };
  // 邮箱链接：页面上先放占位地址，访客悬停、聚焦或点击时才解码出真实邮箱，避免被爬虫抓取
  const emailLink = (a, subject) => {
    a.href = "#contact";
    const arm = () => {
      if (a.dataset.armed || !S.emailB64) return;
      a.dataset.armed = "1";
      a.href = "mailto:" + atob(S.emailB64) + (subject ? "?subject=" + encodeURIComponent(subject) : "");
    };
    ["pointerenter", "focus", "touchstart", "mousedown"].forEach((ev) => a.addEventListener(ev, arm, { passive: true }));
    a.addEventListener("click", arm);
  };

  const linkList = (links, cls) => {
    const box = el("div", cls);
    (links || []).filter((l) => l.url || (l.email && S.emailB64)).forEach((l) => {
      const a = el("a", "", t(l.label));
      if (l.email) {
        emailLink(a, l.subject);
        box.append(a);
        return;
      }
      a.href = l.url;
      if (!l.url.startsWith("mailto:") && !l.url.startsWith("#")) {
        a.target = "_blank";
        a.rel = "noopener";
      }
      box.append(a);
    });
    return box;
  };
  const bullets = (points) => {
    const ul = el("ul");
    (points || []).filter(has).forEach((p) => ul.append(el("li", "", t(p))));
    return ul;
  };
  const chips = (items, cls, coreSet) => {
    const box = el("div", cls || "stack");
    (items || []).forEach((s) => {
      const c = el("span", "", t(s));
      if (coreSet && coreSet.has(t(s))) c.className = "core";
      box.append(c);
    });
    return box;
  };
  // 可折叠的详情：按钮 + 高度过渡
  const collapsible = (points) => {
    const frag = document.createDocumentFragment();
    if (!(points || []).some(has)) return frag;
    const btn = el("button", "more-btn");
    btn.type = "button";
    btn.setAttribute("aria-expanded", "false");
    const label = el("span", "", UI[lang].more);
    btn.append(label, el("span", "chev", "⌄"));
    const wrap = el("div", "collapse");
    const inner = el("div");
    inner.append(bullets(points));
    wrap.append(inner);
    btn.onclick = () => {
      const open = !wrap.classList.contains("open");
      wrap.classList.toggle("open", open);
      btn.setAttribute("aria-expanded", String(open));
      label.textContent = open ? UI[lang].less : UI[lang].more;
    };
    frag.append(btn, wrap);
    return frag;
  };

  // ---------- 滚动出现 ----------
  const revealObserver = "IntersectionObserver" in window
    ? new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            revealObserver.unobserve(e.target);
          }
        });
      }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 })
    : null;
  const reveal = (node, i) => {
    node.classList.add("reveal");
    if (i != null) node.style.setProperty("--d", Math.min(i, 6) * 0.07 + "s");
    if (revealObserver && !reduceMotion) revealObserver.observe(node);
    else node.classList.add("in");
  };

  // ---------- 渲染 ----------
  function renderStatic() {
    root.lang = lang === "zh" ? "zh-CN" : "en";
    document.title = t(S.name);
    document.querySelectorAll("[data-bind]").forEach((n) => (n.textContent = t(S[n.dataset.bind])));
    document.querySelectorAll("[data-i18n]").forEach((n) => (n.textContent = UI[lang][n.dataset.i18n]));
    document.getElementById("langBtn").textContent = UI[lang].lang;

    const av = document.getElementById("avatar");
    if (S.avatar) { av.src = S.avatar; av.alt = t(S.name); av.hidden = false; }

    const hl = document.getElementById("heroLinks");
    const fresh = linkList(S.links, hl.className);
    fresh.id = "heroLinks";
    hl.replaceWith(fresh);
  }

  let statsCounted = false;
  function renderStats() {
    const box = document.getElementById("stats");
    box.innerHTML = "";
    const list = S.highlights || [];
    box.hidden = !list.length;
    list.forEach((h) => {
      const s = el("div", "stat");
      const num = el("div", "stat-num");
      num.dataset.value = h.value;
      num.dataset.prefix = h.prefix || "";
      num.dataset.suffix = h.suffix || "";
      num.textContent = (h.prefix || "") + (statsCounted || reduceMotion ? h.value : 0).toLocaleString("en-US") + (h.suffix || "");
      s.append(num, el("div", "stat-label", t(h.label)));
      box.append(s);
    });
  }
  function countUp() {
    if (statsCounted) return;
    statsCounted = true;
    document.querySelectorAll(".stat-num").forEach((n) => {
      const end = +n.dataset.value, pre = n.dataset.prefix, suf = n.dataset.suffix;
      const dur = 1400, start = performance.now();
      const step = (now) => {
        const p = Math.min(1, (now - start) / dur);
        const eased = 1 - Math.pow(1 - p, 4);
        n.textContent = pre + Math.round(end * eased).toLocaleString("en-US") + suf;
        if (p < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    });
  }

  function renderFeatured() {
    const box = document.getElementById("featuredList");
    box.innerHTML = "";
    const list = (S.projects || []).filter((p) => p.featured);
    document.getElementById("featured").hidden = !list.length;
    list.forEach((p, i) => {
      const card = el("article", "feature");
      const media = el("div", "feature-media");
      if (p.image) {
        const img = el("img");
        img.src = p.image;
        img.alt = t(p.name);
        img.loading = "lazy";
        if (p.imagePosition) img.style.objectPosition = p.imagePosition;
        media.append(img);
      } else {
        const fb = el("div", "media-fallback");
        const cover = p.cover || {};
        fb.append(el("div", "big", t(cover.big) || t(p.name).slice(0, 2)));
        if (has(cover.small)) fb.append(el("div", "small", t(cover.small)));
        media.append(fb);
      }
      const body = el("div", "feature-body");
      if (has(p.period)) body.append(el("span", "period", t(p.period)));
      body.append(el("h3", "", t(p.name)));
      if ((p.metrics || []).length) body.append(chips(p.metrics, "metrics"));
      if (has(p.summary)) body.append(el("p", "summary", t(p.summary)));
      if ((p.stack || []).length) body.append(chips(p.stack));
      body.append(collapsible(p.details));
      body.append(linkList(p.links, "card-links"));
      card.append(media, body);
      box.append(card);
      reveal(card, i);
    });
  }

  // 标签可以是字符串或 { zh, en }；用英文（或字符串本身）作为筛选键
  const tagKey = (tag) => (typeof tag === "string" ? tag : tag.en || tag.zh);
  const tagLabel = (key) => {
    for (const p of S.projects || []) for (const tg of p.tags || []) if (tagKey(tg) === key) return t(tg);
    return key;
  };
  const rest = () => (S.projects || []).filter((p) => !p.featured);

  function renderFilters() {
    const tags = [...new Set(rest().flatMap((p) => (p.tags || []).map(tagKey)))];
    const box = document.getElementById("filters");
    box.innerHTML = "";
    box.hidden = tags.length < 2;
    ["all", ...tags].forEach((tag) => {
      const b = el("button", "", tag === "all" ? UI[lang].all : tagLabel(tag));
      b.type = "button";
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", String(filter === tag));
      b.onclick = () => {
        if (filter === tag) return;
        filter = tag;
        renderFilters();
        renderProjects(true);
      };
      box.append(b);
    });
  }

  function renderProjects(animate) {
    const grid = document.getElementById("projectGrid");
    // FLIP：记录旧位置，重新渲染后从旧位置平滑移动过去
    const before = new Map();
    if (animate) grid.querySelectorAll(".card").forEach((c) => before.set(c.dataset.key, c.getBoundingClientRect()));

    grid.innerHTML = "";
    const all = rest();
    document.getElementById("projects").hidden = !all.length;
    const list = all.filter((p) => filter === "all" || (p.tags || []).map(tagKey).includes(filter));

    list.forEach((p, i) => {
      const card = el("article", "card");
      card.dataset.key = tagKey(p.name);
      const top = el("div", "card-tags");
      (p.tags || []).forEach((tg) => top.append(el("span", "", t(tg))));
      card.append(top);
      card.append(el("h3", "", t(p.name)));
      if (has(p.period)) card.append(el("span", "period", t(p.period)));
      if (has(p.summary)) card.append(el("p", "summary", t(p.summary)));
      if ((p.stack || []).length) card.append(chips(p.stack));
      card.append(collapsible(p.details));
      card.append(linkList(p.links, "card-links"));
      grid.append(card);

      if (!animate) { reveal(card, i % 3); return; }
      card.classList.add("reveal", "in");
      if (reduceMotion || !card.animate) return;
      const old = before.get(card.dataset.key);
      const now = card.getBoundingClientRect();
      if (old) {
        card.animate(
          [{ transform: `translate(${old.left - now.left}px, ${old.top - now.top}px)` }, { transform: "none" }],
          { duration: 450, easing: "cubic-bezier(0.22, 1, 0.36, 1)" }
        );
      } else {
        card.animate(
          [{ opacity: 0, transform: "scale(.96) translateY(8px)" }, { opacity: 1, transform: "none" }],
          { duration: 400, delay: i * 30, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" }
        );
      }
    });
  }

  function renderTimeline(id, items, headFn) {
    const box = document.getElementById(id);
    box.innerHTML = "";
    (items || []).forEach((it, i) => {
      const item = el("div", "item");
      const head = el("div", "item-head");
      const [title, sub] = headFn(it);
      head.append(el("h3", "", title), el("span", "meta", t(it.period)));
      item.append(head);
      if (sub) item.append(el("div", "role-line", sub));
      if (it.points) item.append(bullets(it.points));
      if (has(it.note)) item.append(el("p", "", t(it.note)));
      if (it.links && it.links.length) item.append(linkList(it.links, "card-links"));
      box.append(item);
      reveal(item, i);
    });
    return (items || []).length > 0;
  }

  function renderSections() {
    document.getElementById("experience").hidden = !renderTimeline("expList", S.experience, (e) => [t(e.company), t(e.role)]);

    const sk = document.getElementById("skillList");
    sk.innerHTML = "";
    const groups = (S.skills || []).filter((g) => (g.items || []).length);
    groups.forEach((g, i) => {
      const card = el("div", "skill-card");
      card.append(el("h3", "", t(g.group)));
      card.append(chips(g.items, "stack", new Set((g.core || []).map(t))));
      sk.append(card);
      reveal(card, i % 3);
    });
    document.getElementById("skills").hidden = !groups.length;

    const hasEdu = renderTimeline("eduList", S.education, (e) => [t(e.school), t(e.degree)]);
    const aw = document.getElementById("awardList");
    aw.innerHTML = "";
    (S.awards || []).forEach((a) => {
      const li = el("li");
      li.append(el("span", "", t(a.name)), el("span", "", t(a.date)));
      aw.append(li);
    });
    const hasAwards = (S.awards || []).length > 0;
    document.getElementById("awardsTitle").hidden = !hasAwards;
    aw.hidden = !hasAwards;
    document.getElementById("education").hidden = !hasEdu && !hasAwards;
  }

  function render() {
    renderStatic();
    renderStats();
    renderFeatured();
    renderFilters();
    renderProjects(false);
    renderSections();
  }

  // ---------- 交互 ----------
  document.getElementById("langBtn").onclick = () => {
    lang = lang === "zh" ? "en" : "zh";
    store.set("lang", lang);
    root.classList.add("no-anim"); // 切换语言时不重播入场动画
    render();
  };
  document.getElementById("themeBtn").onclick = () => {
    const dark = root.dataset.theme
      ? root.dataset.theme === "dark"
      : matchMedia("(prefers-color-scheme: dark)").matches;
    root.dataset.theme = dark ? "light" : "dark";
    store.set("theme", root.dataset.theme);
  };
  document.getElementById("year").textContent = new Date().getFullYear();

  render();
  document.querySelectorAll("h2.reveal, .filters.reveal, .hint.reveal, .sub.reveal, .awards.reveal").forEach((n) => reveal(n));

  // 亮点数字：进入视野时开始计数
  const stats = document.getElementById("stats");
  reveal(stats);
  if (reduceMotion || !("IntersectionObserver" in window)) countUp();
  else new IntersectionObserver((es, o) => {
    if (es.some((e) => e.isIntersecting)) { setTimeout(countUp, 200); o.disconnect(); }
  }, { threshold: 0.4 }).observe(stats);

  // 顶栏：滚动后出现分隔线
  const topbar = document.querySelector(".topbar");
  const onScroll = () => topbar.classList.toggle("scrolled", scrollY > 8);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 导航：高亮当前所在区块
  if ("IntersectionObserver" in window) {
    const links = [...document.querySelectorAll("#nav a")];
    const map = { featured: "featured", projects: "featured", experience: "experience", skills: "skills", education: "education" };
    const navObs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const target = "#" + map[e.target.id];
        links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === target));
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach((id) => { const s = document.getElementById(id); if (s) navObs.observe(s); });
  }
})();
