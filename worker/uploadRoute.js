  
function _0x2551(_0x36bde1, _0x171b52) {
	const _0x46bf6d = _0x46bf();
	return _0x2551 = function(_0x2551d8, _0x3625a6) {
		_0x2551d8 = _0x2551d8 - 0xcf;
		let _0x1e8b05 = _0x46bf6d[_0x2551d8];
		return _0x1e8b05;
	}, _0x2551(_0x36bde1, _0x171b52);
}
const _0x1b162d = _0x2551;
(function(_0x3954dd, _0x175fbc) {
	const _0x11f754 = _0x2551
		, _0x11e291 = _0x3954dd();
	while (!![]) {
		try {
			const _0xec1e45 = -parseInt(_0x11f754(0xde)) / 0x1 * (-parseInt(_0x11f754(0xd3)) / 0x2) + -parseInt(_0x11f754(0xd5)) / 0x3 + -parseInt(_0x11f754(0xe8)) / 0x4 + -parseInt(_0x11f754(0xfd)) / 0x5 + parseInt(_0x11f754(0xfa)) / 0x6 * (-parseInt(_0x11f754(0xdc)) / 0x7) + parseInt(_0x11f754(0xdf)) / 0x8 + parseInt(_0x11f754(0xf7)) / 0x9;
			if (_0xec1e45 === _0x175fbc) break;
			else _0x11e291['push'](_0x11e291['shift']());
		} catch (_0x57fdff) {
			_0x11e291['push'](_0x11e291['shift']());
		}
	}
}(_0x46bf, 0xbd43f));
const express = require(_0x1b162d(0xcf))
	, router = express[_0x1b162d(0xfc)]()
	, path = require('path')
	, fs = require('fs')
	, storageRoute = require(_0x1b162d(0xd8))
	, multer = require(_0x1b162d(0xdb))
	, unzipper = require('unzipper');

function getDirectorySize(_0x3cd2db, _0x4ea6cb) {
	const _0x388233 = _0x1b162d;
	let _0x363147 = 0x0;
	fs[_0x388233(0xd4)](_0x3cd2db, (_0x129cb0, _0x247efc) => {
		if (_0x129cb0) return _0x4ea6cb(_0x129cb0);
		let _0x18a490 = _0x247efc['length'];
		if (_0x18a490 === 0x0) return _0x4ea6cb(null, _0x363147);
		_0x247efc['forEach'](_0x53ae06 => {
			const _0x355748 = _0x2551
				, _0x546cd7 = path[_0x355748(0xee)](_0x3cd2db, _0x53ae06);
			fs[_0x355748(0xec)](_0x546cd7, (_0x4e936b, _0x594a4d) => {
				const _0x2fc908 = _0x355748;
				if (_0x4e936b) {
					if (_0x4e936b[_0x2fc908(0xeb)] === _0x2fc908(0xff)) {
						--_0x18a490 === 0x0 && _0x4ea6cb(null, _0x363147);
						return;
					} else return _0x4ea6cb(_0x4e936b);
				}
				if (_0x594a4d[_0x2fc908(0xd9)]()) _0x363147 += _0x594a4d[_0x2fc908(0xe2)];
				else _0x594a4d[_0x2fc908(0xef)]() && getDirectorySize(_0x546cd7, (_0x2dbb46, _0x1cfd4a) => {
					if (_0x2dbb46) return _0x4ea6cb(_0x2dbb46);
					_0x363147 += _0x1cfd4a, --_0x18a490 === 0x0 && _0x4ea6cb(null, _0x363147);
				});
				--_0x18a490 === 0x0 && _0x4ea6cb(null, _0x363147);
			});
		});
	});
}
const storage = multer[_0x1b162d(0xf4)]({
		'destination': function(_0x4f4275, _0x53a543, _0x4489af) {
			const _0xacc9ca = _0x1b162d;
			_0x4489af(null, path['join'](__dirname, _0xacc9ca(0xe3)));
		}
		, 'filename': function(_0x1b5608, _0x5a7d50, _0x4c202a) {
			_0x4c202a(null, _0x5a7d50['originalname']);
		}
	})
	, fileFilter = (_0x21c94f, _0x99b747, _0x33b997) => {
		const _0x56a6b2 = _0x1b162d;
		_0x99b747[_0x56a6b2(0xfe)] === _0x56a6b2(0xfb) ? _0x33b997(null, !![]) : _0x33b997(new Error(_0x56a6b2(0xf3)), ![]);
	}
	, upload = multer({
		'storage': storage
		, 'fileFilter': fileFilter
	})[_0x1b162d(0xf1)](_0x1b162d(0xed));
