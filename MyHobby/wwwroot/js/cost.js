// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculationForm').submit(function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values from the input fields
        var input1 = $('#input1').val();
        var input2 = $('#input2').val();

        // Perform the calculation
        var result = parseInt(input1) * parseInt(input2);

        // Display the result
        $('#result').text('Estimated Cost: $' + result);
    });
});
