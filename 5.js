/**
 * GROUP BY GENUS
 * 
 * Function groupByGenus menerima input berupa array-of-strings yang merupakan kumpulan spesies,
 * setiap spesies memiliki genus (kata pertama dari spesies tsb). 
 * Function ini akan mengelompokkan spesies berdasarkan genusnya dan menyingkat nama genusnya 
 * 
 * Input :
 * [
 *  'Lactobacillus casei',
 *  'Staphylococcus epidermidis',
 *  'Streptococcus mutans',
 *  'Lactobacillus salivarius'
 * ]
 * 
 * 
 * Output : 
 * {
 *  Lactobacillus: [ 'L. casei', 'L. salivarius' ],
 *  Staphylococcus: [ 'S. epidermidis' ],
 *  Streptococcus: [ 'S. mutans' ]
 * }
 * 
 * 
 * RULES 
 * 1. TIDAK MENGGUNAKAN MAGIC. ex: split() slice() splice() map() reduce() etc.
 * 
 */

function gabung(array){
    var kata = array[0]
    for (var i=1; i<array.length; i++){
        kata = kata+array[i]
    }
    return kata
}

function groupByGenus(list) {
    var grupGenus =[], index =[]
    for (var i=0; i<list.length; i++){
    var genus = []
        for (var j=0; j<list[i].length; j++){
            if (list[i][j]===' '){
                index.push(j)
                break
            }
            genus.push(list[i][j])
        }
        grupGenus[i]=gabung(genus)
    }
    kelas = [grupGenus[0]]
    for (var i=1; i<grupGenus.length; i++){
        add = true
        for (var j=0; j<kelas.length; j++){
            if(grupGenus[i]===kelas[j]){
                add = false
            }
        }
        if(add === true){
            kelas.push(grupGenus[i])
        }
    }
    var grupNama=[]
    for (var i=0; i<list.length; i++){
        var nama = []
            for (var j=index[i]; j<list[i].length; j++){
                nama.push(list[i][j])
            }
            grupNama[i]=gabung(nama)
        }
    

var result ={}

for (var i = 0; i<kelas.length; i++){
    var species =[]
    for (var j=0; j<list.length; j++){
        if (grupGenus[j]=== kelas[i]){
            species.push(kelas[i][0]+'. '+grupNama[j])
        }
    }
    newSpecies = species.slice()
    result[kelas[i]]=newSpecies
}

return result
}

console.log(groupByGenus([
    'Lactobacillus casei',
    'Staphylococcus epidermidis',
    'Streptococcus mutans',
    'Lactobacillus salivarius'
]))
/**
 * {
 *  Lactobacillus: [ 'L. casei', 'L. salivarius' ],
 *  Staphylococcus: [ 'S. epidermidis' ],
 *  Streptococcus: [ 'S. mutans' ]
 * }
 */
 console.log(groupByGenus([
     'Vulpes chama',
     'Felis chaus',
     'Felis bieti',
     'Vulpes velox',
     'Canis lupus',
     'Canis simenis',
     'Vulpes zerda',
     'Giraffe camelopardalis',
     'Vulpes ferrilata'
 ]))
/**
 * {
 * Vulpes: [ 'V. chama', 'V. velox', 'V. zerda', 'V. ferrilata' ],
 * Felis: [ 'F. chaus', 'F. bieti' ],
 * Canis: [ 'C. lupus', 'C. simenis' ],
 * Giraffe: [ 'G. camelopardalis' ]
 * }
 * 
 */