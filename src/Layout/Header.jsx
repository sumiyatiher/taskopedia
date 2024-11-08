import Logo from "../Images/react.png";

const subHeaderStyle = {
    color:"blueviolet",
    backgroundColor:"lightgray"
  }
  
  function MainHeader(){
    return (
        <div className="pt-2 py-1 pl-2" style={{backgroundColor : "black"}}>
            <img src={Logo} alt="Header" style={{verticalAlign: "top",height: "40px"}}></img>
            <span className="h2 pt-4" style={{color: "#00bcd4"}}>React Course - TaskOPedia</span>
        </div>
    );
  }
  
  function SubHeader(){
    return <p style={subHeaderStyle} className="text-center">This will be an exiting course</p>;
  }
  
 const Header = () =>{
    return(
    <div>
        <MainHeader></MainHeader>
        <SubHeader></SubHeader>
    </div>
    )
  }

export default Header;

 