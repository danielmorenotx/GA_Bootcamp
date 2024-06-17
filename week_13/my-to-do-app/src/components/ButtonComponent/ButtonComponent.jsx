import ListComponent from "../ListComponent/ListComponent";

const ButtonComponent = ({buttonName, buttonType, handleClick}) => { // this must be destructured
    // with the name and type from the properties, we set a class and name
    const buttonClass = buttonType === 'add' ? 'add-button' : 'delete-button';
    
    return (
        <button className={buttonClass} onClick={handleClick}>
            {buttonName}
        </button>
    )
}

export default ButtonComponent