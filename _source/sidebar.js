document.addEventListener("DOMContentLoaded", function () {
    var assetsPath = 'https://codeforiati.org/sidebar/';
    var css = 'sidebar-css';
    if (!document.getElementById(css)) {
        var head = document.getElementsByTagName('head')[0];
        var link = document.createElement('link');
        link.id = css;
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = assetsPath + 'sidebar.css';
        link.media = 'screen';
        head.appendChild(link);
    }
    var request = new XMLHttpRequest();
    request.open('GET', 'https://codeforiati.org/sidebar/body.html', true);
    request.onload = function() {
      const sidebarHtmlHead = '<div id="c4i-sidebar" ' +
        'style="display:none;">' +
        '<button type="button" id="c4i-close" ' +
        'aria-label="Close"></button>' +
        '<nav>';
      const sidebarHtmlBody = this.response;
      const sidebarHtmlFoot = '</nav>' +
        '</div>';
      var template = document.createElement('template');
      template.innerHTML = sidebarHtmlHead + sidebarHtmlBody + sidebarHtmlFoot;
      document.body.insertBefore(template.content, document.body.firstChild);

      document.querySelectorAll('[data-c4i-toggle]').forEach(function (el) {
          el.addEventListener('click', function(e) {
            document.getElementById('c4i-sidebar').classList.toggle('show');
          }, false);
      });

      document.getElementById('c4i-close').addEventListener('click', function(e) {
          document.getElementById('c4i-sidebar').classList.remove('show');
      }, false);
    }
    request.send();
});
