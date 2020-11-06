
const foodActions = {
  PENDING: 'FETCH_FOOD_PENDING',
  FULFILLED: 'FETCH_FOOD_FULFILLED',
  REJECTED: 'FETCH_FOOD_REJECTED',
};

const url = 'https://foods-2694.restdb.io/rest/food'
const token = '5f984f41dd6e32485dfc3622'

const fetchFood = () => (dispatch) => {
  dispatch({ type: foodActions.PENDING });

  fetch(url, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'x-apikey': token
    }
  })
    .then(resp => resp.json())
    .then(json => dispatch({ type: foodActions.FULFILLED, payload: json }))
    .catch(error => dispatch({ type: foodActions.REJECTED, payload: error }));
};


export {
    foodActions,
    fetchFood
};


  