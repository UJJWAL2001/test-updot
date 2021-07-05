

const FaqCard = ({question,answer}) => {
    return(
        <>
            <div className='col-5 qna mb-5 mt-2'>
                <p className='question'>{question}</p>
                <p className='answer mt-2'>{answer}</p>
                <div className="btn qna-btn"><span className='.btn-active'>+</span></div>
            </div>
        </>
    )
}

export default FaqCard;