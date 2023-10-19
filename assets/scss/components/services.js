// после готовности DOM
document.addEventListener('DOMContentLoaded', () => {
    ItcSlider.getOrCreateInstance('.slider');
  });
  // .slider – селектор для выбора элемента, который нужно активировать как ItcSlider
ItcSlider.getOrCreateInstance('.slider');
// получаем DOM-элемент слайдера
const sliderElem = document.querySelector('.slider');
// получаем его экземпляр класса ItcSlider
const slider = ItcSlider.getInstance(sliderElem);
slideNext()