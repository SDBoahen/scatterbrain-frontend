import React from 'react';


class TaskEditNameForm extends React.Component {

  // Legit might as well be named, 'This is pretty much the object you are about to save into the database 💁🏾‍♂️' 😅
  state={

    id: this.props.taskEditing.id,

    dash_id: this.props.taskEditing.dash_id, 

    task_name: this.props.taskEditing.task_name,

    task_deets: this.props.taskEditing.task_deets,

    task_complete: false


    // // 0 *** FORCE - (Dash)(Default)
    // dashID: this.props.taskEditing.dash_id, 
    // taskID: this.props.taskEditing.id,

    // taskUpdatedName: '',
    // taskComplete: false

    
  }


  localSubmitHandler =(e)=>{  //e.preventDefault();


    //  ***  


    // ASYNC *** MAYBE SEPARATE TO ANOTHER METHOD 🤷🏾‍♂️
        console.log(this.state)
    this.props.editNameHandler(this.state)
    this.props.editTaskName() 
    

    // this.props.editNameHandler(this.state, this.props.taskEditing) 


    //  ***


  }


  inputChangeHandler =(e)=>{    this.setState ({  [e.target.name]: e.target.value   

  })    }
   //console.log('EVENT:  ', e.target.value) }
   //console.log('Changing!')}




  render(){  console.log(this.state);
  return(<div>
    <h1>•+•</h1>
    <h4>{'Editing {{ Task }} Name✨'}</h4>
    
    <form onSubmit={    
      (e)=>{ e.preventDefault();  console.log(e.target);  this.localSubmitHandler(e);
            }   
    }>


    <input type='text' name='task_name' 
      placeholder={`📝 `+ this.props.taskEditing.task_name}

      value={this.state.task_name}
      //   value={this.props.taskEditing.task_name}
      //  ***  Want the (task_name)

      onChange={this.inputChangeHandler} 
    />

    <button>Update {'+Task+💫'}</button>

    
    </form>
    <h1>•+•</h1>
    </div>
    
    )}


}
export default TaskEditNameForm