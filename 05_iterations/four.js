const myObject = {
    js: 'javscript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`)
}

const programmimg = ["js", "rb", "py", "java"]

for (const key in programmimg) {
    // console.log(programmimg[key])
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "FRANCE")

for (const key in map) {
    console.log(key)
}