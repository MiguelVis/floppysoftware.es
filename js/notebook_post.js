var notebook_post = {

    keyTagFilterOnSetup: "notebook-filter",

    clickExclusiveTagFilterByName(tag_name) {
        sessionStorage.setItem(this.keyTagFilterOnSetup, tag_name);

        window.location.href = "notebook.html";
    }
};