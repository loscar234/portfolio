// Illustrative interface previews for each project (vector, crisp at any size).
// Replace with real screenshots any time: put an <img> in the card instead (see README).

const defs = (id, a, b) => `
  <defs>
    <linearGradient id="bg-${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient>
    <filter id="sh-${id}" x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#1b1a16" flood-opacity=".18"/></filter>
  </defs>
  <rect width="640" height="400" fill="url(#bg-${id})"/>`;

export const visualMatatu = () => `
<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Concept preview of a fare payment app and reconciliation dashboard">
  ${defs('m', '#f8e9dc', '#f1d3bd')}
  <circle cx="540" cy="60" r="140" fill="#fff" opacity=".35"/>
  <!-- dashboard -->
  <g filter="url(#sh-m)">
    <rect x="200" y="62" width="400" height="270" rx="16" fill="#fffdfa"/>
    <rect x="200" y="62" width="400" height="34" rx="16" fill="#f6f1ea"/><rect x="200" y="80" width="400" height="16" fill="#f6f1ea"/>
    <circle cx="220" cy="79" r="4.5" fill="#e8665a"/><circle cx="235" cy="79" r="4.5" fill="#f0b64a"/><circle cx="250" cy="79" r="4.5" fill="#6fbf86"/>
    <rect x="224" y="112" width="110" height="9" rx="4.5" fill="#1a1d29"/>
    <rect x="224" y="127" width="170" height="6" rx="3" fill="#cfc8bd"/>
    <g>
      <rect x="224" y="150" width="108" height="56" rx="10" fill="#f6f1ea"/><rect x="236" y="162" width="44" height="6" rx="3" fill="#bdb5a8"/><rect x="236" y="178" width="62" height="14" rx="4" fill="#1a1d29"/>
      <rect x="342" y="150" width="108" height="56" rx="10" fill="#f6f1ea"/><rect x="354" y="162" width="52" height="6" rx="3" fill="#bdb5a8"/><rect x="354" y="178" width="48" height="14" rx="4" fill="#b5430a"/>
      <rect x="460" y="150" width="116" height="56" rx="10" fill="#f6f1ea"/><rect x="472" y="162" width="48" height="6" rx="3" fill="#bdb5a8"/><rect x="472" y="178" width="70" height="14" rx="4" fill="#1a1d29"/>
    </g>
    <!-- chart -->
    <g transform="translate(224 222)">
      ${[34, 52, 40, 70, 58, 84, 64].map((h, i) => `<rect x="${i * 38}" y="${90 - h}" width="22" height="${h}" rx="5" fill="${i === 5 ? '#b5430a' : '#e9ddd0'}"/>`).join('')}
      <path d="M11 62 C 50 40, 80 56, 125 34 S 200 38, 240 14 S 300 22, 343 8" fill="none" stroke="#1a1d29" stroke-width="2.4" stroke-linecap="round"/>
      <circle cx="240" cy="14" r="5" fill="#fffdfa" stroke="#1a1d29" stroke-width="2.4"/>
    </g>
  </g>
  <!-- phone -->
  <g filter="url(#sh-m)" transform="translate(70 48) rotate(-5 80 150)">
    <rect width="160" height="300" rx="26" fill="#12151f"/>
    <rect x="7" y="7" width="146" height="286" rx="20" fill="#fffdfa"/>
    <rect x="54" y="14" width="52" height="9" rx="4.5" fill="#12151f"/>
    <rect x="22" y="44" width="70" height="8" rx="4" fill="#1a1d29"/>
    <rect x="22" y="58" width="100" height="6" rx="3" fill="#cfc8bd"/>
    <rect x="22" y="80" width="116" height="62" rx="14" fill="#b5430a"/>
    <rect x="34" y="94" width="44" height="6" rx="3" fill="#fff" opacity=".7"/>
    <rect x="34" y="108" width="82" height="16" rx="5" fill="#fff"/>
    <g transform="translate(46 156)">
      <rect width="68" height="68" rx="8" fill="#f6f1ea"/>
      ${Array.from({ length: 49 }, (_, i) => ((i * 7 + (i >> 2)) % 3 === 0 ? `<rect x="${6 + (i % 7) * 8}" y="${6 + Math.floor(i / 7) * 8}" width="6" height="6" rx="1.2" fill="#1a1d29"/>` : '')).join('')}
    </g>
    <rect x="22" y="244" width="116" height="30" rx="15" fill="#12151f"/>
    <rect x="52" y="256" width="56" height="6" rx="3" fill="#fff"/>
  </g>
</svg>`;

