module.exports = function(migration) {

  // navigation item
  const navigationItemType = migration.createContentType('navigationItem')
  .name('Navigation Item')
  .description('Link in der Navigation.');

  // title
  const titleItemField = navigationItemType.createField('title')
  .name('Title')
  .type('Symbol')
  .required(true);

  // slug
  const slugItemField = navigationItemType.createField('link')
  .name('Link')
  .type('Symbol')
  .required(true);



  // navigation item
  const navigationZoneType = migration.createContentType('navigationZone')
  .name('Navigation Zone')
  .description('Eine zusammenfassung von Seiten oder Links als Navigation.');

  // title
  const titleZoneField = navigationZoneType.createField('title')
  .name('Title')
  .type('Symbol')
  .required(true)
  .validations([
    { 'unique': true }
  ]);

  // slug
  const itemsZoneField = navigationZoneType.createField('items')
  .name('Items')
  .type('Array')
  .required(true)
  .items({
    type: 'Link',
    linkType: 'Entry',
    validations: [
      { linkContentType: [ 'page', 'navigationItem' ] }
    ]
  })


  // update slug ui
  navigationItemType.resetFieldControl('link').changeFieldControl('link', 'builtin', 'urlEditor');


  // add entry title
  navigationItemType.displayField('title');
  navigationZoneType.displayField('title');
};



// update slug ui
// pageType.resetFieldControl('slug').changeFieldControl('slug', 'builtin', 'slugEditor');
// pageType.changeFieldControl('sharingDescription', 'builtin', 'multipleLine');
// pageType.changeFieldControl('metaDescription', 'builtin', 'multipleLine');
// pageType.changeFieldControl('metaKeywords', 'builtin', 'tagEditor');
