function changeValue(event) {

  let labels = document.getElementsByTagName('label');
  let radioInputs = document.getElementsByTagName('input');
  let optionInputs = document.getElementsByTagName('option');
  let selected = '';

  optionInputs = Array.from(optionInputs);

  optionInputs.map((item, i) => {
    optionInputs[i].selected = (item.value === event.target.value);
    radioInputs[i].checked = (item.value === event.target.value);
  })

  labels = Array.from(labels);

  labels.map((item, i) => {
    selected = (event.target.value == item.getAttribute('for') ? 'selected' : '')
    item.className = selected;
  })
}