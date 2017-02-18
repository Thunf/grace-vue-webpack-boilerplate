'use strict';

const prompt = require('./prompt.js');
const tools = require('./tools.js');
let useVue;
let isExist = false;
let step2Text = '请给新建的业务页面命名：';

function _step1 () {
	prompt.readLine('新建的业务页面是否使用vue(y/n)？', function (data) {
		if (data == 'y') {
			useVue = true;
			return true;
		} else if (data == 'n') {
			useVue = false;
			return true;
		}
		return false;
	});
}

function _step2 () {
	prompt.readLine(step2Text, function (data) {
		if (tools.illegal(data)) {
			step2Text = '业务页面名只能包含小写字母、数字和下划线，并不能以数字开头，请重新输入新建的业务页面名：'
		} else if (tools.exist(data)) {
			step2Text = data + '已存在，请重新输入新建的业务页面名：'
			isExist = true;
			return false;
		} else {
			step2Text = '';
			tools.autoMake(useVue, data);
			return true;
		}
	})
}

prompt.startStepByStep({
	step1: _step1,
	step2: _step2
})