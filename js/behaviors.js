var CustomForm = {};
CustomForm.behaviors = [];

CustomForm.load = function(context){
    for(var i in this.behaviors){
        this.behaviors[i]($(context));
    }
}

CustomForm.behaviors.push(function(context){
    $('.sortable-childs').sortable({itemSelector : '.each-field'});
    $('.example', context).sortable();
});

$(document).ready(function(){
    CustomForm.load(document);
});
