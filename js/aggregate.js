/*
 * @LastEditors: afei
 * @LastEditTime: 2021-10-25 12:30:24
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
  }
];
let str = '';
list.forEach(item => {
  str += `<li><a href="modules/${item.link}/index.html" target="_blank">${item.name}</a></li>`;
});
$('ol').html(str);
