const Button3 = ({ onClick }) => {
    const handlediv2 = () => {
        onClick('bg-gradient-to-r from-indigo-500 ...', 'bg-[#E2B3C9]')
    }

    return (
        <div><button className="border p-5 mt-2 mr-0 ml-2 bg-white bg-gradient-to-r from-indigo-500 ..." onClick={handlediv2}></button></div>
    )
}

export default Button3;