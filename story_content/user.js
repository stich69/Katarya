function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6Du3XOqyxdI":
        Script1();
        break;
      case "6EAn4c7kWK8":
        Script2();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku')
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
{
  var audio = document.getElementById('bgSongku');
audio.src="musik.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

