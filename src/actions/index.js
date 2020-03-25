import agentData from "../apis/agentData";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchAgents = () => async dispatch => {
    const response = await jsonPlaceholder.get("/agents");

    dispatch({ type: "FETCH_AGENTS", payload: response.data });
};

export const fetchAgent = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/agents/${id}`);

    dispatch({ type: "FETCH_AGENT", payload: response.data });
};

export const fetchAgency = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/agencies/${id}`);

    dispatch({ type: "FETCH_AGENCY", payload: response.data });
}

export const fetchAgencies = () => async dispatch => {
    const response = await jsonPlaceholder.get('/agencies/');

    dispatch({ type: "FETCH_AGENCIES", payload: response.data });
}

export const fetchData = () => async dispatch => {
    const response = agentData.get('/GetAgencyDetails',
        {
            "agencyInput": {
                "id": "1",
                "year": "2020"
            }
        }
    );
    console.log(response)

    dispatch({ type: "FETCH_TEST", payload: response.data })
}
