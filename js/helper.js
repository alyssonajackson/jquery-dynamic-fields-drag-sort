/*
 * @author: Alysson Ajackson
 * @date: Thu Aug 15 21:49:53 BRT 2013
 * */
function create_custom_field(container){

    var blank = $('<input />'); //blank field, it works as a template when creating a new one

    var ts = new Date().getTime(); //timestamp - avoid duplicated field(names/ids)

    var field_name = 'key_' + ts;

    //next: clone blank field, then set some attributes
    var field_label = blank
        .clone()
        .attr({
            id : field_name,
            name : 'key['+ts+']',
            value : 'Nome do campo (editar)',
            onClick : 'this.select();'
        })
        .addClass('key');

    field_name = 'value_' + ts;
    var field_value = blank
    .clone()
    .attr({
        id : field_name,
        name : 'value['+ts+']',
        value : '',
        onClick : 'this.select()'
    });

    var new_field_container1 = $('<div></div>').addClass('span6').html(field_label);

    var new_field_container2 = $('<div></div>').addClass('span6').html(field_value);

    var new_field_container_row = $('<div></div>').addClass('row-fluid each-field')
        .append(new_field_container1)
        .append(new_field_container2);
    
    CustomForm.load(new_field_container_row); //apply behaviors (see file: js/behaviors.js)

    container.append(new_field_container_row);

    new_field_container_row.find('input:first').trigger('select').focus();
}
