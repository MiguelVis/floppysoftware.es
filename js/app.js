var app = {

    TOAST_INFO: 'info',
    TOAST_SUCCESS: 'success',
    TOAST_WARNING: "warning",
    TOAST_DANGER: "danger",

    TOAST_DURATION: 3000,

    toast(type, message) {
        var obj = document.getElementById("app-toast");

        if(obj !== null) {
            icon = "";

            switch(type) {
                case this.TOAST_INFO :
                    icon = "<i class='fas fa-info-circle'></i>";
                    break;
                case this.TOAST_SUCCESS :
                    icon = "<i class='fas fa-check-circle'></i>";
                    break;
                case this.TOAST_WARNING :
                    icon = "<i class='fas fa-exclamation-circle'></i>";
                    break;
                case this.TOAST_DANGER :
                    icon = "<i class='fas fa-times-circle'></i>";
                    break;
            }

            if(icon !== "") {
                icon = icon + " ";
            }

            obj.innerHTML = icon + message;

            obj.classList.remove(this.TOAST_INFO);
            obj.classList.remove(this.TOAST_SUCCESS);
            obj.classList.remove(this.TOAST_WARNING);
            obj.classList.remove(this.TOAST_DANGER);

            obj.classList.add("w3-" + type);

            obj.classList.remove("w3-hide");
            obj.classList.add("w3-show");

            setTimeout(() => {
                obj.classList.remove("w3-show");
                obj.classList.add("w3-hide");
               
            }, this.TOAST_DURATION);
        }



    }
};