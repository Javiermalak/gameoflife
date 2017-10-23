(function(ENV)
{
  'use strict';

  const { Iterate, Occurred } = ENV.Tools();
  const { CellStatus } = ENV.Const();

  function FillStage(rows, cols, grid = [])
  {
    Iterate(grid.length-1, rows, grid.length[0]-1, cols, function(i, j)
    {
      grid[i] = grid[i] || [];
      grid[i][j] = CellStatus.DEAD;
    });

    return grid;
  }

  function CreateStage(rows, cols, grid = [])
  {
    Iterate(-1, rows, -1, cols, function(i, j)
    {
      grid[i] = grid[i] || [];
      grid[i][j] = CellStatus.DEAD;
    });

    return grid;
  }

  function GenerateStage(stage = {}, percent)
  {
    Iterate(0, stage.rows-1, 0, stage.cols-1, function(i, j)
    {
      stage.grid[i][j] = Occurred(percent) ? CellStatus.ALIVE : CellStatus.DEAD;
    });

    return stage.grid;
  }

  function AdvanceStage(stage = {})
  {
    let aux = CreateStage(stage.rows, stage.cols);
    Iterate(0, stage.rows-1, 0, stage.cols-1, (i, j) =>
    {
          let cels =
            stage.grid[i-1][j-1] +
            stage.grid[i-1][ j ] +
            stage.grid[i-1][j+1] +
            stage.grid[ i ][j-1] +
            stage.grid[ i ][j+1] +
            stage.grid[i+1][j-1] +
            stage.grid[i+1][ j ] +
            stage.grid[i+1][j+1];

          if(stage.grid[i][j])
          {
            aux[i][j] = cels == 2 || cels == 3 ? CellStatus.ALIVE : CellStatus.ABOUT;
          }
          else
          {
            aux[i][j] = cels == 3;
          }
    });
    return aux;
  }

  function GridTools()
  {
    return {
      AdvanceStage: AdvanceStage,
      GenerateStage: GenerateStage,
      FillStage: FillStage,
      CreateStage: CreateStage
    }
  }

  ENV.GridTools = GridTools;
})(Global);
