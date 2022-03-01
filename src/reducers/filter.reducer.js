const filter = (state = [], action) => {
    switch (action.type) {
        case 'FILTER_TODO':
            return action.filter;
        default:
            return state;
    }
}

export default filter;