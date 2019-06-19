function pathTo(resource) {
  switch (resource.__typename) {
    // case 'component':
    //   return resource.slug === '/' ? '/' : `/${resource.slug}`;
    default:
      return resource.slug === '/' ? '/' : `/${resource.slug}`;
  }
}

module.exports.pathTo = pathTo;
