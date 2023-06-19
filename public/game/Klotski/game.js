//配置
const _config = {

}
const svg = d3.select('svg');

//添加角色
function add_role(name,id,x,y,width,height) {
    svg.append('rect')
        .attr('id',id)
        .attr('x',x)
        .attr('y',y)
        .attr('width',width)
        .attr('height',height)
        .attr('fill','red')
}

//初始化游戏
function init_game() {
    svg.select('*').remove();
}

init_game()