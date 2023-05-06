import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'test/index.html',
      },
      output: {
        dir: 'output',
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
