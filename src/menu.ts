// 书的目录

export interface MenuInter {

  title: string
  src: string
  child?: MenuInter[]
}

export const bookMenu: MenuInter = {
  title: 'root',
  src: '',
  child: [
    {
      title: '排序算法',
      src: 'sort',
      child: [
        {
          title: '快速排序',
          src: 'quicksort/',
        },
      ],
    },
    {
      title: '动态规划',
      src: 'dynamic_programming',
      child: [
        {
          title: '背包问题',
          src: 'knapsack',
          child: [
            {
              title: '分组背包',
              src: 'grouped_knapsack/',
            },
          ],
        },
        {
          title: 'dp优化',
          src: 'optimization',
          child: [
            {
              title: '斜率优化',
              src: 'slope',
              child : [
                {
                  title: '入门:玩具装箱',
                  src: 'start',
                }
              ]
            },
          ],
        }
      ],
    },
    {
      title:'树',
      src:'tree',
      child: [
        {title:'树的直径',src:'diamter/start'}
      ]
    },
    {
      title:'图论',
      src:'graph',
      child: [
        {
          title:'tarjan算法',
          src:'tarjan',
          child: [
            { title:'求割点',src:"cut/start"},
            { title:'找环',src:"loop/start"}
          ]
        }
      ]
    },
    {
      title :'数据结构',
      src: 'data_structure',
      child: [
        {
          title:"栈",
          src:"stack",
          child : [
            { title:"单调栈", src:"monotonic" }
          ]
        },
        {
          title:"队列",
          src:"queue",
          child : [
            { title:"单调队列", src:"monotonic" }
          ]
        },
        {
          title:'分块',
          src:'split_chunk/start'
        },
        {
          title:'舞蹈链',
          src:'dance_linking/start'
        },
      ]
    },
    {
      title:'技巧',
      src:'tricks',
      child: [
        { title :'快速交换两区间', src:'quick_swap_two_range'},
        { title :'分数类', src:'fraction_class'}
      ]

    },
    {
      title: '附录',
      src: 'appendix',
      child: [
        {
          title: 'vscode',
          src: 'vscode/',
        },
      ],
    },
  ],
}
