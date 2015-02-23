$(document).ready(function() {
        $(".botones #tecla").click(function(){
            nuevo=$(this).val();
            viejo=$("#pantalla").val()
            $("#pantalla").val(viejo+nuevo);
        });
        
        $(".botones #parentesis").click(function(){
            nuevo=$(this).val();
            viejo=$("#pantalla").val()
            $("#pantalla").val(viejo+nuevo);
        });
        
        $(".botones #result").click(function(){
            ecuacion=$("#pantalla").val();
            $("#pantalla").val("");
            resultado = eval(ecuacion)
            $("#pantalla").val(parseFloat(resultado));
        });
        
        $(".botones #borrar").click(function(){
            $("#pantalla").val("");
        });
});
