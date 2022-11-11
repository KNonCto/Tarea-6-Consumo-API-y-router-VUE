<template>
  <div class="container mt-5">
    <ul v-if="jobApps.length == 0">
      No hay aplicaciones a este trabajo.
    </ul>
    <ul v-else class="list-group" v-for="app in jobApps" :key="app._id">
      <li v-if="app.userId" class="list-group-item mb-2">
        {{ app.userId.name }} || {{ app.userId.email }} || {{ app.message }}
      </li>
      <li v-else class="list-group-item mb-2">Datos Erroneos</li>
    </ul>
  </div>
</template>

<script>
import { jobApps } from "../services/applications.service";

export default {
  name: "ApplicationsView",
  data() {
    return {
      jobApps: [],
    };
  },
  props: {
    id: String,
  },
  mounted() {
    this.getApps(this.id);
  },
  methods: {
    async getApps(id) {
      const response = await jobApps(id);
      this.jobApps = response.data;
    },
  },
};
</script>
