import React, { Component } from 'react'
import '../styles/acc.css';
import {RiArrowDropDownLine} from 'react-icons/ri';
import {VscDebugBreakpointData} from 'react-icons/vsc'
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import CareerForm from './careers/CareerForm';
import { db, firestore } from '../firebase';
class Accordain extends Component {
       state={active:'',roatate:'0deg',careers:[],showForm:false}

  componentDidMount(){
      firestore.collection('careers').onSnapshot((snapshot)=>{
          this.setState({careers:snapshot.docs.map(db.formatedDoc)})
      })
  }

     handleAccordian=()=>{
        //  this.props.hadleAcc(!this.props.isOpen)
        this.setState({active:this.state.active===""?"active":"",roatate:this.state.active==="active"?"0deg":"180deg"})
     }
    render(){
        console.log(this.props.accItems.length)
     
    return (
        <>
           {this.state.careers.map((carrer)=>(
               <React.Fragment key={carrer.id}>
               <div className="career accTitle" onClick={this.handleAccordian}>
                 <div>
                   <h4 className="text-lg font-bold">{carrer.name}</h4>
                   <p>{carrer.location}</p>
                </div>
                <div className="flex items-center">
                    <p>{carrer.date}</p>
                    <RiArrowDropDownLine className="drop" style={{transform:`rotate(${this.state.roatate})`}}/>
                  
                </div>
        
             </div>
            <div className={`career accItem ${this.state.active} ${(this.props.accItems.length<=4&&this.state.active==="active"? 'active2':null)}`}>
                <p>{carrer.description}</p>
                <div className="apply-area">
                    <button onClick={()=>this.setState({showForm:true})}>Apply</button>
                    <p><BusinessCenterOutlinedIcon/> Experience :{carrer.expirince}</p>
                </div>
            </div>
            {this.state.showForm&&<CareerForm showForm={this.setState} career={carrer}/>}
               </React.Fragment>
           ))}  
        </>
    )
            }
}
export default Accordain
