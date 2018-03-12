$(document).ready(readyNow);

let divQuan = 0;

function readyNow() {
  clickHandlers();
  console.log('Ready Now');
}

function clickHandlers(){
  $('#genBtn').on('click', colorDiv);
  $('#divCon').on('click', '.swapBtn', swapFuncYel);
  $('#divCon').on('click', '.deleteBtn', deleteFunc);
}

function colorDiv() {
  divQuan += 1;
  let newdiv = '<div class="genDiv">' + divQuan + '</br></br><button class="swapBtn">Swap</button><button class="deleteBtn">Delete</button></div>';
  $('#divCon').append(newdiv);
}

function swapFuncYel() {
  $(this).parent().css("background-color","yellow");
  // $(this).parent().toggleClass("highlight");
  // I have tried multiple versions of attr and toggle class... I can only figure out how adjust the current class no switch back
}

function deleteFunc() {
  $(this).parent().remove();
}
