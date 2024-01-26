<script>
// import axios from "axios";
import { required, email, helpers } from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";

import appConfig from "@/app.config";
/**
 * Recover password Sample page
 */
export default {
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    email: {
      required: helpers.withMessage("Email is required", required),
      email: helpers.withMessage("Please enter valid email", email),
    },
    password: {
      required: helpers.withMessage("Password is required", required),
    },
    password_confirmation: {
      required: helpers.withMessage("Confirm password is required", required),
    },
  },
  data() {
    return {
      submitted: false,
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
  methods: {
    tryToResetpwd() {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();

      if (this.v$.$invalid) {
        return;
      } else {
        // axios
        //     .post("http://127.0.0.1:8000/api/password/reset", {
        //         token: this.$route.query.token,
        //         email: this.email,
        //         password: this.password,
        //         password_confirmation: this.password_confirmation,
        //     })
        //     .then((result) => {
        //        return result;
        //     });
      }
    },
  },
  page: {
    title: "Recover password",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
};
</script>

<template>
  <div class="account-pages my-5 pt-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-8 col-lg-6 col-xl-5">
          <div class="card overflow-hidden">
            <div class="bg-soft-primary">
              <div class="row">
                <div class="col-7">
                  <div class="text-primary p-4">
                    <h5 class="text-primary">Reset Password</h5>
                    <p>Re-Password with Skote.</p>
                  </div>
                </div>
                <div class="col-5 align-self-end">
                  <img
                    src="@/assets/images/profile-img.png"
                    alt
                    class="img-fluid"
                  />
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <div>
                <a href="/">
                  <div class="avatar-md profile-user-wid mb-4">
                    <span class="avatar-title rounded-circle bg-light">
                      <img
                        src="@/assets/images/logo.svg"
                        alt
                        class="rounded-circle"
                        height="34"
                      />
                    </span>
                  </div>
                </a>
              </div>

              <div class="p-2">
                <div class="alert alert-success text-center mb-4" role="alert">
                  Enter your Email and instructions will be sent to you!
                </div>
                <form class="form-horizontal" @submit.prevent="tryToResetpwd">
                  <div class="form-group">
                    <label for="useremail">Email</label>
                    <input
                      type="email"
                      v-model="email"
                      class="form-control"
                      id="useremail"
                      placeholder="Enter email"
                      :class="{ 'is-invalid': submitted && $v.email.$error }"
                    />
                    <div
                      v-for="(item, index) in v$.email.$errors"
                      :key="index"
                      class="invalid-feedback"
                    >
                      <span v-if="item.$message">{{ item.$message }}</span>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="pwd">Password</label>
                    <input
                      type="password"
                      v-model="password"
                      class="form-control"
                      id="pwd"
                      placeholder="Enter password"
                      :class="{
                        'is-invalid': submitted && $v.password.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.user.password.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.user.password.required.$message">{{
                        v$.user.password.required.$message
                      }}</span>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="confirm_pwd">Confirm Password</label>
                    <input
                      v-model="password_confirmation"
                      type="password"
                      class="form-control"
                      id="confirm_pwd"
                      placeholder="Enter confirm password"
                      :class="{
                        'is-invalid':
                          submitted && $v.password_confirmation.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.password_confirmation.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.password_confirmation.required.$message">{{
                        v$.password_confirmation.required.$message
                      }}</span>
                    </div>
                  </div>
                  <div class="form-group row mb-0">
                    <div class="col-12 text-end">
                      <button class="btn btn-primary w-md" type="submit">
                        Reset
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div class="mt-5 text-center">
            <p>
              Remember It ?
              <router-link to="/auth/login-1" class="fw-medium text-primary"
                >Sign In here</router-link
              >
            </p>
            <p>
              © {{ new Date().getFullYear() }} Skote. Crafted with
              <i class="mdi mdi-heart text-danger"></i> by Themesbrand
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
