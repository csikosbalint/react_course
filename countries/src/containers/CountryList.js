import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CountryItem from '../components/CountryItem';
import { ListGroup } from 'react-bootstrap';

const COUNTRIES_QUERY = gql`
  query CountriesQuery {
        countries {
          name
          code
        }
  }
`;

export default function CountryList(props) {

    return (
        <Query query={COUNTRIES_QUERY}>
            {({ loading, error, data }) => {
                if (loading) return <h4>Loading...</h4>;
                if (error) console.log(error);

                return (
                    <ListGroup>
                        {data.countries.map(country => (
                            <CountryItem key={country.code} country={country} />
                        ))}
                    </ListGroup>
                )
            }}
        </Query>
    );
}