<template>
  <div class="table-bottom">
    <span class="table-status"
      >{{ pagination.total }} From {{ pagination.from ? pagination.from : 0}} To
      {{ pagination.to ? pagination.to : 0 }}
    </span>
    <div class="pagination">
      <a
        v-on:click="prev_page()"
        class="pagination-prev"
        :class="
          pagination.current_page == 1 || pagination.total == 0
            ? 'pagination-not-allow'
            : ''
        "
      ></a>
      <a
        v-on:click="this_page(p)"
        v-for="(p, index) in pageList"
        :key="index"
        :class="{
          'pagination-btn pagination-btn-active':
            pagination.current_page == p && p != '...',
          'pagination-btn': pagination.current_page != p && p != '...',
          'pagination-dots': p == '...',
        }"
      >
        {{ p != "..." ? p : "" }}
      </a>
      <a
        v-on:click="next_page()"
        class="pagination-next"
        :class="
          pagination.current_page == pageCount || pagination.total == 0
            ? 'pagination-not-allow'
            : ''
        "
      ></a>
    </div>
  </div>
</template>

<script>
import Table from "../../store/modules/table";

export default {
  name: "Pagination",
  props: ["pagination"],
  mixins: [Table],
  data() {
    return {
      pageNow: 1,
    };
  },
  methods: {
    next_page() {
      if (
        this.pagination.current_page == this.pagination.last_page ||
        this.pagination.total == 0
      )
        return;
      else {
        this.pageNow += 1;
        this.$emit("changePage", this.pageNow);
        this.next();
      }
    },
    this_page(p) {
      if (p == "...") return;
      this.pageNow = p;
      this.$emit("changePage", this.pageNow);
      this.page(p);
    },
    prev_page() {
      if (this.pagination.current_page == 1 || this.pagination.total == 0)
        return;
      else {
        this.pageNow -= 1;
        this.$emit("changePage", this.pageNow);
        this.prev();
      }
    },
  },
  watch: {
    pagination: {
      handler() {
        this.initTable(this.pagination);
      },
      deep: true,
    },
  },
};
</script>
<style scoped>
.table-bottom {
  margin: 0;
  padding: 17px 50px;
  border: 1px solid #f4f4f4;
  border-top: none;
  font-size: 14px;
}
</style>
