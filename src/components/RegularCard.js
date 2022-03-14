
function RegularCard (props) {
    const question = props.questionData;
    return (
        <>
            <div className="card-back">
                <div>{question.service}</div>
                <div className="bottom">Click card to Reveal Answer</div>
            </div>
            <div className="card-front">
                <div>{question.desc}</div>
                <div>{question.cat}</div>
                <div className="bottom">Click card to see Question</div>
            </div>
        </>
    )
}

export default RegularCard