const express = require("express")
const app = express()

const PORT = 4000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use("/static", express.static(`${__dirname}/static`))

const db = [
    { email: "paul@uprighted.com", pwd: "Pass"}
]

app.get("/data", (req, res) => {
    console.log(req.query)
    const { email, pwd } = req.query
    
    const foundUser = db.filter(usr => usr.email === email)

    if (!foundUser.length) {
        res.status(403).json({
            message: `${email} not found`
        })
    } else {
        res.status(200).json({
            message: `${email} logged in`
        })
    }

})

app.post("/postdata", (req, res) => {
    console.log(req.body)
})

app.listen(PORT, () => {
    console.log(`[server] listening on ${PORT}`)
})

const obj = {
    name: "Paul",
    age: 27
}

const JSONobj = '{"name": "Cory", "age": 20}'
/* 
    ? JSON syntax:
    * enclosed in ''
    * properties enclosed in ""
    * no methods allowed
    * no trailing commas
*/
console.log(obj.name)
console.log(JSONobj.name)
// ? to turn string into obj
console.log(JSON.parse(JSONobj))
// ? to turn obj into str
console.log(JSON.stringify(obj))