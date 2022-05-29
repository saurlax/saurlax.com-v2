const root = document.documentElement;

const themes = [
  ['#bc7654', '𝓬𝓪𝓻𝓪𝓶𝓮𝓵'],
  ['#b692be', '𝓼𝓱𝓮𝓮𝓻 𝓵𝓲𝓵𝓪𝓬'],
  ['#b5e3d8', '𝓯𝓪𝓲𝓻 𝓪𝓺𝓾𝓪'],
  ['#df4952', '𝓬𝓪𝔂𝓮𝓷𝓷𝓮'],
  ['#7bb467', '𝓫𝓾𝓭 𝓰𝓻𝓮𝓮𝓷'],
  ['#fdd758', '𝓪𝓼𝓹𝓮𝓷 𝓰𝓸𝓵𝓭'],
  ['#e4afb5', '𝓬𝓸𝓻𝓪𝓵 𝓫𝓵𝓾𝓼𝓱'],
  ['#f18137', '𝓼𝓾𝓷 𝓸𝓻𝓪𝓷𝓰𝓮'],
  ['#5f6fad', '𝓫𝓪𝓳𝓪 𝓫𝓵𝓾𝓮'],
  ['#99b3d4', '𝓬𝓮𝓻𝓾𝓵𝓮𝓪𝓷'],
  ['#c04a64', '𝓬𝓵𝓪𝓻𝓮𝓽 𝓻𝓮𝓭'],
  ['#118091', '𝓹𝓪𝓰𝓸𝓭𝓪 𝓫𝓵𝓾𝓮'],
  ['#212121', '𝓭𝓪𝓻𝓴']
];

function prefix(string, length) {
  return (Array(length).join('0') + string).slice(-length);
}

function colorChanger(color, degree) {
  let rgb = [];
  for (let i = 0; i < 3; i++) {
    rgb[i] = prefix((Number.parseInt(color.slice(i * 2 + 1, i * 2 + 3), 16) * degree).toString(16).split('.')[0], 2);
  }
  return `#${rgb.join('')}`;
}

const gradient = ['', 'dd', 'bb', '99', '77', '55', '33', '11'];
function changePrimaryColor(color) {
  root.style.setProperty('--color-primary-deep', colorChanger(color, 0.875));
  gradient.forEach((g, i) => {
    root.style.setProperty(`--color-primary${i == 0 ? '' : `-${i}`}`, `${color}${g}`);
  })
}

function changePrimaryTheme(i) {
  changePrimaryColor(themes[i][0]);
  document.getElementById('theme').innerText = themes[i][1];
}


document.addEventListener('DOMContentLoaded', () => {
  changePrimaryTheme(new Date().getMonth());
})

let testi = new Date().getMonth();
function testChangeMouth() {
  testi = testi == themes.length - 1 ? 0 : testi + 1;
  changePrimaryTheme(testi);
}