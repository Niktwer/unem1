  
  
  var ch_lan = 0;
  var fb=document.getElementById('f-but');
  var tb=document.getElementById('t-but');
  var thb=document.getElementById('th-but');
  var nv=document.getElementById('nv');
  var lan=document.getElementById('lan');
  var text1=document.getElementById('text1');
  var myImage=document.getElementById('myImage');

  function modal() {
      MicroModal.init();
      MicroModal.show('modal-1');
  }


  function f1() {
      nv.src = '#{data.item1}';
      lan.innerHTML = screen.height;
  }



  function f2() {
      nv.src = '#{data.item2}';
      lan.innerHTML = "2";
  }


  function f3() {
      nv.src = '#{data.item3}';
      lan.innerHTML = "3";
  }


  function en() {
      nv.src = '#{data1.item1}';
  }


  function ua() {
      nv.src = '#{data1.item2}';
  }


  function flag() {
      "window.open('/mail/send.pug','_blank',false,'height=100,widht=100')";
  }



  function bd() {
      if (myImage.src.indexOf('#{proba.item1}') > 0) {
          ch_lan = 1;
          myImage.src = '#{proba.item2}';
          lan.innerHTML = 'uk';
          text1.innerHTML = '#{opis.item1}';
          text_lan_uk();
      } else {
          ch_lan = 0;
          myImage.src = '#{proba.item1}';
          lan.innerHTML = 'en';
          text1.innerHTML = '#{opis.item2}';
          text_lan_en();
      }
  }


  function flag_im() {
      lan.innerHTML = "вибір мови";
  }


  function flag_out() {
      lan.innerHTML = "";
  }


  function h_ss() {
      nv.height = screen.height * 0.8;
  }



  function text_lan_en() {
      fb.innerHTML = 'first';
      tb.innerHTML = 'two';
      thb.innerHTML = 'third';
  }


  function text_lan_uk() {
      fb.innerHTML = 'перший';
      tb.innerHTML = 'другий';
      thb.innerHTML = 'третій';
  }