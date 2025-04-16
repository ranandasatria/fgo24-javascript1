// fgo24-javascript1

const data = [["data0", ["data1","data2","data3",{
    string: ["data4", {
        value: "hello"
    }]
}]]]

console.log(data[0][1][3].string[1].value) // hello
