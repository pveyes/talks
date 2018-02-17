module.exports = function parseSlideMarkdown(md) {
  const entries = md.split('\n');
  const title = entries[0].replace('#', '').trim();
  const description = entries.slice(1).join('\n').trim();

  return {
    title,
    description,
  };
}
