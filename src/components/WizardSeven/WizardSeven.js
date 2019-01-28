import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCredit } from '../../ducks/reducer'

class WizardSeven extends Component {

    render(){
        const {updateCredit} = this.props
        return(
            <div className="parent-div">
                <div className="vert-align">                    
                    
                    <p>Estimate your credit score</p> <br />
                    
                    <div className="row">
                        <Link to="/wEight"><button onClick={(e)=>updateCredit("E")}>Excellent</button></Link>
                        <Link to="/wEight"><button onClick={(e)=>updateCredit("G")}>Good</button></Link>
                        <Link to="/wEight"><button onClick={(e)=>updateCredit("F")}>Fair</button></Link>
                        <Link to="/wEight"><button onClick={(e)=>updateCredit("P")}>Poor</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        credit: this.credit
    }
}

export default connect(mapStateToProps, {updateCredit})(WizardSeven);