module.exports = (() => {
    const stringObjectMethodsUsage = () => {
        let str = 'Education is the most powerful weapon which you can use to change the world. (c) Nelson Mandela. '
        console.log(`\n"${str}"\n`)
        console.log(`charAt(2) = ${str.charAt(2)}`)
        console.log(`charCodeAt(2) = ${str.charCodeAt(2)}`)
        console.log(`codePointAt(2) = ${str.codePointAt(2)}`)
        console.log(`indexOf('i') = ${str.indexOf('i')}`)
        console.log(`lastIndexOf('i') = ${str.lastIndexOf('i')}`)
        console.log(`startsWith('the', 13) = ${str.startsWith('the', 13)}`)
        console.log(`endsWith('the', 16) = ${str.endsWith('the', 16)}`)
        console.log(`includes('the') = ${str.includes('the')}`)
        console.log(`concat('This is one of the most famous quotes in the world!') = ${str.concat('This is one of the most famous quotes in the world!')}`)
        console.log(`String.fromCharCode('117') = ${String.fromCharCode( 100, 117, 99 )}`)
        console.log(`String.fromCodePoint('117') = ${String.fromCodePoint( 100, 117, 99 )}`)
        console.log(`split(' ') = ${str.split(' ')}`)
        console.log(`substring(17,21) = ${str.substring(17,21)}`)
        console.log(`substr(17,4) = ${str.substr(17,4)}`)
        // CAUTION: If pattern is a string, only the first occurrence will be matched.
        console.log(`match(/the/gi) = ${str.match(/the/gi)}`)
        // CAUTION: If pattern is a string, only the first occurrence will be replaced.
        console.log(`replace(/the/gi, 'THE') = ${str.replace(/the/gi, 'THE')}`)
        console.log(`search(/the/gi) = ${str.search('the')}`)
        console.log(`toLowerCase() = ${str.toLowerCase()}`)
        console.log(`toUpperCase() = ${str.toUpperCase()}`)
        console.log(`normalize() = ${str.normalize("NFKD")}`)
        console.log(`repeat(2) = ${str.repeat(2)}`)
        console.log(`trim() = ${str.trim()}`)
    }

    return {
        stringObjectMethodsUsage
    }
})()