// 覆盖主题自带的 grid.js：
// 1. 使用 percentPosition，避免列宽为百分比时 Masonry 用像素定位导致错位
// 2. 窗口尺寸变化 / 字体加载完成后重新排版，修复缩窗后卡片留白或重叠
function initGrid() {
  if (typeof Masonry !== 'function' || typeof imagesLoaded !== 'function') {
    return
  }

  const instances = [...document.querySelectorAll('.dream-grid')].map((grid) => {
    const masonry = new Masonry(grid, {
      itemSelector: '.dream-column',
      percentPosition: true,
    })

    imagesLoaded(grid).on('progress', () => masonry.layout())

    return masonry
  })

  const layout = () => instances.forEach((masonry) => masonry.layout())

  let timer
  window.addEventListener('resize', () => {
    window.clearTimeout(timer)
    timer = window.setTimeout(layout, 150)
  })

  if (document.fonts) {
    document.fonts.ready.then(layout)
  }
}

initGrid()
