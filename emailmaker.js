prompt = require("prompt-sync")()
specified_number = prompt("enter the number of emails you wish to make: ")
specified_number = parseInt(specified_number) + 1
var puppeteer = require("puppeteer")
var fcs = require("/home/carl/nodelearn/myfunctions.js")
m = ["jasem", "khalil", "tarek", "maher", "chadi", "rayanne", "sara", "reine", "mireille","myriam", "abla", "adele", "walid", "abdo", "wael", "fadi", "stephanie", "christian", "bassel", "jihanne", "atef", "karen", "zeinab", "omar", "nabih", "sakr", "kamal", "simon", "elie", "rana", "said", "miled", "myriam", "ralph", "rebecca", "georges", "miachel", "zoe", "jenny", "jennifer", "miguel", "ray", "roy", "rey", "fatima", "fatme", "elissa", "fatma", "ward", "nada", "assaf", "el", "ba", "ch", "mo", "ka", "pe"]
f = ["achkar", "khoury", "khoure", "khouri", "khoury", "khoury", "stefan", "muzhir", "kfoury", "haddad", "elia", "doumit", "chaaya", "fakhoury", "matta", "achkar", "saadeh", "msallim", "maroun", "maroun", "fakhoury", "issa", "matni", "metni", "nassar", "abboud", "sabbagh", "akiki", "beujikian", "bilal", "bcherrawi", "said", "zayn", "azouri", "gebran", "sakr", "zbib", "akel", "chaar", "karout", "tannous", "awad", "ayoub", "younan", "issa", "asmar", "massaad", "sleyman", "chaaya", "fakhoury", "dagher", "matta", "haidar", "khalil"]
n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 2004, 123, 404, 777, 999, 2005, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2005, 2006, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 888, 1234, 123]
s = [".", "_", "", "", "", "", "", "", "", "_", "_", "_"]
b = 1
emails = []
var string = ""
while (b < specified_number) {
var nam = m[Math.floor(Math.random() * m.length)] 
var fam = f[Math.floor(Math.random() * f.length)] 
var mail = nam + s[Math.floor(Math.random() * s.length)] + fam + s[Math.floor(Math.random() * s.length)] + n[Math.floor(Math.random() * n.length)]
var pass = "21" + nam[0].toUpperCase() + nam[1].toUpperCase() + "04" + fam[0] + fam[1] + "2004"
string = string + "\t" + mail + "@outlook.com , " + pass 
emails.push([mail, nam, fam, pass])
b++
}

async function scrape(url, emails){
var browser = await puppeteer.launch({headless: false})
var x = 0
while (x < specified_number){
page = await browser.newPage()
await page.goto(url, {timeout: 0})
var mail = await page.$("#MemberName")
await mail.click()
await mail.type(emails[x][0])
var btn = await page.$("#iSignupAction")
await btn.click()
await page.waitForSelector("#PasswordInput", {timeout: 0})
var pass = await page.$("#PasswordInput")
await pass.click()
await pass.type(emails[x][3])
var btn2 = await page.$("#iSignupAction")
await btn2.click()
await page.waitForSelector("#FirstName", {timeout: 0})
var name = await page.$("#FirstName")
await name.click()
await name.type(emails[x][1])
var last = await page.$("#LastName")
await last.click()
await last.type(emails[x][2])
var btn3 = await page.$("#iSignupAction")
await btn3.click()
await page.waitForSelector("#BirthYear", {timeout: 0})
var month = await page.$("#BirthMonth")
await month.click()
await month.type("April")
await page.waitForSelector("#BirthDay", {timeout: 0})
var nb = await page.$("#BirthDay")
await nb.type("21")
var yeer = await page.$("#BirthYear")
await yeer.click()
await yeer.type("1990")
var btn4 = await page.waitForSelector("#iSignupAction", {timeout: 0})
await btn4.click()
//await page.waitForSelector("#searchBoxId-Mail > div._8_-tjKJzAwn6DJdunDkRD > div > input", {timeout: 0})
await fcs.append("emails", "mail: " + emails[x][0] + "@outlook.com \t pass: " + emails[x][3] + "\n")
await console.log(emails[x][0] + "@outlook.com saved!")
await x++
}
}
scrape("https://signup.live.com/signup?lcid=1033&wa=wsignin1.0&rpsnv=13&ct=1618571831&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f%3fnlp%3d1%26signup%3d1%26RpsCsrfState%3df819c228-b1b7-e4b9-9e25-63501eeafbae&id=292841&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015&lic=1&uaid=448d0f58bc9e4a9b9cb5cde8565b5676", emails)

