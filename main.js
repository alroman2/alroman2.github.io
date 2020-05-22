
    let row = '<div class="row align-items-center"> <div class="col">| first</div> <div class="col">| second</div> <div class="col">| Third</div> </div>'
    $(document).ready(function(){
        $("button").click(function(){
            $("#itemContainer").append(row);
        });
    });