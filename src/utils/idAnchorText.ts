/**
 * Ensure text can be used in an id="text" anchor.
 */
export function idAnchorText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[_]/g, "-")
    .replace(/[^a-z0-9\- ]/g, "")
    .replace(/[ ]/g, "-")
    .replace(/[\-]+/g, "-");
}
