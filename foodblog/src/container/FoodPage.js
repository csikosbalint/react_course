import React, { useEffect } from 'react'
import { ListGroup } from 'react-bootstrap';
import { connect } from 'react-redux'
import { getFood } from '../actions';
import FoodItem from '../component/FoodItem';

function FoodPage(props) {
    useEffect(() => {
        if ( !props.food ) {
            props.getFood()
        }
    }, [props])

    return (
        <>
        {!props.loading && Array.isArray(props.food) ? 
           <ListGroup>{props.food.map(f => <FoodItem key={f.id} food={f}/>)}</ListGroup>: <p>loading</p> }
        </>
    )
}

const mapDispatchToProps = {
    getFood: getFood,
};

const mapStateToProps = (state) => (
    {  
       food: state.food,
       loading: state.loading
    })
export default connect(mapStateToProps,mapDispatchToProps )(FoodPage)