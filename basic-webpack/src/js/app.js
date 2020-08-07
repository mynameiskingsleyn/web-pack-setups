import '../css/input-elements.css';
import '../css/main.css';
import {secretButton, secretParagraph} from './dom-loader';

  var showSecret = false;
  init();
  function init(){

    secretButton.addEventListener('click', toggleSecretState);
    updateSecretParagraph();
  }
  function toggleSecretState(){
    showSecret = !showSecret;
    updateSecretParagraph();
    updateSecretButton();
  }

  function updateSecretButton() {
    if(showSecret){
      secretButton.textContent = 'Hide the Secret';
    }else{
      secretButton.textContent = 'Show the secret';
    }
  }

  function updateSecretParagraph(){
    if(showSecret){
      secretParagraph.style.display = 'block';
    }else{
      secretParagraph.style.display = 'none';
    }
  }
