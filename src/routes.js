export function pathTo(resource) {
  switch (resource.__typename) {
    // case 'component':
    //   return `/${resource.slug}`;
    default:
      return `/${resource.slug}`;
  }
}
