---
layout: homepage
---

Include the following javascript to enable the sidebar:

```html
<script src="//codeforiati.org/sidebar/sidebar.min.js"></script>
```

Then trigger it using the `data-c4i-toggle="sidebar"` attribute. E.g.:

```html
<button data-c4i-toggle="sidebar" type="button" aria-controls="c4i-sidebar" aria-expanded="false" aria-label="Toggle Code for IATI sidebar">Toggle Code for IATI sidebar</button>
```

[Here’s a demo of it in action.](demo.html)

---

**Psst…** Prefer a sidebar appearing from the right-hand side? Try this instead:

```html
<script src="//codeforiati.org/sidebar/sidebar-rhs.min.js"></script>
```

[Here’s a demo of the right-hand side version in action.](demo-rhs.html)
