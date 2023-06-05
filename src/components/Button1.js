const Button1 = ({ onClick }) => {
    const handlediv = () => {
        onClick('bg-brand-gradient', 'bg-[#fff]')
    }

    return (
        <div><button className="border p-5 mt-2 mr-0 ml-2 bg-brand-gradient" onClick={handlediv}></button></div>
    )
}

export default Button1