
function _0x45c7(_0xe10ca1, _0x1737dc) {
	const _0x3353cb = _0x3353();
	return _0x45c7 = function(_0x45c7da, _0x160cb8) {
		_0x45c7da = _0x45c7da - 0x1bc;
		let _0x260248 = _0x3353cb[_0x45c7da];
		return _0x260248;
	}, _0x45c7(_0xe10ca1, _0x1737dc);
}
const _0x4fd77f = _0x45c7;

function _0x3353() {
	const _0x4c59e9 = ['69837yLCQBJ', 'status', 'Error\x20reading\x20run\x20status', 'Error\x20pausing\x20PM2\x20process', 'stop', 'Error\x20updating\x20run\x20status', 'get', '5806595tOZSSV', 'writeFile', 'express', '504HAWfpC', 'error', 'utf8', '19659RHFabY', '133IehYjm', 'parse', 'exports', '12434544bFFoLY', '44FXCLIp', 'App\x20is\x20not\x20running', 'pm2', 'Router', '27576fvBoPe', '5712848BjdbLT', 'disconnect', 'stringify', 'send', '18288280MdOcNJ', 'readFile', 'join', '../_m_t_f_run_status_tail.json', 'replace', 'Error\x20connecting\x20to\x20PM2', '../_m_t_f_config_tail.json'];
	_0x3353 = function() {
		return _0x4c59e9;
	};
	return _0x3353();
}(function(_0x18334f, _0x503c35) {
	const _0x1475a3 = _0x45c7
		, _0x46f74f = _0x18334f();
	while (!![]) {
		try {
			const _0x53abbc = -parseInt(_0x1475a3(0x1c0)) / 0x1 * (-parseInt(_0x1475a3(0x1d2)) / 0x2) + -parseInt(_0x1475a3(0x1cd)) / 0x3 * (-parseInt(_0x1475a3(0x1ca)) / 0x4) + -parseInt(_0x1475a3(0x1c7)) / 0x5 + parseInt(_0x1475a3(0x1d6)) / 0x6 * (-parseInt(_0x1475a3(0x1ce)) / 0x7) + -parseInt(_0x1475a3(0x1d7)) / 0x8 + -parseInt(_0x1475a3(0x1d1)) / 0x9 + parseInt(_0x1475a3(0x1db)) / 0xa;
			if (_0x53abbc === _0x503c35) break;
			else _0x46f74f['push'](_0x46f74f['shift']());
		} catch (_0x49e3cd) {
			_0x46f74f['push'](_0x46f74f['shift']());
		}
	}
}(_0x3353, 0xceadb));
const express = require(_0x4fd77f(0x1c9))
	, pm2 = require(_0x4fd77f(0x1d4))
	, fs = require('fs')
	, path = require('path')
	, router = express[_0x4fd77f(0x1d5)]();
router[_0x4fd77f(0x1c6)]('/', (_0x12fe45, _0x1d0a1b) => {
	const _0x3e8203 = _0x4fd77f
		, _0x14a24a = path[_0x3e8203(0x1dd)](__dirname, _0x3e8203(0x1bc));
	fs[_0x3e8203(0x1dc)](_0x14a24a, _0x3e8203(0x1cc), (_0x5de175, _0x48fcb4) => {
		const _0x17b935 = _0x3e8203;
		if (_0x5de175) return console[_0x17b935(0x1cb)](_0x5de175), _0x1d0a1b[_0x17b935(0x1c1)](0x1f4)[_0x17b935(0x1da)](_0x17b935(0x1c2));
		const {
			status: _0x1de388
		} = JSON[_0x17b935(0x1cf)](_0x48fcb4);
		_0x1de388 === 0x1 ? _0x4ca733() : _0x1d0a1b[_0x17b935(0x1c1)](0x190)['send'](_0x17b935(0x1d3));
	});

	function _0x4ca733() {
		const _0x4f3895 = _0x3e8203
			, _0x4ca400 = path[_0x4f3895(0x1dd)](__dirname, _0x4f3895(0x1bf));
		fs[_0x4f3895(0x1dc)](_0x4ca400, 'utf8', (_0x254e12, _0x3b1549) => {
			const _0x39ca83 = _0x4f3895;
			if (_0x254e12) return console['error'](_0x254e12), _0x1d0a1b[_0x39ca83(0x1c1)](0x1f4)['send']('Error\x20reading\x20configuration');
			const _0xda3892 = JSON[_0x39ca83(0x1cf)](_0x3b1549)
				, {
					fileName: _0x58d389
				} = _0xda3892;
			pm2['connect'](_0x54f89f => {
				const _0x216a0d = _0x39ca83;
				if (_0x54f89f) return console[_0x216a0d(0x1cb)](_0x54f89f), _0x1d0a1b[_0x216a0d(0x1c1)](0x1f4)[_0x216a0d(0x1da)](_0x216a0d(0x1be));
				pm2[_0x216a0d(0x1c4)](_0x58d389[_0x216a0d(0x1bd)]('.js', ''), _0x30639c => {
					const _0x54c661 = _0x216a0d;
					if (_0x30639c) return console['error'](_0x30639c), pm2[_0x54c661(0x1d8)](), _0x1d0a1b[_0x54c661(0x1c1)](0x1f4)[_0x54c661(0x1da)](_0x54c661(0x1c3));
					fs[_0x54c661(0x1c8)](_0x14a24a, JSON[_0x54c661(0x1d9)]({
						'status': 0x0
					}), _0x137d9b => {
						const _0x504c9c = _0x54c661;
						if (_0x137d9b) return console[_0x504c9c(0x1cb)](_0x137d9b), pm2[_0x504c9c(0x1d8)](), _0x1d0a1b[_0x504c9c(0x1c1)](0x1f4)[_0x504c9c(0x1da)](_0x504c9c(0x1c5));
						pm2[_0x504c9c(0x1d8)](), _0x1d0a1b[_0x504c9c(0x1da)]('PM2\x20process\x20paused\x20successfully');
					});
				});
			});
		});
	}
}), module[_0x4fd77f(0x1d0)] = router;

   