
const Filter = ({ onChangeSearch, valueSearch }) => {
    return (
        <input onChange={onChangeSearch} value={valueSearch} />
    )
}

export default Filter