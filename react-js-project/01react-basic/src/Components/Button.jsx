function Button(props){
    console.log(props.value);

    const style = {
        color:"white",
        backgroundColor:"black",
        height:"50px",
        fontSize:"20px",
        padding:"10px",
        margin:"10px"
    }
    return (
        <>
        {/* This is a comment */}
        <button style={style} className="" onClick={() => alert("button clicked")}>{props.value}</button>
        </>
    )

}

export default Button;