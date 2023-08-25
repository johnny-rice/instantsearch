export function normalizeSnapshot(html: string) {
  return (
    html
      // Vue renders a useless extra space between list item elements
      .replace(/<\/li> <li/g, '</li><li')
      // Vue renders extra whitespace inside option item elements
      .replace(/>\s+?(\w+?)\s+?<\/option>/gs, '>$1</option>')
      // Vue renders extra whitespace inside button elements
      .replace(/>\s+(.+?)\s+<\/button>/gs, '>$1</button>')
      // Vue's `<AisClearRefinements>` widget uses `type="reset"` unlike other flavors
      .replace(/(type="reset")(.+class="ais-ClearRefinements-button)/gs, '$2')
      // Vue uses XHTML syntax
      .replace(/disabled="disabled"/gs, 'disabled=""')
      // Vue renders a useless extra space between last list item element and closing list tag
      .replace(/<\/li> <\/ul>/g, '</li></ul>')
  );
}