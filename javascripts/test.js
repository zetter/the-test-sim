Test = (function(){
  var puts = function(x){
    cursor.before(x)
  };

  var start_testing = function(){
    $('.intro').hide();
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
  }

  var random_between = function(min, max){
    var diff = max - min;
    return min + (Math.random() * diff);
  };

  var start_time;
  var cursor, terminal;
  var current_test = 0;
  var suite_load_time = random_between(1, 3) * 0000;
  var number_of_tests = Math.floor(random_between(30, 300));
  var number_of_assertions = Math.floor(number_of_tests * random_between(1, 3));

  return {
    init: function(){
      $('.run').click(start_testing);
      terminal = $('.terminal').hide();
      cursor = $('.terminal .cursor');
    }
  };
})();

$(Test.init);