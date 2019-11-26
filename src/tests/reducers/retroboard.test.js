import moment from 'moment';
import retroBoardReducer from '../../reducers/retroBoard';
import retroBoard from './../fixtures/retroBoard';

test('should set up default values', () => {
    const state = retroBoardReducer(undefined, { type: '@@INIT' });
    const retroBoardReducerDefault = {
        title: 'My Retro Board',
        wentWell: [],
        toImprove: [],
        actionItems: [],
    };
    expect(state).toEqual(retroBoardReducerDefault);
});

test('should be able to remove retro board', () => {
    const state = retroBoardReducer(retroBoard, { type: 'REMOVE_RETRO_BOARD' });
    expect(state).toEqual({});
});

test('should set expenses', () => {
    const retroBoardReducerDefault = {
        title: 'My Retro Board',
        wentWell: [],
        toImprove: [],
        actionItems: [],
    };
    const state = retroBoardReducer(retroBoardReducerDefault, { type: 'SET_RETRO_BOARD', retroBoard });
    expect(state).toEqual(retroBoard);
});

test('should be able to edit the title', () => {
    const retroBoardReducerDefault = {
        title: 'My Retro Board',
        wentWell: [],
        toImprove: [],
        actionItems: [],
    };
    const state = retroBoardReducer(retroBoard, { type: 'ADD_RETRO_BOARD_TITLE', title: 'QTC Dandylions' });
    expect(state.title).toEqual('QTC Dandylions');
});

test('should be able to add to wentWell', () => {
    const post = {
        id: 'ww4',
        label: 'successful went well post'
    };
    const state = retroBoardReducer(retroBoard, { type: 'ADD_WENT_WELL', wentWell: post });
    expect(state.wentWell).toHaveLength(4);
    expect(state.wentWell).toEqual([...retroBoard.wentWell, post]);
});

test('should be able to add to toImprove', () => {
    const post = {
        id: 'tp4',
        label: 'successful to Improve post'
    };
    const state = retroBoardReducer(retroBoard, { type: 'ADD_TO_IMPROVE', toImprove: post });
    expect(state.toImprove).toHaveLength(4);
    expect(state.toImprove).toEqual([...retroBoard.toImprove, post]);
});

test('should be able to add to action items', () => {
    const post = {
        id: 'ai4',
        label: 'successful action item post'
    };
    const state = retroBoardReducer(retroBoard, { type: 'ADD_ACTION_ITEM', actionItems: post });
    expect(state.actionItems).toHaveLength(4);
    expect(state.actionItems).toEqual([...retroBoard.actionItems, post]);
});

// test('should be able to remove expense false id', () => {
//     const state = expenseReducer(expenses, { type: 'REMOVE_EXPENSE', id: -1 });
//     expect(state).toHaveLength(3);
//     expect(state).toEqual(expenses);
// });

// test('should be able to add new expense', () => {
//     const newExpense = {
//         id: '4',
//         description: 'Udemy',
//         note: '',
//         amount: 195,
//         createdAt: 0,
//     }
//     const state = expenseReducer(expenses, { type: 'ADD_EXPENSE', expense: newExpense });
//     expect(state).toHaveLength(4);
//     expect(state).toEqual([...expenses, newExpense])
// });

// test('should be able to edit expense', () => {
//     const updateExpense = {
//         id: expenses[1].id,
//         description: 'Udemy',
//         note: '',
//         amount: 195,
//         createdAt: 0,
//     }
//     const state = expenseReducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[1].id, updates: updateExpense });
//     expect(state).toHaveLength(3);
//     expect(state[1]).toEqual(updateExpense);
// });

// test('should not be able to edit expense if incorrect id', () => {
//     const updateExpense = {
//         id: expenses[1].id,
//         description: 'Udemy',
//         note: '',
//         amount: 195,
//         createdAt: 0,
//     }
//     const state = expenseReducer(expenses, { type: 'EDIT_EXPENSE', id: -1, updates: updateExpense });
//     expect(state).toHaveLength(3);
//     expect(state).toEqual(expenses);
// });

// test('should set expenses', () => {
//     const originalExpenses = [{
//         id: 'lala',
//         description: 'Udemy',
//         note: '',
//         amount: 195,
//         createdAt: 0,
//     }];
//     const state = expenseReducer(originalExpenses, { type: 'SET_EXPENSES', expenses });
//     expect(state).toHaveLength(3);
//     expect(state).toEqual(expenses);
// });
