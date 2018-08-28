
$(function () {
    $("[name = selection]").click(function () {
        $('.desc').hide();
        $("#w-" + $(this).val()).show('slow');
    });
});

var inputs = ['kgsInput', 'lbsInput', 'ozsInput', 'grsInput', 'stsInput'];
var exec = ['kgs', 'lbs', 'ozs', 'grs', 'sts']
var n = 5;

    for(var i = 0 ; i < n ; i++)
    {
         if(document.getElementById(inputs[i]))
           converter(exec[i]);
    }


//================================ Function Converter =================================
//=====================================================================================
function converter(weight) {
    //If user enters weight (either in lbs, kgs, ounces, stones, or grams)
    if (weight === 'lbs') 
    {
        document.getElementById('lbsInput').addEventListener('input', function (e) 
        {
            let lbs = parseFloat(e.target.value); 
            //validate(lbs);

                document.getElementById('grsOutput-1').innerHTML = (lbs * 453.59237).toFixed(3);
                document.getElementById('kgsOutput-1').innerHTML = (lbs * 0.45359237).toFixed(3);
                document.getElementById('ozsOutput-1').innerHTML = (lbs * 16.0).toFixed(1);
                document.getElementById('stsOutput-1').innerHTML = (lbs * 0.071).toFixed(3);
                color_transition();
            
        });
    } else if (weight === 'kgs') 
    {
        document.getElementById('kgsInput').addEventListener('input', function (e) 
        {
            let kgs = parseFloat(e.target.value);
            //validate(kgs);

                document.getElementById('grsOutput-2').innerHTML = (kgs * 1000.0).toFixed(1);
                document.getElementById('lbsOutput-2').innerHTML = (kgs * 2.20462262185).toFixed(3);
                document.getElementById('ozsOutput-2').innerHTML = (kgs * 35.27396195).toFixed(3);
                document.getElementById('stsOutput-2').innerHTML = (kgs * 0.157).toFixed(3);
                color_transition();

        });
    } else if (weight === 'ozs') 
    {
        document.getElementById('ozsInput').addEventListener('input', function (e) 
        {
            let ozs = parseFloat(e.target.value);
            //validate(ozs);
  
                document.getElementById('grsOutput-3').innerHTML = (ozs * 28.34952).toFixed(3);
                document.getElementById('lbsOutput-3').innerHTML = (ozs * 0.0625).toFixed(3);
                document.getElementById('kgsOutput-3').innerHTML = (ozs * 0.02834952).toFixed(3);
                document.getElementById('stsOutput-3').innerHTML = (ozs * 0.0045).toFixed(3);
                color_transition();  
        });
    } else if (weight === 'grs') 
    {
        document.getElementById('grsInput').addEventListener('input', function (e) {
            let grs = parseFloat(e.target.value);
            //validate(grs);

                document.getElementById('kgsOutput-4').innerHTML = (grs / 1000.0).toFixed(3);
                document.getElementById('lbsOutput-4').innerHTML = (grs * 0.00220462).toFixed(3);
                document.getElementById('ozsOutput-4').innerHTML = (grs * 0.03527396).toFixed(3);
                document.getElementById('stsOutput-4').innerHTML = (grs * 0.00016).toFixed(3);
                color_transition();

        });
    }else if (weight === 'sts') 
    {
        document.getElementById('stsInput').addEventListener('input', function (e) {
            let sts = parseFloat(e.target.value); 
            //validate(sts);

                document.getElementById('kgsOutput-5').innerHTML = (sts * 6.4).toFixed(3);
                document.getElementById('lbsOutput-5').innerHTML = (sts * 14.0).toFixed(3);
                document.getElementById('ozsOutput-5').innerHTML = (sts * 224.0).toFixed(3);
                document.getElementById('grsOutput-5').innerHTML = (sts * 6350.0).toFixed(3);
                color_transition();

        });
    }
}//end converter()

function validate(e){
    if(typeof e != "number"){
        document.getElementById('error').innerHTML('Error! please enter a number.');
    }else
       document.getElementById('error').innerHTML = 'ok';
}

function color_transition()
{
    $("#app-container").css({
        transition : 'background-color 1500ms ease-in-out',
        "background-color": "rgba(5, 68, 107, 0.6)"
    });

    $('#side-note').css({
        transition: 'background-color 1500ms ease-in-out',
        "background-color": "rgba(0,0,0, 0.9)",
        "color": "#fff"
    });
}
