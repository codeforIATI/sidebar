document.addEventListener("DOMContentLoaded", function () {
    var baseUrl = '{{ site.github.url }}';
    var css = 'sidebar-css';
    if (!document.getElementById(css)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = css;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = baseUrl + '/sidebar.css';
        link.media = 'screen';
        head.appendChild(link);
    }
    var request = new XMLHttpRequest();
    request.open('GET', baseUrl + '/contents.html', true);
    request.onload = function() {
      const sidebarHtml = '<div id="c4i-sidebar" ' +
        'style="display:none;">' +
        '<button type="button" id="c4i-close" ' +
        'aria-label="Close"></button>' +
        '<nav>' +
        this.response +
        '</nav>' +
        '</div>';
      const sidebarDoc = new DOMParser().parseFromString(sidebarHtml, "text/html");
      var sidebarEl = sidebarDoc.getElementById('c4i-sidebar');
      const currentUrl = window.location.href;
      const anchors = sidebarEl.getElementsByTagName('a')
      Array.prototype.slice.call(anchors).forEach(function (anchor) {
        if (currentUrl.indexOf(anchor['href']) === 0) {
          anchor.parentElement.classList.add('active');
        }
      });

      document.body.insertBefore(sidebarEl, document.body.firstChild);

      document.querySelectorAll('[data-c4i-toggle]').forEach(function (el) {
          el.addEventListener('click', function(e) {
            document.getElementById('c4i-sidebar').classList.toggle('show');
          }, false);
      });

      document.getElementById('c4i-close').addEventListener('click', function(e) {
          document.getElementById('c4i-sidebar').classList.remove('show');
      }, false);
      window.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          document.getElementById('c4i-sidebar').classList.remove('show');
        }
      })
    }
    request.send();
});
