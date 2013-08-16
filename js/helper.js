/*
 * @author: Alysson Ajackson
 * @date: Thu Aug 15 21:49:53 BRT 2013
 * */
function create_custom_field(container){
    var blank = $('<input />');
    var ts = new Date().getTime(); //timestamp

    var field_name = 'key_' + ts;
    var field_label = blank.clone().attr({id : field_name, name : field_name, value : 'Nome do campo'}).addClass('key');

    field_name = 'value_' + ts;
    var field_value = blank.clone().attr({id : field_name, name : field_name, value : ''});

    var new_field_container1 = $('<div></div>').addClass('span6').html(field_label);
    var new_field_container2 = $('<div></div>').addClass('span6').html(field_value);
    var new_field_container_row = $('<div></div>').addClass('row-fluid').append(new_field_container1).append(new_field_container2);

    container.append(new_field_container_row);
}
