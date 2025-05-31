import { Experience } from '../interfaces/Experience';

export const experiences: Experience[] = [
  {
    company: 'Company Name',
    logo: '/company1-logo.png',
    role: 'Senior Software Engineer',
    period: 'Jan 2023 - Present',
    description: [
      'Led development of microservices architecture using Node.js and TypeScript',
      'Improved system performance by 40% through optimization and caching strategies',
      'Mentored junior developers and conducted code reviews for team of 5',
    ],
    technologies: ['Node.js', 'TypeScript', 'AWS', 'MongoDB', 'Docker'],
  },
  {
    company: 'Previous Company',
    logo: '/company2-logo.png',
    role: 'Software Engineer',
    period: 'Jun 2021 - Dec 2022',
    description: [
      'Developed and maintained full-stack applications using React and Python',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Collaborated with product team to deliver features for 100k+ users',
    ],
    technologies: ['React', 'Python', 'PostgreSQL', 'Jenkins', 'Redis'],
  },
  {
    company: 'First Company',
    logo: '/company3-logo.png',
    role: 'Software Developer',
    period: 'Jan 2020 - May 2021',
    description: [
      'Built responsive web applications using React and Node.js',
      'Integrated third-party APIs and implemented authentication systems',
      'Participated in agile development processes and sprint planning',
    ],
    technologies: ['React', 'Node.js', 'MySQL', 'REST APIs'],
  },
]; 