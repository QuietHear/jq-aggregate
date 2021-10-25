/*
 * @LastEditors: afei
 * @LastEditTime: 2021-10-25 14:54:54
 */
// 插件列表
const list = [
  {
    link: 'select-date',
    name: '选择日期插件'
  },
  {
    link: 'interface-show',
    name: '接口展示示例页面'
  },
  {
    link: 'indicator-floor',
    name: '电商网站楼层指示器'
  },
  {
    link: 'drag-menu',
    name: '可拖拽的菜单'
  }
];
let str = '';
list.forEach(item => {
  str += `<li><a href="modules/${item.link}/index.html" target="_blank">${item.name}</a></li>`;
});
$('ol').html(str);
