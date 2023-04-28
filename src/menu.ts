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
      ],
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
