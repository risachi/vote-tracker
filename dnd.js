var dragSrcEl = null;

function allowDrop(e) {
  log('allowDrop(' + e.target.id + ')');
  e.preventDefault();
}

function drag(e) {
  log('drag(' + e.target.id + ')');

  dragSrcEl = e.target;
  e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function drop(e) {
  log('drop(' + e.target.id + ')');

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (true || (dragSrcEl != e.target)) {
    log('drop target: ' + e.target.id);
    log('drag source: ' + dragSrcEl.id);

    dragSrcEl.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/html');
  }
  return false;
}
