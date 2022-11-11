<template>
  <div class="container mt-5">
    <ul class="list-group" v-for="job in jobs" :key="job._id">
      <li @click="showDetails(job._id)" class="list-group-item mb-2 hover">
        {{ job.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import { listJobs, jobDetails } from "../services/jobs.service";

export default {
  name: "JobsView",
  data() {
    return {
      jobs: [],
      details: [],
    };
  },
  mounted() {
    this.getJobs();
  },
  methods: {
    showDetails(id) {
      this.$router.push({ name: "applications", params: { id } });
    },
    getDetails(id) {
      const response = jobDetails(id);
      this.details = response.data;
    },
    async getJobs() {
      const response = await listJobs();
      this.jobs = response.data;
    },
  },
};
</script>

<style>
.hover {
  cursor: pointer;
}
</style>
