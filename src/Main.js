// FALTA
// TODO: LOS METODOS QUE REGRESAN OBJ, SE MODIFICAN GLOBALMENTE EN TODOS LOS CLUSTER
// TODO: MODULAR MEJOR
//
(function(ENV)
{
  'use strict';

  const Grid = ENV.Grid;
  const Painter = ENV.Painter;

  const { GridData, Themes } = ENV.Const();

  var _interval = undefined;
  var _grid = undefined;
  var _painter = undefined;
  var _canvas = undefined;
  var _theme =
  {
      themes: [],
      current: -1
  }

  function Main()
  {
     Init();
     setListeners();
     ChangeTheme();
     Start();
  }

  function Init(full = true)
  {
    if(full)
    {
      GridData.cols = getMaxCols();
      GridData.rows = getMaxRows();
    }

    _grid = new Grid(GridData.rows, GridData.cols, GridData.ratio);

    _grid.Generate();

    _canvas = document.getElementById('canvas');

    _canvas.width = GridData.cols * GridData.cellwidth-1;
    _canvas.height = GridData.rows * GridData.cellwidth;

    _theme.Themes = [];
    for (let t in Themes)
    {
      _theme.themes.push(Themes[t])
    }

    console.log(_theme);
    _painter = new Painter(_canvas.getContext('2d'),_theme.themes[_theme.current]);
  }

  function setListeners()
  {
    window.addEventListener('resize',() =>
    {
      Reset();
      Init();
      _grid.Generate();
      Start();
    });

    document.getElementById('reset').addEventListener('click',() =>
    {
      Reset();
      _grid.Generate();
      Start();
    });

    document.getElementById('theme').addEventListener('click', () =>
    {
      ChangeTheme();
    });
  }

  function ChangeTheme()
  {
    _theme.current =_theme.current < _theme.themes.length-1 ? ++_theme.current : 0;
    let t = _theme.themes[_theme.current];

    document.getElementById('content').style.backgroundColor = t.BACKGROUND;
    document.getElementById('theme').style.backgroundColor = t.ALIVE;
    document.getElementById('reset').style.backgroundColor = t.ABOUT;
    document.getElementById('title').style.backgroundColor = t.ALIVE;
    document.getElementById('title').style.color = t.BACKGROUND;
    document.getElementById('theme').style.color = t.BACKGROUND;
    document.getElementById('reset').style.color = t.BACKGROUND;

    console.log(_theme);

    _painter.theme = t;
  }

  function Reset()
  {
    clearInterval(_interval);
  }

  function Start()
  {
    _interval = setInterval(()=>
    {
      _painter.Paint(_grid.stage.grid);
      _grid.Advance();
    },GridData.interval)
  }

  function getMaxCols(minus = 0)
  {
    return Math.floor( ( (document.body.clientWidth || 0) - 160 ) / GridData.cellwidth ) - minus;
  }

  function getMaxRows(minus = 0)
  {
    return Math.floor( ( (document.body.clientHeight || 0) - 80 - 132 ) / GridData.cellwidth ) - minus;
  }

  window.onload = Main
})(Global);
