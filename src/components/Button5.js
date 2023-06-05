const Button5 = ({ onClick }) => {
    const handlediv4 = () => {
        onClick('bg-gradient-to-r from-teal-500 via-amber-500 to--500 ...', 'bg-[#D8E9F4]')
    }

    return (
        <div><button className="border p-5 mt-2 mr-0 ml-2 mr-4 bg-white bg-gradient-to-r from-teal-500 via-amber-500 to--500 ..." onClick={handlediv4}></button></div>
    )
}

export default Button5