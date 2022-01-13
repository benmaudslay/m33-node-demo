// let mathsFunctions = require("./mathsFunctions")
// let { add, multiply } = require("./mathsFunctions")
// let os = require("os")
// let fs = require("fs")

// let userDetails = os.userInfo().username

// fs.appendFile("oh-hi.txt", `Hello ${userDetails}`, () => {
//   if (err) {
//     console.log("oops")
//   }
// })

const _ = require("lodash")

let array = [1, 2, 3]

console.log(_.reverse(array))
