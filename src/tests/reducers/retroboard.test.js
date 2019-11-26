import moment from 'moment';
import retroBoardReducer from './../../reducers/retroboard';
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
