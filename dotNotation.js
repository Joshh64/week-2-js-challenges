console.log("Hello world!")
//displays this text (string) message when the script is run in terminal with the command "node (filename + extension)"

console.log("hello".toUpperCase())
//this will make every word uppercase. this is a method so it needs ()

console.log("hello".length)
//this, when run, replaces the text with how many characters are in the message. This is a property so it does not need ()

console.log(Math.random());
//gives a decimal number between 0 and 1

console.log(Math.random()*10);
//multiplies the decimal by the number after the asterisk

console.log(Math.floor(Math.random()*10));
//this generates a random whole number, and the "Math.floor" command rounds down the decimal number, with a range of 1-9

console.log(Math.ceil(Math.random()*10));
//this generates a random whole number, and the "Math.ceil" rounding up the decimal number, with a range of 1-10

console.log("All around the world".charAt(7).toUpperCase())
//this isolated the 8th character (js starts counting at 0), and capitalises it