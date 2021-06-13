# Code for IATI sidebar

A universal sidebar for Code for IATI projects.

For instructions on adding this sidebar to your project, refer to [the sidebar website](https://codeforiati.org/sidebar/).

## Development

Install the ruby dependencies with:

```
bundle install
npm install
```

Then start the development server with:

```
jekyll serve
```

If you make any changes to the javascript source in `_source/sidebar.js`, you’ll need to minify it by running:

```
./build.sh
```
