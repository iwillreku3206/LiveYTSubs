$(document).ready(function() {
    var customFontFamilyCheckbox = $('#custom-font-family-checkbox');
    var customFontFamilyInput = $('#custom-font')[0];
    var presetFontFamilySelect = $('#preset-font')[0];

    presetFontFamilySelect.hidden = true;

    $('#custom-font-family-checkbox').change(function() {
        switch ($('#custom-font-family-checkbox').is(':checked')) {
            case true:
                customFontFamilyInput.hidden = false;
                presetFontFamilySelect.hidden = true;
                break;
            case false:
                customFontFamilyInput.hidden = true;
                presetFontFamilySelect.hidden = false;  
                break;
        }
    });
});