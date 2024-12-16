
const Notification = ({ message, error }) => {
    if (message === null && error === null) {
        return null
    }

    return (
        <div className={message !== null ? 'successfull' : 'error'}>
            {message !== null ? message : error}
        </div>
    )
}

export default Notification