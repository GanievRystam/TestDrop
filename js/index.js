(function collapse() {
  let input = document.querySelector('[data-event="collapsed"]');
  input.addEventListener('click', () => {
    const collapse = document.querySelector('[data-state]');
    const isOpen = collapse.getAttribute('data-state');
    console.log(collapse);
    if(isOpen == 'true') {
      collapse.setAttribute('data-state', 'false');

    } else {
      collapse.setAttribute('data-state', 'true')
    }
  });
})()

function checked() {
  const checked = document.querySelectorAll('[data-target="checked"]');
  checked.forEach( (item, index) => {
    item.addEventListener('change', (e) => {
      let target = e.target.parentNode;
      const name = target.querySelector('[data-name]').innerHTML; 
      target = target.querySelector('[fakeCheked]');
      const isChecked = target.getAttribute('fakeCheked');
      if(isChecked == 'true') {
        target.setAttribute('fakeCheked', 'false');
        destroySelected(index);
      } else {
        target.setAttribute('fakeCheked', 'true');
        createSelected(name, index);
      }
    });
  });
}


function createSelected(text, index) {
  const selectedWrap = document.querySelector('[data-wrap="selected"]');
  const div = `<div class="selected-item" data-selected="${index}">

  <span class="selected-item__text">${text}</span>
    <img src="./img/Close.svg" class="selected-item__exit" data-exit="${index}" />
</div>`;
  selectedWrap.insertAdjacentHTML('afterbegin', div);
  cancerSelected(index);
  circle()
}

function destroySelected(index) {
  const destroyTarget = document.querySelector(`[data-selected="${index}"]`);
  destroyTarget.remove();
  circle();
}

function cancerSelected(index) {
  const exit = document.querySelector(`[data-exit="${index}"]`);
    exit.addEventListener('click', () => {
      destroySelected(index);
      document.querySelectorAll('[fakecheked]')[index].setAttribute('fakecheked', 'false');
      circle()
  });
}

function switchField() {
  const items = document.querySelectorAll('[data-switch]');
  items.forEach((item, index) => {
    item.addEventListener('click', (e) => {  
      const target = e.target;
      const selectSwitch = target.getAttribute('data-switch');
      document.querySelector('.drop-items__item_active')?.classList.remove('drop-items__item_active');
      target.classList.add('drop-items__item_active');
      const current = document.querySelector(`[data-list="${selectSwitch}"]`);
      document.querySelector('[data-open]').removeAttribute('data-open');
      current.setAttribute('data-open', '');
    })
  });
}

function circle() {
  var count = document.querySelectorAll('[fakecheked="true"]').length;
  console.log(count);
  const circle = document.querySelector('[data-circle]');
  if(count){
    circle.innerHTML = count;
    circle.style.display = 'block';
  }else {
    circle.style.display = 'none';
  }
}
switchField()
checked();