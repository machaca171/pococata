/*=== SONIDOS ===*/
function AudioPlay(Arch)
{ if (window.HTMLAudioElement)
  { var ObjR = document.getElementById('Repro');
    ObjR.src = Arch;
    ObjR.play();
  }
}