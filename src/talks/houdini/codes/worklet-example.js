class CustomPainter {
  paint(ctx, size, params) {
    // ctx is similar to CanvasRenderingContext2D 
    // document.querySelector('canvas').getContext('2d')
  }
}

registerPaint('customPainter', CustomPainter);