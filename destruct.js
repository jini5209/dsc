//destructrung
const user={
    info:{
        name: 'hyeonjin',
        age: 23,
        gender: 'female'
    }
}

//es5
const name=user.info.name
const age=user.info.age
const gender=user.info.gender

//es6
const{name, age, gender}=user.info

//object initialize
const age=23
const name="현진"
const gender="female"

var datas={
    name:name,
    age: age,
    gender: gender
}

var datas={
    name,
    age,
    gender
}
//template literals
introduce="my name is"+name+", I am"+age+"years old"
introduce=`my name is ${name}. I am ${age} years old`
console.log(introduce)
