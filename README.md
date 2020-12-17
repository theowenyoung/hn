# embeddable-hn

Fork from <https://github.com/TXTPEN/hn> for original project not maintained.

Embed Hacker News comment tree automatically on your website. Built with [Preact](https://preactjs.com).

## Sites using this plugin

- [rickyhan.com](http://rickyhan.com/blog/k8s.html)

If you want your site featured here, submit a pull request.

## How it works

There is always better discussion on HN than in your Disqus comment box. Instead of a link to HN, you can embed it on your page.

Benefits:

1. Value-add your readers from other sources.

2. Boost site ranking and SEO. (GoogleBot executes JavaScript).

3. Keep discussion on your page.

4. Alternatively, checkout [txtpen](https://txtpen.com) for highlights and inline comments.

This tool queries from `hn.algolia.com/api` so the response time is around ~10ms. It won't slow your page down.

## Basic Usage

1. Embed the javascript file.

   a. Put these lines at the top of page before `</head>`

   ```
   <link rel="preload" href="https://cdn.jsdelivr.net/gh/theowenyoung/hn@3/build/bundle.js" as="script">
   ```

   b. Put this after `</body>` tag

   ```
   <script src="https://cdn.jsdelivr.net/gh/theowenyoung/hn@3/build/bundle.js"></script>
   ```

2. Add HTML tag to embed comment tree.

```
<div class="hn-card" data-id="25426185">
</div>
```

3. That's it.

## Development

```
git clone https://github.com/theowenyoung/hn.git
cd hn
npm install
npm run dev
# Production build:
# npm run build
```
