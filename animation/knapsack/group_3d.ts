import _, {functionsIn} from 'lodash'
import * as d3 from 'd3'
import type { gridConf } from '@animation/grid'
import { grid } from '@animation/grid'

// 数据
const group_data = {
  groups: 2,
  volume: 5,
  data: [ // 每组的物品
    [
      { w: 1, v: 1 },
      { w: 2, v: 2 },
      { w: 3, v: 3 },
    ],
    [
      { w: 1, v: 2 },
      { w: 2, v: 1 },
    ],
  ],
}

// import { grid } from '@animation/grid'
const svg = d3.select('svg#svg')

const cell_h = 30
const cell_w = 50
const gap = 80
const cols_height

const default_grid_config = {
  cols: 1,
  cell_h,
  cell_w,
  col_gap: 20,
  row_gap: 20,
}

// 计算宽度
const Width = cell_w + gap + group_data.volume * cell_w + (group_data.volume - 1) * default_grid_config.col_gap
const Height = 400

svg.attr('width', Width).attr('height', Height)

// 生成每组物品的网格
const stuffs_config: gridConf[] = []

//1. 背景生成
const group_rect_grids = []
const group_text_grids = []

const f_rect_grids = []
const f_text_grids = []

function background_generator() {
  svg.select('*').remove()
  for(let i = 0 ;i < group_data.groups;i++) {
    // ===== group generator
    // 计算起点
    // ===== f generator

  }
}


//2. 算法运算,生成frame数据
//3. 播放数据


for(let i = 0 ;i < group_data.groups;i++) {
  const each_group_grid_heigh = _.take(group_data.data, i).map(d => d.length * cell_h)
  const sum_gap = i * gap
  const start_y = _.sum(each_group_grid_heigh) + sum_gap

  const mygrid_config = {
    ...default_grid_config,
    y: start_y,
    rows: group_data.data[i].length,
  }

  stuffs_config.push(mygrid_config)

  const mygrid = new grid(svg, 'mygrid', mygrid_config)
  mygrid.create()

  const my_text_grid = {
    ...mygrid_config,
    x: cell_w / 2,
    y: mygrid_config.y + cell_h / 2 + 10,
    shape_type: 'text',
  }

  const t_grid = new grid(svg, 't_grid', my_text_grid)
  _.each(group_data.data[i], (d, j) => {
    t_grid.get_ij(j, 0).t(`${d.w}  ${d.v}`)
  })
  t_grid.create()

  // 创建右侧的f 数组代表的格式

  const my_f_grid = {
    ...mygrid_config,
    x: cell_w * 2,
    rows: group_data.data[i].length,
    cols: group_data.volume,
  }

  const f_grid = new grid(svg, 'f_grid', my_f_grid)
  f_grid.create()

  const my_f_txt_grid = {
    ...mygrid_config,
    x: cell_w * 2 + cell_w / 2,
    y: mygrid_config.y + cell_h / 2 + 10,
    rows: group_data.data[i].length,
    cols: group_data.volume,
    shape_type: 'text',
  }

  const f_txt_grid = new grid(svg, 'f_txt_grid', my_f_txt_grid)
  f_txt_grid.each(d => d.t('0'))
  f_txt_grid.create()

  f_text_grids.push(f_txt_grid)
}

// 得到动画的数据

f_text_grids[0].get_ij(0, 0).t('100')

const __datas = f_text_grids[0].dumps()
console.log(__datas)
// f_text_grids[0].play(__datas)

// d3.select('#f_grid_0')
//   .transition()
//   .duration(5000)
//   .attr('fill', 'red')
//   .attr('x', 200)


//得到第i组的第j个物品的下边中间的坐标
function get_ij_pos_down(i,j) {

}

//得到第i组的第j个物品的上面的坐标
function get_ij_pos_up(i,j) {

}

//算法的运行
function knapsack_group_3d(group_cnt,max_vol, data) {

  //创建一个三维的数组 f[i][j][k]
  let f=[]
  for(let i = 0;i<=group_cnt;i++) {
    let arr = []

    //抽象一个第0组,有0个元素
    let stuffs_cnt = 0
    if( i > 0) stuffs_cnt = data[i-1].length

    for(let j = 0;j<= stuffs_cnt;j++) {
      let arr2 = []
      for(let k = 0; k<= max_vol ;k++) {
        arr2.push(0)
      }
      arr.push(arr2)
    }
    f.push(arr)
  }
  // console.log(f)

  for(let i = 1;i<=group_cnt;i++) {

    //抽象一个第0组,有0个元素
    let stuffs_cnt = 0
    if( i > 0) stuffs_cnt = data[i-1].length

    //前一组的数量
    let pre_cnt = 0;
    if( i!=1) pre_cnt = data[i-2].length

    //初始化组内的第0个物品,为上一个组的解
    for(let k = 1 ;k <=max_vol ;k++) {
      f[i][0][k] = f[i-1][pre_cnt][k];
    }

    for(let j = 1;j<= stuffs_cnt;j++) {

      let w = data[i-1][j-1].w;
      let v = data[i-1][j-1].v;
        // console.log(w,v)
      for(let k = 1; k<= max_vol ;k++) {
        //求出指向
        //1. 上一组最一个元素点
        //2. 这一组的前一个物品


        if( w > k ) //放不下
          f[i][j][k] = f[i][j-1][k];
        else {
          let a = f[i-1][pre_cnt][k] + v;
          // console.log('->k,a',k,a);
          f[i][j][k] = Math.max(f[i][j-1][k] ,a );
        }
      }
    }
  }
  // console.log(f)
}

knapsack_group_3d(group_data.groups, group_data.volume, group_data.data)
