import React from 'react';
import styled from "styled-components";


class Note extends React.Component{  

  state={

      id: this.props.note.id,
      dash_id: this.props.note.dash_id,
      note_name: this.props.note.note_name,

    note_deets: this.props.note.note_deets

    ,
    beenClicked: false 

  }
  localClickHandler =()=> {
      this.setState({ beenClicked: !this.state.beenClicked })
  }


  inputChangeHandler =(e)=>{ this.setState({[e.target.name]: e.target.value }) 
    console.log('EVENT: ', e.target.value)


    this.props.editNoteHandler(this.state)


  }
  //console.log(`Changing!`)}
  
  


//// ------------------------ ////  
    




  moreDeets=()=>{ 
    if(this.state.beenClicked === true){ 
      return 27 }
      // PREVIOUSLY: { 9 ; 25 }
    else{ return 1 }
    // PREVIOUSLY: { 3 }

  }
    










//////// ----------{ Local }(Render)-------------------- ////////



    
    render(){ 
    return(<NoteStylz><div onClick={this.localClickHandler}>


    <br/><h1 
    
    class="floating" 
    >
      ~☁️💭☁️💭☁️💭☁️~</h1>

      <TextArea 

        name="note_deets"
        value={this.state.note_deets}
        onChange={this.inputChangeHandler}

        rows={this.moreDeets()}
          // columns={1000}
          //rows={15}
          // width={4000}

      />
        {/* <p>NOTE!</p> */}

    <h1    class="floating" >~☁️💭☁️💭☁️~</h1><br/>
      {/* ~•~•~ */}

          </div></NoteStylz>)}  }
export default Note







const NoteStylz = styled.div`
      
background: #00fff1;
background: radial-gradient(circle farthest-corner at center center, #00fff1 0%, #00dfff 15%, rgba(71,177,255,0.58) 35%, #00c0ff 55%, #00a2ff 75%, #40ddff 90%, #00ffef 99%);
background: -webkit-radial-gradient(circle farthest-corner at center center, #00fff1 0%, #00dfff 15%, rgba(71,177,255,0.58) 35%, #00c0ff 55%, #00a2ff 75%, #40ddff 90%, #00ffef 99%);
background: -moz-radial-gradient(circle farthest-corner at center center, #00fff1 0%, #00dfff 15%, rgba(71,177,255,0.58) 35%, #00c0ff 55%, #00a2ff 75%, #40ddff 90%, #00ffef 99%);
      // background: red;
      border-radius: 90px;
        
        // xx~
        // color: red

        box-shadow: 8px 8px 16px rgba(0,253,255,0.29)


    // width: 100000px;
    // hieght: 10


`;
      const TextArea = styled.textarea`
      
        width: 450px;
        border-radius: 90px;


        background: rgba(200,223,235,0.13);
        background: radial-gradient(circle farthest-corner at center center, white 0%, rgba(148,211,227,0.18) 99%);
        background: -webkit-radial-gradient(circle farthest-corner at center center, gray 0%, rgba(148,211,227,0.18) 99%);
        background: -moz-radial-gradient(circle farthest-corner at center center, rgba(200,223,235,0.13) 0%, rgba(148,211,227,0.18) 99%);
        



        // background: rgba(0,253,255,0.29);
        // background: radial-gradient(circle farthest-corner at center center, rgba(0,253,255,0.29) 0%, rgba(0,146,255,0.18) 20%, rgba(0,192,255,0.21) 30%, #dfebea 40%, rgba(0,177,255,0.26) 50%, rgba(0,146,255,0.29) 60%, rgba(0,146,255,0.41) 70%, rgba(0,131,255,0.29) 80%, rgba(0,177,255,0.38) 90%, rgba(0,177,255,0.31) 99%);
        // background: -webkit-radial-gradient(circle farthest-corner at center center, rgba(0,253,255,0.29) 0%, rgba(0,146,255,0.18) 20%, rgba(0,192,255,0.21) 30%, #dfebea 40%, rgba(0,177,255,0.26) 50%, rgba(0,146,255,0.29) 60%, rgba(0,146,255,0.41) 70%, rgba(0,131,255,0.29) 80%, rgba(0,177,255,0.38) 90%, rgba(0,177,255,0.31) 99%);
        // background: -moz-radial-gradient(circle farthest-corner at center center, rgba(0,253,255,0.29) 0%, rgba(0,146,255,0.18) 20%, rgba(0,192,255,0.21) 30%, #dfebea 40%, rgba(0,177,255,0.26) 50%, rgba(0,146,255,0.29) 60%, rgba(0,146,255,0.41) 70%, rgba(0,131,255,0.29) 80%, rgba(0,177,255,0.38) 90%, rgba(0,177,255,0.31) 99%);
        
          // background: rgba(0,253,255,0.29);
          // background: radial-gradient(circle farthest-corner at center center, rgba(0,253,255,0.29) 0%, rgba(0,146,255,0.18) 20%, rgba(0,192,255,0.21) 30%, #dfebea 40%, rgba(0,177,255,0.26) 50%, rgba(0,146,255,0.29) 60%, rgba(0,146,255,0.41) 70%, rgba(0,131,255,0.29) 80%, rgba(0,177,255,0.38) 90%, rgba(0,177,255,0.31) 99%);
          // background: -webkit-radial-gradient(circle farthest-corner at center center, rgba(0,253,255,0.29) 0%, rgba(0,146,255,0.18) 20%, rgba(0,192,255,0.21) 30%, #dfebea 40%, rgba(0,177,255,0.26) 50%, rgba(0,146,255,0.29) 60%, rgba(0,146,255,0.41) 70%, rgba(0,131,255,0.29) 80%, rgba(0,177,255,0.38) 90%, rgba(0,177,255,0.31) 99%);
          // background: -moz-radial-gradient(circle farthest-corner at center center, rgba(0,253,255,0.29) 0%, rgba(0,146,255,0.18) 20%, rgba(0,192,255,0.21) 30%, #dfebea 40%, rgba(0,177,255,0.26) 50%, rgba(0,146,255,0.29) 60%, rgba(0,146,255,0.41) 70%, rgba(0,131,255,0.29) 80%, rgba(0,177,255,0.38) 90%, rgba(0,177,255,0.31) 99%);
          // // background: red;

      `
    