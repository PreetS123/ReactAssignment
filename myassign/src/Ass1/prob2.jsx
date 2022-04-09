     import React from "react"


     const Button=()=>{
         return(
             <>
             <div className="btn">
                 <button className="eachbtn" style={{backgroundColor: "lightblue"}}>JOIN US</button>
                 <button className="eachbtn" style={{backgroundColor:"#3f4e5f"}}>SETTINGS</button>
             </div>
             <div className="btn">
             <button className="eachbtn" style={{backgroundColor:"#dcae0c"}}>LOGIN</button>
                 <button className="eachbtn" style={{backgroundColor:"#870515"}}>CONTACT US</button>
             </div>
             <div className="btn">
             <button className="eachbtn" style={{backgroundColor:"#06730c"}}>SEARCH</button>
                 <button className="eachbtn" style={{backgroundColor:"#420673"}}>HELP</button>
             </div>
             <div className="btn">
             <button className="eachbtn" style={{backgroundColor:"#d30ec8"}}>HOME</button>
                 <button className="eachbtn" style={{backgroundColor:"#d37b0e"}}>DOWNLOAD</button>
             </div>
             </>
         )
     }

     export default Button;