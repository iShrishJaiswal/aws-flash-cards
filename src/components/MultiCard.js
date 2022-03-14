
function MultiCard (props) {
    const question = props.questionData;
    console.log(question);
    const choices = ['A', 'B', 'C', 'D'];
    const options = question.options.map((option, i) => {
        return (
            <li key={i}>
                {choices[i]}. {option}
            </li>
        )
    })
    const answerIndex = question.options.indexOf(question.answer);
    const answerLetter = choices[answerIndex];
    return (
        <>
            <div className="card-back">
                <div>{question.service}</div>
                <ul className="multi">
                    {options}
                </ul>
                <div className="bottom">Click card to Reveal Answer</div>
            </div>
            <div className="card-front">
                <div>{answerLetter}. {question.answer}</div>
                <div className="bottom">Click card to see Question</div>
            </div>
        </>
    )
}

export default MultiCard