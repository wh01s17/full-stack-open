
const PersonForm = ({ formSubmit, onChangeName, nameValue, onChangeNumber, numberValue }) => {
    return (
        <form onSubmit={formSubmit}>
            <div>
                name: <input onChange={onChangeName} value={nameValue} />
            </div>
            <div>
                number: <input onChange={onChangeNumber} value={numberValue} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    )
}

export default PersonForm