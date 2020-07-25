console.log(config);
if(!config.code) {
  alert("Error loading ChETA: Unique code not found")
}
var inputs = getInputsByValue(config.code);
if(inputs.length == 0) {
  alert("Error loading ChETA: Input not found")
}
var text = inputs[0].value.split(config.code).reverse()[0];
alert(text)

function getInputsByValue(value)
{
    var allInputs = document.getElementsByTagName("input");
    var results = [];
    for(var x=0;x<allInputs.length;x++)
        if(allInputs[x].value.includes(value))
            results.push(allInputs[x]);
    return results;
}
