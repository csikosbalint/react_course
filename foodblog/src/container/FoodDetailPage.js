import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getFood } from '../actions';
import FoodDetail from '../component/FoodDetail';

function FoodDetailPage(props) {
    useEffect(() => {
        if (!props.food) {
            props.getFood()
        }
    }, [props])

    let { fid } = useParams();
    return (
        <>
            {!props.loading && Array.isArray(props.food) ? <FoodDetail food={props.food.find( ({id}) => id == fid)}/> : <p>none</p>}
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
export default connect(mapStateToProps, mapDispatchToProps)(FoodDetailPage)