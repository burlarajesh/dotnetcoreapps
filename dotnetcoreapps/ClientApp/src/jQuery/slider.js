var slideIndex = 1;
showSlides(slideIndex);
var selectionBottomLeftX = "";
var globalStoreAdd = [];
var globalStoreSelectedCategory = [];
var globalAddIndex = 0;
var globalRemoveIndex = 0;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
}

//Annotorious callback: Add action on editor being shown
anno.addHandler('onEditorShown', function (annotation) {
    alert("Helloo");
    $(".annotorious-editor").css("display", "none");
    var x = event.clientX;     // Get the horizontal coordinate
    var y = event.clientY;

    selectionBottomRightX = x;
    selectionBottomY = y;


    if (annotation.text != undefined) {        
        selectionBottomY = selectionBottomY - 25;
    }

    //Generate the floating dropdown list	
    var iDiv = document.createElement('div');
    iDiv.id = 'select-container';
    iDiv.className = 'select-container';
    document.getElementsByTagName('body')[0].appendChild(iDiv);

    var newDiv = document.createElement('div');
    newDiv.style.position = 'absolute';
    newDiv.style.width = '0 auto';
    //newDiv.style.left = selectionBottomLeftX + 245;
    //newDiv.style.top = selectionBottomY + 4;
    newDiv.style.left = event.clientX
    newDiv.style.top = event.clientY
    var html = '<select class="categories">', dates = generateCategories(), i;
    for (i = 0; i < dates.length; i++) {
        if (i == 0) {
            html += "<option selected disabled>" + dates[0] + "</option>"
        } else {
            html += "<option value='" + dates[i] + "'>" + dates[i] + "</option>";
        }

    }
    html += '</select>';
    newDiv.innerHTML = html;

    iDiv.appendChild(newDiv);
    selectedCategory = "N/A";
    selectedSubCategory = "N/A";

    $("select.categories").change(function () {
        selectedCategory = $(".categories option:selected").val();
        console.log(selectedCategory);
        globalStoreSelectedCategory[globalAddIndex] = selectedCategory;
        selectedSubCategory = "N/A";

        if (iDiv.childElementCount == 2) {
            //iDiv.removeChild(iDiv.childNodes[1]);
        }
        console.log("editor length " + $(".annotorious-editor-text").length)
        var editorLength = $(".annotorious-editor-text").length - 1;
        $($(".annotorious-editor-text")[editorLength]).val(selectedCategory);
        console.log("editor save length " + $(".annotorious-editor-button-save").length)
        $(".annotorious-editor-button-save")[editorLength].click()
        $(".select-container").hide();

    });

});

function generateCategories() {

    //Main categories for the dropdown list
    var categoriesArray = ["Select a category", "Car", "Bus", "autorickshaw", "Bike"];
    return categoriesArray;
}


anno.addHandler('onAnnotationCreated', function (annotation) {

    var addTag = "ADD: ";
    console.log(addTag.concat(annotation.text));
    console.log(addTag.concat(annotation.shapes[0].geometry.x));
    console.log(addTag.concat(annotation.shapes[0].geometry.y))

    //This is needed due to a Annotorious bug
    globalStoreAdd[globalAddIndex] = annotation;
    globalAddIndex = globalAddIndex + 1;

    if (document.getElementById('select-container') != null) {
        document.getElementById('select-container').remove();
    }
    onSelectionCompletedFired = false;

});

function saveCoordinates() {
    var storage = globalStoreAdd;
    var dataSet = [];
    $.each(storage, function (index, value) {
        var splitData = value.src.split("/");
        var imageName = splitData[splitData.length - 1];
        var finalData = `${imageName},${value.text},${value.shapes[0].geometry.x},${value.shapes[0].geometry.y},${value.shapes[0].geometry.width},${value.shapes[0].geometry.height}`
        dataSet.push(finalData);
    });
    var jsonData = { data: dataSet };
    var saveData = $.ajax({
        type: 'POST',
        url: "/saveCords",
        data: JSON.stringify(dataSet),
        dataType: "json",
        success: function (resultData) {  },
        error: function (data) {
            console.log(data.responseText);
        }
    });
    alert("Saved successfully! Please find the output data in solution directory")
}