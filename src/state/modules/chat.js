import $api from "../api";
import $cookies from "vue-cookies";
export const state = {
    token: $cookies.get("token"),
    data: {
        list: [],
        links: [],
        current_page: 0,
        last_page: 0,
        per_page: 0,
        total: 0,
    },
};

export const actions = {
    chatList({ rootGetters, dispatch }) {
        return new Promise(function (resolve) {
            $api
                .get(`/chats` , {
                    headers: {
                        Authorization: rootGetters["auth/bearer_token"],
                        // Authorization: state.token,
                    },
                })
                .then(function (res) {
                    if (res.status == 200) {
                        resolve(res.data);
                    }
                })
                .catch(function (err) {
                    if (err.response.status == 401) {
                        dispatch("auth/logoutUser", {}, { root: true }).then(
                            () => {}
                        );
                    }
                });
        });
    },
    openChat({ rootGetters, dispatch },pl) {
        return new Promise(function (resolve) {
            $api
                .post(`/open-chat`, pl, {
                    headers: {
                        Authorization: rootGetters["auth/bearer_token"],
                        // Authorization: state.token,
                    },
                })
                .then(function (res) {
                    if (res.status == 200) {
                        resolve(res.data);
                    }
                })
                .catch(function (err) {
                    if (err.response.status == 401) {
                        dispatch("auth/logoutUser", {}, { root: true }).then(
                            () => {}
                        );
                    }
                });
        });
    },
    sendMessage({ rootGetters, dispatch },pl) {
        return new Promise(function (resolve) {
            $api
                .post(`/send-message`, pl, {
                    headers: {
                        Authorization: rootGetters["auth/bearer_token"],
                        // Authorization: state.token,
                    },
                })
                .then(function (res) {
                    if (res.status == 200) {
                        resolve(res.data);
                    }
                })
                .catch(function (err) {
                    if (err.response.status == 401) {
                        dispatch("auth/logoutUser", {}, { root: true }).then(
                            () => {}
                        );
                    }
                });
        });
    },
    newChat({ rootGetters, dispatch },pl) {
        return new Promise(function (resolve) {
            $api
                .post(`/start-chat`, pl, {
                    headers: {
                        Authorization: rootGetters["auth/bearer_token"],
                        // Authorization: state.token,
                    },
                })
                .then(function (res) {
                    if (res.status == 200) {
                        resolve(res.data);
                    }
                })
                .catch(function (err) {
                    if (err.response.status == 401) {
                        dispatch("auth/logoutUser", {}, { root: true }).then(
                            () => {}
                        );
                    }
                });
        });
    },
    contacts({ rootGetters, dispatch }) {
        return new Promise(function (resolve) {
            $api
                .get(`/show-users`, {
                    headers: {
                        Authorization: rootGetters["auth/bearer_token"],
                        // Authorization: state.token,
                    },
                })
                .then(function (res) {
                    if (res.status == 200) {
                        resolve(res.data);
                    }
                })
                .catch(function (err) {
                    if (err.response.status == 401) {
                        dispatch("auth/logoutUser", {}, { root: true }).then(
                            () => {}
                        );
                    }
                });
        });
    },
    deleteChat({ rootGetters, dispatch },pl) {
        return new Promise(function (resolve) {
            $api
                .post(`/delete-chat`,pl, {
                    headers: {
                        Authorization: rootGetters["auth/bearer_token"],
                        // Authorization: state.token,
                    },
                })
                .then(function (res) {
                    if (res.status == 200) {
                        resolve(res.data);
                    }
                })
                .catch(function (err) {
                    if (err.response.status == 401) {
                        dispatch("auth/logoutUser", {}, { root: true }).then(
                            () => {}
                        );
                    }
                });
        });
    },
};

export const mutations = {
    setData(state, data) {
        state.data.list = data.data;
        state.data.links = data.links;
        state.data.current_page = data.current_page;
        state.data.last_page = data.last_page;
        state.data.per_page = data.per_page;
        state.data.total = data.total;
    },

    clearData(state) {
        state.data.list = [];
        state.data.links = [];
        state.data.current_page = 0;
        state.data.last_page = 0;
        state.data.per_page = 0;
        state.data.total = 0;
    },
};

export const getters = {};

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
};
