// Write a JavaScript exercise to get the extension of a filename.

function getFileExt(fileName) {
    console.log(fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length))
}

getFileExt('maim.programm.cs')
getFileExt('text-file.txt')
getFileExt('hello-world.js')