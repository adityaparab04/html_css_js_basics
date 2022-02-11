const video = {
    title: 'VIdeoTitle',
    tags: ['a', 'b', 'c'],
    showTags(){
        this.tags.forEach(function(ele){
            console.log(this.title, ele);
        });
    }
}

video.showTags()
