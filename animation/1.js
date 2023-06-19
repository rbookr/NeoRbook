
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
