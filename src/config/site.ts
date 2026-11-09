// ─────────────────────────────────────────────────────────────
// Artemi site config. One file for every ID, link and name.
// Anything still set to "PLACEHOLDER" is reported by
// scripts/check-placeholders.mjs and blocks production builds.
// ─────────────────────────────────────────────────────────────

export const PLACEHOLDER = 'PLACEHOLDER';
// Design review mode: false hides the pink [PLACEHOLDER] labels so numbers and quotes
// display normally. The safety check still finds every placeholder (hidden marker)
// and still blocks production builds. Set to true to show the labels again.
export const showPlaceholderMarkers = false;

export const isSet = (v: string | undefined) => !!v && !v.includes(PLACEHOLDER);

export const site = {
  name: 'Artemi',
  url: 'https://artemi.in',
  tagline: 'Expert-led B2B content that gets cited in AI search.',
  description:
    'Artemi is a B2B SaaS content agency. We turn your experts into content that ranks in Google and gets cited by ChatGPT, Perplexity and Google AI Overviews.',
  founder: { name: 'Palak Jain', role: 'Founder, Artemi', photo: '/images/palak.jpg' },
  linkedin: 'PLACEHOLDER_LINKEDIN_URL',
};

// Integrations. Paste the real values here when ready.
export const integrations = {
  // Tally: the ID at the end of your form link, e.g. tally.so/r/w4Xyz1 → "w4Xyz1"
  tallyFormId: 'PLACEHOLDER_TALLY_FORM_ID',
  // Calendly: full scheduling link, e.g. https://calendly.com/artemi/intro-call
  calendlyUrl: 'PLACEHOLDER_CALENDLY_URL',
  // Google Analytics 4: Measurement ID, e.g. G-ABC123XYZ9
  ga4Id: 'PLACEHOLDER_GA4_ID',
  // Microsoft Clarity: Project ID, e.g. k8x2abcd9z
  clarityId: 'PLACEHOLDER_CLARITY_ID',
};

export const primaryCta = { label: 'Get your free AI Visibility Report', href: '/ai-visibility-report' };
export const bookCta = { label: 'Book a call', href: '/book' };

export type Service = {
  slug: string;
  num: string;
  name: string;
  short: string;
  title: string;
  description: string;
  outcome: string;
  deliverables: string[];
  steps: { title: string; body: string }[];
  proof: { value: number; suffix?: string; label: string };
  faq: { q: string; a: string }[];
};

