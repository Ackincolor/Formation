
import "../assets/css/modalForm.css"

function ModalForm() {
    return(
        <>
        <div className="container modalForm">
            <div className="steprow">
                <div className="progress"></div>
                <div className="step">Etape 1</div>
                <div className="step">Etape 2</div>
                <div className="step">Etape 3</div>
            </div>
            <form id="form1">
                <input type="text" placeholder="Email"></input>
                <input type="password" placeholder="Mot de passe"></input>
                <input type="password" placeholder="Confirmation du mot de passe"></input>

                <div className="btn-box">
                    <button>Suivant</button>
                </div>
            </form>
            <form id="form2">
                <input type="text" placeholder="Prenom"></input>

                <div className="btn-box">
                    <button>Retour</button>
                    <button>Suivant</button>
                </div>
            </form>
            <form id="form3">
                
                <div className="btn-box">
                    <button>Retour</button>
                    <button>Valider</button>
                </div>
            </form>
        </div>
        </>
    )
}

export default ModalForm;