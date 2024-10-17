import './imgStyle.css'
export default function Image({img}){
    const {id, title, albumId} = img;
    return (
        <div className="imgStyle">
            <h5>id : {id}</h5>
            <h5>title : {title}</h5>
            <p>Image : {albumId}</p>
        </div>
    )
}