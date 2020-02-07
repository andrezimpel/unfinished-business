module.exports = function(migration) {
  const pageType = migration.createContentType('page')
  .name('Page')
  .description('Einzelne Landinpages wie die Startseite oder Kontakt.');


  // title
  const titleField = pageType.createField('title')
  .name('Title')
  .type('Symbol')
  .required(true);

  // slug
  const slugField = pageType.createField('slug')
  .name('URL Bezeichnung')
  .type('Symbol')
  .required(true)
  .validations([
    { 'size': { 'max': 30 }},
    { 'unique': true }
  ]);

  // sections
  const sectionsField = pageType.createField('sections')
  .name('Sections')
  .type('Array')
  .required(true)
  .items({
    type: 'Link',
    linkType: 'Entry',
    validations: [
      { linkContentType: [ 'text' ] }
    ]
  })

  // sharing title
  const sharingTitleField = pageType.createField('sharingTitle')
  .name('Sharing Title')
  .type('Symbol')
  .required(true)
  .validations([
    { 'size': { 'max': 60 }}
  ]);

  // sharing description
  const sharingDescriptionField = pageType.createField('sharingDescription')
  .name('Sharing Description')
  .type('Text')
  .required(true)
  .validations([
    { 'size': { 'max': 160 }}
  ]);

  // sharing image
  const sharingImageField = pageType.createField('sharingImage')
  .name('Sharing Image')
  .type('Link')
  .linkType('Asset')
  .required(true)
  .validations([
    { 'linkMimetypeGroup': [ 'image' ]},
    { 'assetImageDimensions': {
        'width': { 'min': 820 },
        'height': {"min": 360 }
      }
    }
  ]);

  // meta title
  const metaTitleField = pageType.createField('metaTitle')
  .name('Meta Title')
  .type('Symbol')
  .required(true)
  .validations([
    { 'size': { 'max': 60 }}
  ]);

  // meta description
  const metaDescriptionField = pageType.createField('metaDescription')
  .name('Meta Description')
  .type('Text')
  .required(true)
  .validations([
    { 'size': { 'max': 160 }}
  ]);

  // meta keywords
  const metaKeywordsField = pageType.createField('metaKeywords')
  .name('Meta Keywords')
  .type('Array')
  .required(true)
  .items({
    type: 'Symbol'
  })


  // update slug ui
  pageType.resetFieldControl('slug').changeFieldControl('slug', 'builtin', 'slugEditor');
  pageType.changeFieldControl('sharingDescription', 'builtin', 'multipleLine');
  pageType.changeFieldControl('metaDescription', 'builtin', 'multipleLine');
  pageType.changeFieldControl('metaKeywords', 'builtin', 'tagEditor');

  // add entry title
  pageType.displayField('title');
};
