

export default function storeReducer(state = [], action) {
    
    switch (action.type) {
        case 'ADD_FAV':
            return [...state, action.payload]
    
        default:
            break;
    }
    
    return state;
}