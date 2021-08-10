
// source: https://rhianvanesch.com/posts/2021/02/09/adding-heading-anchor-links-to-an-eleventy-site/#styling-the-anchor-link

// This object is required inside the renderPermalink function.
// It's copied directly from the plugin source code.
const position = {
  false: "push",
  true: "unshift",
}

// Copied directly from the plugin source code, with one edit
// (marked with comments)
module.exports = (slug, opts, state, idx) => {
  const space = () =>
    Object.assign(new state.Token("text", "", 0), {
      content: " ",
    })

  const linkTokens = [
    Object.assign(new state.Token("link_open", "a", 1), {
      attrs: [
        ["class", opts.permalinkClass],
        ["href", opts.permalinkHref(slug, state)],
      ],
    }),
    Object.assign(new state.Token("html_block", "", 0), {
      // Edit starts here:
      content: `<span aria-hidden="true" class="header-anchor__symbol">#</span>
      <span class="screen-reader-only">Direct link to this section</span>`,
      // Edit ends
    }),
    new state.Token("link_close", "a", -1),
  ]

  if (opts.permalinkSpace) {
    linkTokens[position[!opts.permalinkBefore]](space())
  }
  state.tokens[idx + 1].children[position[opts.permalinkBefore]](
    ...linkTokens
  )
};

