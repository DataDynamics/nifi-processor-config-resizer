const processorConfiguration = document.querySelector('#processor-configuration');
processorConfiguration.style.resize = 'vertical';

new ResizeObserver(() => {
  const offsetHeight = processorConfiguration.offsetHeight;
  // 263 // header, button 등등 높이
  const panel = document.querySelector('#processor-configuration .slick-pane.slick-pane-top.slick-pane-left');
  const viewport = document.querySelector('#processor-configuration .slick-viewport.slick-viewport-top.slick-viewport-left');
  panel.style.height = `${offsetHeight - 263}px`;
  viewport.style.height = `${offsetHeight - 263}px`;
}).observe(processorConfiguration);
