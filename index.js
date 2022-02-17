function footerDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    const date = "&copy;" + year + "年" + month + "月" + day + "日";
    document.getElementById("footer").innerHTML = date;
  }
  
  footerDate();