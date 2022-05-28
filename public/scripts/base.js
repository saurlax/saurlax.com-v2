let mouth = new Date().getMonth();
const colors = [
  '#bc7654', '#b692be', '#b5e3d8', '#df4952',
  '#7bb467', '#fdd758', '#e4afb5', '#f18137',
  '#5f6fad', '#99b3d4', '#c04a64', '#118091'
];
const mouths = [
  '𝓬𝓪𝓻𝓪𝓶𝓮𝓵', '𝓼𝓱𝓮𝓮𝓻 𝓵𝓲𝓵𝓪𝓬', '𝓯𝓪𝓲𝓻 𝓪𝓺𝓾𝓪', '𝓬𝓪𝔂𝓮𝓷𝓷𝓮',
  '𝓫𝓾𝓭 𝓰𝓻𝓮𝓮𝓷', '𝓪𝓼𝓹𝓮𝓷 𝓰𝓸𝓵𝓭', '𝓬𝓸𝓻𝓪𝓵 𝓫𝓵𝓾𝓼𝓱', '𝓼𝓾𝓷 𝓸𝓻𝓪𝓷𝓰𝓮',
  '𝓫𝓪𝓳𝓪 𝓫𝓵𝓾𝓮', '𝓬𝓮𝓻𝓾𝓵𝓮𝓪𝓷', '𝓬𝓵𝓪𝓻𝓮𝓽 𝓻𝓮𝓭', '𝓹𝓪𝓰𝓸𝓭𝓪 𝓫𝓵𝓾𝓮'
];
const primaryColor = colors[mouth];

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  body.style.setProperty('--color-primary', primaryColor);
  body.style.setProperty('--color-primary-1', `${primaryColor}dd`);
  body.style.setProperty('--color-primary-2', `${primaryColor}bb`);
  body.style.setProperty('--color-primary-3', `${primaryColor}99`);
  body.style.setProperty('--color-primary-4', `${primaryColor}77`);
  body.style.setProperty('--color-primary-5', `${primaryColor}55`);
  body.style.setProperty('--color-primary-6', `${primaryColor}33`);
  body.style.setProperty('--color-primary-7', `${primaryColor}11`);
  const mouthSup = document.getElementById('mouth');
  mouthSup.innerText = mouths[mouth];
})

// 临时测试方法
function changeMouth() {
  mouth = mouth == 11 ? 0 : mouth + 1;
  const primaryColor = colors[mouth];
  const body = document.body;
  body.style.setProperty('--color-primary', primaryColor);
  body.style.setProperty('--color-primary-1', `${primaryColor}dd`);
  body.style.setProperty('--color-primary-2', `${primaryColor}bb`);
  body.style.setProperty('--color-primary-3', `${primaryColor}99`);
  body.style.setProperty('--color-primary-4', `${primaryColor}77`);
  body.style.setProperty('--color-primary-5', `${primaryColor}55`);
  body.style.setProperty('--color-primary-6', `${primaryColor}33`);
  body.style.setProperty('--color-primary-7', `${primaryColor}11`);
  const mouthSup = document.getElementById('mouth');
  mouthSup.innerText = mouths[mouth];
}