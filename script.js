function calcular() {
  let mytxtNum = document.getElementById('txtNum')
  let myselectTabuada = document.getElementById('selectTabuada')
  myselectTabuada.innerHTML = ""
  myselectTabuada.style.display = "block"

  if (mytxtNum.value.length > 0) {
    let num = Number(mytxtNum.value)

    for (let c = 1; c <= 10; c++) {
      let item = document.createElement('option')
      item.text = `${num} + ${c} = ${num * c}`
      item.value = `${num} + ${c}`
      myselectTabuada.appendChild(item)
    }

    /*let c = 1
    while (c < 10) {
      let item = document.createElement('option')
      item.text = `e ${num}`
      myselectTabuada.appendChild(item)
      c++
    }*/
  }
}

$(window).scroll(function() {
  if ($(document).scrollTop() > 80) {
    $('header').addClass('sticky');
    $('#icon').addClass('sticky');
  } else {
    $('header').removeClass('sticky');
    $('#icon').removeClass('sticky');
  }
});
