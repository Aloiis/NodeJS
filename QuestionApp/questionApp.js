const question = [
    "Como esta hoje?",
    "Se sente bem?",
    "Como poderia te ajudar?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n" + question[index] + " > ")
}

ask()

const answers = []

process.stdin.on("data", data=>{
    answers.push(data.toString().trim())
    if (answers.length < question.length){
        ask(answers.length)
    } else {
        process.exit()
    }

})
