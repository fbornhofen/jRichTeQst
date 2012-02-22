(function( $ ){

  $.fn.jRichTeQst = function(element) {
    return {

      setEditable: function(editable) {
        $(element).attr('contenteditable', editable ? 'true' : 'false');
      },

      toString: function() {
        return $(element).text();

      },

      getElement: function() {
        return element;
      }
    };
  };
})( jQuery );
