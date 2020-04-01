module.exports = {
    name: 'ui-main',
    preset: '../../jest.config.js',
    coverageDirectory: '../../coverage/libs/ui-main',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js'
    ]
};
