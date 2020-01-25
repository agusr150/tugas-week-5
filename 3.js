/*
* Convert time to words
* Function timeToWords menerima input berupa string yang merupakan sebuah waktu. 
* Function ini berfungsi merubah waktu menjadi sebuah kalimat.
* Waktu yang ditampilkan adalah waktu 24 jam.
*
* EXAMPLE 1 ------------------------
* Input: 
* '05:30'
* 
* Output:
* 'Jam setengah 6'
*
* EXAMPLE 2 ------------------------
* Input: 
* '03:10'
* 
* Output:
* 'Jam 3 lebih 10 menit'
*
* EXAMPLE 3 ------------------------
* Input: 
* '07:40'
* 
* Output:
* 'Jam 8 kurang 20 menit'
*
* RULES:
* - TIDAK MENGGUNAKAN MAGIC. ex: split() slice() splice() map() reduce() etc.
*/
function timeToWords(waktu) {
  //Your code here !!!!!!!

  jam = waktu[0]
  //console.log(jam+'<<<jam')
  for (var i=1; i<waktu.length; i++){
    //console.log(waktu[i]+'<<<waktu i')
    if(waktu[i] === ':'){
      break
    }
    else {
      jam=jam+waktu[i]
    }

  }
  hour = Number(jam)
  if (hour>24){
    n = Math.floor(hour/24)
    hour = hour-n*24
  }

  menit = waktu[waktu.length-2]+waktu[waktu.length-1]
  var tulis =''
  if(menit==='30'){
    tulis = 'Jam setengah '+(hour+1)
  }
  else if(menit ==='00'){
    tulis = 'Jam '+hour
  }
  else if(menit>30){
    tulis = 'Jam '+(hour+1)+' kurang '+(60-menit)+' menit'
  }
  else{
    tulis = 'Jam '+hour+' lebih '+menit+' menit'
  }
  

return tulis
}
console.log(timeToWords('10:10')); // Jam 10 lebih 10 menit
console.log(timeToWords('01:30')); // Jam setengah 2
console.log(timeToWords('09:47')); // Jam 10 kurang 13 menit
console.log(timeToWords('11:00')); // Jam 11
