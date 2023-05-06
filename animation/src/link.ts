// 创建一个两点之间的光滑连线
// 可以是直线,曲线,或者是贝塞尔曲线
// 也可以是Orthogonal 正交直线
// 它带有箭头,在起点或终点
// 是对d3.link的封装

import * as d3 from 'd3'
import _ from 'lodash'
import { BaseClass } from './base'

export enum arrow_type {
  normal = 'M 0 0 L 0 6 L 9 3 z',
}

export class arrowClass extends BaseClass {
  _at: arrow_type
  constructor(svg: any, id: string | null = null, _aT: arrow_type = arrow_type.normal) {
    super(svg, 'marker', id)
    this.attrs.set('markerWidth', 10)
    this.attrs.set('markerHeight', 10)
    this.attrs.set('refX', 0)
    this.attrs.set('refY', 3)
    this.attrs.set('orient', 'auto')
    this.attrs.set('markerUnits', 'strokeWidth')
    this._at = _aT
  }

  create(): any {
    let defs = this.svg.select('defs')

    if (defs.empty())
      defs = this.svg.append('defs')

    const marker = defs.append(this.get_tag())

    _.reduce(this.attrs.toPairs(), (marker, [name, attr]) => {
      marker.attr(name, attr)
      return marker
    }, marker)

    marker.append('path')
      .attr('d', this._at)
      .attr('fill', 'black')
  }
}

export enum link_direction {
  vertical = 'vertical',
  horizontal = 'horizontal',
}

export class linkClass extends BaseClass {
  x0: number
  y0: number
  x1: number
  y1: number
  link_dir: link_direction

  constructor(svg, id: string) {
    super(svg, 'path', id)
    this.x0 = 0
    this.y0 = 0
    this.x1 = 50
    this.y1 = 50
    this.link_dir = link_direction.vertical
    this.fill('none')
    this.stroke('black')
  }

  // 设定末尾的arrow
  set_tail_arrow(arrow: arrowClass) {
    this.attrs.set('marker-end', `url(#${arrow.get_id()})`)
  }

  private get_path_data(): string {
    const link_func = d3.link(this.link_dir == link_direction.vertical ? d3.curveBumpY : d3.curveBumpX)
      .x(d => d[0])
      .y(d => d[1])
    return <string>link_func({ source: [this.x0, this.y0], target: [this.x1, this.y1] })
  }

  set_vertical() {
    this.link_dir = link_direction.vertical
  }

  set_horizontal() {
    this.link_dir = link_direction.horizontal
  }

  set_source(x: number, y: number) {
    this.x0 = x
    this.y0 = y
  }

  set_target(x: number, y: number) {
    this.x1 = x
    this.y1 = y
  }

  create() {
    const dom = super.create()
    dom.attr('d', this.get_path_data())
  }

  dumps() {
    // 添加
    this.attrs.set('d', this.get_path_data())
    return super.dumps()
  }
}
