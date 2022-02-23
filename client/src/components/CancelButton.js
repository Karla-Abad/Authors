const { navigate } = require("@reach/router")

const CancelButton = () => {
    const handleCancel = (e)=> {
        navigate("/");
    }
    return (
        <button onClick={handleCancel}>Cancel</button>
    )
}

export default CancelButton;