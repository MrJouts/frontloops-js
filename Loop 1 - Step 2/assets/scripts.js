
let tabNavs = document.getElementsByClassName('tab-item');
let tabPanels = document.getElementsByClassName('tab-panel');
let button = document.getElementById('button');
let input = document.getElementById('input');

tabNavs = Array.prototype.slice.call(tabNavs);
tabPanels = Array.prototype.slice.call(tabPanels);

tabNavs.map(item => {
  item.addEventListener("click", () => {
    changeClasses(item.innerHTML)
    showTabContent(item.getAttribute('href').replace('#', ''))
  })
})

changeClasses = (classItem) => {
  tabNavs.map(item => {
    item.classList.remove('active');
    if (item.innerHTML === classItem) {
      item.classList.add('active');
    }
  })
}

showTabContent = (id) => {
  tabPanels.map(tab => {
    tab.classList.remove('active');
    tabId = tab.getAttribute('id');
    if (tabId === id) {
      tab.classList.add('active');
    }
  })
}

button.addEventListener('click', () => {
  if (input.value > 0 && input.value < 4) {
    let id = tabPanels[input.value - 1].getAttribute('id')
    let inner = tabNavs[input.value - 1].innerHTML;
    changeClasses(inner)
    showTabContent(id);
  } else {
    alert(`index ${input.value} is invalid`);
  }
  input.value = '';
})