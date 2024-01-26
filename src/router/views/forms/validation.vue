<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";
import useVuelidate from "@vuelidate/core";

import {
  required,
  helpers,
  email,
  minLength,
  sameAs,
  maxLength,
  minValue,
  maxValue,
  numeric,
  url,
  alphaNum,
} from "@vuelidate/validators";

/**
 * Form validation component
 */
export default {
  page: {
    title: "Form Validation",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Form Validation",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Form Validation",
          active: true,
        },
      ],
      form: {
        fname: "",
        lname: "",
        city: "",
        state: "",
        zipcode: "",
      },
      tooltipform: {
        fname: "",
        lname: "",
        username: "",
        city: "",
        state: "",
      },
      range: {
        minlen: "",
        maxlength: "",
        between: "",
        minval: "",
        maxval: "",
        rangeval: "",
        expr: "",
      },
      typeform: {
        name: "",
        password: "",
        confirmPassword: "",
        email: "",
        url: "",
        digit: "",
        number: "",
        alphanum: "",
        textarea: "",
      },
      submitted: false,
      submitform: false,
      submit: false,
      typesubmit: false,
    };
  },
  setup() {
    return { v$: useVuelidate() };
  },
  validations: {
    form: {
      fname: {
        required: helpers.withMessage("First Name is required", required),
      },
      lname: {
        required: helpers.withMessage("Last Name is required", required),
      },
      city: { required: helpers.withMessage("City is required", required) },
      state: { required: helpers.withMessage("State is required", required) },
      zipcode: {
        required: helpers.withMessage("Zipcode is required", required),
      },
    },
    tooltipform: {
      fname: { required: helpers.withMessage("Fname is required", required) },
      lname: { required: helpers.withMessage("Lname is required", required) },
      username: {
        required: helpers.withMessage("Username is required", required),
      },
      city: { required: helpers.withMessage("City is required", required) },
      state: { required: helpers.withMessage("State is required", required) },
    },
    range: {
      minlen: {
        required: helpers.withMessage("Minlen is required", required),
        minLength: minLength(6),
      },
      maxlength: {
        required: helpers.withMessage("Maxlength is required", required),
        maxLength: maxLength(6),
      },
      between: {
        required: helpers.withMessage("Between is required", required),
        minLength: minLength(5),
        maxLength: maxLength(10),
      },
      minval: {
        required: helpers.withMessage("Minval is required", required),
        minValue: minValue(6),
      },
      maxval: {
        required: helpers.withMessage("Maxval is required", required),
        maxValue: maxValue(6),
      },
      rangeval: {
        required: helpers.withMessage("Rangeval is required", required),
        minValue: minValue(6),
        maxValue: maxValue(100),
      },
      expr: { required: helpers.withMessage("Expr is required", required) },
    },
    typeform: {
      name: { required: helpers.withMessage("Name is required", required) },
      password: {
        required: helpers.withMessage("Password is required", required),
        minLength: minLength(6),
      },
      confirmPassword: {
        required: helpers.withMessage("ConfirmPassword is required", required),
        sameAsPassword: sameAs("password"),  
      },
      email: {
        required: helpers.withMessage("Email is required", required),
        email,
      },
      url: { required: helpers.withMessage("Url is required", required), url },
      digit: {
        required: helpers.withMessage("Digit is required", required),
        numeric,
      },
      number: {
        required: helpers.withMessage("Number is required", required),
        numeric,
      },
      alphanum: {
        required: helpers.withMessage("Alphanum is required", required),
        alphaNum,
      },
      textarea: {
        required: helpers.withMessage("Textarea is required", required),
      },
    },
  },
  methods: {
    // eslint-disable-next-line no-unused-vars
    formSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.v$.$touch();
    },

    tooltipForm() {
      this.submitform = true;
      this.v$.$touch();
    },

    /**
     * Range validation form submit
     */
    // eslint-disable-next-line no-unused-vars
    rangeform(e) {
      this.submit = true;
      // stop here if form is invalid
      this.v$.$touch();
    },
    /**
     * Validation type submit
     */
    // eslint-disable-next-line no-unused-vars
    typeForm(e) {
      this.typesubmit = true;
      // stop here if form is invalid
      this.v$.$touch();
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bootstrap Validation - Normal</h4>
            <p class="card-title-desc">
              Provide valuable, actionable feedback to your users with HTML5
              form validation–available in all our supported browsers.
            </p>
            <form class="needs-validation" @submit.prevent="formSubmit">
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="validationCustom01">First name</label>
                    <input
                      id="validationCustom01"
                      v-model="form.fname"
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      :class="{
                        'is-invalid': submitted && v$.form.fname.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.form.fname.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.form.fname.required.$message">{{
                        v$.form.fname.required.$message
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3">
                    <label for="validationCustom02">Last name</label>
                    <input
                      id="validationCustom02"
                      v-model="form.lname"
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      :class="{
                        'is-invalid': submitted && v$.form.lname.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.form.lname.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.form.lname.required.$message">{{
                        v$.form.lname.required.$message
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="validationCustom03">City</label>
                    <input
                      id="validationCustom03"
                      v-model="form.city"
                      type="text"
                      class="form-control"
                      placeholder="City"
                      :class="{
                        'is-invalid': submitted && v$.form.city.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.form.city.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.form.city.required.$message">{{
                        v$.form.city.required.$message
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="validationCustom04">State</label>
                    <input
                      id="validationCustom04"
                      v-model="form.state"
                      type="text"
                      class="form-control"
                      placeholder="State"
                      :class="{
                        'is-invalid': submitted && v$.form.state.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.form.state.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.form.state.required.$message">{{
                        v$.form.state.required.$message
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3">
                    <label for="validationCustom05">Zip</label>
                    <input
                      id="validationCustom05"
                      v-model="form.zipcode"
                      type="text"
                      class="form-control"
                      placeholder="Zip"
                      :class="{
                        'is-invalid': submitted && v$.form.zipcode.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.form.zipcode.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.form.zipcode.required.$message">{{
                        v$.form.zipcode.required.$message
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-check mb-3">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="invalidCheck"
                  required=""
                />
                <label class="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Bootstrap Validation (Tooltips)</h4>
            <p class="card-title-desc">
              If your form layout allows it, you can swap the
              <code>.{valid|invalid}-feedback</code> classes for
              <code>.{valid|invalid}-tooltip</code> classes to display
              validation feedback in a styled tooltip.
            </p>
            <form class="needs-validation" @submit.prevent="tooltipForm">
              <div class="row">
                <div class="col-md-4">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltip01">First name</label>
                    <input
                      id="validationTooltip01"
                      v-model="tooltipform.fname"
                      type="text"
                      class="form-control"
                      placeholder="First name"
                      :class="{
                        'is-invalid': submitform && v$.tooltipform.fname.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.tooltipform.fname.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.tooltipform.fname.required.$message">{{
                        v$.tooltipform.fname.required.$message
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltip02">Last name</label>
                    <input
                      id="validationTooltip02"
                      v-model="tooltipform.lname"
                      type="text"
                      class="form-control"
                      placeholder="Last name"
                      :class="{
                        'is-invalid': submitform && v$.tooltipform.lname.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.tooltipform.lname.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.tooltipform.lname.required.$message">{{
                        v$.tooltipform.lname.required.$message
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltipUsername">Username</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span
                          id="validationTooltipUsernamePrepend"
                          class="input-group-text"
                          >@</span
                        >
                      </div>
                      <input
                        id="validationTooltipUsername"
                        v-model="tooltipform.username"
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-describedby="validationTooltipUsernamePrepend"
                        :class="{
                          'is-invalid':
                            submitform && v$.tooltipform.username.$error,
                        }"
                      />
                      <div
                        v-if="submitted && v$.tooltipform.username.$error"
                        class="invalid-feedback"
                      >
                        <span
                          v-if="v$.tooltipform.username.required.$message"
                          >{{ v$.tooltipform.username.required.$message }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltip03">City</label>
                    <input
                      id="validationTooltip03"
                      v-model="tooltipform.city"
                      type="text"
                      class="form-control"
                      placeholder="City"
                      :class="{
                        'is-invalid': submitform && v$.tooltipform.city.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.tooltipform.city.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.tooltipform.city.required.$message">{{
                        v$.tooltipform.city.required.$message
                      }}</span>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="mb-3 position-relative">
                    <label for="validationTooltip04">State</label>
                    <input
                      id="validationTooltip04"
                      v-model="tooltipform.state"
                      type="text"
                      class="form-control"
                      placeholder="State"
                      :class="{
                        'is-invalid': submitform && v$.tooltipform.state.$error,
                      }"
                    />
                    <div
                      v-if="submitted && v$.tooltipform.state.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="v$.tooltipform.state.required.$message">{{
                        v$.tooltipform.state.required.$message
                      }}</span>
                    </div>
                  </div>
                </div>
              </div>
              <button class="btn btn-primary" type="submit">Submit form</button>
            </form>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Validation type</h4>
            <p class="card-title-desc">
              Parsley is a javascript form validation library. It helps you
              provide your users with feedback on their form submission before
              sending it to your server.
            </p>

            <form action="#" @submit.prevent="typeForm">
              <div class="mb-3">
                <label>Required</label>
                <input
                  v-model="typeform.name"
                  type="text"
                  class="form-control"
                  placeholder="Type something"
                  name="name"
                  :class="{
                    'is-invalid': typesubmit && v$.typeform.name.$error,
                  }"
                />
                <div
                  v-if="submitted && v$.typeform.name.$error"
                  class="invalid-feedback"
                >
                  <span v-if="v$.typeform.name.required.$message">{{
                    v$.typeform.name.required.$message
                  }}</span>
                </div>
              </div>

              <div class="mb-3">
                <label>Equal To</label>
                <div>
                  <input
                    v-model="typeform.password"
                    type="password"
                    name="password"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.password.$error,
                    }"
                    placeholder="Password"
                  />
                  <div
                    v-for="(item, index) in v$.typeform.password.$errors"
                    :key="index"
                    class="invalid-feedback"
                  >
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
                <div class="mt-2">
                  <input
                    v-model="typeform.confirmPassword"
                    type="password"
                    name="confirmPassword"
                    class="form-control"
                    :class="{
                      'is-invalid':
                        typesubmit && v$.typeform.confirmPassword.$error,
                    }"
                    placeholder="Re-Type Password"
                  />
                  <div
                    v-for="(item, index) in v$.typeform.confirmPassword.$errors"
                    :key="index"
                    class="invalid-feedback"
                  >
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>

              <div class="mb-3">
                <label>E-Mail</label>
                <div>
                  <input
                    v-model="typeform.email"
                    type="email"
                    name="email"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.email.$error,
                    }"
                    placeholder="Enter a valid e-mail"
                  />
                  <div
                    v-for="(item, index) in v$.typeform.email.$errors"
                    :key="index"
                    class="invalid-feedback"
                  >
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>URL</label>
                <div>
                  <input
                    v-model="typeform.url"
                    type="url"
                    name="url"
                    class="form-control"
                    placeholder="URL"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.url.$error,
                    }"
                  />
                  <div
                    v-for="(item, index) in v$.typeform.url.$errors"
                    :key="index"
                    class="invalid-feedback"
                  >
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Digits</label>
                <div>
                  <input
                    v-model="typeform.digit"
                    type="text"
                    name="digit"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.digit.$error,
                    }"
                    placeholder="Enter only digits"
                  />
                  <div
                    v-for="(item, index) in v$.typeform.digit.$errors"
                    :key="index"
                    class="invalid-feedback"
                  >
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Number</label>
                <div>
                  <input
                    v-model="typeform.number"
                    type="text"
                    name="number"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.number.$error,
                    }"
                    placeholder="Enter only numbers"
                  />
                  <div
                    v-for="(item, index) in v$.typeform.number.$errors"
                    :key="index"
                    class="invalid-feedback"
                  >
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Alphanumeric</label>
                <div>
                  <input
                    v-model="typeform.alphanum"
                    type="text"
                    name="alphanum"
                    class="form-control"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.alphanum.$error,
                    }"
                    placeholder="Enter alphanumeric value"
                  />
                  <div
                    v-for="(item, index) in v$.typeform.alphanum.$errors"
                    :key="index"
                    class="invalid-feedback"
                  >
                    <span v-if="item.$message">{{ item.$message }}</span>
                  </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Textarea</label>
                <div>
                  <textarea
                    v-model="typeform.textarea"
                    class="form-control"
                    name="textarea"
                    :class="{
                      'is-invalid': typesubmit && v$.typeform.textarea.$error,
                    }"
                    rows="5"
                  ></textarea>
                  <div
                    v-if="typesubmit && v$.typeform.textarea.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!v$.typeform.textarea.required"
                      >This value is required.</span
                    >
                  </div>
                </div>
              </div>
              <div class="mb-3 mb-0">
                <div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary ms-1">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col-->

      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Range validation</h4>
            <p class="card-title-desc">
              Parsley is a javascript form validation library. It helps you
              provide your users with feedback on their form submission before
              sending it to your server.
            </p>

            <form action="#" @submit.prevent="rangeform">
              <div class="mb-3">
                <label>Min Length</label>
                <div>
                  <input
                    v-model="range.minlen"
                    type="text"
                    name="minlen"
                    class="form-control"
                    :class="{ 'is-invalid': submit && v$.range.minlen.$error }"
                    placeholder="Min 6 chars."
                  />
                    <div
                  v-for="(item, index) in v$.range.minlen.$errors"
                  :key="index"
                  class="invalid-feedback"
                >
                  <span v-if="item.$message">{{ item.$message }}</span>
                </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Max Length</label>
                <div>
                  <input
                    v-model="range.maxlength"
                    type="text"
                    class="form-control"
                    name="maxlength"
                    :class="{
                      'is-invalid': submit && v$.range.maxlength.$error,
                    }"
                    placeholder="Max 6 chars."
                  />
                 <div
                  v-for="(item, index) in v$.range.maxlength.$errors"
                  :key="index"
                  class="invalid-feedback"
                >
                  <span v-if="item.$message">{{ item.$message }}</span>
                </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Range Length</label>
                <div>
                  <input
                    v-model="range.between"
                    type="text"
                    class="form-control"
                    name="between"
                    :class="{ 'is-invalid': submit && v$.range.between.$error }"
                    placeholder="Text between 5 - 10 chars length"
                  />
                 <div
                  v-for="(item, index) in v$.range.between.$errors"
                  :key="index"
                  class="invalid-feedback"
                >
                  <span v-if="item.$message">{{ item.$message }}</span>
                </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Min Value</label>
                <div>
                  <input
                    v-model="range.minval"
                    type="text"
                    name="minval"
                    class="form-control"
                    :class="{ 'is-invalid': submit && v$.range.minval.$error }"
                    placeholder="Min value is 6"
                  />
                  <div
                  v-for="(item, index) in v$.range.minval.$errors"
                  :key="index"
                  class="invalid-feedback"
                >
                  <span v-if="item.$message">{{ item.$message }}</span>
                </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Max Value</label>
                <div>
                  <input
                    v-model="range.maxval"
                    type="text"
                    class="form-control"
                    name="maxval"
                    :class="{ 'is-invalid': submit && v$.range.maxval.$error }"
                    placeholder="Max value is 6"
                  />
                 <div
                  v-for="(item, index) in v$.range.maxval.$errors"
                  :key="index"
                  class="invalid-feedback"
                >
                  <span v-if="item.$message">{{ item.$message }}</span>
                </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Range Value</label>
                <div>
                  <input
                    v-model="range.rangeval"
                    type="text"
                    class="form-control"
                    name="rangeval"
                    :class="{
                      'is-invalid': submit && v$.range.rangeval.$error,
                    }"
                    placeholder="Number between 6 - 100"
                  />
                 <div
                  v-for="(item, index) in v$.range.rangeval.$errors"
                  :key="index"
                  class="invalid-feedback"
                >
                  <span v-if="item.$message">{{ item.$message }}</span>
                </div>
                </div>
              </div>
              <div class="mb-3">
                <label>Regular Exp</label>
                <div>
                  <input
                    v-model="range.expr"
                    type="text"
                    class="form-control"
                    name="expr"
                    :class="{ 'is-invalid': submit && v$.range.expr.$error }"
                    placeholder="Hex. Color"
                  />
                   <div
                  v-for="(item, index) in v$.range.expr.$errors"
                  :key="index"
                  class="invalid-feedback"
                >
                  <span v-if="item.$message">{{ item.$message }}</span>
                </div>
                </div>
              </div>

              <div class="mb-3 mb-0">
                <div>
                  <button type="submit" class="btn btn-primary">Submit</button>
                  <button type="reset" class="btn btn-secondary ms-1">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>