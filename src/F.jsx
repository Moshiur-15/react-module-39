export default function Friend({fd}){
    const {name, email} = fd;
    return(
        <div>
            <h1> Name  : {name}</h1>
            <h2>Email  : {email}</h2>
        </div>
    )
}