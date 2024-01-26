<script>
 import { VueDraggableNext } from 'vue-draggable-next'

import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { upcomingTasks, progressTasks, completedTasks } from "./data-kanaban";

/**
 * Kanban-board component
 */
export default {
  page: {
    title: "Kanban Board",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    draggable: VueDraggableNext,
    Layout,
    PageHeader,
  },
  data() {
    return {
      enabled: true,
        list: [
          { name: 'John', id: 1 },
          { name: 'Joao', id: 2 },
          { name: 'Jean', id: 3 },
          { name: 'Gerard', id: 4 },
        ],
        dragging: false,
      upcomingTasks: upcomingTasks,
      progressTasks: progressTasks,
      completedTasks: completedTasks,
      title: "Kanban Board",
      items: [
        {
          text: "Tasks",
          href: "/",
        },
        {
          text: "Kanban Board",
          active: true,
        },
      ],
      items1: Array(5)
        .fill({})
        .map((_, index) => ({ title: `Item ${index + 1}` })),
      items2: [],
    };
  },
    methods: {
      log(event) {
        console.log(event)
      },
    },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="drag-container">
      <div class="row drag-list">
        <div class="col-lg-4 drag-column">
          <div class="card">
            <div class="card-body">
              <!-- dropdown -->
              <b-dropdown
                right
                variant="white"
                class="float-end"
                menu-class="dropdown-menu-end"
                toggle-class="p-0"
              >
                <template #button-content>
                  <i class="mdi mdi-dots-vertical m-0 text-muted h5"></i>
                </template>
                <b-dropdown-item href="javascript: void(0);"
                  >Edit</b-dropdown-item
                >
                <b-dropdown-item href="javascript: void(0);"
                  >Delete</b-dropdown-item
                >
              </b-dropdown>
              <span class="drag-column-header">
                <h4 class="card-title mb-4 pb-1">Upcoming</h4>
              </span>

              <draggable
        v-model="items1"
        transition="100"
        class="drop-zone"
      >
        <template v-slot:item="{ item }">
          <div class="draggable-item">
            {{ item.title }}
          </div>
        </template>
      </draggable> 

             <draggable class="list-group"  v-model="upcomingTasks">
                <div
                  v-for="task in upcomingTasks"
                  :key="task.id"
                  class="card task-box"
                >
                  <div class="card-body">
                    <div class="float-end ml-2">
                      <span
                        class="badge rounded-pill font-size-12"
                        :class="{
                          'badge-soft-secondary': `${task.task}` === 'Waiting',
                          'badge-soft-success': `${task.task}` === 'Complete',
                          'badge-soft-primary': `${task.task}` === 'Approved',
                          'badge-soft-warning': `${task.task}` === 'Pending',
                        }"
                        >{{ task.task }}</span
                      >
                    </div>
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark">{{
                          task.title
                        }}</a>
                      </h5>
                    </div>
                    <p class="text-muted mb-4">{{ task.date }}</p>
                    <div class="avatar-group float-start">
                      <div class="avatar-group-item">
                        <a href="javascript: void(0);" class="d-inline-block">
                          <img
                            :src="`${task.user[0]}`"
                            class="rounded-circle avatar-xs"
                            alt
                          />
                        </a>
                      </div>
                      <div class="avatar-group-item" v-if="task.user[1]">
                        <a href="javascript: void(0);" class="d-inline-block">
                          <img
                            :src="`${task.user[1]}`"
                            class="rounded-circle avatar-xs"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div class="text-end">
                      <h5 class="font-size-15 mb-1">$ {{ task.budget }}</h5>
                      <p class="mb-0 text-muted">Budget</p>
                    </div>
                  </div>
                </div>
              </draggable>
              <div class="text-center d-grid">
                <a href="javascript: void(0);" class="btn btn-primary mt-3">
                  <i class="mdi mdi-plus me-1"></i> Add New
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- end col-->

        <div class="col-lg-4 drag-column">
          <div class="card">
            <div class="card-body">
              <!-- dropdown -->
              <b-dropdown
                right
                variant="white"
                class="float-end"
                toggle-class="p-0"
                menu-class="dropdown-menu-end"
              >
                <template #button-content>
                  <i class="mdi mdi-dots-vertical m-0 text-muted h5"></i>
                </template>
                <b-dropdown-item href="javascript: void(0);"
                  >Edit</b-dropdown-item
                >
                <b-dropdown-item href="javascript: void(0);"
                  >Delete</b-dropdown-item
                >
              </b-dropdown>
              <span class="drag-column-header">
                <h4 class="card-title mb-4 pb-1">In Progress</h4>
              </span>
               <div class="flex m-10">
    <!-- <draggable class="dragArea list-group w-full" :list="list" @change="log">
      <div
        class="list-group-item bg-gray-300 m-1 p-3 rounded-md text-center"
        v-for="element in list"
        :key="element.name"
      >
        {{ element.name }}
      </div>
    </draggable> -->
  </div>
              <draggable class="list-group"  v-model="progressTasks">
        
                <div
                  v-for="task in progressTasks"
                  :key="task.id"
                  class="card task-box"
                >
                  <div class="card-body">
                    <div class="float-end ml-2">
                      <span
                        class="badge rounded-pill font-size-12"
                        :class="{
                          'badge-soft-secondary': `${task.task}` === 'Waiting',
                          'badge-soft-success': `${task.task}` === 'Complete',
                          'badge-soft-primary': `${task.task}` === 'Approved',
                          'badge-soft-warning': `${task.task}` === 'Pending',
                        }"
                        >{{ task.task }}</span
                      >
                    </div>
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark">{{
                          task.title
                        }}</a>
                      </h5>
                    </div>
                    <p class="text-muted mb-4">{{ task.date }}</p>
                    <div class="avatar-group float-start">
                      <div class="avatar-group-item">
                        <a href="javascript: void(0);" class="d-inline-block">
                          <img
                            :src="`${task.user[0]}`"
                            class="rounded-circle avatar-xs"
                            alt
                          />
                        </a>
                      </div>
                      <div class="avatar-group-item" v-if="task.user[1]">
                        <a href="javascript: void(0);" class="d-inline-block">
                          <img
                            :src="`${task.user[1]}`"
                            class="rounded-circle avatar-xs"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div class="text-end">
                      <h5 class="font-size-15 mb-1">$ {{ task.budget }}</h5>
                      <p class="mb-0 text-muted">Budget</p>
                    </div>
                  </div>
                </div>
              </draggable>
              <div class="text-center d-grid">
                <a href="javascript: void(0);" class="btn btn-primary mt-3">
                  <i class="mdi mdi-plus me-1"></i> Add New
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- end col-->

        <div class="col-lg-4 drag-column">
          <div class="card">
            <div class="card-body">
              <!-- dropdown -->
              <b-dropdown
                right
                variant="white"
                class="float-end"
                toggle-class="p-0"
                menu-class="dropdown-menu-end"
              >
                <template #button-content>
                  <i class="mdi mdi-dots-vertical m-0 text-muted h5"></i>
                </template>
                <b-dropdown-item href="javascript: void(0);"
                  >Edit</b-dropdown-item
                >
                <b-dropdown-item href="javascript: void(0);"
                  >Delete</b-dropdown-item
                >
              </b-dropdown>
              <span class="drag-column-header">
                <h4 class="card-title mb-4 pb-1">Completed</h4>
              </span>
              <draggable
                class="list-group"
              
                v-model="completedTasks"
              >
                  <div
                  v-for="task in completedTasks"
                  :key="task.id"
                  class="card task-box"
                >
                  <div class="card-body">
                    <div class="float-end ml-2">
                      <span
                        class="badge rounded-pill font-size-12"
                        :class="{
                          'badge-soft-secondary': `${task.task}` === 'Waiting',
                          'badge-soft-success': `${task.task}` === 'Complete',
                          'badge-soft-primary': `${task.task}` === 'Approved',
                          'badge-soft-warning': `${task.task}` === 'Pending',
                        }"
                        >{{ task.task }}</span
                      >
                    </div>
                    <div>
                      <h5 class="font-size-15">
                        <a href="javascript: void(0);" class="text-dark">{{
                          task.title
                        }}</a>
                      </h5>
                    </div>
                    <p class="text-muted mb-4">{{ task.date }}</p>
                    <div class="avatar-group float-start">
                      <div class="avatar-group-item">
                        <a href="javascript: void(0);" class="d-inline-block">
                          <img
                            :src="`${task.user[0]}`"
                            class="rounded-circle avatar-xs"
                            alt
                          />
                        </a>
                      </div>
                      <div class="avatar-group-item" v-if="task.user[1]">
                        <a href="javascript: void(0);" class="d-inline-block">
                          <img
                            :src="`${task.user[1]}`"
                            class="rounded-circle avatar-xs"
                            alt
                          />
                        </a>
                      </div>
                    </div>
                    <div class="text-end">
                      <h5 class="font-size-15 mb-1">$ {{ task.budget }}</h5>
                      <p class="mb-0 text-muted">Budget</p>
                    </div>
                  </div>
            </div>
              </draggable>
              <div class="text-center d-grid">
                <a href="javascript: void(0);" class="btn btn-primary mt-3">
                  <i class="mdi mdi-plus me-1"></i> Add New
                </a>
              </div>
            </div>
          </div>
        </div>
        <!-- end col-->
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>
