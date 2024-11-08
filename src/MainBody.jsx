import Student from './Components/Student';
import StudentReview from './Components/StudentReview';
import React from 'react';

class MainBody extends React.Component{
    render(){
        const whatWillWeLearn = "React.JS";
        const totalLec = 3;
         return(
          <div style={{minHeight: "70vh"}}>
            <p>In this course, we will learn {whatWillWeLearn} by building TaskoPedia
              <br></br>
              Total Lecture - {totalLec}
            </p>
            <ul>
              <li>Basic Foundation</li>
              <li>Functional and Class Component</li>
            </ul>
            {/* <div>
              Enter your task : <input maxLength={8} readOnly={false} style={{width:"300px"}} placeholder='Type here....'></input>
            </div> */}
            <br></br>
            <div className="container row"> 
              Students Enrolled!
            </div>
            <Student experience={3} name="Sumi Heryawan">
                <StudentReview></StudentReview>
            </Student>
            <Student experience={5} name="Inggrid Aprillia">
                <StudentReview></StudentReview>
            </Student>
            <Student experience={7} name="Gilang Aji Setiawan"></Student>
            <Student experience={5} name="Wahyu Agung"></Student>
          </div>
          
         )
    }
  }

  export default MainBody;
  