import React from 'react';

import styled from "styled-components";


class NewTaskForm extends React.Component {


  // Legit might as well be named, 'This is pretty much the object you are about to save into the database 💁🏾‍♂️' 😅
  state={

    dash_id: 1,
      //dash_id: 1, // *** FORCE - (Dash)(Default)
    taskName: '',
    task_deets: '',
    taskComplete: false
    ,
    dashTo: { }

  }
  localSubmitHandler =(e)=>{  //e.preventDefault();

    this.props.newTaskHandler(this.state) 

    this.setState({ taskName: "" })
  }




  //// ------------------------ ////
  

  

  dropdownChangeHandler=(e)=>{  console.log("STATE:", e.target.name, "  DASH_ID--> ", e.target.value)   ///
    
    this.setState ({  dash_id: parseInt(e.target.value)   })   
    //  ***
    //  this.setState ({  [e.target.name]: e.target.value   })


  }


  

  inputChangeHandler =(e)=>{  this.setState ({  [e.target.name]: e.target.value   }) 
  }
   //console.log('EVENT:  ', e.target.value) }
   //console.log('Changing!')}


  renderDashOptions =()=>{  //console.log("Dashes to Choose From:  ", this.props.allDashes)   ///
    return( 


      this.props.allDashes.map(dash => 

        <option  
          // class="dropdown-content"
          name="dash_id"
          // name="dashTo"
          value={dash.id}
        >
          {dash.dash_name}
        </option>
        //<option>*</option>


          // {
          //   if(dash.default_dash === true){  console.log("DEFALUT")   ///
          //     return(//<>
          //       <option value="D">D</option>
          //     //</>
          //     )
          //   }
          //   else{  console.log("AllElse")   ///
          //     return(    
          //       <option value="A">A</option> 
          //     )
          //   }
          // }


      )

      )

  }
  getDefaultDash =()=>{  //console.log("Since This Thing Wanna Clown Us 😒💻🗯")  }   ///
    return(
      this.props.allDashes.map(dash => dash.default_dash === true) 
      // ~filter
    )
  }




//////// ----------{ Local }(Redner)-------------------- ////////


  render(){  console.log(this.state);
  return(<NewTaskzz><div>
    {/* <h1>•+•+•+•</h1> */}
    <h1>☁️🛤🌱🛤☁️</h1>
    <h2>✨🍃{this.props.preface} a New +Task🍃✨</h2>
    
    <form onSubmit={    
      (e)=>{ e.preventDefault();  console.log(e.target);  this.localSubmitHandler(e);
            }   
    }>


    <input type='text' name='taskName' placeholder='📝 Task Name' 
      value={this.state.TaskName} 
      // id={this.state.dahs}
      onChange={this.inputChangeHandler} 
    />


    <select class="dropdown"
      // name='dash_id'
      // value={}
      onChange={this.dropdownChangeHandler} 
      
    >


      {this.renderDashOptions()}


        {/* <option defaultValue={console.log( this.getDefaultDash() )}>
          {this.getDefaultDash()}
        </option> */}
        {/* <option defaultValue={this.props.allDashes[0]}>
          {this.props.allDashes[0].id}
        </option> */}
        {/* <option value={this.props.allDashes[1]}>D</option> */}

        {/* <option value="lime">Lime</option>
        <option value="mango">Mango</option>  */}
     

    </select> 


    <br/><button class="button addButton"> Add {'+Task+💫'}</button>
    ~

    
    </form>
    {/* <h1>•+•🌿•+•</h1> */}
      {/* •+•+•+• */}
    </div></NewTaskzz>
    
)}


}
export default NewTaskForm






const NewTaskzz = styled.div`
  
  margin: 100

`;