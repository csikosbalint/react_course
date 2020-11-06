import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import GlobalNavbar from './container/GlobalNavbar'
import Welcome from './container/Welcome'
import LatestMovies from './container/LatestMovies'
import MovieDetails from './container/MovieDetails'
import TicketBooking from './container/TicketBooking'
import PaymentFinal from './container/PaymentFinal'
import NearByEvents from './container/NearByEvents'
import UpcomingMovies from './container/UpcomingMovies'

export default function App() {
    return (
        <BrowserRouter>
            <GlobalNavbar />
            <hr />
            <Switch>
                <Route exact path="/">
                    <Redirect to="/welcome" />
                </Route>
                <Route path="/welcome">
                    <Welcome />
                </Route>
                <Route path="/latest">
                    <LatestMovies />
                </Route>
                <Route path="/upcoming">
                    <UpcomingMovies />
                </Route>
                <Route path="/movie/:id">
                    <MovieDetails />
                </Route>
                <Route path="/ticket/:id">
                    <TicketBooking />
                </Route>
                <Route path="/payment/:id">
                    <PaymentFinal />
                </Route>
                <Route path="/events">
                    <NearByEvents />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}