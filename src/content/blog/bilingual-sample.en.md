---
publishDate: 'May 10 2026'
title: 'English / Amharic markdown sample'
description: 'This post is in English. Switch the site language to አማርኛ and open the same article to load the Amharic markdown file.'
excerpt: 'Demonstrates lists, quotes, code blocks, and links with the typography styles.'
image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=1024&h=640&fit=crop'
tags: [markdown, i18n, english]
---

This page is served from **`bilingual-sample.en.md`**. Use the language control in the header, stay on this URL, and you should see the Amharic version from **`bilingual-sample.am.md`** with different text and typography (Geʽez script).

## What you should see

- Bulleted lists with comfortable spacing
- **Bold** and *italic* inline styles
- `inline code` styling
- [Styled links](https://nextjs.org/) in the primary color

> Blockquotes use a left border and slightly different color from body text.

### A small code sample

```javascript
const locale = 'en';
console.log(`Markdown + Tailwind typography (${locale})`);
```

### Table layout

| Concept   | English file              |
| --------- | ------------------------- |
| Source    | `bilingual-sample.en.md`  |
| Fallback  | —                         |

---

Happy writing.
