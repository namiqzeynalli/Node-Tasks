// const fs = require('fs');

// fs.readFile('./data.json', 'utf8', (err, data) => {
//     if (!err) {
//         console.log(typeof data);
//         let newData = JSON.parse(data);
//         let avarage = 0;

//         newData.forEach((obj) => {
//             avarage += obj.age
//         })
//         console.log(avarage / newData.length);
//         fs.writeFile('respons.txt',String(avarage/newData.length),(err)=>{
//             if(err){
//              console.log(err.message);
//             }
//           })
//     } else {
//         console.error(err);
//     }
// });




// Şirkət işçiləri haqqında məlumat saxlamaq üçün server yaradın

const express = require('express');
const app = express();

const employees = [
    {
        id: 1,
        name: 'Asif',
        age: 21
    },
    {
        id: 2,
        name: 'Vasif',
        age: 25
    },
    {
        id: 3,
        name: 'Agasif',
        age: 30
    },
    
]

app.get('/employees', (req, res) => {
    res.status(200).json(employees);
});


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});






// const express = require('express');
// const app = express();

// const card = [
//     {
//         cardNumber: '123',
//         id: '1'
//     },
//     {
//         cardNumber: '234',
//         id: '2'
//     },
//     {
//         cardNumber: '345',
//         id: '3'
//     },
//     {
//         cardNumber: '456',
//         id: '4'
//     },
//     {
//         cardNumber: '567',
//         id: '5'
//     }
// ]

// app.get('/card/:id', (req, res) => {
//     if (!card.find((card) => card.id == req.params.id)) {
//         res.status(404).send("Not Found");
//     }
//     res.status(200).json(card.find((card) => card.id == req.params.id));
// });


// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });