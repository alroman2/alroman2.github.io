
    let row = '<div class="row"> <div class="col"> 1 <div> <div>'
    $(document).ready(function(){
        $("button").click(function(){
            $("div").append(row);
        });
    });