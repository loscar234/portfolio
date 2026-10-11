// All portfolio copy lives here so it is easy to edit.
export const EMAIL = 'carlosnduva254@gmail.com';
export const GITHUB = 'https://github.com/loscar234';
export const NAME = 'Carlos';
export const FULL_NAME = 'Carlos Nduva';
export const ACADEMIC_STATUS = 'Third-year Computer Science student (Year 3, Semester 1)';

export const roles = ['Full Stack Developer', 'Mobile App Developer', 'Backend Developer', 'Software Developer'];

// [name, category, brandKey | line-icon name, kind]
export const skills = [
  ['Java', 'Programming languages', 'java', 'brand'],
  ['C++', 'Programming languages', 'cpp', 'brand'],
  ['Kotlin', 'Programming languages', 'kotlin', 'brand'],
  ['Dart', 'Programming languages', 'dart', 'brand'],
  ['JavaScript', 'Full stack', 'js', 'brand'],
  ['TypeScript', 'Full stack', 'ts', 'brand'],
  ['HTML5', 'Full stack', 'html', 'brand'],
  ['CSS3', 'Full stack', 'css', 'brand'],
  ['React', 'Frontend', 'react', 'brand'],
  ['Next.js', 'Frontend', 'next', 'brand'],
  ['Node.js', 'Backend', 'node', 'brand'],
  ['NestJS', 'Backend', 'nest', 'brand'],
  ['Flutter', 'Mobile', 'flutter', 'brand'],
  ['PostgreSQL', 'Databases', 'pg', 'brand'],
  ['MySQL', 'Databases', 'mysql', 'brand'],
  ['Git', 'Tools & automation', 'git', 'brand'],
  ['GitHub', 'Tools & automation', 'github', 'brand'],
  ['Linux', 'Tools & automation', 'linux', 'brand'],
  ['Bash', 'Tools & automation', 'bash', 'brand'],
  ['Docker', 'Tools & automation', 'docker', 'brand'],
  ['CI/CD', 'Workflow', 'actions', 'brand'],
  ['Daraja API', 'API integration', 'bolt', 'line'],
  ['Databases (DBMS)', 'Computer science concepts', 'database', 'line'],
  ['OOP & MVC', 'Computer science concepts', 'box', 'line'],
  ['Networking', 'Computer science concepts', 'network', 'line'],
  ['Software architecture', 'Computer science concepts', 'layers', 'line'],
];

export const process = [
  ['Understand', 'Start with the people, the problem and the constraints before reaching for a tool. Clear goals make every later decision easier.', 'bulb', ['Problem', 'Users', 'Constraints']],
  ['Design', 'Turn the insight into a clear flow, hierarchy and experience — thinking about layout, interaction and how the system fits together.', 'palette', ['Flow', 'Layout', 'Data model']],
  ['Build', 'Shape the system with purposeful code, sound structure and small iterations across the interface, API and database.', 'code', ['Frontend', 'Backend', 'Database']],
  ['Refine', 'Test the edges, improve the details and make the result feel considered. I care about performance, clarity and polish.', 'check', ['Testing', 'Performance', 'Polish']],
];

export const projects = [
  {
    num: '01', label: 'Fintech · Transport', title: 'Integrated Matatu Payment', status: 'In progress',
    description: 'A proposed digital fare-collection system for Kenya’s public transport sector, designed around clearer payment tracking, transaction visibility and reconciliation.',
    tech: ['Next.js', 'NestJS', 'Flutter', 'PostgreSQL', 'Daraja API'], href: '', cta: 'Case study soon', image: 'media/imp-project.png',
  },
  {
    num: '02', label: 'Academic · Desktop', title: 'Student Management System', status: 'Academic project',
    description: 'A Java desktop application exploring student records, academic results, relational data, JDBC integration and MVC separation of responsibilities.',
    tech: ['Java', 'MySQL', 'JDBC', 'MVC'], href: '', cta: 'Repository soon', image: 'media/student-management.png',
  },
  {
    num: '03', label: 'Linux · Systems tooling', title: 'Kali System Management Toolkit', status: 'Public repository',
    description: 'A modular, menu-driven Bash toolkit for practical Linux administration tasks including files, permissions, processes, diagnostics and logging.',
    tech: ['Bash', 'Linux', 'Kali', 'Shell utilities'], href: 'https://github.com/loscar234/Kali-toolkit', cta: 'View Repository',
  },
];

export const lab = ['Personal portfolio', 'OKOA SEM', 'React certificate generator'];

export const experience = [
  {
    date: '2024 — Present', badge: 'Education', title: 'Computer Science', org: 'Chuka University',
    skills: ['Programming & problem solving', 'Databases & relational design', 'Systems analysis & networking', 'Linux & mathematics'],
    tech: ['Java', 'C++', 'MySQL', 'Linux'],
  },
  {
    date: 'Ongoing', badge: 'Independent', title: 'Project-Based Development', org: 'Self-directed practice',
    skills: ['Full-stack planning', 'API & payment integration', 'Cross-platform mobile', 'Version control workflow'],
    tech: ['Next.js', 'NestJS', 'Flutter', 'Git / GitHub'],
  },
  {
    date: 'Ongoing', badge: 'Creative', title: 'Design & Content', org: 'Freelance creative practice',
    skills: ['Graphic design', 'Content creation', 'Website layouts', 'Visual presentation'],
    tech: ['Design', 'Layout', 'Content'],
  },
];

export const chapters = [
  ['Computer Science', 'Education', 'A foundation in programming, systems, databases, and the mathematics behind reliable software.', ['Chuka University', 'Programming', 'Systems']],
  ['Building for Kenya', 'Local impact', 'The most meaningful ideas start close to home: transport, payments, access and practical constraints.', ['Transport', 'Payments', 'Access']],
  ['Full-stack Thinking', 'Full stack', 'Moving between interface, API, data and deployment to understand the whole system.', ['Interface', 'API', 'Data', 'Deployment']],
  ['Mobile in the Real World', 'Mobile', 'Exploring Flutter, Dart, Kotlin and Android concepts for software people can use anywhere.', ['Flutter', 'Dart', 'Kotlin']],
  ['Creative Editing & Motion', 'Creative', 'A visual eye shaped by graphic design, content creation and thoughtful presentation.', ['Graphic design', 'Content', 'Editing']],
  ['Systems & Infrastructure', 'Systems', 'Linux, networking, automation and the quiet engineering behind dependable products.', ['Linux', 'Networking', 'Automation']],
  ['Always Learning', 'Growth', 'A long-term practice: ship, test, question, refine and keep going.', ['Learn', 'Experiment', 'Build']],
];

export const softSkills = [
  ['Analytical thinking', 'Turning complex problems into clear, workable next steps.', 'spark'],
  ['Continuous learning', 'Building depth through curiosity, repetition and practice.', 'refresh'],
  ['Design thinking', 'Balancing usability, clarity and visual detail.', 'palette'],
  ['Attention to detail', 'Caring about the final five percent of every build.', 'target'],
  ['Adaptability', 'Staying open while the tools and frameworks keep changing.', 'bolt'],
  ['Technical research', 'Learning from systems, documentation and experiments.', 'search'],
  ['Project organization', 'Giving ambitious ideas a practical, structured shape.', 'layers'],
  ['Communication', 'Making technical work easier for others to understand.', 'chat'],
];
