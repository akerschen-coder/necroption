var checkList = document.getElementById('classic');
checkList.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkList.classList.contains('visible'))
    checkList.classList.remove('visible');
  else
    checkList.classList.add('visible');
} 
var checkListdark = document.getElementById('darkClassic');
checkListdark.getElementsByClassName('anchor')[0].onclick = function(evt) {
  if (checkListdark.classList.contains('visible'))
  checkListdark.classList.remove('visible');
  else
  checkListdark.classList.add('visible');
} 

