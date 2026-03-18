// TK123 主脚本

// 书签拖动功能
document.addEventListener('DOMContentLoaded', function() {
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('dragstart', function(e) {
      e.dataTransfer.setData('text/url', window.location.href);
      e.dataTransfer.setData('text/plain', 'TK123 - TikTok 卖家导航');
    });
  }

  // 搜索功能
  const searchInput = document.querySelector('.search-box input');
  if (searchInput) {
    searchInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        const query = this.value.trim();
        if (query) {
          window.location.href = '/tools/index.html#search=' + encodeURIComponent(query);
        }
      }
    });
  }

  // 工具分类导航高亮
  const navLinks = document.querySelectorAll('.tools-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    });
  });
});

console.log('TK123 loaded');
