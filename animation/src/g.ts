// 创建一个容器,当你需要在一个容器中放置多个显示对象的时候,你需要创建一个容器
// 当需要同时移动多个内容的时候，你只需要移动容器，而不是每个内容

import { BaseClass } from './base'

export class gClass extends BaseClass {
  _x = 0
  _y = 0
  constructor(svg: any, id: string | null = null) {
    super(svg, 'g', id)
    this.xy(0, 0)
    this.add_dump_attr('translate')
  }

  xy(x: number, y: number) {
    this._x = x
    this._y = y
    this.set_translate()
  }

  x(d: number) {
    this._x = d
    this.set_translate()
  }

  y(d: number) {
    this._y = d
    this.set_translate()
  }

  private set_translate() {
    this.attrs.set('transform', `translate(${this._x},${this._y})`)
  }
}
