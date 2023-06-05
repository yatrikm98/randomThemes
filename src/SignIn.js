import { useState } from "react"

const SignIn = ({ onSubmit }) => {
    const [textUser, setTextUser] = useState('')
    const [textPassword, setTextPassword] = useState('')

    const handleEmailChange = (event) => {
        setTextUser(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setTextPassword(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (textUser === 'yatrik' && textPassword === '123456') {
            onSubmit()
        } else {
            alert('Entered Wrong Credentials !!')
            setTextPassword('')
            setTextUser('')
        }
    }

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
            <div className="flex justify-center items-center shadow-lg  shadow-white">
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <label className="flex justify-center text-3xl mb-5 font-bold mt-6">SignIn</label>
                    <div className="p-7">
                        <label className="text-lg mr-7">Username</ label>
                        <input className="border p-2"
                            type="text"
                            required
                            value={textUser}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="p-3">
                        <label className="text-lg mr-9 text-center ml-4">Password</label>
                        <input className="border p-2"
                            required
                            type="password"
                            value={textPassword}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="flex justify-center ">
                        <button
                            type="submit"
                            className="border w-1/4 flex  p-2 pr-px pl-px  justify-center items-center m-3">
                            SignIn
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignIn;