const express = require("express")
const fs = require("fs")



const router = express.Router()
router.get('/',(req,res)=>{
    res.send("ishladi")
})
router.post('/',(req,res)=>{
    const TeacherData = JSON.parse(fs.readFileSync('./data/Teacher.json', "utf-8"))
console.log(req.body.dsf);
if (!req.body.username || !req.body.surname || !req.body.pasSeria || !req.body.pasNumber || req.body.telNumber || req.body.login || req.body.parol){
     res.status(411).send("Ma'umotlarni yetarli bermadiz.")
 }else{
        if (req.body.login && req.body.parol ){    
    res.status(423).send("Login parol ishonchli emas")
}else{
var data={
    'username':req.body.username,
    'surname':req.body.surname,
    'pasSeria':req.body.pasSeria,
    'pasNumber':req.body.pasNumber,
    'telNumber': req.body.telNumber,
    'login': req.body.login,
    'parol': req.body.parol,
    'email': req.body.email ? req.body.email : false,
    'instagram':req.body.instagram?req.body.instagram:false,
    'facebook': req.body.facebook ? req.body.facebook : false,
    'telegramm': req.body.telegramm ? req.body.telegramm : false,
    'salary': req.body.prosent ? req.body.prosent : req.body.salary 
}
TeacherData.unshift(data)
fs.writeFileSync("./data/Teacher.json",JSON.stringify(TeacherData),"utf-8")
res.status(203).send("data")
}}




})
module.exports=router