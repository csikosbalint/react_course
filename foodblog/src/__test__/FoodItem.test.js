import React from 'react';
import {create} from 'react-test-renderer';
import FoodItem from '../component/FoodItem';

describe('FoodItem Component Snapshot', () => {
    test("FoodItem",() => {
        let tree = create(<FoodItem food={{ name: "alma"}}/>);
        expect(tree.toJSON()).toMatchSnapshot();
    })
})
