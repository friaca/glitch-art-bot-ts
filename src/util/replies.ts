export const invalidValues = (
  type: 'allowed' | 'range',
  prop: string,
  allowed: number[] | [number, number]
) =>
  `Invalid value for '${prop}', this option ${
    type === 'allowed' ? 'accepts' : 'must be between these numbers'
  }: ${allowed.reduce(
    (acc, curr, index, self) => (acc += index + 1 === self.length ? `${curr}` : `${curr}, `),
    ''
  )}`;

export default {
  standard: 'Here is your glitched image :)',
  invalidImage: 'No valid image found in the parent tweet',
  defaultConfig:
    'No valid configuration found, using default config.\nFor more information on using custom options, visit https://github.com/glitchartbot/glitch-art-bot-scripts',
  invalidSketch:
    'No sketch found with this name, visit https://github.com/glitchartbot/glitch-art-bot-scripts for available scripts',
  orphanTweet:
    'No parent tweet found, for more information on the bot usage, visit https://github.com/glitchartbot/glitch-art-bot-scripts',
};
