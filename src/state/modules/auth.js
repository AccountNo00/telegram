import $cookies from "vue-cookies";
import router from "../../router/index";
import $api from "../api";
export const state = {
    token: $cookies.get("token"),
    profile_token: $cookies.get("profile"),
    user_token: $cookies.get("userId"),
}

export const mutations = {
    setToken(state ,data) {
        var token = `${data.token_type} ${data.access_token}`;
        var tokenUser = `${data.username}`;
        var tokenId = `${data.id}`;
        state.token = token;
        state.profile_token = tokenUser;
        state.user_token = tokenId;
        $cookies.set("token", token);
        $cookies.set("profile", tokenUser);
        $cookies.set("userId", tokenId);
        console.log(tokenId)
        router.replace({ path: '/' }).catch(() => {});
    },
    destroyAuth(state) {
        // console.log("destroyAuth");
        $cookies.remove("token");
        $cookies.remove("profile");
        state.token = null;
        state.profile.username = null;
        router.replace({ path: "/login" }).catch(() => { });
    },
}

export const getters = {
    authenticated(state) {
        return state.token != null;
    },
    bearer_token(state) {
        return state.token;
    },
    profile(state) {
        return {
            username: state.profile_token,
            id: state.user_token,
        };
    },

}

export const actions = {
    loginUser({ rootGetters ,commit}, pl) {
		return new Promise(function (resolve) {
			$api
				.post("login", pl, {
					headers: {
						Authorization: rootGetters["auth/bearer_token"],
					},
				})
				.then(function (res) {
					if (res.status == 200) {
                        commit("setToken", res.data.data);
                        // commit("setProfile", res.data);
						resolve(res);
					}
				})
				.catch(function (err) {
					resolve(err);
				});
		});
	},
    registerUser({ rootGetters, dispatch }, pl) {
		return new Promise(function (resolve) {
			$api
				.post("register", pl, {
					headers: {
						Authorization: rootGetters["auth/bearer_token"],
					},
				})
				.then(function (res) {
					console.log(res);
					if (res.status == 200) {
						resolve(res.data);
					}
				})
				.catch(function (err) {
					if (err.response.status == 401) {
						dispatch("auth/logoutUser", {}, { root: true }).then(() => { });
					}
					if (err.response.status == 422) {
						resolve(err.response.data);
					}
				});
		});
	},
}
