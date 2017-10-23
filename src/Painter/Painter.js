(function(ENV)
{
  'use strict';

  const { Iterate } = ENV.Tools();
  const { Themes, GridData, CellStatus } = ENV.Const();
  const Tools = ENV.PainterTools();

  class Painter
  {
    constructor(ctx, theme = Themes.Mickey)
    {
      this.ctx = ctx;
      this.theme = theme;
    }

    Paint(cell)
    {
      this.ctx.fillStyle = this.theme.DEAD;
      Tools.Clear(this.ctx,GridData.cols*GridData.cellwidth,GridData.rows*GridData.cellwidth)

      Iterate(0, GridData.rows, 0, GridData.cols, (i, j) =>
      {
        if(cell[i][j] === CellStatus.ALIVE)
        {
          this.ctx.fillStyle = this.theme.ALIVE;
          Tools.PaintAlive(this.ctx,j*GridData.cellwidth,i*GridData.cellwidth)
        }
        else if(cell[i][j] === CellStatus.ABOUT)
        {
          this.ctx.fillStyle = this.theme.ABOUT;
          Tools.PaintAbout(this.ctx,j*GridData.cellwidth,i*GridData.cellwidth)
        }
      });
    }
  }

  ENV.Painter = Painter;
})(Global);
