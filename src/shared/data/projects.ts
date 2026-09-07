import rawProjects from './projects.json';
import amProjects from './projects.am.json';
import { mediaUrl } from './media';

export type ArchitectureProject = {
  id: string;
  title: string;
  coverImage: string;
  images: string[];
  description: string;
  year: string;
  client: string;
  type: string;
  cost: string;
  location: string;
  challenges: string;
  tags: string[];
};

type ProjectAmCopy = {
  title: string;
  description: string;
  challenges: string;
  location: string;
};

const amById = amProjects as Record<string, ProjectAmCopy>;

function withRemoteMedia(project: ArchitectureProject): ArchitectureProject {
  return {
    ...project,
    coverImage: mediaUrl(project.coverImage),
    images: (project.images || []).map((image) => mediaUrl(image)),
  };
}

export const architectureProjects = (rawProjects as ArchitectureProject[]).map(withRemoteMedia);

export function localizeProject(project: ArchitectureProject, locale = 'en'): ArchitectureProject {
  if (locale !== 'am') return project;
  const am = amById[project.id];
  if (!am) return project;
  return {
    ...project,
    title: am.title,
    description: am.description,
    challenges: am.challenges,
    location: am.location,
  };
}

export function getLocalizedProjects(locale = 'en'): ArchitectureProject[] {
  return architectureProjects
    .map((project) => localizeProject(project, locale))
    .sort((a, b) => {
      const yearDiff = Number(a.year) - Number(b.year);
      if (yearDiff !== 0) return yearDiff;
      return Number(a.id) - Number(b.id);
    });
}

export const featuredProjectIds = ['25', '21', '2', '8', '33', '20'];

export const featuredProjects = featuredProjectIds
  .map((id) => architectureProjects.find((project) => project.id === id))
  .filter(Boolean) as ArchitectureProject[];

export function getFeaturedProjects(locale = 'en'): ArchitectureProject[] {
  return featuredProjectIds
    .map((id) => architectureProjects.find((project) => project.id === id))
    .filter(Boolean)
    .map((project) => localizeProject(project as ArchitectureProject, locale));
}

export const projectTypes = [
  'Apartment',
  'Assembly',
  'Church',
  'Clinic',
  'Fuel',
  'Hospital',
  'Hotel',
  'Library',
  'mixed-use',
  'Museum',
  'Office',
  'Residential',
  'School',
];
