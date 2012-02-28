(function( $ ){

  $.fn.jRichTeQst = function(node) {
    var self = {

      // DOM Interface
      css: function() {
        if (arguments.length === 1) {
          return $(self.domNode()).css(arguments[0]);
        } else {
          $(self.domNode()).css(arguments[0], arguments[1]);
        }
      },

      attr: function() {
        if (arguments.length === 1) {
          return $(self.domNode()).attr(arguments[0]);
        } else {
          $(this.domNode()).attr(arguments[0], arguments[1])
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
      },

      getSelectionRange: function() {
	var sel = rangy.getSelection();
        if (sel.containsNode(node, true)) {
          return sel.getRangeAt(0);
        } else {
          return null;
        }
      },

      insertAtCursor: function(aNode) {
        var range = self.getSelectionRange();
        if (!range) {
            return;
	}
        range.insertNode(aNode);
        self.placeCursorBehind(aNode);
      },

      placeCursorBehind: function(aNode) {
        var range = rangy.createRange();
        range.setStartAfter(aNode);
        range.setEndAfter(aNode);
      },
    };

    // event handling

    $(node).click(function() {
       self.setEditable(true);
    });

    $(node).mouseleave(function() {
      self.setEditable(false);
    });

    $(node).keypress(function(event) {   
      if (event.which == 13 || event.which == 10) {
        console.log('enter');
        event.preventDefault();
        event.stopPropagation();
        self.insertAtCursor(document.createElement("br"));
        return true;
      }
      return false;
    });

    return self;
  };
})( jQuery );
