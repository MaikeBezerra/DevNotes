const initialState = {
    list: [
        { title: 'First note', body: 'Testing'}
    ]
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            break;
    }
    
    return state;
}