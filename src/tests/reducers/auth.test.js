import authReducer from './../../reducers/auth';


test('should set up default values', () => {
    const state = authReducer(undefined, { type: '@@INIT' });
    const defaultReducerState = {};
    expect(state).toEqual(defaultReducerState);
});

test('should be able to login', () => {
    const state = authReducer(undefined, { type: 'LOGIN', uid: '123abc' });
    const defaultReducerState = {};
    expect(state).toEqual({ uid: '123abc' });
});

test('should be able to login', () => {
    const state = authReducer({ uid: 'abc'}, { type: 'LOGOUT' });
    expect(state).toEqual({});
});