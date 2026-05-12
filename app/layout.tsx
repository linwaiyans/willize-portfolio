import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Willize — Lin Wai Yan, Full Stack Web Developer",
  description:
    "Willize — the portfolio of Lin Wai Yan (William). Fresh Graduate, Full Stack Web Developer, and IEEE-published researcher specializing in React, Next.js, Node.js, and IoT systems.",
  keywords: [
    "Lin Wai Yan",
    "William",
    "Full Stack Developer",
    "Frontend Developer",
    "Software Developer",
    "Portfolio",
    "React",
    "Next.js",
    "Bristol",
    "Myanmar",
  ],
};

// Pre-hydration init. Two jobs:
//   1) Set saved theme on <html> before paint to avoid FOUC.
//   2) Neutralize browser extensions (Bitdefender etc.) that inject
//      `bis_skin_checked` / `__processed_*` / `data-bis-*` attributes
//      onto every element — React would otherwise flag these as
//      hydration mismatches because `suppressHydrationWarning` only
//      works one level deep.
const preHydrationInit = `(function(){
  try {
    var s = localStorage.getItem('theme');
    document.documentElement.setAttribute('data-theme', s === 'dark' ? 'dark' : 'light');
  } catch (e) {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  // Silently drop attribute injection from known browser extensions.
  // Standard attributes pass through unchanged.
  try {
    var blocked = ['bis_', '__processed_', 'data-bis-'];
    var origSet = Element.prototype.setAttribute;
    Element.prototype.setAttribute = function(name, value) {
      if (typeof name === 'string') {
        for (var i = 0; i < blocked.length; i++) {
          if (name.indexOf(blocked[i]) === 0) return;
        }
      }
      return origSet.call(this, name, value);
    };

    // Strip any attributes the extension may have already added.
    function clean(el) {
      if (!el || !el.attributes) return;
      var toRemove = [];
      for (var i = 0; i < el.attributes.length; i++) {
        var n = el.attributes[i].name;
        for (var j = 0; j < blocked.length; j++) {
          if (n.indexOf(blocked[j]) === 0) { toRemove.push(n); break; }
        }
      }
      for (var k = 0; k < toRemove.length; k++) origSet.call(el, toRemove[k], ''), el.removeAttribute(toRemove[k]);
    }
    function cleanAll() {
      clean(document.documentElement);
      if (document.body) clean(document.body);
      var all = document.querySelectorAll('*');
      for (var i = 0; i < all.length; i++) clean(all[i]);
    }
    cleanAll();
    if (window.MutationObserver) {
      new MutationObserver(function(muts) {
        for (var i = 0; i < muts.length; i++) {
          var m = muts[i];
          if (m.type === 'attributes' && m.target) clean(m.target);
          if (m.addedNodes) {
            for (var j = 0; j < m.addedNodes.length; j++) {
              var n = m.addedNodes[j];
              if (n.nodeType === 1) {
                clean(n);
                if (n.querySelectorAll) {
                  var kids = n.querySelectorAll('*');
                  for (var k = 0; k < kids.length; k++) clean(kids[k]);
                }
              }
            }
          }
        }
      }).observe(document.documentElement, { childList: true, subtree: true, attributes: true });
    }
  } catch (e) { /* never break the page over a workaround */ }
})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      data-theme="light"
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <Script id="pre-hydration-init" strategy="beforeInteractive">
          {preHydrationInit}
        </Script>
        {children}
      </body>
    </html>
  );
}
