// 函数(0<=x<=10)
function func(x) {
	return Math.sin(x);
}

// 解集
let res = [];

// 最大值
let max = func(0);

// 族群规模
const SIZE = 50;

// 迭代次数
const ITERATION = 300;

// 生成数据
function generate(array, range = 0, base = 0, times = 0) {
	for (let index = 0; index < times; index++) {
		array.push([Math.random() * range + base]);
	}
}

// 族群进化
function evolution() {
	// 先杀
	let newRes = [];
	res.forEach((item) => {
		const x = item[0];
		const y = func(x);
		if (y > max && x >= 0 && x <= 10) newRes.push(item);
	});
	// 后补
	let addCount = SIZE - newRes.length;
	generate(newRes, 10 - max, max, addCount);
	res = newRes;
	// 再算最大值
	res.forEach((item) => {
		const x = item[0];
		const y = func(x);
		if (y > max && x >= 0 && x <= 10) max = y;
	});
}

// 整体算法
function run() {
	// 1.生成族群
	generate(res, 10 - max, max, SIZE);
	// 2.迭代进化
	for (let index = 0; index < ITERATION; index++) {
		evolution();
	}
	// 3.输出最大值
	console.log(max);
}

// 运行
run();
