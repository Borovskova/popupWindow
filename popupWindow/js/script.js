let someArray = [1, 2, 3, 4, 5];
function renderTable(array) {
  let tableBody = document.querySelector('tbody');
  for (let i = 0; i < array.length; i++) {
    tableBody.innerHTML +=
      `<tr> 
                <td>1</td>  
                <td>1</td>  
                <td>1</td>  
                <td>1</td>  
            </tr>`
  }
  let input1 = document.createElement("input");
  let input2 = document.createElement("input");
  let tr = tableBody.lastChild;
  let tdFirst = tr.firstElementChild;
  let tdFourth = tr.lastElementChild;
  let tdThird = tdFourth.previousElementSibling;


  tdFirst.textContent = '';
  tdFirst.append(input1);
  tdThird.textContent = '';
  tdThird.append(input2);
}
renderTable(someArray);

function onButtonClick() {
  let btn = document.querySelector('button');
  btn.addEventListener('click', function () {
    window.close();
    window.opener.console.log("window close");
  })
}
onButtonClick();