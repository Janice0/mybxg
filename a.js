/*
* @Author: Administrator
* @Date:   2017-08-28 21:37:38
* @Last Modified by:   Administrator
* @Last Modified time: 2017-08-28 21:40:48
*/

define(['jquery', 'utils', 'template', 'form','st'], function ($, utils, template) {
    // 设置导航
    utils.setMenu('/category/list');

    // 获取分类id
    var cg_id = utils.qs('cg_id'),
        category = $('#category'),
        html;
