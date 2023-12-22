function Press(i){
  if(document.getElementById(`elem[${i}]`).style.display=="block"){
  document.getElementById(`elem[${i}]`).style.display="none";
  }
  else{
    document.getElementById(`elem[${i}]`).style.display="block";
  }
}