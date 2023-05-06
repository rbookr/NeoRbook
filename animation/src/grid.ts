// 一个由基本形状组成的网格

import _ from 'lodash'
import type { shapeClass } from './shape'
import { circleClass, rectClass } from './shape'
import { textClass } from './text'

export interface gridConf {
  rows: number
  cols: number
  cell_h: number
  cell_w: number
  row_gap: number
  x: number
  y: number
  col_gap: number
  shape_type: string
}

export class grid {
  shapes: shapeClass[]
  svg: any
  id: string
  x: number
  y: number
  rows: number
  cols: number
  cell_h: number
  cell_w: number
  row_gap: number
  col_gap: number
  shape_type: string

  constructor(svg: any, id: string, config = {} as gridConf) {
    this.shape_type = config.shape_type || 'rect'
    this.rows = config.rows || 1
    this.cols = config.cols || 5
    this.row_gap = config.row_gap || 0
    this.col_gap = config.col_gap || 0
    this.cell_h = config.cell_h || 10
    this.cell_w = config.cell_w || 10
    this.x = config.x || 0
    this.y = config.y || 0

    this.shapes = Array.from({ length: this.cols * this.rows }, (v, i) => {
      if (this.shape_type === 'rect')
        return new rectClass(svg, `${id}_${i}`)
      else if (this.shape_type === 'text')
        return new textClass(svg, `${id}_${i}`)
      return new circleClass(svg, `${id}_${i}`)
    })

    // 初始每个shape的位置和大小

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const shape = this.get_ij(i, j)
        shape.xy(...this.get_ij_pos(i, j))
        if (this.shape_type === 'rect') {
          shape.w(this.cell_w)
          shape.h(this.cell_h)
        }
      }
    }
  }

  // 网络元素数量,网络大小
  size() {
    return this.cols * this.rows
  }

  // 得到第ij个位置的shape
  get_ij(i: number, j: number) {
    return this.shapes[i * this.cols + j]
  }

  get_shape_at(p: number) {
    return this.get_ij(Math.floor(p / this.cols), p % this.cols)
  }

  get_ij_pos(i: number, j: number) {
    return [this.x + j * (this.cell_h + this.row_gap), this.y + i * (this.cell_w + this.col_gap)]
  }

  // 创建
  create() {
    _.each(this.shapes, (shape) => {
      shape.create()
    })
  }

  // 遍历每个元素 ,设置值
  each(func: (any) => void) {
    _.each(this.shapes, func)
  }
}
