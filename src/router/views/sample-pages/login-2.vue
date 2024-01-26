<script>
import axios from "axios";
import {
	authMethods,
	authFackMethods,
	notificationMethods,
} from "@/state/helpers";
import { mapState } from "vuex";

import appConfig from "@/app.config";
import { required, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

/**
 * Login-2 component
 */
export default {
	setup() {
		return { v$: useVuelidate() };
	},
	page: {
		title: "Login 2",
		meta: [
			{
				name: "description",
				content: appConfig.description,
			},
		],
	},
	data() {
		return {
			username: "",
			password: "",
			submitted: false,
			authError: null,
			tryingToLogIn: false,
			isAuthError: false,
			isLoggedAlert: false,
			isMessageAlert: "",
			isloggedBtn: false,
			isContactAdmin: false,
		};
	},
	validations: {
		username: {
			required: helpers.withMessage("Username is required", required),
			// username: helpers.withMessage("Please enter valid email", username),
		},
		password: {
			required: helpers.withMessage("Password is required", required),
		},
	},
	computed: {
		...mapState("authfack", ["status"]),
		notification() {
			return this.$store ? this.$store.state.notification : null;
		},
	},
	methods: {
		...authMethods,
		...authFackMethods,
		...notificationMethods,
		// Try to log the user in with the username
		// and password they provided.
		tryToLogIn() {
			this.submitted = true;
			// stop here if form is invalid
			this.v$.$touch();

			if (this.v$.$invalid) {
				return;
			} else {
				if (process.env.VUE_APP_DEFAULT_AUTH === "firebase") {
					this.tryingToLogIn = true;
					// Reset the authError if it existed.
					this.authError = null;
					return (
						this.logIn({
							email: this.email,
							password: this.password,
						})
							// eslint-disable-next-line no-unused-vars
							.then((token) => {
								this.tryingToLogIn = false;
								this.isAuthError = false;
								// Redirect to the originally requested page, or to the home page
								this.$router.push(
									this.$route.query.redirectFrom || {
										name: "default",
									}
								);
							})
							.catch((error) => {
								this.tryingToLogIn = false;
								this.authError = error ? error : "";
								this.isAuthError = true;
							})
					);
				} else if (process.env.VUE_APP_DEFAULT_AUTH === "fakebackend") {
					const { email, password } = this;
					if (email && password) {
						this.login({
							email,
							password,
						});
					}
				} else if (process.env.VUE_APP_DEFAULT_AUTH === "authapi") {
					axios
						.post("http://127.0.0.1:8000/api/login", {
							email: this.email,
							password: this.password,
						})
						.then((res) => {
							return res;
						});
				}
			}
		},
	},
	mounted() {
		document.body.classList.add("auth-body-bg");
	},
};
</script>

<template>
	<div>
		<div class="container-fluid p-0">
			<div class="row g-0">
				<div class="col-xl-9">
					<div class="auth-full-bg pt-lg-5 p-4">
						<div class="w-100">
							<div class="bg-overlay"></div>
							<div class="d-flex h-100 flex-column">
								<div class="p-4 mt-auto">
									<div class="row justify-content-center">
										<div class="col-lg-7">
											<div class="text-center">
												<h4 class="mb-3">
													<i class="
															bx
															bxs-quote-alt-left
															text-primary
															h1
															align-middle
															me-3
														"></i><span class="text-primary">5k</span>+ Satisfied
													clients
												</h4>

												<div dir="ltr" class="owl-theme">
													<!-- <b-carousel id="carousel-1" :interval="4000" indicators>

														<b-carousel-slide>
															<p class="font-size-16 mb-4">
																" If Every Vendor on Envato are as supportive as
																Themesbrand, Development with be a nice
																experience. You guys are Wonderful. Keep us the
																good work. "
															</p>
															<div>
																<h4 class="font-size-16 text-primary">
																	nezerious
																</h4>
																<p class="font-size-14 mb-0">- Skote User</p>
															</div>
														</b-carousel-slide>
													</b-carousel> -->
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- end col -->

				<div class="col-xl-3">
					<div class="auth-full-page-content p-md-5 p-4">
						<div class="w-100">
							<div class="d-flex flex-column h-100">
								<div class="mb-4 mb-md-5">
									<router-link to="/" class="d-block auth-logo">
										<img src="@/assets/images/logo-dark.png" alt="" height="18"
											class="auth-logo-dark" />
										<img src="@/assets/images/logo-light.png" alt="" height="18"
											class="auth-logo-light" />
									</router-link>
								</div>
								<div class="my-auto">
									<div>
										<h5 class="text-primary">Welcome Back !</h5>
										<p class="text-muted">Sign in to continue to Inventory System.</p>
									</div>
									<b-alert v-model="isAuthError" variant="danger" class="mt-3" dismissible>{{
										authError
									}}</b-alert>

									<div v-if="isLoggedAlert" class="alert alert-danger">
										{{ isMessageAlert }}
									</div>
									<div class="mt-4">
										<b-form class="p-2" @submit.prevent="login">
											<b-form-group class="mb-3" id="input-group-1" label="Username"
												label-for="input-1">
												<b-form-input id="input-1" v-model="username" v-on:keyup="userInput"
													type="text" placeholder="Enter username" :class="{
														'is-invalid':
															submitted && v$.username.$error,
													}"></b-form-input>
												<div v-for="(item, index) in v$.username.$errors" :key="index"
													class="invalid-feedback">
													<span v-if="item.$message">{{
														item.$message
													}}</span>
												</div>
											</b-form-group>

											<b-form-group class="mb-3" id="input-group-2" label="Password"
												label-for="input-2">
												<b-form-input id="input-2" v-model="password" v-on:keyup="passInput"
													type="password" placeholder="Enter password" :class="{
														'is-invalid':
															submitted && v$.password.$error,
													}"></b-form-input>
												<div v-if="submitted && v$.password.$error" class="invalid-feedback">
													<span v-if="v$.password.required.$message">{{
														v$.password.required.$message
													}}</span>
												</div>
											</b-form-group>
											<!-- <b-form-checkbox
								class="form-check me-2 mt-0"
								id="customControlInline"
								name="checkbox-1"
								value="accepted"
								unchecked-value="not_accepted"
							>Remember me
							</b-form-checkbox> -->
											<div class="mt-3 d-grid">
												<b-button type="submit" variant="primary" class="btn-block">Log
													In</b-button>
											</div>
											<!-- <div class="mt-4 text-center">
								<h5 class="font-size-14 mb-3">Sign in with</h5>

								<ul class="list-inline">
									<li class="list-inline-item">
										<a
											href="javascript: void(0);"
											class="
												social-list-item
												bg-primary
												text-white
												border-primary
											"
										>
											<i class="mdi mdi-facebook"></i>
										</a>
									</li>
									<li class="list-inline-item">
										<a
											href="javascript: void(0);"
											class="social-list-item bg-info text-white border-info"
										>
											<i class="mdi mdi-twitter"></i>
										</a>
									</li>
									<li class="list-inline-item">
										<a
											href="javascript: void(0);"
											class="
												social-list-item
												bg-danger
												text-white
												border-danger
											"
										>
											<i class="mdi mdi-google"></i>
										</a>
									</li>
								</ul>
							</div> -->
											<div class="mt-4 text-center">
												<a @click="contactAdmin" class="text-muted pointer">
													<i class="mdi mdi-lock me-1"></i> Forgot
													your password?
												</a>
											</div>
										</b-form>
										<!-- <div class="mt-5 text-center">
											<p>
												Don't have an account ?
												<router-link to="/auth/register-2" class="fw-medium text-primary">
													Signup now
												</router-link>
											</p>
										</div> -->
									</div>
								</div>

								<div class="mt-4 mt-md-5 text-center">
									<p>
										Don't have an account ?
										<a @click="contactAdmin" class="fw-medium text-primary pointer">Signup now</a>
									</p>
									<p class="mb-0">
										©
										{{ new Date().getFullYear() }} Crafted with
										<i class="mdi mdi-heart text-danger"></i> by .ARA Inc.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<!-- end col -->
			</div>
			<!-- end row -->
		</div>
		<!-- end container-fluid -->
	</div>
</template>

<style lang="scss" scoped>
.carousel-caption {
	position: relative !important;
	right: 0;
	bottom: 1.25rem;
	left: 0;
	padding-top: 1.25rem;
	padding-bottom: 1.25rem;
	color: #495057;
	text-align: center;
}

.carousel-indicators li {
	background-color: rgba(85, 110, 230, 0.25);
}
</style>