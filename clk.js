function clickButton() {
  const reqBtns = document.getElementsByClassName("reqbtn");
  if (reqBtns.length > 0) {
    reqBtns[0].click(); // Click the first button

    setTimeout(() => {
      const alertOkBtn = document.getElementById("alert_ok");
      if (alertOkBtn) {
        alertOkBtn.click(); // Click the second button after 2 seconds
      } else {
        console.error("Button with ID 'alert_ok' not found.");
      }
    }, 2000); // Delay of 2 seconds
  } else {
    console.error("Button with class 'reqbtn' not found.");
  }
}

setInterval(clickButton, 60000); // Run clickButton() every 60 seconds
