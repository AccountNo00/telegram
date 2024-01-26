<script>
import Layout from "../../layouts/auth";
import { mapGetters, mapActions } from "vuex";
import Swal from "sweetalert2";
export default {
	components: {
		Layout,
	},
	data() {
		return {
			username: "eremes",
			password: "pass123",
		};
	},
	computed: {
		...mapGetters("auth", ["profile"]),
	},
	methods: {
		...mapActions("auth", {
			authLogin: "loginUser",
		}),
		async login() {
			if (!this.username) {
				Swal.fire("Failed!", "Please Input Username", "");
				return;
			}
			if (!this.password) {
				Swal.fire("Failed!", "Please Input Password", "");
				return;
			}
			await this.authLogin({
				username: this.username,
				password: this.password,
			});
		},
	},
	mounted() {
		console.log('test')
	},
};
</script>

<template>
	<Layout>
		<div class="row justify-content-center">
			<div class="main-container mt-5">
				<div class="col-2 mx-auto">
					<div class="row">
						<label>
							Email
							<input
								class="form-control mb-2"
								placeholder="Enter email"
								type="text"
								v-model="username"
							/>
						</label>
						<label>
							Password
							<input
								class="form-control mb-2"
								placeholder="Enter password"
								type="password"
								v-model="password"
							/>
						</label>
					</div>
					<button class="btn btn-info w-100" @click="login()">
						Login
					</button>
				</div>
			</div>
		</div>
	</Layout>
</template>