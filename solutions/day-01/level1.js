// 1.变量
// let firstName = 'Asabeneh' // 声明变量
// firstName = 'Eyob' // 变量重新赋值

// const PI = 3.14 // 常量声明后 不允许重新赋值


// 2.数据类型


// 3.数组

// 使用数组构造方法声明数组（const声明后数组不可变）
// const arr = Array()
// let arr = new Array()
// console.log(arr)

// 使用方括号声明([])
// 声明空数组的最佳方法
// let arr = []
// console.log(arr)

// 初始化数组带值
// const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // 数字数组
// const fruits = ['banana', 'orange', 'mango', 'lemon'] // 字符串数组
// console.log('Numbers:', numbers)
// console.log('Number of numbers:', numbers.length)
// 打印数组和它们的长度
// console.log('Fruits:', fruits)
// console.log('Number of fruits:', fruits.length)

// 定义数组 包含不同的数据类型
// const arr = [
//     'Asabench',
//     250,
//     true,
//     {country:'Finland', city:'Helsinki'},
//     {skills:['HTML', 'CSS', 'JS', 'React', 'Python']}
// ]
// console.log(arr)

// 用split创建一个数组(将字符串分割为数组)
// let js = 'JavaScript'
// const chaersInJavaScript = js.split('')
// console.log(chaersInJavaScript)

// let companiesString = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// const companies = companiesString.split(',')
// console.log(companies)

// let txt = `I love teching and empowering people. I teach HTML, CSS, JS, React, Python.`
// const words = txt.split(' ')
// console.log(words)

// 使用索引访问数组项
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let firstFruit = fruits[0]

// console.log(firstFruit) // banana

// secondFruit = fruits[1]
// console.log(secondFruit) // orange

// let lastFruit = fruits[3]
// console.log(lastFruit) // lemon

// let lastIndex = fruits.length - 1
// lastFruit = fruits[lastIndex]

// 修改数组元素
// const numbers = [1, 2, 3 ,4 ,5]
// numbers[0] = 10
// numbers[1] = 20

// console.log(numbers)

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
//   ]

//   countries[0] = 'Afghanistan'
//   let lastIndex = countries.length - 1
//   countries[lastIndex] = 'Korea'

//   console.log(countries)

// 数组操作方法
// 数组构造方法创建一个数组
// const arr = Array()
// console.log(arr)

// const eightEmptyValues = Array(8)
// console.log(eightEmptyValues)

// 用fill方法来填充静态值
// const arr = Array()
// console.log(arr)

// const eightXValues = Array(8).fill('X') // 填充8个X静态值
// console.log(eightXValues)

// const eight0Values = Array(8).fill(0) // 填充8个0静态值
// console.log(eight0Values)

// const four4Values = Array(4).fill(4) // 填充4个4
// console.log(four4Values)

// 用contact方法连接两个数组
// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)

// console.log(thirdList)

// const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables) // concatenate the two arrays

// console.log(fruitsAndVegetables)

// 获取数组长度(用length属性获取)
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length)

// 获取数组元素中的索引(indexOf方法获取索引值， 如果值为-1则值不存在)
// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(5))
// console.log(numbers.indexOf(0))
// console.log(numbers.indexOf(1))
// console.log(numbers.indexOf(6))

// 检测元素是否存在于数组之中
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('banana')

// if(index != -1){
//     console.log("这个水果确实存在于数组之中")
// } else {
//     console.log("这个水果不存在于数组之中")
// }

// 运用三元运算符来进行判断
// index != -1
//     ? console.log("这个水果确实存在于数组之中")
//     : console.log("这个水果不存在于数组之中")

// let indexOfAvocado = fruits.indexOf('avocado')
// if(indexOfAvocado != -1){
//     console.log('这个水果确实存在于数组之中')
// }else{
//     console.log('这个水果不存在于数组之中')
// }

// 获取一个元素在数组中的最后的索引(lastIndexOf方法 如果元素存在会返回在数组中的索引， 否则返回-1)
// const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// console.log(numbers.lastIndexOf(2))
// console.log(numbers.lastIndexOf(0))
// console.log(numbers.lastIndexOf(1))
// console.log(numbers.lastIndexOf(4))
// console.log(numbers.lastIndexOf(6))

// includes方法检测元素是否存在于数组中(存在返回true)
// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.includes(1))
// console.log(numbers.includes(0))
// console.log(numbers.includes(1))
// console.log(numbers.includes(6))

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDb'
// ]

// console.log(webTechs.includes('Node'))
// console.log(webTechs.includes('C'))

// Array.isArray检查数据类型是否是数组
// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers))

// 将数组转换为字符串
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString())

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString())

/* 
* 添加数组元素
* (join方法添加 在join方法中传递的参数,
* 将被连接到数组中并作为字符串返回。  
* 默认情况下，它以逗号连接,
* 但是我们可以传递不同的字符串参数，
* 该参数可以在各项之间连接。)
*/
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join())

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.join())
// console.log(names.join(''))
// console.log(names.join(' '))
// console.log(names.join(', '))
// console.log(names.join(' # '))

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//   ] // List of web technologies

