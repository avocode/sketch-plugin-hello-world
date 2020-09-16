const dom = require('sketch/dom')
const ui = require('sketch/ui')

export default function() {
  const doc = dom.getSelectedDocument()
  const pageCount = doc.pages.length
  const artboardCount = doc.pages.reduce((count, page) => {
    return count + page.layers.length
  }, 0)

  ui.message(`There are ${pageCount} pages and ${artboardCount} artboards 🎨`)
}
