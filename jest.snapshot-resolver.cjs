
const resolveSnapshotPath =
  (testPath, snapshotExtension) =>
    testPath
      .replace('.test' + '.js', '.test' + snapshotExtension)
      .replace('/mjs/', '/src/')

const resolveTestPath =
  (snapshotFilePath, snapshotExtension) =>
    snapshotFilePath
      .replace(snapshotExtension, '.js')
      .replace('/src/', '/mjs/')

const testPathForConsistencyCheck =
  './mjs/index.test.js'

module.exports = {
  resolveSnapshotPath,
  resolveTestPath,
  testPathForConsistencyCheck
}
