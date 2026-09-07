'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import amCopy from '~/shared/data/copy-am.json';
import {
  getLocalizedProjects,
  projectTypes,
  type ArchitectureProject,
} from '~/shared/data/projects';

const PAGE_SIZE = 9;

const typeLabelsEn: Record<string, string> = {
  all: 'All',
  Apartment: 'Apartment',
  Assembly: 'Assembly Hall',
  Church: 'Church',
  Clinic: 'Clinic',
  Fuel: 'Fuel Station',
  Hospital: 'Hospital',
  Hotel: 'Hotel',
  Library: 'Library',
  'mixed-use': 'Mixed Use',
  'Mmixed-use': 'Mixed Use',
  Museum: 'Museum',
  Office: 'Office',
  Residential: 'Residential',
  School: 'School',
};

const typeLabelsAm: Record<string, string> = {
  all: amCopy.all,
  Apartment: 'አፓርታማ',
  Assembly: 'የስብሰባ አዳራሽ',
  Church: 'ቤተ ክርስቲያን',
  Clinic: 'ክሊኒክ',
  Fuel: 'የነዳጅ ጣቢያ',
  Hospital: 'ሆስፒታል',
  Hotel: 'ሆቴል',
  Library: 'ቤተ መጻሕፍት',
  'mixed-use': 'ድብልቅ አጠቃቀም',
  'Mmixed-use': 'ድብልቅ አጠቃቀም',
  Museum: 'ሙዚየም',
  Office: 'ቢሮ',
  Residential: 'መኖሪያ',
  School: 'ትምህርት ቤት',
};

function normalizeType(type: string) {
  return type.toLowerCase().replace(/^m+ixed/, 'mixed').replace(/\s+/g, '-');
}

function typeLabel(type: string, labels: Record<string, string>) {
  return labels[type] ?? labels[normalizeType(type)] ?? type;
}

export default function PortfolioGrid({ locale = 'en' }: { locale?: string }) {
  const isAm = locale === 'am';
  const typeLabels = isAm ? typeLabelsAm : typeLabelsEn;
  const projects = useMemo(() => getLocalizedProjects(locale), [locale]);
  const [active, setActive] = useState('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [selected, setSelected] = useState<ArchitectureProject | null>(null);
  const filters = ['all', ...projectTypes];

  const filtered = useMemo(() => {
    if (active === 'all') return projects;
    return projects.filter((project) => normalizeType(project.type) === normalizeType(active));
  }, [active, projects]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [active]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActive(filter)}
            className={`rounded-full border px-3 py-1.5 text-sm ${
              active === filter
                ? 'border-primary-700 bg-primary-700 text-white'
                : 'border-gray-300 bg-white text-gray-700 hover:border-primary-400 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200'
            }`}
          >
            {typeLabels[filter] ?? filter}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <button
            key={project.id}
            type="button"
            onClick={() => setSelected(project)}
            className="overflow-hidden rounded-xl border border-gray-200 bg-white text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900"
          >
            <Image
              src={project.coverImage}
              alt={project.title}
              width={720}
              height={480}
              className="h-52 w-full object-cover"
              loading="lazy"
              decoding="async"
            />
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-700">
                {typeLabel(project.type, typeLabels)}
              </p>
              <h3 className="mt-1 text-lg font-bold text-gray-900 dark:text-white">{project.title}</h3>
              <p className="mt-1 text-sm text-gray-500">
                {project.location} · {project.year}
              </p>
            </div>
          </button>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
          >
            {isAm ? amCopy.loadMore : 'Load more'}
          </button>
        </div>
      )}

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelected(null)}>
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-6 dark:bg-slate-900"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selected.coverImage}
              alt={selected.title}
              width={960}
              height={540}
              className="mb-4 h-64 w-full rounded-lg object-cover"
              loading="eager"
            />
            <h3 className="text-2xl font-bold">{selected.title}</h3>
            <p className="mt-1 text-sm text-gray-500">
              {selected.client} · {selected.location} · {selected.year}
            </p>
            <p className="mt-4 text-gray-700 dark:text-slate-300">{selected.description}</p>
            <p className="mt-4 text-sm text-gray-600 dark:text-slate-400">
              <strong>{isAm ? amCopy.fetanoch : 'Challenges'}:</strong> {selected.challenges}
            </p>
            <button type="button" className="btn btn-primary mt-6" onClick={() => setSelected(null)}>
              {isAm ? amCopy.ziga : 'Close'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
