module.exports = {
  packagerConfig: {
    ignore: path => {
      console.log(path)
      if (path.length === 0) {
        return false
      }
      if (path === '/node_modules') {
        return false
      }
      if (/\/node_modules\/@nekosu/.test(path)) {
        return false
      }
      if (/\/dist/.test(path)) {
        return false
      }
      if (/\/package.json/.test(path)) {
        return false
      }
      return true
    }
  }
}
