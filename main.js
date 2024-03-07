import 'flowbite';
import "./style.css";


window.nextProgress = function nextProgress(currentLayout, goToLayout){
    $("#"+currentLayout).addClass('hidden');
    $("#"+goToLayout).removeClass('hidden');
}