function jRichTeQstTests() {


module("jRichTeQst");

var testtext = $.fn.jRichTeQst($('#testtext')[0]);
    
test("toString returns text contents", function() {
  testtext.domNode().innerHTML = "Demo text";
  equal( testtext.toString(), "Demo text", "Test element should contain 'Demo text'" );
});

test("text becomes editable on click", function() {
  testtext.setEditable(false);
  $(testtext.domNode()).click();
  ok( testtext.isEditable(), "text was not made editable on click");
});

}

