
function init() {
  console.log("Initializing ChETA");
  var link = document.createElement('link');
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('type', 'text/css');
  link.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Special+Elite&display=swap');
  document.head.appendChild(link);

  if(!config.code) {
    console.log("Error loading ChETA: Unique code not found")
    return;
  }
  var inputs = getInputsByValue(config.code);
  if(inputs.length == 0) {
    console.log("Error loading ChETA: Input not found")
    return;
  }
  var text = inputs[0].value.split(config.code).reverse()[0];
  // alert(text)
  inputs[0].value = inputs[0].value;
  inputs[0].addEventListener('input', (e) => {
    var inputs = getInputsByValue(config.code);
    if(inputs.length == 0) {
      console.log("Error loading ChETA: Input not found");
      return;
    }
    var text = inputs[0].value.split(config.code).reverse()[0];
    var wordCountSpan = document.getElementById("cheta-data-wordcount");
    wordCountSpan.textContent = ""+text.split(" ").length;

    var charCountSpan = document.getElementById("cheta-data-charcount");
    charCountSpan.textContent = ""+text.length;

    if(config.priceperword) {
      var pricePerWord = document.getElementById("cheta-data-priceperword");
      var priceVal = text.split(" ").length * config.priceperword;
      pricePerWord.textContent = ""+priceVal.toFixed(2);
    }
  });
  const div = document.createElement('div');
  var finalHTML = '<div id="cheta-flt-dv"><p class="cheta-flt-p">ChETA</p>';
  finalHTML += '<p class="cheta-pfnt">Words: <span id="cheta-data-wordcount">'+text.split(" ").length+'</span></p>';
  finalHTML += '<p class="cheta-pfnt">Chars: <span id="cheta-data-charcount">'+text.length+'</span></p>';
  if(config.priceperword) {
    var priceVal = text.split(" ").length * config.priceperword;
    finalHTML += '<p class="cheta-pfnt">Total PPW: $<span id="cheta-data-priceperword">'+priceVal.toFixed(2)+'</span></p>';
  }
  finalHTML += '</div>';
  div.innerHTML = finalHTML;
  document.body.appendChild(div);
}

function getInputsByValue(value)
{
    var allInputs = document.getElementsByTagName("input");
    var results = [];
    for(var x=0;x<allInputs.length;x++)
        if(allInputs[x].value.includes(value))
            results.push(allInputs[x]);

    var allTextArea = document.getElementsByTagName("textarea");
    for(var x=0;x<allTextArea.length;x++)
        if(allTextArea[x].value.includes(value))
            results.push(allTextArea[x]);

    return results;
}

init();
