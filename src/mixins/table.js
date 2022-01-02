export default {
    data() {
        return {
            pageNo: 1,
            pageSize: 2,
            pageCount: 0,
            pageList: [],
            edge: 5,
            sortKey: "",
            sortDirection: "",
        }
    },
    methods: {
        getSorticon(key) {
            if (key != this.sortKey) {
                return "sorting";
            }
            return this.sortDirection == 1 ? "sorting_desc" : "sorting_asc";
        },
        sort(key) {
            this.sortDirection = this.sortKey == key ? this.sortDirection * -1 : 1;
            this.sortKey = key;
            return this.sortDirection == 1 ? "desc" : "asc";
        },
        initTable(data) {
            this.pageCount = data.total == 0 ? 0 : data.last_page;
            this.virtualService({
                pageNo: data.current_page,
                pageSize: data.per_page
            });
        },
        virtualService: function(params) {
            var pageNo = params.pageNo;

            if (pageNo == 0) pageNo = 1; // default
            if (pageNo < 0) pageNo = this.pageCount;
            // if minimum
            else if (pageNo > this.pageCount) pageNo = this.pageCount; // if maximum

            this.pageNo = pageNo;
            this.pageList = [];
            for (var i = 1; i <= this.pageCount; i++) {
                if (this.pageCount > this.edge) {
                    if (i == 1 || i == this.pageCount) {
                        this.pageList[this.pageList.length] = i;
                    }
                    if (pageNo < this.edge - 1) {
                        // 3 number first
                        if (i > 1 && i < this.edge) {
                            this.pageList[this.pageList.length] = i;
                        }
                        if (i == this.pageCount - 1) {
                            this.pageList[this.pageList.length] = "...";
                        }
                    } else if (pageNo > this.pageCount - this.edge + 2) {
                        // 3 number last
                        if (i > this.pageCount - this.edge + 1 && i < this.pageCount) {
                            this.pageList[this.pageList.length] = i;
                        }
                        if (i == 2) {
                            this.pageList[this.pageList.length] = "...";
                        }
                    } else {
                        // rest number
                        if (i == 2 || i == this.pageCount - 1) {
                            this.pageList[this.pageList.length] = "...";
                        }
                        if (i == pageNo - 1 || i == pageNo || i == pageNo + 1) {
                            this.pageList[this.pageList.length] = i;
                        }
                    }
                } else {
                    this.pageList[this.pageList.length] = i;
                }
            }
        },
        prev: function() {
            if (this.pageNo == 1) return;
            if (this.pageNo > 1) {
                this.pageNo -= 1;
                this.virtualService({
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                });
            }
        },
        next: function() {
            if (this.pageNo == this.pageCount) return;
            if (this.pageNo < this.pageCount) {
                this.pageNo += 1;
                this.virtualService({
                    pageNo: this.pageNo,
                    pageSize: this.pageSize,
                });
            }
        },
        page: function(pageNo) {
            if (pageNo == "...") return;
            this.virtualService({
                pageNo: pageNo,
                pageSize: this.pageSize,
            });
        },
    },
}