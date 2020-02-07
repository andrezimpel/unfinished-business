module.exports = function(migration) {
  const textType = migration.createContentType('text')
  .name('Text')
  .description('Markdown Text zur anzeige von Styles oder Links.')

  const textField = textType.createField('text')
  .name('Text')
  .type('Text')
  .required(true);

  const alignmentField = textType.createField('alignment')
  .name('Alignment')
  .type('Text')
  .required(true)
  .validations([
    { in: [ 'left', 'center', 'right' ] }
  ]);

  textType.changeFieldControl('alignment', 'builtin', 'radio');

  // add entry title
  textType.displayField('text');
};
