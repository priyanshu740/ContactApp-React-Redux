const initialState = [
    { id: 0, name: "priyanshu tripathi", email: "email@email.com", phone: 1234567890 },
    { id: 1, name: "Test Name", email: "test@test.com", phone: 4567891230 },
  ];

export const contactReducer = (state=initialState,action) => {
    switch(action.type){
        case 'ADD_CONTACT':
        state = [...state,action.payload]
        return state;
        
        default: return state

    }
}