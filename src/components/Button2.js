const Button2 = ({ onClick }) => {
    const handlediv1 = () => {
        onClick('bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...', 'bg-[#9775AA]')
    }

    return (
        <div><button className="border p-5 mt-2 mr-0 ml-2 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...  " onClick={handlediv1}></button></div>
    )
}

export default Button2