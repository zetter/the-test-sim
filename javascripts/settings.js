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
  current: 'some',
  options: ['few', 'some', 'many']
};

Settings.Speed = {
  current: 'ok',
  options: ['slow', 'ok', 'fast']
};

Settings.Failiures = {
  current: 'none',
  options: ['none', 'few', 'many']
};

Settings.Errors = {
  current: 'none',
  options: ['none', 'few', 'many']
};
