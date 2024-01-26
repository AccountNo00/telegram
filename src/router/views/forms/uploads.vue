<script>
import DropZone from "@/components/widgets/dropZone";
import { ref } from "vue";

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * File Uploads component
 */
export default {
  page: {
    title: "Form File Upload",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { DropZone, Layout, PageHeader },
    setup() {
    let dropzoneFile = ref("");
    const drop = (e) => {
      dropzoneFile.value = e.dataTransfer.files[0];
    };
    const selectedFile = () => {
      dropzoneFile.value = document.querySelector(".dropzoneFile").files[0];
    };
    return { dropzoneFile, drop, selectedFile };
  },
  data() {
    return {
      title: "Form File Upload",
      items: [
        {
          text: "Forms",
          href: "/"
        },
        {
          text: "Form File Upload",
          active: true
        }
      ],
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Dropzone</h4>
            <p
              class="card-title-desc"
            >DropzoneJS is an open source library that provides drag’n’drop file uploads with image previews.</p>
            <!-- file upload -->
             <DropZone @drop.prevent="drop" @change="selectedFile" />
              <span class="file-info">File: {{ dropzoneFile.name }}</span>
            <div class="text-center mt-4">
              <button type="button" class="btn btn-primary">Send Files</button>
            </div>
          </div>
          <!-- end card-body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>