const initialState={
    loanType: 'Home Purchase',
    propertyType: 'Single Family Home',
    city: '',
    propToBeUsedOn: '',
    found: "false",
    realEstateAgent: "false",
    cost: 0,
    downPayment: 0,
    credit: '',
    history: '',
    addressOne: '',
    addressTwo: '',
    addressThree: '',
    firstName: '',
    lastName: '',
    email: ''
}

//action types
const UPDATE_LOAN_TYPE = 'UPDATE_LOAN_TYPE';
const UPDATE_PROPERTY_TYPE = 'UPDATE_PROPERTY_TYPE';
const UPDATE_CITY = 'UPDATE_CITY';
const UPDATE_PROP = 'UPDATE_PROP';
const UPDATE_FOUND = 'UPDATE_FOUND';
const UPDATE_AGENT = 'UPDATE_AGENT';
const UPDATE_COST = 'UPDATE_COST';
const UPDATE_DOWN = 'UPDATE_DOWN';
const UPDATE_CREDIT = 'UPDATE_CREDIT';
const UPDATE_HISTORY = 'UPDATE_HISTORY';
const UPDATE_ADDRESS_ONE = 'UPDATE_ADDRESS_ONE';
const UPDATE_ADDRESS_TWO = 'UPDATE_ADDRESS_TWO';
const UPDATE_ADDRESS_THREE = 'UPDATE_ADDRESS_THREE';
const UPDATE_FIRST = 'UPDATE_FIRST';
const UPDATE_LAST = 'UPDATE_LAST';
const UPDATE_EMAIL = 'UPDATE_EMAIL';


//action creators
export const updateLoanType = loanType => {
    return{
        type: UPDATE_LOAN_TYPE,
        payload: loanType
    }
}
export const updatePropertyType = property => {
    return{
        type: UPDATE_LOAN_TYPE,
        payload: property
    }
}
export const updateCity = city => {
    return{
        type: UPDATE_CITY,
        payload: city
    }
}
export const updateProp = prop => {
    return{
        type: UPDATE_PROP,
        payload: prop
    }
}
export const updateFound = found => {
    return{
        type: UPDATE_FOUND,
        payload: found
    }
}
export const updateAgent = agent => {
    return{
        type: UPDATE_AGENT,
        payload: agent
    }
}
export const updateCost = cost => {
    return{
        type: UPDATE_COST,
        payload: cost
    }
}
export const updateDown = down => {
    return{
        type: UPDATE_DOWN,
        payload: down
    }
}
export const updateCredit = credit => {
    return{
        type: UPDATE_CREDIT,
        payload: credit
    }
}
export const updateHistory = history => {
    return{
        type: UPDATE_HISTORY,
        payload: history
    }
}
export const updateAddOne = addOne => {
    return{
        type: UPDATE_ADDRESS_ONE,
        payload: addOne
    }
}
export const updateAddTwo = addTwo => {
    return{
        type: UPDATE_ADDRESS_TWO,
        payload: addTwo
    }
}
export const updateAddThree = addThree => {
    return{
        type: UPDATE_ADDRESS_THREE,
        payload: addThree
    }
}
export const updateFirst = first => {
    return{
        type: UPDATE_FIRST,
        payload: first
    }
}
export const updateLast = last => {
    return{
        type: UPDATE_LAST,
        payload: last
    }
}
export const updateEmail = email => {
    return{
        type: UPDATE_EMAIL,
        payload: email
    }
}

//reducer functions
export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_LOAN_TYPE:
        return{
            ...state,
            loanType: action.payload
        }
        case UPDATE_PROPERTY_TYPE:
        return{
            ...state,
            propertyType: action.payload
        }
        case UPDATE_CITY:
        return{
            ...state,
            city: action.payload
        }
        case UPDATE_PROP:
        return{
            ...state,
            propToBeUsedOn: action.payload
        }
        case UPDATE_FOUND:
        return{
            ...state,
            found: action.found
        }

        case UPDATE_AGENT :
        return{
            ...state,
            realEstateAgent: action.payload
        }
        case UPDATE_COST :
        return{
            ...state,
            cost: action.payload
        }
        case UPDATE_DOWN :
        return{
            ...state,
            downPayment: action.payload
        }
        case UPDATE_CREDIT :
        return{
            ...state,
            credit: action.payload
        }
        case UPDATE_HISTORY :
        return{
            ...state,
            history: action.payload
        }
        case UPDATE_ADDRESS_ONE :
        return{
            ...state,
            addressOne: action.payload
        }
        case UPDATE_ADDRESS_TWO :
        return{
            ...state,
            addressTwo: action.payload
        }
        case UPDATE_ADDRESS_THREE :
        return{
            ...state,
            addressThree: action.payload
        }
        case UPDATE_FIRST :
        return{
            ...state,
            firstName: action.payload
        }
        case UPDATE_LAST :
        return{
            ...state,
            lastName: action.payload
        }
        case UPDATE_EMAIL :
        return{
            ...state,
            email: action.payload
        }


        default:
        return state;
    }
}

