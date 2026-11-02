// Company names, locations and dates are real (provided by David).
// Role titles, bullets, stacks and projects are DRAFT text — edit them so they match what you actually did.
export const profile = {
  name: 'David',
  email: 'dajo3911@gmail.com',
};

export const experience = [
  {
    company: 'BeCloud LLC',
    role: 'Senior Software Engineer',
    when: 'Oct 2022 – present',
    place: 'Jackson, MS',
    summary:
      'I work on the cloud platform and APIs behind the company’s products, from design through deployment and on-call.',
    points: [
      'Design and ship backend services and APIs that other teams build on.',
      'Moved services toward event-driven messaging so teams can release without waiting on each other.',
      'Mentor newer engineers through code review and design docs.',
    ],
    stack: 'TypeScript, Node.js, PostgreSQL, AWS',
  },
  {
    company: 'WaveAccess',
    role: 'Software Engineer',
    when: 'Aug 2020 – Sep 2022',
    place: 'Las Vegas, NV',
    summary:
      'Full-stack engineer on customer-facing web products, working across the API, the data layer and the React front end.',
    points: [
      'Built and maintained features end to end, from database schema to user interface.',
      'Set up CI/CD so releases became routine instead of a manual, risky event.',
      'Improved dashboard load times and tracked down production issues.',
    ],
    stack: 'Python, React, Redis, Docker',
  },
  {
    company: 'Bee Techy',
    role: 'Software Engineer',
    when: 'Apr 2016 – Jun 2020',
    place: 'Los Angeles, CA',
    summary:
      'My first four years as a professional engineer: web applications and backend services for a growing client base.',
    points: [
      'Delivered REST APIs and features used by customers every day.',
      'Raised automated test coverage and made releases safer.',
      'Learned code review, writing things down, and asking questions early.',
    ],
    stack: 'Java, Spring, JavaScript, MySQL',
  },
];

export const projects = [
  {
    title: 'Event pipeline for near-real-time analytics',
    text: 'A streaming ingestion service where the hard part was back-pressure: the system had to slow down gracefully instead of dropping data on a busy day.',
    stack: 'Kafka, Go, ClickHouse',
  },
  {
    title: 'API gateway with per-customer rate limiting',
    text: 'Edge service handling auth, token-bucket throttling and tracing for internal APIs, so one noisy customer no longer slows everyone else down.',
    stack: 'Node.js, Redis, OpenTelemetry',
  },
  {
    title: 'Component library for product teams',
    text: 'An accessible React kit with documented components and visual regression tests, so teams stopped rebuilding the same dropdown.',
    stack: 'React, TypeScript, Storybook',
  },
  {
    title: 'scaffold, a small CLI for new services',
    text: 'Open-source tool that generates a service with CI, logging and a health check already wired in, so setting up a new service takes an afternoon.',
    stack: 'Rust',
  },
];

export const tools = [
  ['Languages', 'TypeScript, JavaScript, Python, Java, Go, SQL'],
  ['Backend', 'Node.js, Spring, REST, GraphQL, event-driven design, microservices'],
  ['Frontend', 'React, Next.js, accessibility, performance'],
  ['Data', 'PostgreSQL, MySQL, MongoDB, Redis, Kafka'],
  ['Infrastructure', 'AWS, Docker, Kubernetes, Terraform, CI/CD, observability'],
  ['Ways of working', 'Design docs, code review, mentoring, pairing, calm on-call'],
];
