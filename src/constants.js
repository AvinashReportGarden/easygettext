exports.PROGRAM_NAME = 'easygettext';

exports.DEFAULT_ATTRIBUTES = [
  'get-text',
  'i18n',
  'translate',
];

exports.DEFAULT_FILTERS = [
  'i18n',
  'translate',
];

exports.DEFAULT_VUE_GETTEXT_FUNCTIONS = {
  '_': ['msgid'],
  '$t': ['msgid'],
  '$tc': ['msgid'],
  '$gettext': ['msgid'],
  '$ngettext': ['msgid', 'plural', null],
  '$pgettext': ['msgctxt', 'msgid'],
  '$npgettext': ['msgctxt', 'msgid', 'plural', null],
};

exports.DEFAULT_START_DELIMITER = '{{';
exports.DEFAULT_END_DELIMITER = '}}';

// Could for example be '::', used by AngularJS to indicate one-time bindings.
exports.DEFAULT_FILTER_PREFIX = null;

exports.DEFAULT_DELIMITERS = {
  start: '{{',
  end: '}}',
};

exports.ATTRIBUTE_COMMENT = 'comment';
exports.ATTRIBUTE_CONTEXT = 'context';
exports.ATTRIBUTE_PLURAL = 'plural';

exports.MARKER_NO_CONTEXT = '__NOCONTEXT__';

exports.ALLOWED_EXTENSIONS = ['html', 'htm', 'jade', 'js', 'pug', 'vue', 'ts'];
exports.ALLOWED_EXTENSIONS_EXCEPTIONS = ['.d.ts'];
