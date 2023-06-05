import './UserPage/UserPage.css'
const ImageUpload = ({ link, file }) => {

    const getFile = (event) => {
        link(URL.createObjectURL(event.target.files[0]))
    }

    return (
        <div className="profile-image">
            <input type="file" onChange={getFile} className="p-2 imageinput " />
            <img src={file} alt='Null' className="params" />
        </div>
    )
}

export default ImageUpload;