router[_0x1b162d(0xe5)]('/', (_0x7f1cb1, _0x59f0b8) => {
	upload(_0x7f1cb1, _0x59f0b8, _0x5ec714 => {
		const _0x3b2c59 = _0x2551;
		if (_0x5ec714) return console['error']('Error\x20uploading\x20file:', _0x5ec714[_0x3b2c59(0xd1)]), _0x59f0b8[_0x3b2c59(0xf6)](0x190)['json']({
			'error': _0x5ec714[_0x3b2c59(0xd1)]
		});
		const _0xa61846 = path[_0x3b2c59(0xee)](__dirname, _0x3b2c59(0xe1));
		fs[_0x3b2c59(0xda)](_0xa61846, _0x3b2c59(0xdd), (_0x2a5010, _0x30127a) => {
			const _0x50c84e = _0x3b2c59;
			if (_0x2a5010) return console['error']('Error\x20reading\x20quota:', _0x2a5010), _0x59f0b8['status'](0x1f4)[_0x50c84e(0xf8)]({
				'error': 'Error\x20reading\x20quota'
			});
			const _0x2235d1 = JSON[_0x50c84e(0xea)](_0x30127a)
				, _0x3ed89f = _0x2235d1[_0x50c84e(0xf0)];
			getDirectorySize(path['join'](__dirname, '../webapppublic'), (_0x504900, _0x9a1365) => {
				const _0x3264ba = _0x50c84e;
				if (_0x504900) return console['error'](_0x3264ba(0xe6), _0x504900), _0x59f0b8['status'](0x1f4)[_0x3264ba(0xf8)]({
					'error': 'Error\x20checking\x20storage\x20usage'
				});
				const _0x5d2466 = _0x9a1365 / (0x400 * 0x400)
					, _0x3516e4 = _0x7f1cb1[_0x3264ba(0xed)][_0x3264ba(0xe2)] / (0x400 * 0x400)
					, _0x36929e = _0x5d2466 + _0x3516e4;
				_0x36929e > _0x3ed89f ? fs[_0x3264ba(0xd7)](_0x7f1cb1[_0x3264ba(0xed)][_0x3264ba(0xd2)], _0x2d8562 => {
					const _0x5bb987 = _0x3264ba;
					return _0x2d8562 && console[_0x5bb987(0xf5)](_0x5bb987(0xe9), _0x2d8562), _0x59f0b8[_0x5bb987(0xf6)](0x190)['json']({
						'error': _0x5bb987(0xf2)
					});
				}) : fs['createReadStream'](_0x7f1cb1[_0x3264ba(0xed)]['path'])[_0x3264ba(0xe4)](unzipper[_0x3264ba(0xd0)]({
					'path': path[_0x3264ba(0xee)](__dirname, '../webapppublic')
				}))['on'](_0x3264ba(0xf5), _0x204d0c => {
					const _0x2cd271 = _0x3264ba;
					return console[_0x2cd271(0xf5)](_0x2cd271(0xe0), _0x204d0c), _0x59f0b8['status'](0x1f4)['json']({
						'error': _0x2cd271(0xf9)
					});
				})['on'](_0x3264ba(0xe7), () => {
					const _0x38029b = _0x3264ba;
					fs[_0x38029b(0xd7)](_0x7f1cb1[_0x38029b(0xed)]['path'], (_0x43d551, _0x1808f2) => {});
				})['on']('finish', () => {
					const _0x39fa7a = _0x3264ba;
					_0x59f0b8[_0x39fa7a(0xf6)](0xc8)['json']({
						'message': 'File\x20uploaded\x20and\x20extracted\x20successfully'
					});
				});
			});
		});
	});
}), module[_0x1b162d(0xd6)] = router;

function _0x46bf() {
	const _0x1ee203 = ['readFile', 'multer', '28pZwyOW', 'utf8', '14045bHQNRk', '7878872ZErPTL', 'Error\x20extracting\x20ZIP\x20file:', '../quota.json', 'size', '../webapppublic', 'pipe', 'post', 'Error\x20checking\x20storage\x20usage:', 'close', '4600484bnlEdn', 'Error\x20deleting\x20uploaded\x20file:', 'parse', 'code', 'stat', 'file', 'join', 'isDirectory', 'storage', 'single', 'Quota\x20exceeded.\x20File\x20upload\x20rejected.', 'Only\x20ZIP\x20files\x20are\x20allowed', 'diskStorage', 'error', 'status', '24324390iPFUqx', 'json', 'Error\x20extracting\x20ZIP\x20file', '1131354YStjpQ', 'application/zip', 'Router', '6759325UsZzPO', 'mimetype', 'ENOENT', 'express', 'Extract', 'message', 'path', '90OeGLPf', 'readdir', '864423kiQZLJ', 'exports', 'unlink', './storageRoute', 'isFile'];
	_0x46bf = function() {
		return _0x1ee203;
	};
	return _0x46bf();
}

   