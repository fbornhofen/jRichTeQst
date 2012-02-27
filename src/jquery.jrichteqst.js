(function( $ ){

  $.fn.jRichTeQst = function(node) {
    var widget = {

      // DOM Interface
      css: function() {
          if (arguments.length === 1) {
              return $(this.domNode()).css(arguments[0]);
          } else {
              $(this.domNode()).css(arguments[0], arguments[1]);
          }
      },

      attr: function() {
          if (arguments.length === 1) {
              return $(this.domNode()).attr(arguments[0]);
          } else {
              $(this.domNode()).attr(arguments[0], arguments[1]);
          }
      },

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
