// JavaScript 函数写法
// const getUserInfo = (firstName, lastName, country, title, skills) => {
//     return `${firstName} ${lastName}, a ${title}, developer based in ${country}. He knows ${skills.join(' ')}`
// }

// const skills = ['HTML', 'CSS', 'JS', 'React']
// console.log(
//     getUserInfo('Asabeneh','Yetayeh', 'Finland', 'FullStack Developer', skills)
// )

// JavaScript 类写法

class Parent {
    constructor(firstName, lastName, country, title){
        this.firstName = firstName
        this.lastName = lastName
        this.country = country
        this.title = title
    }
    getPersonInfo() {
        return `${this.firstName} ${this.lastName}, a ${this.title} developer base in ${this.country}`
    }
    parentMethod() {
    }
}

const p1 = new Parent('Asabench', 'Yetayeh', 'Finland', 'FullStack Developer')

// 类继承
class Child extends Parent{
    constructor(firstName, lastName, country, title, skills){
        // 给父类constructor传参, 调用父类方法传参
        super(firstName, lastName, country, title)
        this.skills = skills
    }
    getSkills() {
        let len = this.skills.length
        console.log(this.skills)
        return len > 0 ? this.skills.json(' ') : 'No skills found'
    }
    childMethod() {
    }
}

const skills = ['HTML', 'CSS', 'JS', 'React']

const child = new Child(
    'Asabench',
    'Yetayeh',
    'Finland',
    'FullStack Developer',
    skills
)
console.log(child.getPersonInfo())

// 创建 React 组件
// React 函数式组件能箭头函数， 用函数声明或者函数表达式
const jsx = <tag> Content </tag>
const ComponentName = () =>{
    return jsx
}

// JSX 模版
const header = (
    <header style={headerStyles}>
        <div className='header-wrapper'>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 3, 2020</small>
        </div>
    </header>
)

// React 组件
const Header = () => {
    return header
}

// 直接返回JSX
const Header = () => {
    return (
        <header style={headerStyles}>
            <div className='header-wrapper'>
            <h1>Welcome to 30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Asabeneh Yetayeh</p>
            <small>Oct 3, 2020</small>
            </div>
        </header>
    )
}