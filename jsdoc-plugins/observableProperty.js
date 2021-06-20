const tableBuilder = require('./parameterTableBuilder');

exports.defineTags = function(dictionary) {
  dictionary.defineTag('observableProperty', {
      mustHaveValue: true,
      mustNotHaveDescription: false,
      canHaveType: true,
      canHaveName: true,
      onTagged: function(doclet, tag) {
          if (!doclet.meta || !doclet.meta.code || doclet.meta.code.type !== 'ClassDeclaration') {
            return;
          }

          if (!doclet.observableProperties) {
            doclet.observableProperties = [];
          }

          doclet.observableProperties.push({
            'name': tag.value.name,
            'type': tag.value.type ? tag.value.type.names : [],
            'description': tag.value.description || '',
          });
      }
  });
};

exports.handlers = {
    processingComplete: function(e) {
      e.doclets.forEach(doclet => {
        const oProps = doclet.observableProperties;
        if (oProps) {

          console.log(doclet);

          const table = tableBuilder.build('Observable Properties', oProps);

          doclet.classdesc = `${doclet.classdesc || ''}
                                ${table}`;
        }
      });
  }
}
