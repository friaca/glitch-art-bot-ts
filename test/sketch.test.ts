import path from 'path';
import {
  getProcessingCmd,
  getAssetsPath,
  getAvailableSketchNames,
  getSketchConfig,
} from '../src/sketch';

test('retorna o comando certo pra executar o script', () => {
  const regexPurePath = /^.+-(\d.\d.\d).+\.exe --sketch=.+(\\|\/)(\w+) --run$/gm;
  const regexPathWithArgs = /^.+-(\d.\d.\d).+\.exe --sketch=.+(\\|\/)(\w+) --run( \w+=\d| \w+=\d ){0,}$/gm;
  const cmdPure = getProcessingCmd('pixelsort');
  const cmdWithArgs = getProcessingCmd('pixelsort', { mode: 1, photo: 2 });
  const matches = [cmdPure.match(regexPurePath), cmdWithArgs.match(regexPathWithArgs)];
  const allMatches = matches.filter(el => el).length === matches.length;
  
  const literalCmd = `${process.env.P3_PATH} --sketch=${path.join(process.env.P3_SKETCH_BASE, 'pixelsort')} --run mode=1 filename=abc format=.png`
  const cmdToMatchLiteral = getProcessingCmd('pixelsort', { mode: 1, photo: 2 }, { name: 'abc', extension: '.png'});

  expect(allMatches).toBe(true);
  expect(cmdToMatchLiteral).toBe(literalCmd);
});

test('retorna o caminho da pasta de recursos (fontes)', () => {
  const regex = /pixelsort(\\|\/)assets$/gm;
  const pathAssets = getAssetsPath('pixelsort');
  const matches = pathAssets.match(regex);

  expect(matches).toBeTruthy();
});

test('retorna o nome dos sketches disponíveis', () => {
  const expected = ['pixelsort', 'pixeldrift'];
  expect(getAvailableSketchNames().sort()).toEqual(expected.sort());
});

test('retorna a configuração do sketch', () => {
  const expected = {
    name: 'pixelsort',
    parameters: ['mode'],
    values: {
      mode: {
        boundaries: [1, 2, 3],
        type: 'allowed',
      },
    },
    defaultConfig: {
      photo: 1,
      mode: 1,
    },
  };

  expect(getSketchConfig('pixelsort')).toStrictEqual(expected);
});
