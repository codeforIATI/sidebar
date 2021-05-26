document.addEventListener("DOMContentLoaded", function () {
    const sidebarHtml = '<div id="c4i-sidebar">' +
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
                        '<li><a href="https://codelists.codeforiati.org"><strong>Replicated codelists</strong><p>A frequently updated store of replicated codelists and APIs relevant to IATI data users.</p></a></li>' +
                        '<li><a href="https://org-id-finder.codeforiati.org"><strong>Org ID finder</strong><p>Find organisation identifiers for IATI organisations</p></a></li>' +
                        '<li><a href="https://activity-id-checker.codeforiati.org/"><strong>Activity ID checker</strong><p>Check whether an IATI activity identifier exists in the IATI registry</p></a></li>' +
                        '</ul>' +
                        '<h3>Overview</h3>' +
                        '<ul>' +
                        '<li><a href="https://analytics.codeforiati.org"><strong>Analytics</strong><p>Statistics, charts and metrics on IATI data accessed via the registry</p></a></li>' +
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

    document.getElementById('c4i-sidebar-toggler').addEventListener('click', function(e) {
        document.getElementById('c4i-sidebar').classList.add('show');
    }, false);

    document.getElementById('c4i-close').addEventListener('click', function(e) {
        document.getElementById('c4i-sidebar').classList.remove('show');
    }, false);
});