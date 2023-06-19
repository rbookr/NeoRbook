import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import _ from 'lodash'
import { animation_menu } from './menu'

const inputs = {}
_.each(animation_menu, ({ name, src }) => inputs[name] = src)

export default defineConfig({
  root: './animation',
  base: '/animation_output/',
  resolve: {
    alias: {
      '@animation/': `${resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    rollupOptions: {
      input: {
        test: 'test/index.html',
        ...inputs,
      },
      output: {
        dir: 'animation_output',
        // 使用 rollup 的文件名占位符 `[name]` 指定输出文件名
        // entryFileNames: '[name].js',
        // 使用 rollup 的文件名占位符 `[name]` 指定 HTML 模板文件名
        manualChunks: (id) => {
          if (id.includes('src/'))
            return 'src'

          else if (id.includes('test/'))
            return 'test'
        },
        // 指定不同的输出文件夹
        assetFileNames: (chunkInfo) => {
          const dir = chunkInfo.chunk.name === 'index' ? '' : `${chunkInfo.chunk.name}/`
          return `${dir}[name].[ext]`
        },
      },
    },
  },
})
