(function(ENV)
{
  'use strict';

  var  { GenerateStage, FillStage, CreateStage, AdvanceStage } = ENV.GridTools();

  class Grid
  {
    constructor(rows = 1, cols = 1, percent = .5)
    {
      this.percent = percent;

      this.stage =
      {
        grid: CreateStage(rows, cols),
        rows: rows,
        cols: cols
      }
    }

    Generate()
    {
        this.stage.grid = GenerateStage(this.stage, this.percent);
    }

    Advance()
    {
        this.stage.grid = AdvanceStage(this.stage);
    }
  }

  ENV.Grid = Grid;
})(Global);
