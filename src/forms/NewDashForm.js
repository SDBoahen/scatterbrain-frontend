import React from 'react';

import styled from "styled-components";


class NewDashForm extends React.Component {

  // Legit might as well be named, 'This is pretty much the object you are about to save into the database 💁🏾‍♂️' 😅
  state={
    dashName: '',
    defaultDash: false
  }


  localSubmitHandler =(e)=>{  //e.preventDefault();
    this.props.newDashHandler(this.state) 
  }

  
  inputChangeHandler =(e)=>{    this.setState ({  [e.target.name]: e.target.value   })    }
   //console.log('EVENT:  ', e.target.value) }
   //console.log('Changing!')}


  render(){  console.log(this.state);
  return(<NewDashezz><div>
    {/* <h1>•+•+•+•</h1> */}
    <h1>☁️🏞🌳🏞☁️</h1>
    <h2>{'✨🌿Create a New /Dash/🌿✨'}</h2>
    
    <form onSubmit={    
      (e)=>{ e.preventDefault();  console.log(e.target);  this.localSubmitHandler(e);
            }   
    }>


    <input type='text' name='dashName' placeholder='📝 Dash Name' value={this.state.dashName}
      onChange={this.inputChangeHandler} 
    />
    
    
    <br/><button  class="button addButton">Add {'/DASH/💫'}</button>
    
    
    </form>
    {/* <h1>•+•+•+•</h1> */}

    </div></NewDashezz>)}


}
export default NewDashForm







const NewDashezz = styled.div`
  
  margin: 100

`;