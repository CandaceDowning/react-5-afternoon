import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCost, updateDown } from '../../ducks/reducer'

class WizardSix extends Component {

    render(){
        const {updateDown, updateCost} = this.props
        return(
            <div className="parent-div">
                    <div className="vert-align">                    <p>What is the estimated purchase price?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={(e)=>updateCost()}/> <br />


                    <p>How much are you putting down as a down payment?</p> <br />
                        
                        
                        <input type="text" placeholder="amount" onChange={(e)=>updateDown()}/>                    
                        
                    
                    <Link to="/wSeven"><button className="margin-btn"> Next </button></Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        cost: this.cost,
        down: this.down
    }
}

export default connect(mapStateToProps, {updateCost,updateDown})(WizardSix);