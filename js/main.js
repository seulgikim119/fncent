document.addEventListener('DOMContentLoaded', () => {
  const mainThumbsSwiper = new Swiper('.sub_slide', {
    spaceBetween: 16,
    slidesPerView: 3,
    watchSlidesProgress: true,
    loop: true,
    freeMode: true,
    navigation: {
      nextEl: '.sub_slide .swiper-button-next',
      prevEl: '.sub_slide .swiper-button-prev',
    },
  });

  new Swiper('.main_visual .swiper', {
    slidesPerView: 1,
    spaceBetween: 36,
    loop: true,
    thumbs: {
      swiper: mainThumbsSwiper,
    },
  });

  new Swiper('.news_singer', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 250,
  });

  new Swiper('.news_acter', {
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 100,
  });

  const mediaVideoSwiper = new Swiper('.media_left', {
    loop: true,
    direction: 'vertical',
    spaceBetween: 16,
    slidesPerView: 1,
    watchSlidesProgress: true,
  });

  new Swiper('.media_right', {
    loop: true,
    direction: 'vertical',
    centeredSlides: true,
    slidesPerView: 5,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    thumbs: {
      swiper: mediaVideoSwiper,
    },
  });

  initInfoTabs();
});

function initInfoTabs() {
  const infoSection = document.querySelector('.f_info');
  if (!infoSection) return;

  normalizeInfoDateNodes(infoSection);

  const tabs = Array.from(infoSection.querySelectorAll('.menu_tab'));
  const subBox = infoSection.querySelector('.sub_box');
  const panels = Array.from(infoSection.querySelectorAll('.sub_box .n_box'));
  if (!tabs.length || !panels.length) return;

  const noticePanel = infoSection.querySelector('#notice_box') || infoSection.querySelector('.notice_box');
  const noticePanelId = noticePanel ? noticePanel.id : '';

  const setActiveTab = (targetId) => {
    tabs.forEach((tab) => {
      const isActive = tab.dataset.target === targetId;
      tab.classList.toggle('is_active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
      tab.setAttribute('tabindex', isActive ? '0' : '-1');
    });

    panels.forEach((panel) => {
      const isActive = panel.id === targetId;
      panel.classList.toggle('is_active', isActive);
      panel.hidden = !isActive;
    });
  };

  const lockSubBoxSizeByNotice = () => {
    if (!subBox || !noticePanel || !noticePanelId) return;

    const currentTab = infoSection.querySelector('.menu_tab.is_active');
    const currentTarget = currentTab ? currentTab.dataset.target : '';

    subBox.style.width = '';
    subBox.style.height = '';
    setActiveTab(noticePanelId);

    const fixedWidth = subBox.offsetWidth;
    const fixedHeight = subBox.offsetHeight;
    subBox.style.width = `${fixedWidth}px`;
    subBox.style.height = `${fixedHeight}px`;

    if (currentTarget && currentTarget !== noticePanelId) {
      setActiveTab(currentTarget);
    }
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      setActiveTab(tab.dataset.target);
    });

    tab.addEventListener('keydown', (event) => {
      const isNextKey = event.key === 'ArrowDown' || event.key === 'ArrowRight';
      const isPrevKey = event.key === 'ArrowUp' || event.key === 'ArrowLeft';
      if (!isNextKey && !isPrevKey) return;

      event.preventDefault();
      const nextIndex = isNextKey
        ? (index + 1) % tabs.length
        : (index - 1 + tabs.length) % tabs.length;

      tabs[nextIndex].focus();
      setActiveTab(tabs[nextIndex].dataset.target);
    });
  });

  const initialTab = infoSection.querySelector('.menu_tab.is_active') || tabs[0];
  setActiveTab(initialTab.dataset.target);
  lockSubBoxSizeByNotice();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(lockSubBoxSizeByNotice, 120);
  });

  window.addEventListener('load', lockSubBoxSizeByNotice);
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(lockSubBoxSizeByNotice);
  }
}

function normalizeInfoDateNodes(scope) {
  const rows = scope.querySelectorAll('.sub_box .n_box li');

  rows.forEach((row) => {
    if (row.querySelector('.date')) return;

    const textNodes = Array.from(row.childNodes).filter(
      (node) => node.nodeType === Node.TEXT_NODE && node.textContent.trim() !== ''
    );

    if (!textNodes.length) return;

    const tailNode = textNodes[textNodes.length - 1];
    const dateText = tailNode.textContent.trim();
    const isDateLike = /^\d{2,4}\.\d{2}\.\d{2}$/.test(dateText);
    if (!isDateLike) return;

    tailNode.remove();

    const dateEl = document.createElement('span');
    dateEl.className = 'date';
    dateEl.textContent = dateText;
    row.appendChild(dateEl);
  });
}
