export const taskListReducer = (initialState, action) => {
    switch (action.type) {
        case 'Add TaskList':

            return [...initialState, action.payload]

        case 'Delete TaskList':

            return initialState.filter(tasklist => tasklist.id !== action.payload)

        case 'Complete TaskList':

            return initialState.map(tasklist => {
                if (tasklist.id === action.payload){
                    return {
                        ...tasklist,
                        done: !tasklist.done
                    }
                }

                return tasklist;
            });

        case 'Update TaskList':

            return initialState.map(tasklist => {
                if (tasklist.id === action.payload.id) {
                    return {
                        ...tasklist,
                        description: action.payload.description,
                    };
                };

                return tasklist;
            });
    
        default:
            return initialState
    }
}