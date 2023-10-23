

const students = [
    {
     name:"Guilherme",
     gradeOne:7,
     gradeTwo:6
    },
    {
     name:"João",
     gradeOne:9,
     gradeTwo:10
    },
    {
     name:"Vinicius",
     gradeOne:8,
     gradeTwo:6
    },
    {
     name:"Gabriel",
     gradeOne:3,
     gradeTwo:10
    }
]

function calculateAverage(gradeOne, gradeTwo){
 let average = ((Number(gradeOne)+Number(gradeTwo)) / 2).toFixed(2)
 return average
}

for (let student of students){
   let average =  calculateAverage(student.gradeOne, student.gradeTwo)

    if (average >= 7 ){
        alert(`A media do(a) aluno(a) é ${average}.
Parabéns ${student.name} você foi aprovado(a)`)
    } else{
        alert(`A media do(a) aluno(a) é ${average}.
Poxa, ${student.name}. Infelizmente você foi reprovado(a), tente novamente.`)
    }
        
    
}


