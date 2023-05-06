// rect,circle

// 一个rect

import _ from 'lodash'
import { BaseClass } from './base'

export class shapeClass extends BaseClass {
  xy(x: number, y: number) {
    this.x(x)
    this.y(y)
  }

  x(x: number) {
    this.attrs.set('x', x)
  }

  y(y: number) {
    this.attrs.set('y', y)
  }

  stroke_width(w: number) {
    this.attrs.set('stroke-width', w)
  }

  // 动画
  animation() {
    const rect = this.select().transition().ease(BaseClass.get_ease(this.ease)).duration(this.duration)

    // 设定attr
    _.reduce(this.attrs.toPairs(), (rect, [name, attr]) => {
      // console.log(name, attr)
      rect.attr(name, attr)
      return rect
    }, rect)
  }
}

export class rectClass extends shapeClass {
  constructor(svg: any, id: string | null = null) {
    super(svg, 'rect', id)
    // 设定默认的值
    this.w(10)
    this.h(10)
    this.x(0)
    this.y(0)
    this.fill('none')
    this.stroke('black')
  }

  w(w: number) {
    this.attrs.set('width', w)
  }

  h(h: number) {
    this.attrs.set('height', h)
  }
}

export class circleClass extends shapeClass {
  constructor(svg: any, id: string | null = null) {
    super(svg, 'circle', id)
  }

  xyr(x: number, y: number, r: number) {
    this.x(x)
    this.y(y)
    this.r(r)
  }

  x(x: number) {
    this.attrs.set('cx', x)
  }

  y(y: number) {
    this.attrs.set('cy', y)
  }

  r(r: number) {
    this.attrs.set('r', r)
  }
}
