module.exports = {
  name: 'ui-employees',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/ui-employees',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
