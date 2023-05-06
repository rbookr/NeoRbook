import type { dumpsType } from './types'
import { BaseClass } from './base'
import { shapeClass } from './shape'

export class textClass extends shapeClass {
  text: string
  constructor(svg: any, id: string, text: string) {
    super(svg, 'text', id)
    this.mid()
    this.t(text)
    this.fill('black')
    // this.stroke('black')
  }

  t(str: string) {
    this.text = str
  }

  size(size: number) {
    this.attrs.set('font-size', size)
  }

  mid() {
    this.justify()
    this.align_middle()
  }

  justify(attr = 'middle') {
    this.attrs.set('text-anchor', attr)
  }

  align_middle() {
    this.attrs.set('domain-baseline', 'middle')
  }

  dumps(): dumpsType {
    return {
      ...super.dumps(),
      text: this.text,
    }
  }

  static play(dumps: dumpsType) {
    const dom = svg.select(dumps.identity).transition()
      .ease(BaseClass.get_ease(dumps.ease))
      .duration(dumps.duration)

    // if (dumps.text)
    // dom.attr('text', dumps.text) //先要设定 dumps里含有text

    // 设定attr
    _.reduce(dumps.attrs, (rect, [name, attr]) => {
      dom.attr(name, attr)
      return dom
    }, dom)
  }

  // 创建
  create(): any {
    const dom = super.create()
    dom.text(this.text)
    return dom
  }
}
