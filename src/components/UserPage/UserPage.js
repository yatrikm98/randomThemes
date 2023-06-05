import Button1 from "../Button1"
import Button2 from "../Button2"
import Button3 from "../Button3"
import Button4 from "../Button4"
import Button5 from "../Button5"
import { useState } from "react"
import './UserPage.css'
import ImageUpload from "../ImageUpload"

const getGradient = () => {
    let gradient = localStorage.getItem('lastGradient')
    return gradient
}

const getDiv = () => {
    let div = localStorage.getItem('lastDiv')
    return div
}

const getImage = () => {
    let image = localStorage.getItem('image')
    return image
}

const UserPage = ({ onSignOut }) => {

    const [backgroundColor, setBackGroundColor] = useState(getGradient())
    const [div1, setDiv1] = useState(getDiv())
    const [file, setFile] = useState(getImage())

    const handleSignOutClick = () => {
        localStorage.setItem('lastGradient', backgroundColor)
        localStorage.setItem('lastDiv', div1)
        localStorage.setItem('image', file)
        onSignOut()
    }

    const handleAdd = (a, b) => {
        setBackGroundColor(a)
        setDiv1(b)
    }

    const handleChangeLink = (link) => {
        setFile(link)
    }

    return (
        <div className={`h-screen   ${backgroundColor} `}>
            <div className="flex justify-end mr-2 nav w-full items-center mb-10">
                <div className=" flex items-end mr-5 ">
                    <Button1 onClick={handleAdd} />
                    <Button2 onClick={handleAdd} />
                    <Button3 onClick={handleAdd} />
                    <Button4 onClick={handleAdd} />
                    <Button5 onClick={handleAdd} />
                </div>
                <button className="border p-2 mt-2 mr-5 font-bold bg-white hover:bg-gray-200" onClick={handleSignOutClick}>
                    SignOut
                </button>
            </div>
            <div className="float-right">
                <ImageUpload link={handleChangeLink} file={file} />
            </div>
            <div className="ml-80">
                <div className="flex justify-end mr-3">
                </div>
                <div>
                    <div className={`border w-32 p-3 rounded-xl mb-5 ${div1} bubble1`}>Hi There !👏</div>
                    <div className={`border w-64 p-5 rounded-3xl mb-5 ${div1} bubble2`}>I'm Wysa - an Ai chatbot built by therapists.</div>
                    <div className={`border w-64 p-5 rounded-3xl mb-5 ${div1} bubble3`}> I'm here to understand your concerns and connect you with the best resources available to support you.</div>
                    <div className={`border w-32 p-3 rounded-3xl rounded-tl-none ${div1} bubble4`}>Can I help ?</div>
                </div>
            </div>

        </div>
    )
}

export default UserPage;