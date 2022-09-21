$(document).ready(function(){
    
    $("#login-form").submit(function(event){
        event.preventDefault();

        $.ajax({
            url: 'http://34.211.47.153/api',
            type: 'post',
            dataType: 'json',
            data: $(this).serialize(),
            success: function(data) {
                       console.log(data)
                    }
        });
    })
})