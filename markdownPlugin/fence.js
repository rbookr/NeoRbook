/*
* fence 渲染的hook
*/

import pseudocode from 'pseudocode'
import { escapeHtml } from 'markdown-it/lib/common/utils'

const pseudocodeRender = function (code, options = { throwOnError: true }) {
  try {
    return `<p>${pseudocode.renderToString(code, options)}</p>`
  }
  catch (error) {
    if (options.throwOnError) {
      console.error(error)
      return `<pre>pseudocode.js error :${escapeHtml(`${error}`)}</pre>`
    }
    return `<pre>${escapeHtml(code)}</pre>`
  }
}

const defCodeCopyOptions = {
  iconStyle: 'font-size: 21px; opacity: 0.4;',
  iconClass: 'mdi mdi-content-copy',
  buttonStyle: 'position: absolute; top: 17.5px; right: 10px; cursor: pointer; outline: none;',
  buttonClass: '',
}

export default (md, options = {}) => {
  const defaultRenderer = md.renderer.rules.fence.bind(md.renderer.rules)
  const myOpt = { ...defCodeCopyOptions, ...options }

  md.renderer.rules.fence = (tokens, idx, options, env, slf) => {
    const token = tokens[idx]
    const code = token.content.trim()
    const info = token.info ? md.utils.unescapeAll(token.info).trim() : ''
    let langName = ''

    if (info)
      langName = info.split(/\s+/g)[0]

    switch (langName) {
      case 'mermaid':
        return `<pre class="mermaid">${code}</pre>`
      case 'plantuml':
        return `<pre class="plantuml">${code}</pre>`
      case 'dot':
        return `<pre class="dot">${code}</pre>`
      case 'ditaa':
        // return plantumlParser.functions.getMarkup(code, 'ditaa')
        return `<pre class="ditaa">${code}</pre>`
      case 'pseudocode':
        return pseudocodeRender(code)
    }

    const origRendered = defaultRenderer(tokens, idx, options, env, slf)

    const content = tokens[idx].content
      .replaceAll('"', '&quot;')
      .replaceAll('\'', '&lt;')

    if (content && content.length == 0)
      return origRendered

    // const myOpt = { ...defCodeCopyOptions, ...options }
    return `
      <div style="position: relative">
            ${origRendered}
          <button class="markdown-it-code-copy ${myOpt.buttonClass}" data-clipboard-text="${content}" style="${myOpt.buttonStyle}" title="Copy">
              <span style="${myOpt.iconStyle}" class="${myOpt.iconClass}"></span>
          </button>
      </div>
      `
  }
}
