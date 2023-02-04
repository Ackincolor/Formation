import {useState} from 'react'

function  handleSubmit(value:string) {
    alert('Vous avez entré la valeur : ' + value);
  }


function QuestionForm() {
    const [inputValue, setInputValue] = useState('Posez votre question ici')

  

    return(
        <div>
            <form
             onSubmit={(e: React.SyntheticEvent) =>handleSubmit(inputValue)}
             >
                <textarea
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
    

export default QuestionForm