import { copyFile, mkdir, readFile } from "node:fs/promises";
const source = await readFile("src/projects.ts", "utf8");
const slugs = [...source.matchAll(/^    slug: "([a-z0-9-]+)"/gm)].map((match) => match[1]);
const routes = ["work", ...slugs.map((slug) => `work/${slug}`), "about", "play", "not-found"];
for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile("dist/index.html", `dist/${route}/index.html`);
}
console.log(`Prepared ${routes.length + 1} direct-entry routes.`);
