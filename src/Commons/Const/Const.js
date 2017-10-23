(function(ENV)
{
    'use strict';

    const GridData =
    {
      cellwidth: 8, //NO CAMBIAR
      rows: 60,
      cols: 60,
      ratio: .25,
      interval: 75
    }

    const CellStatus =
    {
      ALIVE: true,
      DEAD: false,
      ABOUT: 0
    }

    const Themes = {
      Mickey: {
        ALIVE: '#F9B248',
        ABOUT: '#FC3A52',
        DEAD: '#0E2431',
        BACKGROUND: '#E8D5B7'
      },
      LightGreen: {
        ALIVE: '#388E3C',
        ABOUT: '#8BC34A',
        DEAD: '#F2F9F1',
        BACKGROUND: '#DDEEDF'
      },
      DarkGreen: {
        ALIVE: '#A0E418',
        ABOUT: '#7FB414',
        DEAD: '#525050',
        BACKGROUND: '#E5F9BD'
      },
      DarkOrange: {
        ALIVE: '#F96D00',
        ABOUT: '#393E46',
        DEAD: '#222831',
        BACKGROUND: '#F2F2F2'
      }
    }

    function Const()
    {
      return {
          GridData: GridData,
          CellStatus: CellStatus,
          Themes: Themes
      }
    }

    ENV.Const = Const;
})(Global);
