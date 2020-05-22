
    let row = '<div class="row"> <div class="col"> first row <div><div class="col"> second row<div><div class="col">Third row<div> <div>'
    $(document).ready(function(){
        $("button").click(function(){
            $("div").append(row);
        });
    });