import * as d3 from 'd3'
const link = d3.linkVertical()
  .x( d => d[0])
  .y( d => d[1])

const a = link({source:[100,100],target:[200,200]})
console.log(a)
