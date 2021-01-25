const parser = require('@babel/parser')
// const babelTraverse = require('@babel/traverse').default
module.exports = function (content, map) {
  content = `function square(n) {
    return n * n;
  }`
  // const AST = parser.parse(content);
  // babelTraverse(AST, {
  //   enter (path) {
  //     console.log(path)
  //   }
  // })

  /*
    this.callback(
      err: Error | null,
      content: string | Buffer,
      sourceMap?: SourceMap,
      meta?: any
    );
  */
	this.callback(null, content)
}