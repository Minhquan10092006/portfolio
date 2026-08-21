import {
  Shield, Cloud, Globe, Code, Terminal, Database,
  Lock, Server, Wifi, Bug, FileCode, GitBranch,
  Container, Cpu, Eye, Network
} from 'lucide-react';

const skills = [
  {
    category: { en: 'Cloud & Security', vi: 'Cloud & Bảo mật' },
    icon: Shield,
    color: 'var(--accent-cyan)',
    items: [
      { name: 'AWS (Learning)', icon: Cloud },
      { name: 'OWASP Top 10', icon: Bug },
      { name: 'Application Security', icon: Lock },
      { name: 'Cloud Security Fundamentals', icon: Shield },
      { name: 'Threat Analysis', icon: Eye },
    ],
  },
  {
    category: { en: 'Networking', vi: 'Mạng máy tính' },
    icon: Globe,
    color: 'var(--accent-purple)',
    items: [
      { name: 'TCP/IP & OSI Model', icon: Network },
      { name: 'DNS / HTTP / HTTPS', icon: Globe },
      { name: 'Networking Fundamentals', icon: Wifi },
      { name: 'Firewall & VPN Concepts', icon: Shield },
    ],
  },
  {
    category: { en: 'Development', vi: 'Phát triển phần mềm' },
    icon: Code,
    color: 'var(--accent-pink)',
    items: [
      { name: 'Java', icon: FileCode },
      { name: 'Socket Programming', icon: Network },
      { name: 'JavaScript / Node.js', icon: FileCode },
      { name: 'React', icon: Code },
      { name: 'Express.js', icon: Server },
      { name: 'MongoDB', icon: Database },
      { name: 'Python', icon: FileCode },
      { name: 'REST API & WebSocket', icon: Wifi },
    ],
  },
  {
    category: { en: 'Tools & Platforms', vi: 'Công cụ & Nền tảng' },
    icon: Terminal,
    color: 'var(--accent-emerald)',
    items: [
      { name: 'Git & GitHub', icon: GitBranch },
      { name: 'Linux Basics', icon: Terminal },
      { name: 'Docker (Learning)', icon: Container },
      { name: 'VS Code', icon: Code },
      { name: 'Claude API', icon: Cpu },
    ],
  },
];

export default skills;
