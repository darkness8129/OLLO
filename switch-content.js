var live = document.getElementById('live'),
    past = document.getElementById('past'),
    tab1 = document.querySelector('.tab1'),
    tab2 = document.querySelector('.tab2'),
    input = document.querySelectorAll('input'),
    label_1 = document.getElementById('label-1'),
    label_2 = document.getElementById('label-2');

for (var i=0; i<input.length; i++) {
  input[i].onchange = function() {
    if (live.checked) {
      label_1.classList.add("active");
      label_2.classList.remove("active");
      tab1.style.display = 'grid';
      tab2.style.display = 'none';
    } else if (past.checked) {
      label_1.classList.remove("active");
      label_2.classList.add("active");
      tab1.style.display = 'none';
      tab2.style.display = 'grid';
    };
  };
};