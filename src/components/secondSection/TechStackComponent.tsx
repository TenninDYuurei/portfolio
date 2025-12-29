import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faNodeJs,
  faGoogle,
  faMeta,
  faGithub,
  faHtml5,
  faCss3Alt,
  faJs,
//   faGoogleAds,
} from '@fortawesome/free-brands-svg-icons';
import { Database, BarChart3, Megaphone } from 'lucide-react';

type TechStackItem = {
  name: string;
  icon: React.ReactNode;
};

const techStack: TechStackItem[] = [
  { name: 'React', icon: <FontAwesomeIcon icon={faReact} /> },
  { name: 'TypeScript', icon: <FontAwesomeIcon icon={faJs} /> },
  { name: 'HTML5', icon: <FontAwesomeIcon icon={faHtml5} /> },
  { name: 'CSS3', icon: <FontAwesomeIcon icon={faCss3Alt} /> },
  { name: 'Node.js', icon: <FontAwesomeIcon icon={faNodeJs} /> },
  { name: 'Google Ads', icon: <FontAwesomeIcon icon={faGoogle} /> },
  { name: 'Meta Ads', icon: <FontAwesomeIcon icon={faMeta} /> },
  { name: 'Analytics', icon: <BarChart3 size={16} /> },
  { name: 'SEO', icon: <Megaphone size={16} /> },
  { name: 'Databases', icon: <Database size={16} /> },
  { name: 'GitHub', icon: <FontAwesomeIcon icon={faGithub} /> },
];

export default function TechStack() {
  return (
    <div className="flex flex-wrap gap-3">
      {techStack.map((tech) => (
        <span
          key={tech.name}
          className="flex items-center gap-2 rounded-full border border-white px-4 py-2 text-sm font-medium text-primary-gold hover:scale-110 hover:bg-dark-black transition"
        >
          <span className="text-base font-bold">{tech.icon}</span>
          {tech.name}
        </span>
      ))}
    </div>
  );
}