/*Rotate the string 'w3resource' in right direction by periodically removing 
* one letter from the end of the string and attaching it to the front.*/

let str = 'This is an example of running string in the console. Everything is possible! '

setInterval(() => {
    str = str[str.length - 1] + str.substring(0, str.length - 1)
    console.log(' ' + str)
    setTimeout(() => {
        console.clear()
    }, 490)
}, 500)