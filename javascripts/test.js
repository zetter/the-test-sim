jQuery.fn.preventDefaultClick = function(f) {
  this.click(function(e){
    f.call(this, e);
    e.preventDefault();
  });
  return this;
}

Test = (function(){
  var puts = function(x){
    cursor.before(x)
  };

  var start_testing = function(){
    current_test = 0;
    navigation.hide();
    cursor = $("<span class='cursor'></span>")
    terminal.html(cursor);
    terminal.show();
    setTimeout(loaded, suite_load_time);
  };

  var loaded = function(){
    puts('Loaded suite /Users/zetter/.rvm/gems/ree-1.8.7-2010.02/gems/rake-0.8.7/lib/rake/rake_test_loader<br>');
    setTimeout(started, 500);
  };

  var started = function(){
    puts('Started<br>');
    start_time = (new Date()).getTime();
    setTimeout(test, random_between(0, 1) * 0000);
  };

  var test = function(){
    puts('<span>.</span>');
    if (current_test < number_of_tests) {
      current_test += 1;
      setTimeout(test, random_between(0, 1) * 0000);
    } else {
      end_time = (new Date()).getTime();
      puts('<br>');
      stats();
    }
  };
  
  var stats = function(){
    puts('Finished in ' + (end_time - start_time) / 1000 + ' seconds.<br>');
    puts('<br>');
    puts(number_of_tests + ' tests, ' + number_of_assertions + ' assertions, '+ 0 + ' failures, ' + 0  + ' errors<br>');
    setTimeout(function(){
      cursor.hide();
      navigation.fadeIn('slow');
    }, 2000);
  }

  var random_between = function(min, max){
    var diff = max - min;
    return min + (Math.random() * diff);
  };

  var generate = function(){
    suite_load_time = random_between(1, 3) * 0000;
    number_of_tests = Math.floor(random_between(30, 300));
    number_of_assertions = Math.floor(number_of_tests * random_between(1, 3));
  }

  var start_time;
  var cursor, terminal, navigation, settings;
  var current_test;
  var suite_load_time, number_of_tests, number_of_assertions;

  return {
    init: function(){
      $('a.new').preventDefaultClick(function(){
        $('.intro').hide();
        generate();
        start_testing();
      });

      $('a.run').preventDefaultClick(start_testing);

      $('a.settings').preventDefaultClick(function(){
        settings.show();
      });

      // settings = $('div.settings').hide();
      terminal = $('.terminal').hide();
      navigation = $('.navigation').hide();
    }
  };
})();

$(Test.init);