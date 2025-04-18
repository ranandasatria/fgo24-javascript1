//   4 3 2 1
// 0 * * * *    bintang = j > i
// 1 * * *   *  spasi = j = i
// 2 * *   * *
// 3 *   * * *
// 4   * * * *

for (let i = 0; i < 5; i++){
    let wadah = ""
    for (let j = 4; j >= 0; j--){
        if ( j === i){
            wadah += "  "
        } else{
            wadah += "* "
        }
    }
    console.log(wadah)
}


for (let i = 0; i < 5; i++){
    let wadah = ""
    for (let j = 4; j >= 0; j--){
        if ( j === i){
            wadah += "* "
        } else{
            wadah += "  "
        }
    }
    console.log(wadah)
}

