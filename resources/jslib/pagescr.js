var container = document.getElementById("container");
var root = document.querySelector(':root');
const ro = new ResizeObserver(entries => {
  for (let entry of entries) {
    const cr = entry.contentRect;
    var fontSize = (0.023988  * cr.width )
    root.style.setProperty('--psize', (fontSize + 'px'));
  }
});

// Observe one or multiple elements
ro.observe(container);

var img = document.getElementById("gif-1");
        var sup1 = new SuperGif({ gif: document.getElementById('gif-1') } );
				sup1.load();
        img.addEventListener("onmouseover", function() {
          sup1.play();
        });
