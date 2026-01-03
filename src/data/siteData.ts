// Static data for Jonasi Attorneys
import { TeamMember, PracticeArea, CompanyInfo, NavItem, Testimonial } from '@/types';

export const companyInfo: CompanyInfo = {
  name: 'Jonasi Attorneys',
  tagline: 'Premier Legal Services in Zimbabwe',
  email: 'admin@jonasiattorneys.co.zw',
  phone: '+263 242 747 052',
  phones: {
    landline: '+263 242 747 052',
    econet: '+263 789 090 426',
    netone: '+263 718 382 368',
  },
  address: '123 Samora Machel Avenue, Harare, Zimbabwe',
  hours: 'Monday - Friday: 8:00 AM - 5:00 PM',
  social: {
    facebook: 'https://facebook.com/jonasiattorneys',
    twitter: 'https://twitter.com/jonasiattorneys',
    linkedin: 'https://linkedin.com/company/jonasiattorneys',
  },
};

export const navigation: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Practice Areas',
    href: '/practice-areas',
    children: [
      { label: 'Commercial & Corporate Litigation', href: '/practice-areas/commercial-litigation' },
      { label: 'Mining Law', href: '/practice-areas/mining-law' },
      { label: 'Corporate Transactions & M&A', href: '/practice-areas/corporate-transactions' },
      { label: 'Conveyancing & Property Law', href: '/practice-areas/conveyancing' },
      { label: 'Family Law', href: '/practice-areas/family-law' },
      { label: 'Intellectual Property', href: '/practice-areas/intellectual-property' },
    ],
  },
  { label: 'Our Team', href: '/team' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
];

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    slug: 'tawanda-jonasi',
    name: 'Tawanda Porteous Jonasi',
    title: 'Managing Partner',
    role: 'Founder & Managing Partner',
    email: 'counseljoe@jonasiattorneys.co.zw',
    image: '/media/team/tawanda-jonasi.jpg',
    bio: `Tawanda Porteous Jonasi is the Founder and Managing Partner of Jonasi Attorneys and an experienced legal practitioner with extensive expertise in commercial and corporate litigation, corporate transactions, mining law, conveyancing, private equity, advisory services, deal structuring, and insurance law.

He has successfully represented clients in over 200 matters across all levels of Zimbabwean courts, including the Magistrates' Court, High Court, Supreme Court, and Constitutional Court. His practice focuses on complex commercial disputes, mining-related transactions and litigation, mergers and acquisitions, property transactions, insurance-related matters, and high-value commercial advisory work.

Tawanda is known for his strong advocacy skills, strategic legal insight, and practical, results-driven approach. In addition to leading the firm, he oversees legal operations, compliance, risk management, and client strategy, ensuring that Jonasi Attorneys delivers high-quality legal services aligned with international best practices.`,
    areasOfPractice: [
      'Commercial & Corporate Litigation',
      'Mining Law & Extractive Industries',
      'Corporate Transactions & M&A',
      'Advisory & Deal Structuring',
      'Conveyancing & Property Law',
      'Private Equity & Contract Law',
      'Insurance Law & Risk Advisory',
    ],
  },
  {
    id: 2,
    slug: 'plaxcedes-marimo',
    name: 'Plaxcedes Chiedza Marimo',
    title: 'Senior Associate',
    role: 'Senior Associate | Corporate & Specialist Advisory',
    email: 'pmarimo@jonasiattorneys.co.zw',
    image: '/media/team/plaxcedes-marimo.jpg',
    bio: `Plaxcedes Chiedza Marimo is a Senior Associate at Jonasi Attorneys with over eight (8) years' experience in corporate advisory, regulatory compliance, and commercial litigation.

In addition to her corporate practice, Chiedza is also a Family Law practitioner, Immigration Adviser, and Intellectual Property Lawyer, advising clients on cross-border family matters, immigration applications, and the protection and enforcement of intellectual property rights.

She advises clients in the financial and commercial sectors on governance, compliance, contract management, and risk mitigation. Her experience includes drafting and negotiating complex commercial agreements, managing litigation, and engaging regulatory authorities and statutory bodies.

Chiedza brings a strong balance of technical legal expertise and commercial awareness, making her a trusted advisor in regulated and cross-border environments.`,
    areasOfPractice: [
      'Corporate & Commercial Law',
      'Regulatory Compliance & Governance',
      'Family Law & Child Custody Matters',
      'Immigration Advisory Services',
      'Intellectual Property Law',
      'Commercial Litigation',
      'Contract Drafting & Negotiation',
      'Mediation & Alternative Dispute Resolution',
    ],
  },
];

