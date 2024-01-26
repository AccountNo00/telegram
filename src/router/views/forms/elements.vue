<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Form-element component
 */
export default {
  page: {
    title: "Form Elements",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Form Elements",
      items: [
        {
          text: "Forms",
          href: "/",
        },
        {
          text: "Form Elements",
          active: true,
        },
      ],
      selectedprimary: "primary",
      selectedinfo: "info",
      selecteddanger: "danger",
      selectedwarning: "warning",
      selectedsuccess: "success",
      selectedToogle: "A",
      selectedRadioDefault: "a",
      selectedRadioDefault1: "a",
      selectedRadioDefault2: "a",
      selectedRadioDefault3: "a",
      selectedRadioDefault4: "a",
      selectedRadioDefault5: "a",
      selectedRadioDefault6: "a",
      selectedRadioDefault7: "a",
      selectedRadioDefault8: "a",
      selectedRadioDefault9: "a",
      selectedRadioDefault10: "a",
      selectedRadioDefault11: "a",
      selectedRadioDefault12: "a",
      selectedRadioDefault13: "a",
      selectedRadioDefault14: "a",
      status: "accepted",
      rightcheck: "accepted",
      primarycheck: "accepted",
      successcheck: "accepted",
      infocheck: "accepted",
      warningcheck: "accepted",
      dangercheck: "accepted",
      primaryoutlinecheck: "accepted",
      infooutlinecheck: "accepted",
      warningoutlinecheck: "accepted",
      dangeroutlinecheck: "accepted",
      checked: true,
      checkedf: false,
      smchecked: true,
      lgchecked: true,
      selectedSwitch: [], // Must be an array reference!
      optionsSwtich: [
        { text: 'Red', value: 'red' },
        { text: 'Green', value: 'green' },
        { text: 'Yellow (disabled)', value: 'yellow', disabled: true },
        { text: 'Blue', value: 'blue' }
      ]

    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Textual inputs</h4>
            <p class="card-title-desc">
              Here are examples of
              <code>.form-control</code> applied to each textual HTML5
              <code>&lt;input&gt;</code>
              <code>type</code>.
            </p>

            <div class="row">
              <div class="col-12">
                <form class="form-horizontal" role="form">
                  <b-form-group
                    class="mb-3"
                    id="example text"
                    label-cols-lg="2"
                    label="Text"
                    label-for="text"
                  >
                    <b-form-input
                      for="text"
                      value="Artisanal kale"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-search"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Search"
                    label-for="search"
                  >
                    <b-form-input
                      id="search"
                      value="How do I shoot web"
                      type="search"
                      name="search"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-email"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Email"
                    label-for="email"
                  >
                    <b-form-input
                      id="email"
                      value="bootstrap@example.com"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-url"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="URL"
                    label-for="url"
                  >
                    <b-form-input
                      id="url"
                      value="https://getbootstrap.com"
                      type="url"
                      name="url"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-tel"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Telephone"
                    label-for="tele"
                  >
                    <b-form-input
                      id="tele"
                      value="1-(555)-555-5555"
                      type="tel"
                      name="tel"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-password"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Password"
                    label-for="pwd"
                  >
                    <b-form-input
                      id="pwd"
                      type="password"
                      value="password"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-number"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Number"
                    label-for="number"
                  >
                    <b-form-input
                      id="number"
                      value="42"
                      type="number"
                      name="number"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-date-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date and time"
                    label-for="date-time"
                  >
                    <b-form-input
                      id="date-time"
                      value="2019-08-19T13:45:00"
                      type="datetime-local"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-date"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Date"
                    label-for="date"
                  >
                    <b-form-input
                      id="date"
                      value="2019-08-19"
                      type="date"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-month"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Month"
                    label-for="month"
                  >
                    <b-form-input
                      id="month"
                      value="2019-08"
                      type="month"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-week"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Week"
                    label-for="week"
                  >
                    <b-form-input
                      id="week"
                      value="2019-W33"
                      type="week"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-time"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Time"
                    label-for="time"
                  >
                    <b-form-input
                      id="time"
                      value="13:45:00"
                      type="time"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    class="mb-3"
                    id="example-color"
                    label-cols-sm="2"
                    label-cols-lg="2"
                    label="Color"
                    label-for="color"
                  >
                    <b-form-input
                      class="form-control-color mw-100"
                      id="color"
                      type="color"
                      name="color"
                      value="#556ee6"
                    ></b-form-input>
                  </b-form-group>

                  <div class="mb-3 row">
                    <label class="col-md-2 col-form-label">Select</label>
                    <div class="col-md-10">
                      <select class="form-control">
                        <option>Select</option>
                        <option>Large select</option>
                        <option>Small select</option>
                      </select>
                    </div>
                  </div>

                  <div class="row">
                    <label for="exampleDataList" class="col-md-2 col-form-label"
                      >Datalists</label
                    >
                    <div class="col-md-10">
                      <input
                        class="form-control"
                        list="datalistOptions"
                        id="exampleDataList"
                        placeholder="Type to search..."
                      />
                      <datalist id="datalistOptions">
                        <option value="San Francisco"></option>
                        <option value="New York"></option>
                        <option value="Seattle"></option>
                        <option value="Los Angeles"></option>
                        <option value="Chicago"></option>
                      </datalist>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- end row -->
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
            <h4 class="card-title">Sizing</h4>
            <p class="card-title-desc">
              Set heights using size like
              <code>lg</code> and <code>sm</code>.
            </p>
            <div>
              <div class="mb-4">
                <b-form-input
                  id="input-md"
                  placeholder="Default input"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <b-form-input
                  id="input-small"
                  size="sm"
                  placeholder=".form-control-sm"
                ></b-form-input>
              </div>
              <div class="mb-4">
                <b-form-input
                  id="input-lg"
                  size="lg"
                  placeholder=".form-control-lg"
                ></b-form-input>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Range Inputs</h4>
            <p class="card-title-desc">
              Set horizontally scrollable range inputs using
              <code>.form-control-range</code>.
            </p>

            <div>
              <h5 class="font-size-14">Example</h5>
              <input
                id="formControlRange"
                type="range"
                class="form-control-range form-range"
              />
            </div>
            <div class="mt-4">
              <h5 class="font-size-14">Custom Range</h5>
              <b-form-input
                id="custom-range"
                type="range"
                class="form-range"
              ></b-form-input>

              <b-form-input
                id="customRange2"
                class="mt-4 form-range"
                type="range"
                min="0"
                max="5"
              ></b-form-input>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Checkboxes</h4>

            <div class="row">
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i>
                    Default Checkboxes
                  </h5>

                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                    value="not_accepted"
                    unchecked-value="not_accepted"
                  >
                    Default checkbox
                  </b-form-checkbox>

                  <b-form-checkbox
                    id="checkbox-1"
                    v-model="status"
                    name="checkbox-1"
                    value="accepted"
                    unchecked-value="not_accepted"
                  >
                    Default checkbox Right
                  </b-form-checkbox>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Form
                    Checkboxes Right
                  </h5>

                  <div class="form-check-right">
                      <b-form-checkbox
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="not_accepted"
                      unchecked-value="not_accepted"
                    >
                      Default checkbox
                    </b-form-checkbox>
                  </div>
                  <br/>
                  <div class="form-check-right">
                    <b-form-checkbox
                      id="checkbox-1"
                      v-model="status"
                      name="checkbox-1"
                      value="accepted"
                      unchecked-value="not_accepted"
                    >
                      Default checkbox Right
                    </b-form-checkbox>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Custom
                    Checkboxes colors
                  </h5>
                  <p class="sub-header mb-4">
                    Add class
                    <code>.form-check-*</code> for a color Checkboxes
                  </p>

                  <div>
                    <div class="form-check-primary mb-3">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        Checkbox Primary
                      </b-form-checkbox>
                    </div>
                    <div class="form-check-success mb-3">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        Checkbox Success
                      </b-form-checkbox>
                    </div>
                    <div class="form-check-info mb-3">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        Checkbox Info
                      </b-form-checkbox>
                    </div>
                    <div class="form-check-warning mb-3">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        Checkbox Warning
                      </b-form-checkbox>
                    </div>
                    <div class="form-check-danger mb-3">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        Checkbox Danger
                      </b-form-checkbox>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Custom
                    Checkboxes Outline
                  </h5>
                  <p class="sub-header mb-4">
                    Add class
                    <code>.form-checkbox-outline</code> &amp;
                    <code>.form-check-*</code> for a color Checkboxes
                  </p>

                  <div>
                    <div class="form-checkbox-outline form-check-primary mb-3">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        Checkbox Outline Primary
                      </b-form-checkbox>
                    </div>

                    <div class="form-checkbox-outline form-check-success mb-3">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        Checkbox Outline Success
                      </b-form-checkbox>
                    </div>

                    <div class="form-checkbox-outline form-check-info mb-3">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        Checkbox Outline Info
                      </b-form-checkbox>
                    </div>
                    <div class="form-checkbox-outline form-check-warning mb-3">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        Checkbox Outline Warning
                      </b-form-checkbox>
                    </div>
                    <div class="form-checkbox-outline form-check-danger mb-3">
                      <b-form-checkbox
                        id="checkbox-1"
                        v-model="status"
                        name="checkbox-1"
                        value="accepted"
                        unchecked-value="not_accepted"
                      >
                        Checkbox Outline Danger
                      </b-form-checkbox>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Radios</h4>

            <div class="row">
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">Default Radios</h5>

                  <b-form-group v-slot="{ ariaDescribedby1 }">
                    <b-form-radio v-model="selectedRadioDefault" :aria-describedby="ariaDescribedby1" name="some-radios1" value="b">Default Radio</b-form-radio>
                    <b-form-radio v-model="selectedRadioDefault" :aria-describedby="ariaDescribedby1" name="some-radios1" value="a">Default Radio Right</b-form-radio>
                  </b-form-group>

                </div>
              </div>

              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14 mb-4">Form Radios Right</h5>
                  <div>
                    <b-form-group class="form-check-right" v-slot="{ ariaDescribedby }">
                      <b-form-radio v-model="selectedRadioDefault1" :aria-describedby="ariaDescribedby" name="some-radios2" value="b">Default Radio</b-form-radio>
                      <b-form-radio v-model="selectedRadioDefault1" :aria-describedby="ariaDescribedby" name="some-radios2" value="a">Default Radio Right</b-form-radio>
                    </b-form-group>
                  </div>
                </div>
              </div>

              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Form
                    Radio colors
                  </h5>
                  <p class="sub-header mb-4">
                    Add class <code>.form-radio-* </code> for a color Radios
                  </p>

                  <div>

                    <b-form-group v-slot="{ ariaDescribedby }" class="form-radio-primary">
                      <b-form-radio v-model="selectedRadioDefault2" :aria-describedby="ariaDescribedby" name="some-radios3" value="a">Radio Primary</b-form-radio>
                    </b-form-group>
                    <b-form-group v-slot="{ ariaDescribedby }" class="form-radio-success">
                      <b-form-radio v-model="selectedRadioDefault3" :aria-describedby="ariaDescribedby" name="some-radios4" value="a">Radio Success</b-form-radio>
                    </b-form-group>
                    <b-form-group v-slot="{ ariaDescribedby }" class="form-radio-info">
                      <b-form-radio v-model="selectedRadioDefault4" :aria-describedby="ariaDescribedby" name="some-radios5" value="a">Radio Info</b-form-radio>
                    </b-form-group>
                    <b-form-group v-slot="{ ariaDescribedby }" class="form-radio-warning">
                      <b-form-radio v-model="selectedRadioDefault5" :aria-describedby="ariaDescribedby" name="some-radios6" value="a">Radio Warning</b-form-radio>
                    </b-form-group>
                    <b-form-group v-slot="{ ariaDescribedby }" class="form-radio-danger">
                      <b-form-radio v-model="selectedRadioDefault6" :aria-describedby="ariaDescribedby" name="some-radios7" value="a">Radio Danger</b-form-radio>
                    </b-form-group>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="mt-4">
                  <h5 class="font-size-14">
                    <i class="mdi mdi-arrow-right text-primary me-1"></i> Form
                    Radio Outline
                  </h5>
                  <p class="sub-header mb-4">
                    Add class <code>form-radio-outline</code> &amp;
                    <code>.form-radio-* </code> for a color Checkboxes
                  </p>

                  <div>
                    <b-form-group v-slot="{ ariaDescribedby }" class="form-radio-outline form-radio-primary">
                      <b-form-radio v-model="selectedRadioDefault7" :aria-describedby="ariaDescribedby" name="some-radios8" value="a">Radio Outline Primary</b-form-radio>
                    </b-form-group>
                    <b-form-group v-slot="{ ariaDescribedby }" class="form-radio-outline form-radio-success">
                      <b-form-radio v-model="selectedRadioDefault8" :aria-describedby="ariaDescribedby" name="some-radios9" value="a">Radio Outline Success</b-form-radio>
                    </b-form-group>
                    <b-form-group v-slot="{ ariaDescribedby }" class="form-radio-outline form-radio-info">
                      <b-form-radio v-model="selectedRadioDefault9" :aria-describedby="ariaDescribedby" name="some-radios10" value="a">Radio Outline Info</b-form-radio>
                    </b-form-group>
                    <b-form-group v-slot="{ ariaDescribedby }" class="form-radio-outline form-radio-warning">
                      <b-form-radio v-model="selectedRadioDefault10" :aria-describedby="ariaDescribedby" name="some-radios11" value="a">Radio Outline Warning</b-form-radio>
                    </b-form-group>
                    <b-form-group v-slot="{ ariaDescribedby }" class="form-radio-outline form-radio-danger">
                      <b-form-radio v-model="selectedRadioDefault11" :aria-describedby="ariaDescribedby" name="some-radios12" value="a">Radio Outline Danger</b-form-radio>
                    </b-form-group>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Switches</h4>
            <p class="card-title-desc">
              A switch has the markup of a custom checkbox but uses the
              <code>.custom-switch</code> class to render a toggle switch.
              Switches also support the <code>disabled</code> attribute.
            </p>

            <div class="row">
              <div class="col-sm-6">
                <div>
                  <h5 class="font-size-14 mb-3">Switch examples</h5>
                  
                  <div class="mb-3">
                    <b-form-checkbox v-model="checkedf" name="check-button" switch>
                      Default switch checkbox input <b>(Checked: {{ checkedf }})</b>
                    </b-form-checkbox>
                  </div>

                  <div class="mb-3">
                    <b-form-checkbox v-model="checked" name="check-button" switch>
                      Checked switch checkbox input <b>(Checked: {{ checked }})</b>
                    </b-form-checkbox>
                  </div>

                  <b-form-group
                    label="Inline switch style checkboxes"
                    v-slot="{ ariaDescribedby }"
                  >
                    <b-form-checkbox-group
                      v-model="selectedSwitch"
                      :options="optionsSwtich"
                      :aria-describedby="ariaDescribedby"
                      switches
                    ></b-form-checkbox-group>
                  </b-form-group>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mt-4 mt-sm-0">
                  <h5 class="font-size-14 mb-3">Switch sizes</h5>
                  <b-form-checkbox switch size="sm">Small</b-form-checkbox>
                  <b-form-checkbox switch>Default</b-form-checkbox>
                  <b-form-checkbox switch size="lg">Large</b-form-checkbox>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">File browser</h4>

            <div>
              <h5 class="font-size-14">
                <i class="mdi mdi-arrow-right text-primary"></i> Default file
                input
              </h5>
              <div class="row">
                <div class="col-sm-6">
                  <div class="mt-3">
                    <label for="formFile" class="form-label"
                      >Default file input example</label
                    >
                    <input class="form-control" type="file" id="formFile" />
                  </div>
                </div>
              </div>
              <!-- end row -->

              <div class="row">
                <div class="col-sm-6">
                  <div class="mt-4">
                    <div>
                      <label for="formFileSm" class="form-label"
                        >Small file input example</label
                      >
                      <input
                        class="form-control form-control-sm"
                        id="formFileSm"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
                <!-- end col -->
                <div class="col-sm-6">
                  <div class="mt-4">
                    <div>
                      <label for="formFileLg" class="form-label"
                        >Large file input example</label
                      >
                      <input
                        class="form-control form-control-lg"
                        id="formFileLg"
                        type="file"
                      />
                    </div>
                  </div>
                </div>
                <!-- end col -->
              </div>
              <!-- end row -->
            </div>

            <div class="mt-4 pt-2">
              <h5 class="font-size-14 mb-0">
                <i class="mdi mdi-arrow-right text-primary"></i> Custom file
                input
              </h5>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="mt-4">
                  <div>
                    <label class="form-label">With Label</label>
                    <div class="input-group mb-3">
                      <label class="input-group-text" for="inputGroupFile01"
                        >Upload</label
                      >
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile01"
                      />
                    </div>
                    <div class="input-group">
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile02"
                      />
                      <label class="input-group-text" for="inputGroupFile02"
                        >Upload</label
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-sm-6">
                <div class="mt-4">
                  <div>
                    <label class="form-label">With Button</label>
                    <div class="input-group mb-3">
                      <button
                        class="btn btn-primary"
                        type="button"
                        id="inputGroupFileAddon03"
                      >
                        Button
                      </button>
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile03"
                        aria-describedby="inputGroupFileAddon03"
                        aria-label="Upload"
                      />
                    </div>

                    <div class="input-group">
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile04"
                        aria-describedby="inputGroupFileAddon04"
                        aria-label="Upload"
                      />
                      <button
                        class="btn btn-primary"
                        type="button"
                        id="inputGroupFileAddon04"
                      >
                        Button
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>