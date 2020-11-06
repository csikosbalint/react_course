import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';

const COUNTRY_QUERY = gql`
  query CountriesQuery($code: ID!) {
        country(code: $code) {
          name
          native
          emoji
          currency
          languages {
              code
              name
          }
        }
  }
`;
export default function CountryDetail(props) {
    const history = useHistory();
    let { code } = useParams();
    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Currency</th>
                        <th>Flag</th>
                        <th>Native/International</th>
                        <th>Language</th>
                    </tr>
                </thead>
                <tbody>
                    <Query query={COUNTRY_QUERY} variables={{ code }}>


                        {({ loading, error, data }) => {
                            if (loading) return <h4>Loading...</h4>;
                            if (error) console.log(error);

                            return (
                                <tr>
                                    <td>{data.country.currency}</td>
                                    <td>{data.country.emoji}</td>
                                    <td>{data.country.native} / {data.country.name}</td>
                                    <td>{data.country.languages.map(language => `${language.name} `)}</td>
                                </tr>
                            )
                        }}
                    </Query>
                </tbody>
            </Table>
            <Button onClick={() => { history.push("/") }}>Back</Button>
        </div>

    )
}