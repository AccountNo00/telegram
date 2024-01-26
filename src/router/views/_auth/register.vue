<script>
import Layout from "../../layouts/auth";
import { mapActions } from "vuex";
import Swal from "sweetalert2";
export default {
	components: {
		Layout,
	},
	data() {
		return {
			username: "",
			password: "",
			confirm_password: "",
		};
	},
	computed: {},
	methods: {
		...mapActions("auth", {
			register: "registerUser",
		}),
		async registration() {
			var pl = {
				username: this.username,
				password: this.password,
				confirm_password: this.confirm_password,
			};
			if (this.password != this.confirm_password) {
				Swal.fire({
					title: "Password/Confirm Password does not match ",
					html: `Your password and confirm password must be the same.`,
					type: "error",
					icon: "error",
					confirmButtonColor: "#556ee6",
					showCancelButton: false,
					padding: "2em",
				});
			} else if (
				this.username == "" ||
				this.password == "" ||
				this.confirm_password == ""
			) {
				Swal.fire({
					title: "Fill all the fields",
					html: `Make sure all fields are not empty`,
					type: "error",
					icon: "error",
					confirmButtonColor: "#556ee6",
					showCancelButton: false,
					padding: "2em",
				});
			} else if (this.password == this.confirm_password) {
				const confirmed = await Swal.fire({
					title: "Are you sure?",
					html: `You want to register new account?`,
					type: "warning",
					icon: "warning",
					confirmButtonColor: "#556ee6",
					showCancelButton: true,
					padding: "2em",
				}).then((result) => {
					return result.isConfirmed;
				});
				if (confirmed) {
					const success = await this.register(pl);
					if (success.status == 200 || success.status == "success") {
						Swal.fire({
							title: "Successful",
							html: `Account created successfuly`,
							icon: "success",
							type: "success",
							showConfirmButton: false,
						});
						this.$router.push({ path: "/login" });
					} else {
						Swal.fire({
							title: "Failed",
							html: `Failed to create account`,
							type: "error",
							icon: "error",
							confirmButtonColor: "#556ee6",
							padding: "2em",
						});
					}
				}
			}
		},
	},
	mounted() {},
};
</script>

<template>
	<Layout>
		<div class="row justify-content-center">
			<div class="main-container mt-5">
				<div class="col-2 mx-auto">
					<div class="row">
						<label>
							Username
							<input
								class="form-control mb-2"
								placeholder="Enter Username"
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
						<label>
							Confirm Password
							<input
								class="form-control mb-2"
								placeholder="Enter confirm password"
								type="password"
								v-model="confirm_password"
							/>
						</label>
					</div>
					<button class="btn btn-info w-100" @click="registration()">
						Register
					</button>
				</div>
			</div>
		</div>
	</Layout>
</template>