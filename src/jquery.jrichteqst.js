(function( $ ){

  $.fn.jRichTeQst = function(node) {

    var self = {

      textNode: null,

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
          $(this.domNode()).attr(arguments[0], arguments[1]);
        }
      },

      setEditable: function(editable) {
        $(self.getTextNode()).attr('contenteditable', 
            editable ? 'true' : 'false');
        if (!editable) {
          self.fixNewlines();
        }
      },

      isEditable: function() {
        return $(self.getTextNode()).attr('contenteditable') === 'true';
      },

      toString: function() {
        return $(self.getTextNode()).text();
      },

      getText: function() {
        return self.getTextNode().innerHTML.replace('<br>', '\n');  
      },

      setText: function(aString) {
        // plain text only!
        var newNode = document.createElement('div');
        newNode.innerHTML = aString.replace('\n', '<br>');
        self.useTextNode(newNode);
      },

      domNode: function() {
        return node;
      },

      getTextNode: function() {
        return self.textNode;  
      },

      getSelectionRange: function() {
	var sel = rangy.getSelection();
        if (sel.containsNode(self.getTextNode(), true)) {
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

      fixNewlines: function() {
        self.fixNewlinesChrome();
      },

      fixNewlinesChrome: function() {
        var i,
            node = self.domNode(),
            children = self.getTextNode().childNodes,
            newNode = document.createElement('div'),
            tmpNode;
        for ( i = 0; i < children.length; i++) {
          tmpNode = document.createTextNode(children[i].textContent);
          if (children[i].nodeType == 1 && children[i].tagName != "A") {
            // replace div, span, p, ... but not links
            newNode.appendChild(document.createElement('br'));
          } else if (children[i].nodeType == 3) {
	    if (children[i].textContent == "") {
              return;
            }
          } else {
	    continue;
	  }
          newNode.appendChild(tmpNode);
        }
        self.useTextNode(newNode);
      },

      initializeEvents: function() {
        $(self.getTextNode()).click(function() {
          self.setEditable(true);
        });

        $(self.getTextNode()).mouseleave(function() {
          self.setEditable(false);
        });
      },

      useTextNode: function(aTextNode) {
        var oldTextNode = self.getTextNode();
        self.textNode = aTextNode;
        if (oldTextNode) {
          self.domNode().replaceChild(aTextNode, oldTextNode);
        } else {
	  self.domNode().appendChild(aTextNode);
	}
        $(aTextNode).css('height', '100%');     
        $(aTextNode).css('width', '100%');
        self.initializeEvents();   
      }, 
    };

    //var browser = 'chrome'; // find out, create dispatch table
    self.useTextNode(document.createElement('div'));
    return self;
  };
})( jQuery );
