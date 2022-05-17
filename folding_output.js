var coll = document.getElementsByClassName("collapsible")

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("collapsible_active");
        
        var child = this.nextElementSibling;
        var parent = this.parentElement;
        console.log(parent)

        //for (var j = 0; j < children.length; j++) {
        //    child = children[j];

        //    if (child.nodeType == 1) {
        if (child.style.maxHeight){
            child.style.maxHeight = null;
            parent.style.padding = null;
            parent.style.borderWidth = null;
        } else {
            child.style.maxHeight = child.scrollHeight + "px";
            parent.style.padding = "2mm";
            parent.style.borderWidth = "1px";
        }
        //    }
        //}
    });
}