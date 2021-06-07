document.addEventListener("DOMContentLoaded", function () {
    var assetsPath='https://codeforiati.org/sidebar/';
    var css='sidebar-css';if(!document.getElementById(css)){var head=document.getElementsByTagName('head')[0];var link=document.createElement('link');link.id=css;link.rel='stylesheet';link.type='text/css';link.href=assetsPath+'sidebar.css';link.media='screen';head.appendChild(link);}
    const sidebarHtml = '<div id="c4i-sidebar" style="display:none;">' +
        '<button type="button" id="c4i-close" aria-label="Close"></button>' +
        '<nav>' +
        '<h2>Code for IATI</h2>' +
        '<h3>Data access</h3>' +
        '<ul>' +
        '<li><a href="https://datastore.codeforiati.org"><strong>Datastore Classic</strong><p>Query IATI data and get responses in a variety of formats</p></a></li>' +
        '<li><a href="https://iati-tables.codeforiati.org"><strong>IATI Tables</strong><p>IATI data, transformed into tables to make it easier to work with relational tools</p></a></li>' +
        '<li><a href="https://iati-data-dump.codeforiati.org"><strong>IATI Data Dump</strong><p>A daily snapshot of all IATI data (and metadata) on the IATI Registry</p></a></li>' +
        '</ul>' +
        '<h3>Reference tools</h3>' +
        '<ul>' +
        '<li><a href="http://d-preview.codeforiati.org"><strong>d-preview</strong><p>Generate a private d-preview site with IATI xml.</p></a></li>' +
        '<li><a href="https://bd-iati.github.io/documentation/"><strong>IATI in AIMS</strong><p>Guidance on current approaches to integrating IATI data into aid recipient country systems.</p></a></li>' +
        '<li><a href="https://codelists.codeforiati.org"><strong>Replicated codelists</strong><p>A frequently updated store of replicated codelists and APIs relevant to IATI data users.</p></a></li>' +
        '<li><a href="https://org-id-finder.codeforiati.org"><strong>Org ID finder</strong><p>Find organisation identifiers for IATI organisations</p></a></li>' +
        '<li><a href="https://activity-id-checker.codeforiati.org"><strong>Activity ID checker</strong><p>Check whether an IATI activity identifier exists in the IATI registry</p></a></li>' +
        '</ul>' +
        '<h3>Overview</h3>' +
        '<ul>' +
        '<li><a href="https://analytics.codeforiati.org"><strong>Analytics</strong><p>Statistics, charts and metrics on IATI data accessed via the registry</p></a></li>' +
        '</ul>' +
        '<h3>Python tools</h3>' +
        '<ul>' +
        '<li><a href="https://github.com/davidmegginson/diterator"><strong>DIterator</strong><p>Easy IATI activity access for Python3</p></a></li>' +
        '<li><a href="https://iatikit.readthedocs.io"><strong>iatikit</strong><p>Python toolkit for using IATI data</p></a></li>' +
        '</ul>' +
        '<h3>Meta</h3>' +
        '<ul>' +
        '<li><a href="https://ideas.codeforiati.org"><strong>IATI Ideas</strong><p>Ideas for new Code for IATI projects and blogs</p></a></li>' +
        '</ul>' +
        '</nav>' +
        '</div>';

    var template = document.createElement('template');
    template.innerHTML = sidebarHtml;
    document.body.insertBefore(template.content, document.body.firstChild);

    document.querySelectorAll('[data-c4i-toggle]').forEach(function (el) {
        el.addEventListener('click', function(e) {
            document.getElementById('c4i-sidebar').classList.toggle('show');
        }, false);
    });

    document.getElementById('c4i-close').addEventListener('click', function(e) {
        document.getElementById('c4i-sidebar').classList.remove('show');
    }, false);
});
