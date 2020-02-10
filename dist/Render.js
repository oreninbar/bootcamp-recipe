class Renderer{
    static render(recipes){
        $(`#container`).empty()
         const source = $('#recipes-template').html()
         const template = Handlebars.compile(source)
         const newHTML = template({ recipes })
        $('#container').append(newHTML) 

    }
}

$("#btn").on("click", function () {
    let input = $("#input").val()
    $.get(`recipes/${input}`, function (response) {
        Renderer.render(response)
    })
    
})