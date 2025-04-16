for (let i = 1; i<=5 ; i++) {
    let wadah = ""
    for (let j = 5; j>0 ; j--) {
        if (j > i) {
            wadah += " "
        } else if (j <= i) {
            wadah += "* "
        }
    }
    console.log(wadah)
}
