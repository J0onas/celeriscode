import type { CollectionEntry } from 'astro:content';
import { PORTFOLIO_ORDER, SERVICE_TYPE_BY_SLUG } from './site-config';

export type CaseEntry = CollectionEntry<'cases'>;
export type ServiceSlug = keyof typeof SERVICE_TYPE_BY_SLUG;

export const getServiceTypeForSlug = (serviceSlug: string) =>
  SERVICE_TYPE_BY_SLUG[serviceSlug as ServiceSlug] ?? 'landing-page';

export const getOrderedPortfolioCases = (cases: CaseEntry[]) => {
  const casesById = new Map(cases.map((item) => [item.id, item] as const));

  return PORTFOLIO_ORDER.map((slug) => casesById.get(slug)).filter((item): item is CaseEntry =>
    Boolean(item)
  );
};

export const getRelatedCasesForService = (cases: CaseEntry[], serviceSlug: string) => {
  const serviceType = getServiceTypeForSlug(serviceSlug);

  return cases
    .filter((item) => item.data.projectType === serviceType)
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
    .slice(0, 3);
};
