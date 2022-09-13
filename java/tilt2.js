var container2 = document.getElementById("container2"),
      inner2 = document.getElementById("inner2");

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return "(" + this.x + ", " + this.y + ")";
    }
  };

  // Track the mouse position relative to the center of the container.
  mouse.setOrigin(container2);

  //----------------------------------------------------

  var counter = 0;
  var refreshRate = 10;
  var isTimeToUpdate = function() {
    return counter++ % refreshRate === 0;
  };

  //----------------------------------------------------

  var onMouseEnterHandler = function(event) {
    update(event);
  };

  var onMouseLeaveHandler = function() {
    inner2.style = "";
  };

  var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------------------------------

  var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / inner2.offsetHeight / 8).toFixed(8),
      (mouse.x / inner2.offsetWidth / 8).toFixed(8)
    );
  };

  var updateTransformStyle = function(x, y) {
    var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    inner2.style.transform = style;
    inner2.style.webkitTransform = style;
    inner2.style.mozTranform = style;
    inner2.style.msTransform = style;
    inner2.style.oTransform = style;
  };

  //--------------------------------------------------------

  container2.onmousemove = onMouseMoveHandler;
  container2.onmouseleave = onMouseLeaveHandler;
  container2.onmouseenter = onMouseEnterHandler;