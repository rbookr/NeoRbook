// 基类

import * as d3 from 'd3'
import _ from 'lodash'
import type { AttrTuple } from './attrs'
import { __attrsClass } from './attrs'

// 动画的过滤样式
enum easeType {
  Linear = 'easeLinear',
  PolyIn = 'easePolyIn',
  PolyOut = 'easePolyOut',
  Poly = 'easePoly',
  PolyInOut = 'easePolyInOut',
  Quad = 'easeQuad',
  QuadIn = 'easeQuadIn',
  QuadOut = 'easeQuadOut',
  QuadInOut = 'easeQuadInOut',
  Cubic = 'easeCubic',
  CubicIn = 'easeCubicIn',
  CubicOut = 'easeCubicOut',
  CubicInOut = 'easeCubicInOut',
  Bounce = 'easeBounce',
  BounceIn = 'easeBounceIn',
  BounceOut = 'easeBounceOut',
  BounceInOut = 'easeBounceInOut',
}

export interface dumpsType {
  identity: string
  duration: number
  ease: easeType
  attrs: AttrTuple[]
}

export class BaseClass {
  attrs = new __attrsClass()
  // d3的得到的容器,通常是d3.append("svg")
  id: string | null
  tag: string
  duration = 3000
  ease: easeType = easeType.Cubic
  svg: any
  _dump_attrs: string[] = [] // 需要导出的属性

  constructor(svg: any, tag: string, id: string | null = null) {
    this.svg = svg
    this.tag = tag
    this.id = id
    this.set_id(id)
  }

  set_id(id: string) {
    this.id = id
    this.attrs.set('id', id)
  }

  get_id(): string {
    return this.id || 'unkown'
  }

  fill(color: string) {
    this.attrs.set('fill', color)
  }

  stroke(color: string) {
    this.attrs.set('stroke', color)
  }

  set_tag(tag: string) {
    this.tag = tag
  }

  set_svg(svg: any) {
    this.svg = svg
  }

  set_duration(d: number) {
    this.duration = d
  }

  set_ease(v: easeType) {
    this.ease = v
  }

  // 直接创建
  create(): any {
    // TODO check is_exit()
    const rect = this.svg.append(this.get_tag())

    // 设定attr
    _.reduce(this.attrs.toPairs(), (rect, [name, attr]) => {
      rect.attr(name, attr)
      return rect
    }, rect)
    return rect
    // if (this.id)
    //   rect.attr('id', this.id)
  }

  // 直接删除
  remove(): void {
    this.select().remove()
  }

  show() {
    this.attrs.set('opacity', 1)
  }

  // 隐藏
  hidden() {
    this.attrs.set('opacity', 0)
  }

  // 导出数据
  dumps(): dumpsType {
    return {
      ease: this.ease,
      duration: this.duration,
      identity: this.get_identity(),
      attrs: this.get_dump_attrs_pairs(),
    }
  }

  add_dump_attr(attr: string) {
    this._dump_attrs.push(attr)
  }

  // 得到导出的属性
  get_dump_attrs(): string [] {
    return _.uniq(this._dump_attrs)
  }

  // 得到导出的属性,包括值
  get_dump_attrs_pairs(): AttrTuple[] {
    const _attrs = this.get_dump_attrs()
    if (_.isEmpty(_attrs))
      return _.toPairs(this.attrs.attrs)
    else
      return _.toPairs(_.pick(this.attrs.attrs, _attrs))
  }

  // 播放dumps的数据
  static play(dumps: dumpsType) {
    const dom = svg.select(dumps.identity).transition()
      .ease(BaseClass.get_ease(dumps.ease))
      .duration(dumps.duration)

    // 设定attr,TODO 应该使用 _.each
    _.reduce(dumps.attrs, (rect, [name, attr]) => {
      dom.attr(name, attr)
      return dom
    }, dom)
  }

  // 得到动画的形式
  static get_ease(ease: easeType): any {
    return d3[ease] || d3.easeCubic
  }

  get_identity(): string {
    if (this.id)
      return `${this.tag}#${this.id}`
    else
      return this.tag
  }

  get_tag(): string {
    return this.tag
  }

  // 选择自己
  select(): any {
    return this.svg.select(this.get_identiy())
  }
}
