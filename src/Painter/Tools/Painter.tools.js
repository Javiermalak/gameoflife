(function(ENV)
{
  'use strict';

  function _paintAlive(ctx,i,j)
  {
    ctx.fillRect(i+2, j+2,4, 4);
    ctx.fillRect(i+3, j, 2 ,8);
    ctx.fillRect(i, j+3, 8 ,2);
  }

  function _paintAbout(ctx,i,j)
  {
    ctx.fillRect(i, j, 1 ,1);
    ctx.fillRect(i, j+7, 1 ,1);
    ctx.fillRect(i+7, j+7, 1 ,1);
    ctx.fillRect(i+7, j, 1 ,1);
    ctx.fillRect(i+1, j+3, 5 ,1);
    ctx.fillRect(i+2, j+4, 5 ,1);
    ctx.fillRect(i+4, j+1, 1 ,5);
    ctx.fillRect(i+3, j+2, 1 ,5);
  }

  function _clear(ctx,i,j)
  {
    ctx.fillRect(0, 0,i,j);
  }

  function PainterTools()
  {
    return {
        PaintAlive: _paintAlive,
        PaintAbout: _paintAbout,
        Clear: _clear
    }
  }

  ENV.PainterTools = PainterTools;
})(Global);
