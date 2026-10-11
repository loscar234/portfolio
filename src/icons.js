import {
  siHtml5, siCss, siJavascript, siTypescript, siReact, siNextdotjs, siNodedotjs, siNestjs,
  siFlutter, siDart, siOpenjdk, siCplusplus, siKotlin, siPostgresql, siMysql, siGit, siGithub,
  siLinux, siGnubash, siDocker, siGithubactions, siKalilinux, siWhatsapp,
} from 'simple-icons';

const brand = (i, size = 28) =>
  `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor"><path d="${i.path}"/></svg>`;

export const brands = {
  html: siHtml5, css: siCss, js: siJavascript, ts: siTypescript, react: siReact, next: siNextdotjs,
  node: siNodedotjs, nest: siNestjs, flutter: siFlutter, dart: siDart, java: siOpenjdk, cpp: siCplusplus,
  kotlin: siKotlin, pg: siPostgresql, mysql: siMysql, git: siGit, github: siGithub, linux: siLinux,
  bash: siGnubash, docker: siDocker, actions: siGithubactions, kali: siKalilinux, whatsapp: siWhatsapp,
};

const paths = {
  arrow: '<path d="M5 12h13M13 6l6 6-6 6"/>',
  arrowUp: '<path d="M12 19V5M6 11l6-6 6 6"/>',
  arrowDown: '<path d="M12 5v14M6 13l6 6 6-6"/>',
  arrowUpRight: '<path d="M7 17 17 7M8 7h9v9"/>',
  external: '<path d="M14 3h7v7M10 14 21 3M19 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h6"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  x: '<path d="m6 6 12 12M18 6 6 18"/>',
  code: '<path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14"/>',
  layers: '<path d="m12 2 9 5-9 5-9-5 9-5ZM3 12l9 5 9-5M3 17l9 5 9-5"/>',
  spark: '<path d="m12 2 1.75 6.25L20 10l-6.25 1.75L12 18l-1.75-6.25L4 10l6.25-1.75L12 2ZM19 16l.7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z"/>',
  database: '<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v7c0 1.66 3.58 3 8 3s8-1.34 8-3V5M4 12v7c0 1.66 3.58 3 8 3s8-1.34 8-3v-7"/>',
  mobile: '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>',
  terminal: '<path d="m4 17 6-5-6-5M12 19h8"/>',
  palette: '<path d="M12 3a9 9 0 0 0 0 18h1.2a1.8 1.8 0 0 0 0-3.6h-.7a1.8 1.8 0 1 1 0-3.6H16a5 5 0 0 0 5-5C21 5.9 17 3 12 3Z"/><circle cx="7.5" cy="10" r=".8"/><circle cx="10" cy="6.5" r=".8"/><circle cx="15" cy="6.5" r=".8"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12Z"/><path d="M8.5 11h7M8.5 14h4"/>',
  users: '<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/><circle cx="17.5" cy="9" r="2.4"/><path d="M17 14.6c2.4.2 4 1.9 4 4.4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7M20 4v7h-7"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r=".8"/>',
  cpu: '<rect x="6" y="6" width="12" height="12" rx="2"/><rect x="9.5" y="9.5" width="5" height="5" rx="1"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/>',
  network: '<circle cx="12" cy="5" r="2.2"/><circle cx="5" cy="19" r="2.2"/><circle cx="19" cy="19" r="2.2"/><path d="M12 7.2v4.3M12 11.5l-6 5.5M12 11.5l6 5.5"/>',
  braces: '<path d="M8 4c-2 0-3 1-3 3v2c0 1.5-.8 3-2 3 1.2 0 2 1.5 2 3v2c0 2 1 3 3 3M16 4c2 0 3 1 3 3v2c0 1.5.8 3 2 3-1.2 0-2 1.5-2 3v2c0 2-1 3-3 3"/>',
  rocket: '<path d="M5 15c-1.5 1.3-2 5-2 5s3.7-.5 5-2M14 5c3-3 7-2 7-2s1 4-2 7l-6 6-5-5 6-6ZM9 10 5 9l2-3 4 .5M14 15l1 4 3-2-.5-4"/>',
  bolt: '<path d="m13 2-9 12h7l-1 8 9-12h-7l1-8Z"/>',
  download: '<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>',
  pin: '<path d="M12 21s7-6.2 7-11.5A7 7 0 1 0 5 9.5C5 14.8 12 21 12 21Z"/><circle cx="12" cy="9.5" r="2.5"/>',
  box: '<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9ZM3 7.5 12 12l9-4.5M12 12v9"/>',
  gear: '<circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>',
};

export const icon = (name, size = 18, sw = 1.7) =>
  `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.spark}</svg>`;

export const brandIcon = (key, size = 28) => brand(brands[key], size);

export const githubIcon = (size = 18) => brand(siGithub, size);

export const whatsappIcon = (size = 18) => brand(siWhatsapp, size);

export const star = (size = 56) =>
  `<svg aria-hidden="true" width="${size}" height="${size}" viewBox="0 0 64 64"><path fill="currentColor" d="M32 0c1.6 14.6 5.4 24.2 11.2 28.8C47.6 32.3 54.4 31.4 64 32c-14.2 1.8-23.4 5.6-27.6 11.4C33 48.2 32.9 55 32 64c-1.4-13.8-5.2-23-11.2-27.6C16.4 33 9.4 32.6 0 32c13.2-1.6 22.2-5.4 27.4-11.6C31 16 31.2 9 32 0Z"/></svg>`;
