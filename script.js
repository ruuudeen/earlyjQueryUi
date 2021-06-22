  // script.js
    
    //DRAGGABLE 
    //http://jqueryui.com/draggable/

$(function(){
    
    $('.box').draggable();
    
     $('#box1').draggable({ scroll: true, revert: "invalid" });
    
    
    $('#box2').draggable({ axis: "x" });
    
    
    $('#box3').draggable({ axis: "y" });
    
    
    $('#box4').draggable({ containment: "container", revert: "valid" });
  
    //DROPPABLE
    
    //http://jqueryui.com/droppable
    
    $('#droppable').droppable({
        accept: '#box1',
        drop: function() {
            $(this).text("Home is where the heart is") ;
        }
        
    }); 
  
    

   
    //SORTABLE
    
    //http://jqueryui.com/sortable/
    
    
    $('#sortableToo').sortable({ connectwith: "#sortableToo", placeholder:"placeholder" });
    
    $('#sortableToo').sortable({ connectwith: "#Sortable", placeholder: "placeholder"});
    
  
    //Accordian 
    
    //http://jqueryui.com/accordian/  
    
 $('#accordian').accordian({ collapsible: true, heightstyle: "content" }); 
    
  
    
    //DatePicker
    //https://jquery.com/datepicker/
    
    
    $('.date').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        changeButtonPanel: true,
        changeMonth: true,
        changeYear: true;
    });  
   
    
    
// To Do LIST
    
    $('#todoList ul').sortable({
        items: "li:not('.listTitle, .addItem')",
        connectwith: "ul",
        dropOnEmpty: true,
        placeholder: "emptySpace"
    });
    
    $('input').keydown(function(e){
        if(e.keyCode == 13){
            var item = $(this).val();
            
            $(this).parent().parent().append('<li>' + item + '</li>');
            $(this).val('');
        }
    });
    $('#Trash').droppable({
        drop: function(event, ui) {
            ui.draggable.remove();
        }
    });
});
  