/**
 * template.tsx remounts on every navigation, which gives us a free hook
 * to fade pages in. The wrapping div uses a custom CSS keyframe defined
 * in globals.css (ud-page-fade) so it stays light and respects
 * prefers-reduced-motion via the media query in the stylesheet.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="ud-page-fade">{children}</div>;
}
