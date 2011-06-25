Settings = {}

Settings.Background = {
  current: 'white',
  options: ['white', 'black'],
  change: function() {
    $('body').toggleClass('black', this.current === 'black');
  }
};

Settings.Colouring = {
  current: 'off',
  options: ['on', 'off'],
  change: function() {
    $('body').toggleClass('colouring', this.current === 'on');
  }
};

Settings.Number = {
  current: 'few',
  options: ['few', 'some', 'many'],
  generate: function() {
    var current = Settings.Number.current
    if (current === 'few') {
      return Util.random_between(30, 50);
    } else if (current === 'some') {
      return Util.random_between(100, 200);
    } else if (current === 'many') {
      return Util.random_between(200, 600);
    }
  }
};

Settings.Speed = {
  current: 'ok',
  options: ['slow', 'ok', 'fast'],
  generate: function() {
    var current = Settings.Speed.current
    if (current === 'slow') {
      return Util.random_between(900, 5000);
    } else if (current === 'ok') {
      return Util.random_between(80, 300);
    } else if (current === 'fast') {
      return Util.random_between(0, 70);
    }
  }
};

// Settings.Failures = {
//   current: 'none',
//   options: ['none', 'few', 'many']
// };
//
// Settings.Errors = {
//   current: 'none',
//   options: ['none', 'few', 'many']
// };
