const container = document.getElementById('container');
const dashboard = document.getElementById('dashboard');
const currentWidth = document.getElementById('current-width');
const columnCount = document.getElementById('column-count');

const updateColumns = (width) => {
    let columns = width < 600 ? 1 : width < 900 ? 2 : 3;

    dashboard.dataset.columns = columns;
    currentWidth.textContent = Math.round(width);
    columnCount.textContent = columns;
}

const resizeObserver = new ResizeObserver(entries => {
    for (const entry of entries) {
        const width = entry.contentRect.width
        updateColumns(width);
    }
});

resizeObserver.observe(container);
updateColumns(container.offsetWidth);
