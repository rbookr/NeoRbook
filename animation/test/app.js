import * as d3 from 'd3'
import { arrowClass, linkClass } from '../src/link'

const svg = d3.select('body').append('svg')
  .attr('width', '100vw')
  .attr('height', '100vh')

const grid_config = {
  rows: 1,
  cols: 3,
  cell_h: 100,
  cell_w: 100,
  col_gap: 10,
  row_gap: 10,
  x: 100,
}
/*
const mygrid = new grid(svg, 'grid', grid_config)
mygrid.create()

const textGrid = new grid(svg, 'grid2', {
  ...grid_config,
  x: 150,
  y: 50,
  shape_type: 'text',
})
textGrid.each((t) => {
  t.t('hello')
  t.size(20)
})
*/

const myarrow = new arrowClass(svg, 'arrow')
myarrow.create()

// textGrid.create()
// mylink.create()

// const mylink = new linkClass(svg, 'link')
// mylink.set_horizontal()
// mylink.set_tail_arrow(myarrow)
// mylink.create()

const mylink2 = new linkClass(svg, 'link2')
mylink2.set_vertical()
mylink2.set_source(100, 150)
mylink2.set_target(50, 0)
mylink2.set_tail_arrow(myarrow)
mylink2.create()

const source = [100, 100]

for (let i = 0; i <= 500; i += 50) {
  const t = new linkClass(svg, `link${i}`)
  // t.set_vertical()
  t.set_horizontal()
  t.set_source(source[0], source[1])
  t.set_target(200, i)
  t.set_tail_arrow(myarrow)
  t.create()
}
