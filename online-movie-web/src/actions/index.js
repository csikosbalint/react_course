import Axios from "axios"

export const getLatest = () => ({
    type: 'GET_LATEST'
});

export const getEvents = () => ({
    type: 'GET_EVENTS'
});

export const getUpcomings = () => ({
    type: 'GET_UPCOMINGS'
});