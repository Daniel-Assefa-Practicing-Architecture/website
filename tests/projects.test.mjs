import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import amProjects from '../src/shared/data/projects.am.json' with { type: 'json' };
import rawProjects from '../src/shared/data/projects.json' with { type: 'json' };
import { mediaUrl } from '../src/shared/data/media.ts';

function sortByYearAsc(projects) {
  return [...projects].sort((a, b) => {
    const yearDiff = Number(a.year) - Number(b.year);
    if (yearDiff !== 0) return yearDiff;
    return Number(a.id) - Number(b.id);
  });
}

describe('project data', () => {
  it('has Amharic copy for every project id', () => {
    for (const project of rawProjects) {
      assert.ok(amProjects[project.id], `missing Amharic copy for project ${project.id}`);
      assert.ok(amProjects[project.id].title);
      assert.ok(amProjects[project.id].description);
    }
  });

  it('maps cover images to S3', () => {
    const cover = mediaUrl(rawProjects[0].coverImage);
    assert.match(
      cover,
      /^https:\/\/s3\.ca-central-1\.amazonaws\.com\/danielgebre\.net\/images\//,
    );
  });

  it('orders portfolio projects from oldest year to newest', () => {
    const projects = sortByYearAsc(rawProjects);
    assert.equal(projects[0].year, '2005');
    assert.equal(projects[0].id, '46');
    for (let i = 1; i < projects.length; i += 1) {
      assert.ok(Number(projects[i].year) >= Number(projects[i - 1].year));
    }
  });
});