export const services: Service[] = [
  {
    slug: 'ai-search-audit',
    proof: { value: 120, label: 'buyer prompts mapped in a typical audit' },
    num: '01',
    name: 'AI Search Audit',
    short: 'See where AI assistants cite you, where they cite competitors, and why.',
    title: 'AI Search Audit for B2B SaaS',
    description:
      'Find out which buyer prompts mention your brand in ChatGPT, Perplexity and Google AI Overviews, which sources they cite instead, and what to fix first.',
    outcome: 'A ranked fix list tied to the prompts your buyers actually ask.',
    deliverables: [
      'Buyer prompt map across your category',
      'Citation share vs. named competitors',
      'Source analysis: which pages AI engines trust',
      'Prioritised fix list with owners',
    ],
    steps: [
      { title: 'Map prompts', body: 'We build the list of questions your buyers ask AI assistants before they shortlist vendors.' },
      { title: 'Run and record', body: 'We run every prompt across the major AI engines and log who gets mentioned and cited.' },
      { title: 'Diagnose', body: 'We trace each citation back to the source page and explain why it won.' },
    ],
    faq: [
      { q: 'Which AI engines do you cover?', a: 'ChatGPT, Perplexity, Google AI Overviews, Gemini and Claude.' },
      { q: 'How long does the audit take?', a: 'Most audits are delivered within two weeks of kickoff.' },
    ],
  },
  {
    slug: 'pipeline-content-engine',
    proof: { value: 68, suffix: '%', label: 'lift in organic pipeline for one client in six months' },
    num: '02',
    name: 'Pipeline Content Engine',
    short: 'Expert-led articles built around the questions that create pipeline.',
    title: 'Pipeline Content Engine',
    description:
      'A monthly engine of expert-led B2B content, built from interviews with your team and structured to rank in search and get cited by AI.',
    outcome: 'Content your sales team sends, and AI engines quote.',
    deliverables: [
      'Monthly expert interviews',
      'Bottom- and middle-funnel articles',
      'Answer-first structure for AI citation',
      'Distribution-ready snippets',
    ],
    steps: [
      { title: 'Interview', body: 'We interview your subject-matter experts for the points of view only they have.' },
      { title: 'Draft and edit', body: 'Our writers and editors turn each interview into a publish-ready piece.' },
      { title: 'Publish and track', body: 'We track rankings and AI citations for every piece we ship.' },
    ],
    faq: [
      { q: 'How many articles per month?', a: 'Between four and eight, depending on depth and plan.' },
      { q: 'Do you use AI to write?', a: 'Every piece starts from an expert interview and is written and edited by people. We use AI for research and checks, not for the writing.' },
    ],
  },
  {
    slug: 'ai-search-refresh',
    proof: { value: 24, label: 'new AI citations from one refresh cycle' },
    num: '03',
    name: 'AI Search Refresh',
    short: 'Rework the pages you already have so AI engines start citing them.',
    title: 'AI Search Refresh',
    description:
      'We rewrite and restructure your existing content so it answers buyer prompts directly, carries clear evidence, and becomes the source AI engines cite.',
    outcome: 'Existing pages turned into cited sources, without starting from zero.',
    deliverables: [
      'Refresh priority list',
      'Rewrites with answer-first structure',
      'Evidence and data additions',
      'Before/after citation tracking',
    ],
    steps: [
      { title: 'Select', body: 'We pick the pages closest to winning citations for high-intent prompts.' },
      { title: 'Rework', body: 'We restructure, add expert evidence and tighten every answer.' },
      { title: 'Re-test', body: 'We re-run the prompts and report the change in citations.' },
    ],
    faq: [
      { q: 'How many pages per refresh?', a: 'Usually ten to twenty pages per cycle, starting with those closest to winning citations.' },
      { q: 'Do you need CMS access?', a: 'It helps, but it is not required. We can deliver ready-to-paste updates instead.' },
    ],
  },
  {
    slug: 'founder-voice',
    proof: { value: 3, suffix: 'x', label: 'more inbound mentions of the founder by name' },
    num: '04',
    name: 'Founder Voice',
    short: 'Your founder’s expertise, written up and published where buyers look.',
    title: 'Founder Voice',
    description:
      'Thought leadership ghostwritten from your founder’s real opinions, published on LinkedIn and your site, and built to be quoted by people and AI.',
    outcome: 'A founder people recognise and AI engines name.',
    deliverables: [
      'Monthly founder interviews',
      'LinkedIn posts and long-form essays',
      'Point-of-view library',
      'Engagement and mention tracking',
    ],
    steps: [
      { title: 'Extract', body: 'We interview the founder to capture opinions, stories and frameworks.' },
      { title: 'Write', body: 'We write in their voice and they approve every word.' },
      { title: 'Publish', body: 'We schedule, publish and track what lands.' },
    ],
    faq: [
      { q: 'How much founder time does this take?', a: 'About one hour a month for the interview, plus quick approvals.' },
      { q: 'Do you post on our behalf?', a: 'We can schedule and publish for you, or hand over posts for you to share.' },
    ],
  },
];

export const nav = {
  services: services.map((s) => ({ label: s.name, href: `/services/${s.slug}`, short: s.short })),
  links: [
    { label: 'Pricing', href: '/pricing' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
  ],
};

export const clients = ['Multiplier', 'Moxo', 'Juntrax', 'Aerosend', 'InboxKit'];
