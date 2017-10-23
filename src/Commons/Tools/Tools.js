(function(ENV)
{
  'use strict';

  function _clone(obj, aux = {})
  {
    Object.assign(aux, obj);
  }

  function _occurred(percent)
  {
      return Math.random() < percent;
  }

  function _iterate(rMin, rMax, cMin, cMax, callback)
  {
    for (let i = rMin; i <= rMax; i++)
    {
      for (let j = cMin; j <= cMax; j++)
      {
        callback(i, j)
      }
    }
  }

  function Tools()
  {
    return {
      Occurred: _occurred,
      Clone: _clone,
      Iterate: _iterate
    }
  }

  ENV.Tools = Tools;
})(Global);