export const visualStudent = () => `
<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Concept preview of a desktop student records application">
  ${defs('s', '#e9edf3', '#d3dbe8')}
  <g filter="url(#sh-s)">
    <rect x="70" y="50" width="500" height="300" rx="14" fill="#fff"/>
    <path d="M70 64a14 14 0 0 1 14-14h472a14 14 0 0 1 14 14v22H70Z" fill="#eef1f6"/>
    <circle cx="92" cy="68" r="5" fill="#e8665a"/><circle cx="109" cy="68" r="5" fill="#f0b64a"/><circle cx="126" cy="68" r="5" fill="#6fbf86"/>
    <rect x="236" y="62" width="168" height="12" rx="6" fill="#d8deea"/>
    <rect x="70" y="86" width="116" height="264" fill="#1a2233"/><path d="M70 350v-8h116v8a14 14 0 0 1-14 0Z" fill="#1a2233"/>
    ${['Students', 'Courses', 'Results', 'Reports'].map((t, i) => `<rect x="86" y="${108 + i * 36}" width="84" height="26" rx="7" fill="${i === 0 ? '#b5430a' : 'transparent'}"/><rect x="98" y="${117 + i * 36}" width="${[52, 44, 40, 48][i]}" height="7" rx="3.5" fill="${i === 0 ? '#fff' : '#7f8aa3'}"/>`).join('')}
    <rect x="206" y="104" width="120" height="10" rx="5" fill="#1a1d29"/>
    <rect x="206" y="122" width="190" height="6" rx="3" fill="#c7cedd"/>
    <rect x="456" y="102" width="92" height="28" rx="14" fill="#1a2233"/><rect x="474" y="113" width="56" height="6" rx="3" fill="#fff"/>
    <g transform="translate(206 148)">
      <rect width="342" height="26" rx="6" fill="#eef1f6"/>
      ${[0, 110, 200, 270].map((x, i) => `<rect x="${x + 12}" y="10" width="${[54, 44, 40, 38][i]}" height="6" rx="3" fill="#8a94ab"/>`).join('')}
      ${Array.from({ length: 5 }, (_, r) => `
        <g transform="translate(0 ${34 + r * 30})">
          ${r === 1 ? '<rect width="342" height="26" rx="6" fill="#fbeadf"/>' : `<rect y="25" width="342" height="1" fill="#e6eaf2"/>`}
          <circle cx="20" cy="13" r="8" fill="${['#c7cedd', '#b5430a', '#a8b4cf', '#d8c4b4', '#b9c2d6'][r]}"/>
          <rect x="36" y="9" width="${[62, 70, 54, 66, 58][r]}" height="7" rx="3.5" fill="#1a1d29" opacity=".8"/>
          <rect x="122" y="9" width="${[42, 38, 46, 36, 44][r]}" height="7" rx="3.5" fill="#9aa3b8"/>
          <rect x="212" y="9" width="${[28, 34, 24, 30, 26][r]}" height="7" rx="3.5" fill="#9aa3b8"/>
          <rect x="282" y="6" width="40" height="14" rx="7" fill="${['#dcefe3', '#f6d8c4', '#dcefe3', '#e5e8f1', '#dcefe3'][r]}"/>
        </g>`).join('')}
    </g>
  </g>
</svg>`;

export const visualKali = () => `
<svg viewBox="0 0 640 400" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Concept preview of a menu-driven Linux terminal toolkit">
  ${defs('k', '#161b2b', '#0b0e18')}
  <circle cx="520" cy="70" r="180" fill="#b5430a" opacity=".16"/>
  <g filter="url(#sh-k)">
    <rect x="70" y="52" width="500" height="296" rx="14" fill="#0c0f1a" stroke="#262d44"/>
    <path d="M70 66a14 14 0 0 1 14-14h472a14 14 0 0 1 14 14v18H70Z" fill="#171c2e"/>
    <circle cx="92" cy="68" r="5" fill="#e8665a"/><circle cx="109" cy="68" r="5" fill="#f0b64a"/><circle cx="126" cy="68" r="5" fill="#6fbf86"/>
    <text x="320" y="72" text-anchor="middle" font-family="JetBrains Mono, monospace" font-size="10" fill="#7d86a3">toolkit.sh — bash</text>
    <g font-family="JetBrains Mono, monospace" font-size="13">
      <text x="94" y="112" fill="#8bd5a1">carlos@kali</text><text x="168" y="112" fill="#7d86a3">:~$</text><text x="198" y="112" fill="#e9ecf7">./toolkit.sh</text>
      <text x="94" y="146" fill="#e9ecf7" font-weight="700">╔══ SYSTEM MANAGEMENT TOOLKIT ══╗</text>
      ${['File management', 'Permissions', 'Process control', 'System diagnostics', 'Log viewer', 'Exit'].map((t, i) => `<text x="110" y="${176 + i * 24}" fill="${i === 2 ? '#ff9b61' : '#aeb6d1'}"><tspan fill="#b5430a">[${i + 1}]</tspan> ${t}</text>`).join('')}
      <rect x="100" y="219" width="248" height="22" rx="4" fill="#b5430a" opacity=".16"/>
      <text x="94" y="334" fill="#8bd5a1">select &gt;</text><rect x="158" y="322" width="8" height="15" fill="#e9ecf7"/>
    </g>
  </g>
</svg>`;

export const projectVisuals = [visualMatatu, visualStudent, visualKali];
