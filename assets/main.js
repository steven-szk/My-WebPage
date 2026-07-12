// ═══════════ stevenszk.com — 全站共享脚本 ═══════════

// ── 主题切换（记住选择；初始主题由每页 <head> 里的内联脚本先行设置）──
document.getElementById('themeToggle').addEventListener('click', function () {
  var root = document.documentElement;
  var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
});

// ── 移动端菜单 ──────────────────────────────────────
var menuBtn = document.getElementById('menuBtn');
var navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', function () {
  var open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
navLinks.addEventListener('click', function (e) {
  if (e.target.tagName === 'A') {
    navLinks.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  }
});

// ── 滚动淡入动画（不支持 IntersectionObserver 时直接全部显示）──
if ('IntersectionObserver' in window) {
  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        revealer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(function (el) { revealer.observe(el); });
} else {
  document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
}

// ── 页脚年份自动更新 ─────────────────────────────────
document.getElementById('year').textContent = new Date().getFullYear();
