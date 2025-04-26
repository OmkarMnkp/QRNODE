

// importing the libraries
const QrCode = require('qrcode');
const readline = require('readline-sync');

// get the user input

const input = readline.question("Enter text or URL to generate Qr code");

// generate QR codeand save asimage
QrCode.toFile('qrcode.png',input,{
    color:{
        dark:'#000000',
        light:'#ffffff',
    },
},
function (err){
    if(err){
        console.log("Error gQR code:",err)
    }
    else{
        console.log("QR codegenerated and saved as qrcode.png " )
    }
}
)

// view qr in file