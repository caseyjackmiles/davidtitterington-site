const doWhenReady = function (action) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function (e) {
      action();
    });
  } else {
    action();
  }
}

doWhenReady(function () {
  console.log('whenReady');
});
