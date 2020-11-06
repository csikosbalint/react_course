import reducer from '../reducers';

describe('Reducer', () => {
  it('should return the initial state', () => {
      expect(JSON.stringify(reducer(undefined, {}))).toEqual(JSON.stringify({}))
  })

  it('reducer test for GET_FOOD',() => {
      let state ={
        food:[]
      }
      state = reducer(state, {
          action: "GET_FOOD"
      })
      expect(state).toEqual({
        food:[]
      })
  })
})
