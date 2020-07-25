chrome.runtime.onMessage.addListener(function (msg, sender, response) {
    var values = [];
    var inputFields = document.getElementsByTagName('input');

    var result = 'inputs: ' + inputFields.length;

    for (var i = 0; i < inputFields.length; i++) {
        values.push(inputFields[i].value);
    }

    result += '<br />fields: ' + values.length;

    response(result)
    return true;
});
