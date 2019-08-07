javascript:(function block_page(step, retry){
  /* timed loop. retry each step after 0.5sec */
  console.log("Step",step,"retry",retry);
  ++retry;
  /* timeout */
  if(retry > 10) {
    alert("Failed in step "+step);
    return;
  }
  /* do the step */
  var cc=0;
  switch(step) {
  case cc++:
    /* click the first unsubscribe */
    var hide= document.querySelector('li[data-feed-option-name="UNSUBSCRIBE_ATTACHED_STORY_ACTOR"] a');
    retry=0;
    ++step;
    if (hide !== null) {
      hide.click();
    }
    break;
  case cc++:
    /* click the support/notify link */
    var unsub= document.querySelector("a[href*='UNSUBSCRIBE_ATTACHED_STORY']");
    if (unsub === null) {
      break;
    }
    retry=0;
    ++step;
    unsub.click();
    break;
  case cc++:
    /* say that it's annoying */
    var annoying= document.querySelector('input[value=annoying]');
    if (annoying === null) {
      break;
    }
    retry=0;
    ++step;
    annoying.click();
    break;
  case cc++:
    /* click continue */
    var btn_continue= document.getElementById('nfx_dialog_continue');
    if (btn_continue === null) {
      break;
    }
    retry=0;
    ++step;
    btn_continue.click();
    break;
  case cc++:
    /* block the actor */
    var blck_page= document.getElementById('NFXAction-BLOCK_PAGE');
    if (blck_page === null) {
      /* unless already blocked. in that case we can advance */
      blck_page= document.getElementById('NFXAction-BLOCK_ACTOR');
      if (blck_page === null) {
        break;
      }
    }
    retry=0;
    ++step;
    blck_page.click();
    break;
  case cc++:
    /* Now the fb related stuff is done */
    var done= document.getElementById('nfx_dialog_done');
    if (done === null) {
      break;
    }
    retry=0;
    ++step;
    done.click();
    break;
  case cc++:
    /* As a last step, remove the options */
    var unsub= document.querySelector("a[href*='UNSUBSCRIBE_ATTACHED_STORY']");
    if (unsub === null) {
      break;
    }
    console.log(unsub.parentNode);
    unsub.parentNode.parentNode.removeChild(unsub.parentNode);
    return;
  }
  window.setTimeout(block_page, 500, step, retry) })(0,0);