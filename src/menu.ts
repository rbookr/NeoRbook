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
      title: 'cpp11',
      src: 'cpp11',
      child: [
        {
          title: 'regex',
          src: 'regex/1.md',
        },
        {
          title: 'refercence_wrappers',
          src: 'refercence_wrappers/index.md',
        },
      ],
    },
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
    {
      title: '奇技淫巧',
      src: '奇技淫巧',
      child: [
        {
          title: '读写锁',
          src: '读写锁/readme.md',
        },
      ],

    },
  ],
}
