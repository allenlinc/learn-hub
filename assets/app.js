// 通用目录搜索过滤：主页与学科页共用
(function () {
  var box = document.getElementById('search');
  if (!box) return;

  var items = Array.prototype.slice.call(document.querySelectorAll('[data-search]'));
  var sections = Array.prototype.slice.call(document.querySelectorAll('[data-group]'));
  var empty = document.getElementById('empty');

  box.addEventListener('input', function () {
    var q = box.value.trim().toLowerCase();
    var anyVisible = false;

    items.forEach(function (el) {
      var text = (el.getAttribute('data-search') || '').toLowerCase();
      var hit = !q || text.indexOf(q) !== -1;
      el.classList.toggle('is-hidden', !hit);
      if (hit) anyVisible = true;
    });

    sections.forEach(function (sec) {
      var total = sec.querySelectorAll('[data-search]').length;
      var hidden = sec.querySelectorAll('[data-search].is-hidden').length;
      sec.classList.toggle('is-hidden', q !== '' && total === hidden);
    });

    if (empty) empty.classList.toggle('is-hidden', anyVisible);
  });
})();
