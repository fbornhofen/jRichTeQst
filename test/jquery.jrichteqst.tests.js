function jRichTeQstTests() {


module("jRichTeQst");

var testtext = $.fn.jRichTeQst($('#testtext')[0]);
    
test("toString returns text contents", function() {
  testtext.getTextNode().innerHTML = "Demo text";
  equal( testtext.toString(), "Demo text", "Test element should contain 'Demo text'" );
});

test("text becomes editable on click", function() {
  testtext.setEditable(false);
  $(testtext.getTextNode()).click();
  ok( testtext.isEditable(), "text was not made editable on click");
});

test("css sets css properties", function() {
  testtext.css("color", "blue");
  equal( testtext.css("color"), "rgb(0, 0, 255)", "color css attr. was not set" );
});

test("attr sets attribute", function() {
  testtext.attr("name", "mytext");
  equal( testtext.attr("name"), "mytext", "name attribute was not set on DOM node");

});

//test("fixNewline fixes newlines", function() {
//  // insert text, set cursor somewhere, send keypress(0x0a)
//});

}
