$(document).ready(function () {

blog.forEach(post => {
    $("#tekstovi").append(`
        <div class="col-sm-4">
            <div class="panel panel-primary">
                <div class="content">
                    <div class="panel-heading">${post.naslov}</div>
                    <div class="panel-body">${post.description}</div>
                    <div class="panel-footer">
                        <button class="btn btn-primary" id="dugme" onclick="location.href='${post.link}'">
                            Idi na tekst
                        </button>
                    </div>    
                </div>
            </div>
        </div>
    `)

});

})