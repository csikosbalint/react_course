export function updateCourses() {
    const resp = fetch(`http://localhost:8900/courses`,
        { method: 'GET' })
        .then((response) => {
            return response.json()
        })

    return {
        type: 'GET_COURSES',
        payload: resp
    }
}

export function updateEnquires() {
    const enquires = fetch(`http://localhost:8900/enquires`,
        { method: 'GET' })
        .then((response) => response.json())

    return {
        type: 'GET_ENQUIRES',
        payload: enquires
    }
}