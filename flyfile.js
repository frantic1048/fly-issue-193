const paths = {
  a: {
    source: 'src/a/*.txt',
    target: 'dist/a'
  },
  b: {
    source: 'src/b/*.txt',
    target: 'dist/b'
  },
  all: {target: 'dist'}
}

exports.clean = function * () {
  yield this.clear(paths.all.target)
}

exports.a = function * () {
  yield this
    .source(paths.a.source)
    .target(paths.a.target)
}

exports.b = function * () {
  yield this
    .source(paths.b.source)
    .target(paths.b.target)
}

exports.serial = function * () {
  yield this.start('clean')
  yield this.start('a')
  yield this.start('b')
}

exports.parallel = function * () {
  yield this.start('clean')
  yield this.start(['a', 'b'], {parallel: true})
}
