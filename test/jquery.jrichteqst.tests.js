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

test("fixNewlinesChrome fixes newlines", function() {
  testtext.getTextNode().innerHTML = "foo<div>bar</div><div>baz</div>";
  testtext.fixNewlinesChrome();
  equal( testtext.getTextNode().innerHTML, "foo<br>bar<br>baz", "div nodes were expected to be replaced by br nodes" );
});

test("fixNewlinesChrome does not remove links", function() {
  testtext.getTextNode().innerHTML = "foo <a href=\"google.com\">google</a>";
  testtext.fixNewlinesChrome();
  equal( testtext.getTextNode().childNodes[1].tagName, "A", "link should have stayed");
});

test("setText sets text", function() {
  testtext.setText("hello\r\nworld");
  equal(testtext.getTextNode().innerHTML, "hello<br>world", "newlines should have been replaced by brs");
});

test("getText gets text", function() {
  testtext.getTextNode().innerHTML = "hello<br>world";
  equal(testtext.getText(), "hello\r\nworld", "brs should have been replaced by newlines");
});

test("getText replaces newlines globally", function() {
  testtext.getTextNode().innerHTML = "hello<br>tout<br>le<br>monde<br>";
  equal(testtext.getText(), "hello\r\ntout\r\nle\r\nmonde\r\n");
});

}
