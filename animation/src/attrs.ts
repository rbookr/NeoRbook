// 设定存储attr的存储类
// 本质用object 来存 key-value 值
import _ from 'lodash'

export interface AttrsType {
  [key: string]: string | number
}

export type AttrTuple = [string, string | number]

export class __attrsClass {
  attrs: AttrsType = {}
  constructor() {
  }

  // 设定attr的值
  // ["height",2,"x",100,"color","red"]
  set(...args: (string | number)[]) {
    const args_pair = _.chunk(args, 2)
    _.each(args_pair, ([name, attr]) => {
      this.attrs[name] = attr
    })
  }

  // 删除值
  remove(name: string) {
    _.unset(this.attrs, name)
  }

  has(name: string): Boolean {
    return _.has(this.attrs, name)
  }

  // [ [height,100],["x",20]]
  toPairs(): AttrTuple[] {
    return _.toPairs(this.attrs)
  }
}