//   console.log(webTechs.join())
//   console.log(webTechs.join(' # '))

// 数组切片 slice接受两个参数 开始参数，结束参数（不包含结束元素）
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.slice()) // 复制所有的元素
// console.log(numbers.slice(0)) // 复制所有的元素
// console.log(numbers.slice(0, numbers.length))
// console.log(numbers.slice(1, 4)) // 不包括结束位置

// splice方法接收三个元素 开始位置，要删除的次数， 要增加元素数
// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.splice()) // 移除所有的元素
// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.splice(0, 1)) // 移除第一个元素
// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5, 6]
// console.log(numbers.splice(3, 3, 7, 8, 9)) // 删除从第三项数据后的三个数据并且添加三个元素
// console.log(numbers)

// 用push方法添加数据(在数组的末尾添加数据)
// const arr = ['item1', 'item2', 'item3']
// arr.push('new item')
// console.log(arr)

// const numbers = [1, 2, 3, 4, 5]
// numbers.push(6)
// console.log(numbers)

// pop方法移除数组的最后一个元素
// const numbers = [1, 2, 3, 4, 5]
// numbers.pop()
// console.log(numbers)

// shift 方法从数组的开头移除一个元素
// const numbers = [1, 2, 3, 4, 5]
// numbers.shift()
// console.log(numbers)

// unshift 方法增加一个元素在数组开头
// const numbers = [1, 2, 3, 4, 5]
// numbers.unshift()
// console.log(numbers)

// reverse方法 翻转数组顺序
// const numbers = [1, 2, 3, 4, 5]
// numbers.reverse()
// console.log(numbers)

// sort方法排序数组
// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB',
// ]
// webTechs.sort()
// console.log(webTechs)

// 创建一个包含数组的数组数组可以包含不同类型的数据 
// 当然也可以在其中声明一个数组
// const firstNums = [1, 2, 3]
// const secondNums = [1, 4, 9]

// const arrayOfArray = [
//     [1, 2, 3],
//     [1, 2, 3],
// ]

// console.log(arrayOfArray[0])

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node', 'Express', 'MongoDB']
// const fullStack = [frontEnd, backEnd]
// console.log(fullStack)
// console.log(fullStack.length)
// console.log(fullStack[0])
// console.log(fullStack[1])



// Exercise:level

// 1.Declare an empty array;
    let emptyArray = []
// 2.Declare an array with more than 5 number of elements
    let numbers = [1, 2, 3, 4, 5]
// 3.Find the length of your array
    console.log('数组长度', numbers.length)
// 4.Get the first item, the middle item and the last item of the array
    console.log('第一个元素', numbers[0])
    console.log('中间的元素', numbers[parseInt(numbers.length/2)])
    console.log('最后一个元素', numbers[numbers.length - 1])
// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
    let mixedDataTypes = [
        'string',
        12,
        {name:"volet"},
        true,
        {luckNum:[7, 15, 1, 2, 9, 6]}
    ]
// 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    let itCompanies = [
        'Facebook',
        'Google',
        'Microsoft',
        'Apple',
        'IBM',
        'Oracle',
        'Amazon'
    ] 
// 7.Print the array using console.log()
    console.log('Hello World!')
// 8.Print the number of companies in the array
    console.log(itCompanies.length)
// 9.Print the first company, middle and last company
    console.log('第一公司', itCompanies[0])
    console.log('中间的公司', itCompanies[parseInt(itCompanies.length/2)])
    console.log('最后一个公司', itCompanies[itCompanies.length - 1])
// 10.Print out each company
    itCompanies.forEach(value=>{
        console.log(value)
    })
// 11.Change each company name to uppercase one by one and print them out
    itCompanies.forEach(value=>{
        console.log(value.toUpperCase())
    })
// 12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
    console.log(itCompanies.join(', ') + ' are big IT companies.')
// 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
    if(itCompanies.indexOf('Facebook') != -1){
        console.log('company')
    }else{
        console.log('company is not found')
    }
// 14.Filter out companies which have more than one 'o' without the filter method
    itCompanies.forEach(value=>{
        if(value.indexOf('o') != -1){
            console.log(value)
        }
    })
// 15.Sort the array using sort() method
    console.log(itCompanies.sort())
// 16.Reverse the array using reverse() method
    console.log(itCompanies.reverse())
// 17.Slice out the first 3 companies from the array
    console.log(itCompanies.slice(0, 3))
// 18.Slice out the last 3 companies from the array
    console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length))
// 19.Slice out the middle IT company or companies from the array
    console.log(itCompanies.slice(parseInt(itCompanies.length/2), parseInt(itCompanies.length/2)+1))
// 20.Remove the first IT company from the array
    console.log(itCompanies.splice(0, 1))
// 21.Remove the middle IT company or companies from the array
    console.log(itCompanies.splice(parseInt(itCompanies.length/2), 1))
// 22.Remove the last IT company from the array
    console.log(itCompanies.pop())
// 23.Remove all IT companies
    console.log(itCompanies.splice())