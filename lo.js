const sheetId = "1yxtqSjrgVBa3dgk3to9ytc9F5J3-nWehXjgQdOgbqrI";
    const sheetName = "bangluongnuocngoai"; // 🔁 Thay bằng tên tab chính xác trong bảng của bạn
    const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;
  let sheetData = [];

$("#btnSm").click(function(){
    if($("#txtUserid").val()=="")
    {
        alert("Nhập đầy đủ thông tin(not null)");
        return;
    }

    const inputStaff = document.getElementById("txtUserid").value.trim();

     // Lấy dữ liệu từ Google Sheet khi load trang
    fetch(url)
      .then(res => res.json())
      .then(data => {
        sheetData = data;
      

      const found = sheetData.find(row =>
        row["So the"] === inputStaff
      );
      if (found) {
        var data=inputStaff;
       
          
         window.location.href = "https://tungnoobn123.github.io/bangluongnguoitrung/bangluongnguoitrung.html?data="+data+"";
         
        // return;
        // resultText.textContent = "✅ Nhân viên hợp lệ!";
        // resultText.style.color = "green";
        
      } else {
        // resultText.textContent = "❌ Không tìm thấy thông tin phù hợp.";
        // resultText.style.color = "red";
         alert("❌ Không tìm thấy thông tin phù hợp.(no data)");
         return;
      }
      })
      .catch(err => {
        console.error("Lỗi tải dữ liệu:", err);
        document.getElementById("result").textContent = "Không tải được dữ liệu từ Google Sheet.";
      });

  
  

})