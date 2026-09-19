var notebook = {

    keyTagFilterOnSetup: "notebook-filter",

    tagPrefix: "notebook-tag-filter-",
    tagSeparator: "|",
    postPrefix: "notebook-post-",
    posts: [],
    tags: [],

    setup() {
        for(var i = 0; i < 9999; ++i) {
            var obj = document.getElementById(this.tagPrefix + i);

            if(obj === null) {
                break;
            }

            var tagName = obj.dataset.name;

            this.tags.push(
                tagName
            );
        }

        for(var i = 0; i < 9999; ++i) {
            var obj = document.getElementById(this.postPrefix + i);

            if(obj === null) {
                break;
            }

            var postTags = obj.dataset.tags.split(this.tagSeparator);

            this.posts.push(
                {
                    tags: postTags
                }
            );
        }

        var filterByTag = sessionStorage.getItem(this.keyTagFilterOnSetup);

        if(filterByTag) {
            sessionStorage.removeItem(this.keyTagFilterOnSetup);

            var tagIndex = this.tags.indexOf(filterByTag);

            if(tagIndex >= 0) {
                var tagsLength = this.tags.length;

                for(var i = 0; i < tagsLength; ++i) {
                    this.switchTagFilterByIndex(i);
                }

                this.switchTagFilterByIndex(tagIndex);

                this.showFilteredPosts();
            }
        }
    },

	clickTagFilterByIndex(tag_index) {
		var resultClick = this.switchTagFilterByIndex(tag_index);
	
		if(resultClick !== false) {
            this.showFilteredPosts();
		}
	},

    clickExclusiveTagFilterByName(tag_name) {
        for(var i = 0; i < 9999; ++i) {
            var obj = document.getElementById(this.tagPrefix + i);

            if(obj === null) {
                break;
            }

            this.switchTagFilterByIndex(i, obj.dataset.name == tag_name);
        }

        this.showFilteredPosts();
    },

    switchTagFilterByIndex(tag_index, onOff = null) {
        var obj = document.getElementById(this.tagPrefix + tag_index);
	
		if(obj !== null) {
            if(obj.dataset.active == "true" && (onOff === null || onOff === false)) {
                obj.classList.remove("w3-black");
                obj.classList.add("w3-gray");

                obj.dataset.active = "false";

                this.tags.splice(this.tags.indexOf(obj.dataset.name), 1);
            }
            else if(obj.dataset.active == "false" && (onOff === null || onOff === true)) {
                obj.classList.remove("w3-gray");
                obj.classList.add("w3-black");

                obj.dataset.active = "true";

                this.tags.push(obj.dataset.name);
            }

            return true;
        }

        return false;
    },

    showFilteredPosts() {
        for(var i = 0; i < this.posts.length; ++i) {
            var obj = document.getElementById(this.postPrefix + i);

            if(obj === null) {
                break;
            }

            var found = false;

            for(var k = 0; k < this.posts[i].tags.length; ++k) {
                if(this.tags.includes(this.posts[i].tags[k])) {
                    found = true;
                    break;
                }
            }

            if(found) {
                obj.classList.remove("w3-hide");
            }
            else {
                obj.classList.add("w3-hide");
            }
        }
    }
};