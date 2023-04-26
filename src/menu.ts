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
      src: 'DynamicProgramming',
      child: [
        {
          title: '背包问题',
          src: 'Knapsack',
          child: [
            {
              title: '分组背包',
              src: 'GroupedKnapsack/',
            },
          ],
        },
      ],

    },
  ],
}
