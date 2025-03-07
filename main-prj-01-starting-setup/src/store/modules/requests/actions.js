export default {
    async contactCoach(context, payload) {
        const requestData = {
            userEmail: payload.email,
            message: payload.message,
        };
        
        const response = await fetch(`https://vue-course-cd621-default-rtdb.firebaseio.com/requests/${payload.coachId}.json`, {
            method: 'POST',
            body: JSON.stringify(requestData)
        });

        const responseData = await response.json();
        console.log(responseData);

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to send request.');
            throw error;
        }

        requestData.id = responseData.name; // name => id
        requestData.coachId = payload.coachId;

        context.commit('addRequest', requestData);
    },
    async fetchRequests(context) {
        const coachId = context.rootGetters.userId;
        const response = await fetch(`https://vue-course-cd621-default-rtdb.firebaseio.com/requests/${coachId}.json`);
        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || 'Failed to fetch data.');
            throw error;
        }

        const requests = [];
        for (const key in responseData) {
            const request = {
                id: key,
                coachId: coachId,
                userEmail: responseData[key].userEmail,
                message: responseData[key].message
            }

            requests.push(request);
        }

        context.commit('setRequests', requests);
    }
};