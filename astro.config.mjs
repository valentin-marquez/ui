// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import remarkToc from 'remark-toc';
import rehypePresetMinify from 'rehype-preset-minify';
import expressiveCode from "astro-expressive-code";
import rehypeSlug from 'rehype-slug';
import remarkSmartypants from 'remark-smartypants';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';


// https://astro.build/config
export default defineConfig({
  output: "static",

  // Plugin configurations
  vite: {
    plugins: [tailwindcss()]
  },

  // Integrations
  integrations: [expressiveCode({
    themes: ["ayu-dark"],
  }), mdx({
    syntaxHighlight: "shiki",
    remarkPlugins: [remarkToc, rehypeSlug, remarkSmartypants],
    rehypePlugins: [rehypePresetMinify, [
      rehypeAutolinkHeadings,
      {
        behavior: "append",
        properties: {
          className: ["anchor"]
        }
      }
    ]],
    remarkRehype: {
      footnoteLabel: "Footnotes",
    },
    gfm: true
  })],

  // Experimental features
  experimental: {
    svg: true
  }
});