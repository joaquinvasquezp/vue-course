export default {
    coaches(state) {
        return state.coaches;
    },
    hasCoaches(state) {
        return state.coaches && state.coaches.length > 0; 
    },
    isCoach(_state, getters, _rootState, rootGetters) {
        const coaches = getters.coaches;
        const userId = rootGetters.userId;

        return coaches.some(coach => coach.id === userId); // true if at least one
    },
    shouldUpdate(state) {
        const lastFetch = state.lastFetch;

        if (!lastFetch) {
            return true;
        }

        const currentTimestamp = new Date().getTime();
        return (currentTimestamp - lastFetch) / 1000 > 60; // more than a minute ago (true, if not, false)
    }
};