const users = {
        1:{
          id: "1",
          name: "Leanne Graham",
          "username": "Bret",
          "email": "Sincere@april.biz",
          "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
              "lat": "-37.3159",
              "lng": "81.1496"
            }
          },
          "phone": "1-770-736-8031 x56442",
          "website": "hildegard.org",
          "company": {
            "catchPhrase": "Multi-layered client-server neural-net",
          }
        },
        2:{
          id: "2",
          "name": "Ervin Howell",
          "username": "Antonette",
          "email": "Shanna@melissa.tv",
          "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
              "lat": "-43.9509",
              "lng": "-34.4618"
            }
          },
}
}
function parsUsers(obj){
    let {id,name, username, email, address: { street, suite, city, zipcode, geo: { lat, lng } }, phone, website, } = obj,
    userid = `user id ${id}\n`
    usersname = `Foydalanuvchning ismi ${name}\n`
    userName = `Foydalanuvchning useri ${username}\n`
    useremail = `Foydalanuvchning emaili ${email}\n`
    useraddress = `Manzil:\nko'cha: ${street}\nDom raqami: ${suite}\nshahar: ${city}\nPo'chta raqami: ${zipcode} `,
    usergeo = `Lakatsiya\n lat: ${lat}\n lng: ${lng}`,
    userphone = `telefon ${phone}`,
    userwebsite = `web saty ${website}`,
    userInfo = `${userid}${usersname}${userName}${useremail}${useraddress}${usergeo}${userphone}${userwebsite}`
     return userInfo
}
for (const obj in users) {
  alert(parsUsers(users[obj]));
}

