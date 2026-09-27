var notebook_post = {

    keyTagFilterOnSetup: "notebook-filter",

    clickExclusiveTagFilterByName(tag_name) {
        sessionStorage.setItem(this.keyTagFilterOnSetup, tag_name);

        window.location.href = "notebook.html";
    },

    copyLinkToClipboard(obj) {
        navigator.clipboard.writeText(obj.href);

        app.toast(app.TOAST_SUCCESS, 'Copied!');

        return false;
    }
};