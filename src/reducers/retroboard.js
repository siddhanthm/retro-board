// Retro Board Reducer
const retroBoardReducerDefault = {
    title: 'My Retro Board',
    wentWell: [],
    toImprove: [],
    actionItems: [],
};

export default (state = retroBoardReducerDefault, action) => {
    switch (action.type) {
        case 'ADD_RETRO_BOARD_TITLE':
            return {
                ...state,
                title: action.title,
            };
        case 'ADD_WENT_WELL':
            return {
                ...state,
                wentWell: [...state.wentWell, action.wentWell]
            };
        case 'ADD_TO_IMPROVE':
            return {
                ...state,
                toImprove: [...state.toImprove, action.toImprove]
            };
        case 'ADD_ACTION_ITEM':
            return {
                ...state,
                actionItems: [...state.actionItems, action.actionItems]
            }
        case 'EDIT_WENT_WELL':
            return {
                ...state,
                wentWell: state.wentWell.map((post) => {
                    if (post.id === action.id) {
                        return {
                            ...post,
                            ...action.updates,
                        }
                    } else {
                        return post;
                    }
                })
            };
        case 'EDIT_TO_IMPROVE':
            return {
                ...state,
                toImprove: state.toImprove.map((post) => {
                    if (post.id === action.id) {
                        return {
                            ...post,
                            ...action.updates,
                        }
                    } else {
                        return post;
                    }
                })
            };
        case 'EDIT_ACTION_ITEM':
                return {
                    ...state,
                    actionItems: state.actionItems.map((post) => {
                        if (post.id === action.id) {
                            return {
                                ...post,
                                ...action.updates,
                            }
                        } else {
                            return post;
                        }
                    })
                };
        case 'REMOVE_WENT_WELL':
            return {
                ...state,
                wentWell: state.wentWell.filter(({ id }) => action.id)
            };
        case 'REMOVE_TO_IMPROVE':
            return {
                ...state,
                toImprove: state.toImprove.filter(({ id }) => action.id)
            };
        case 'REMOVE_ACTION_ITEM':
            return {
                ...state,
                actionItems: state.actionItems.filter(({ id }) => action.id)
            };
        case 'REMOVE_RETRO_BOARD':
            return {};
        case 'SET_RETRO_BOARD':
                return action.retroBoard;
        default:
            return state;
    }
}