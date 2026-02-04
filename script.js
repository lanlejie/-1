// 移动端导航开关
const navToggle = document.getElementById("navToggle");
const body = document.body;

if (navToggle) {
  navToggle.addEventListener("click", () => {
    body.classList.toggle("nav-open");
  });
}

// 点击导航自动收起（移动端）
const topNav = document.getElementById("topNav");
if (topNav) {
  topNav.addEventListener("click", (e) => {
    if (e.target.tagName.toLowerCase() === "a" && body.classList.contains("nav-open")) {
      body.classList.remove("nav-open");
    }
  });
}

// 滚动高亮当前章节
const navLinks = document.querySelectorAll('.top-nav a[href^="#"], .side-nav a[href^="#"]');
const sections = [];

navLinks.forEach((link) => {
  const id = link.getAttribute("href").slice(1);
  const section = document.getElementById(id);
  if (section) {
    sections.push({ id, section });
  }
});

function onScroll() {
  const scrollPos = window.scrollY + 120; // 顶部留白
  let currentId = null;

  for (const item of sections) {
    if (scrollPos >= item.section.offsetTop) {
      currentId = item.id;
    }
  }

  if (currentId) {
    navLinks.forEach((link) => {
      const id = link.getAttribute("href").slice(1);
      if (id === currentId) {
        link.style.color = "#2b6cb0";
        link.style.fontWeight = "600";
      } else {
        link.style.color = "";
        link.style.fontWeight = "";
      }
    });
  }
}

window.addEventListener("scroll", onScroll);
onScroll();