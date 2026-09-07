import { describe, expect, it } from 'vitest';
import {
  architectureProjects,
  getFeaturedProjects,
  getLocalizedProjects,
  localizeProject,
} from '~/shared/data/projects';
import amProjects from '~/shared/data/projects.am.json';

describe('project localization', () => {
  it('keeps English copy for the default locale', () => {
    const first = architectureProjects[0];
    expect(localizeProject(first, 'en')).toEqual(first);
    expect(getLocalizedProjects('en')).toHaveLength(architectureProjects.length);
  });

  it('applies Amharic title, description, challenges, and location', () => {
    const first = architectureProjects[0];
    const localized = localizeProject(first, 'am');
    const expected = amProjects[first.id as keyof typeof amProjects];

    expect(localized.title).toBe(expected.title);
    expect(localized.description).toBe(expected.description);
    expect(localized.challenges).toBe(expected.challenges);
    expect(localized.location).toBe(expected.location);
    expect(localized.id).toBe(first.id);
    expect(localized.coverImage).toMatch(/^https:\/\/s3\.ca-central-1\.amazonaws\.com\/danielgebre\.net\/images\//);
  });

  it('serves project images from S3', () => {
    const first = architectureProjects[0];
    expect(first.coverImage.startsWith('https://s3.ca-central-1.amazonaws.com/danielgebre.net/images/')).toBe(true);
  });

  it('localizes featured projects for Amharic', () => {
    const featured = getFeaturedProjects('am');
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.every((project) => Boolean(amProjects[project.id as keyof typeof amProjects]))).toBe(true);
    expect(featured[0].title).toBe(amProjects[featured[0].id as keyof typeof amProjects].title);
  });

  it('orders portfolio projects from oldest year to newest', () => {
    const projects = getLocalizedProjects('en');
    expect(projects[0].year).toBe('2005');
    expect(projects[0].id).toBe('46');
    for (let i = 1; i < projects.length; i += 1) {
      expect(Number(projects[i].year)).toBeGreaterThanOrEqual(Number(projects[i - 1].year));
    }
  });
});