export const practiceAreas: PracticeArea[] = [
  {
    id: 1,
    slug: 'commercial-litigation',
    title: 'Commercial & Corporate Litigation',
    description: 'Expert representation in complex commercial disputes across all Zimbabwean courts.',
    icon: 'Scale',
    image: '/media/practice-areas/commercial-litigation.jpg',
    details: 'Our litigation team has extensive experience handling high-stakes commercial disputes, contract claims, shareholder disputes, and regulatory matters.',
  },
  {
    id: 2,
    slug: 'mining-law',
    title: 'Mining Law & Extractive Industries',
    description: 'Comprehensive legal services for mining operations, transactions, and regulatory compliance.',
    icon: 'Mountain',
    image: '/media/practice-areas/mining-law.jpg',
    details: 'We provide end-to-end legal support for mining companies, from licensing and permitting to transactions, disputes, and environmental compliance.',
  },
  {
    id: 3,
    slug: 'corporate-transactions',
    title: 'Corporate Transactions & M&A',
    description: 'Strategic advice on mergers, acquisitions, and complex corporate restructuring.',
    icon: 'Building2',
    image: '/media/practice-areas/corporate-transactions.jpg',
    details: 'Our M&A team advises on deal structuring, due diligence, negotiations, and post-transaction integration for local and cross-border transactions.',
  },
  {
    id: 4,
    slug: 'conveyancing',
    title: 'Conveyancing & Property Law',
    description: 'Full-service property law practice covering residential and commercial transactions.',
    icon: 'Home',
    image: '/media/practice-areas/conveyancing.jpg',
    details: 'We handle property transfers, mortgage registrations, lease agreements, and complex property disputes with efficiency and precision.',
  },
  {
    id: 5,
    slug: 'family-law',
    title: 'Family Law',
    description: 'Sensitive and professional handling of family matters and child custody cases.',
    icon: 'Users',
    image: '/media/practice-areas/family-law.jpg',
    details: 'Our family law practice covers divorce, maintenance, custody matters, and cross-border family disputes with discretion and care.',
  },
  {
    id: 6,
    slug: 'intellectual-property',
    title: 'Intellectual Property Law',
    description: 'Protection and enforcement of trademarks, patents, and copyrights.',
    icon: 'Lightbulb',
    image: '/media/practice-areas/intellectual-property.jpg',
    details: 'We assist clients with IP registration, licensing, enforcement, and dispute resolution to protect their valuable intellectual assets.',
  },
  {
    id: 7,
    slug: 'insurance-law',
    title: 'Insurance Law & Risk Advisory',
    description: 'Expert advice on insurance matters, claims, and risk management.',
    icon: 'Shield',
    image: '/media/practice-areas/insurance-law.jpg',
    details: 'Our insurance practice covers policy interpretation, claims disputes, regulatory compliance, and risk advisory services.',
  },
  {
    id: 8,
    slug: 'immigration',
    title: 'Immigration Advisory',
    description: 'Comprehensive immigration services for individuals and businesses.',
    icon: 'Globe',
    image: '/media/practice-areas/immigration.jpg',
    details: 'We assist with work permits, residency applications, business visas, and compliance with immigration regulations.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Moyo',
    title: 'CEO',
    company: 'Harare Mining Corporation',
    content: 'Jonasi Attorneys provided exceptional guidance through a complex mining transaction. Their expertise and dedication to our success was evident at every stage.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Ndlovu',
    title: 'Managing Director',
    company: 'Premier Properties Ltd',
    content: 'The conveyancing team at Jonasi Attorneys handled our commercial property acquisition with remarkable efficiency. Highly recommended.',
    rating: 5,
  },
  {
    id: 3,
    name: 'David Chikwanha',
    title: 'CFO',
    company: 'ZimTech Solutions',
    content: 'Outstanding legal support for our corporate restructuring. The team\'s commercial awareness and strategic advice were invaluable.',
    rating: 5,
  },
];

export const companyValues = [
  {
    title: 'Integrity',
    description: 'Upholding the highest ethical and professional standards',
  },
  {
    title: 'Excellence',
    description: 'Delivering high-quality, commercially sound legal advice',
  },
  {
    title: 'Innovation',
    description: 'Embracing modern legal solutions and technology',
  },
  {
    title: 'Teamwork',
    description: 'Collaborating across practice areas and offices',
  },
  {
    title: 'Clients First',
    description: 'Prioritising client outcomes and long-term relationships',
  },
  {
    title: 'Commitment',
    description: 'Dedicated, accountable and reliable service',
  },
];

export const stats = [
  { value: '200+', label: 'Cases Won' },
  { value: '15+', label: 'Years Experience' },
  { value: '100+', label: 'Clients Served' },
  { value: '8', label: 'Practice Areas' },
];
