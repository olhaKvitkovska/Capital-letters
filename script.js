//Делает заглавную букву строоки большой

function bigLetter(){
  var str = document.getElementById('text').value;

var ine = document.getElementById('th');
  ine.innerHTML = str.charAt(0).toUpperCase() + str.slice(1);

}bigLetter();



//Делает большую букву каждого слова в строке

function bigLetterInWord(){
  var str = document.getElementById('text1').value;
var ine = document.getElementById('ts');
console.log(str);
var sum = 0;
	    var arr = str.split(' ');
     for( var i =0; i<arr.length; i++){
	    s =arr[i].charAt(0).toUpperCase() + arr[i].slice(1)+' '
      console.log(s);
    sum+=s;

      ine.innerHTML= sum;

}
}
bigLetterInWord();
