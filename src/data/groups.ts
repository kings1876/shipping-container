export interface CategoryGroup {
  id: string;
  title: string;
  blurb: string;
  hubPath: string;
  /** Category pages in this group; products appear under the category they belong to. */
  categoryPaths: string[];
}

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    id: 'containers',
    title: 'Shipping Containers',
    blurb: 'Standard steel containers by size and condition: new (one-trip), used and cargo-worthy.',
    hubPath: '/shipping-containers-for-sale/',
    categoryPaths: [
      '/10ft-shipping-containers-for-sale/',
      '/20ft-shipping-containers-for-sale/',
      '/40ft-shipping-containers-for-sale/',
      '/40ft-high-cube-shipping-containers-for-sale/',
      '/new-shipping-containers-for-sale/',
      '/used-shipping-containers-for-sale/',
      '/side-door-shipping-containers/',
      '/conex-boxes-for-sale/',
      '/wooden-shipping-containers-for-sale/',
    ],
  },
  {
    id: 'storage',
    title: 'Storage & Sheds',
    blurb: 'Containers for storing tools, equipment, vehicles and inventory on your own property.',
    hubPath: '/storage-containers-for-sale/',
    categoryPaths: ['/storage-containers-for-sale/', '/shipping-container-sheds/'],
  },
  {
    id: 'modified',
    title: 'Modified Containers',
    blurb: 'Containers fitted out as offices, workshops, garages, cabins and pools.',
    hubPath: '/modified-shipping-containers/',
    categoryPaths: [
      '/shipping-container-offices/',
      '/shipping-container-workshops/',
      '/shipping-container-garages/',
      '/shipping-container-cabins/',
      '/shipping-container-pools/',
      '/shipping-container-barns/',
      '/shipping-container-ramps/',
    ],
  },
  {
    id: 'homes',
    title: 'Container Homes',
    blurb: 'Tiny homes, prefab homes and multi-bedroom homes built from shipping containers.',
    hubPath: '/shipping-container-homes-for-sale/',
    categoryPaths: [
      '/tiny-house-container-homes/',
      '/prefab-shipping-container-homes/',
      '/shipping-container-homes/',
      '/3-bedroom-shipping-container-homes-for-sale/',
    ],
  },
];
