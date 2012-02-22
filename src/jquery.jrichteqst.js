(function( $ ){

  $.fn.jRichTeQst = function(node) {
    var widget = {

      setEditable: function(editable) {
        $(node).attr('contenteditable', editable ? 'true' : 'false');
      },

      isEditable: function() {
        return $(node).attr('contenteditable') === 'true';
      },

      toString: function() {
        return $(node).text();
      },

      domNode: function() {
        return node;
      }
    };

    // event handling

    $(node).click(function() {
       widget.setEditable(true);
    });

    $(node).mouseleave(function() {
      widget.setEditable(false);
    });

    return widget;
  };
})( jQuery );
