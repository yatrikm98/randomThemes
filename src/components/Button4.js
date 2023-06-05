const Button4 = ({ onClick }) => {
    const handlediv3 = () => {
        onClick('bg-gradient-to-l from-yellow-500 ...', 'bg-[#FFA153]')
    }

    return (
        <div><button className="border p-5 mt-2 mr-0 ml-2 bg-white bg-gradient-to-l from-yellow-500 ..." onClick={handlediv3}></button></div>
    )
}

export default Button4