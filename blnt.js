const sheetId = "1yxtqSjrgVBa3dgk3to9ytc9F5J3-nWehXjgQdOgbqrI";
    const sheetName = "bangluongnuocngoai"; // 🔁 Thay bằng tên tab chính xác trong bảng của bạn

    const url = `https://opensheet.elk.sh/${sheetId}/${sheetName}`;

     var urlParams = new URLSearchParams(window.location.search);
    var data =urlParams.get('data');
    var userid=data;
      let sheetData = [];

    // console.log(userid);
    // console.log(cccd);
    fetch(url)
      .then(res => res.json())
      .then(data => {
         sheetData = data;
      

      const found1 = sheetData.find(row =>
        row["So the"] === userid 
      );
      
      if(found1)
      {
         document.getElementById("Fdate").innerHTML = found1["2019年06月份工资表"];
         document.getElementById("MATHE").innerHTML = found1["So the"];

          document.getElementById("BOPHAN").innerHTML = found1["Bo phan"];
           document.getElementById("HOVATEN").innerHTML = found1["Ho va ten"];

            document.getElementById("BACLUONGMOI").innerHTML = found1["bac luong moi"];
           document.getElementById("TCNGAYLETET300").innerHTML = found1["Tang ca ngay le tet"];

            document.getElementById("LUONGCOBAN").innerHTML = found1["luong co ban"];
        //    document.getElementById("TCDEMLETET300").innerHTML = found1["So the"];

            document.getElementById("TROCAPXANGXE").innerHTML = found1["tro cap xang xe"];

              document.getElementById("TROCAPCUONGVI").innerHTML = found1["Tro cap cuong vi"];
           document.getElementById("LUONGBANNGAY").innerHTML = found1["Luong ban ngay"];

           document.getElementById("TROCAPNUOCNGOAI").innerHTML = found1["Trợ cấp nước ngoài"];
           document.getElementById("LUONGPCBANDEM").innerHTML = found1["Lương PC ban đêm"];

            document.getElementById("TROCAPDACBIET").innerHTML = found1["Trợ cấp đặc biệt"];

              document.getElementById("HIEUSUAT").innerHTML = found1["hieu suat"];
           document.getElementById("TIENTANGCA").innerHTML = found1["Tang ca ngay"];

             document.getElementById("TROCAPNHAO").innerHTML = found1["Tro cap nha o"];
           document.getElementById("DCLUONG").innerHTML = found1["Điều chỉnh lương"];

            document.getElementById("TONGLUONG").innerHTML = found1["tong luong"];
           document.getElementById("TROCAPKHAC").innerHTML = found1["Tro cap khac"];

             document.getElementById("TONGNGAYCONG").innerHTML = found1["TONG NGAY CONG"];
           document.getElementById("TONGTHUNHAP").innerHTML = found1["Tong luong + tang ca"];
          
             document.getElementById("CANGAY").innerHTML = found1["CA NGAY"];
           document.getElementById("LUONGTINHBHCD").innerHTML = found1["LUONG TINH BH+CĐ"];

              document.getElementById("CADEM").innerHTML = found1["Ca đêm"];
           document.getElementById("BHXHBHYT").innerHTML = found1["BHYT"];

            document.getElementById("NGHIPHEP").innerHTML = found1["Nghỉ phép+ công tác"];
           document.getElementById("THUETNCN").innerHTML = found1["Thuế TNCN个人所得税"];

             document.getElementById("DIMUON").innerHTML = found1["Đi muộn"];
           document.getElementById("KHAUTRUKHAC").innerHTML = found1["Khau tru khac"];

           document.getElementById("TANGCANGAY").innerHTML = found1["Tang ca ngay白班加班时间 150%"];
           document.getElementById("TONGKHAUTRU").innerHTML = found1["TONG KHAU TRU"];

            document.getElementById("CNNGAYTCDEM").innerHTML = found1["Tang ca đem"];

              document.getElementById("CNDEM280").innerHTML = found1["Làm chủ nhật đêm"];
           document.getElementById("THUCLINHMOI").innerHTML = found1["THUC LINH MOI"];
         
      }
      else
      {
             alert("❌ Không tìm thấy thông tin phù hợp.");
            return;
      }

       
      })
      .catch(err => console.error("Lỗi đọc dữ liệu:", err));

      $("#btnExportpdf").click(function () {
            html2canvas($('#tblCustomers')[0], {
                onrendered: function (canvas) {
                    var data = canvas.toDataURL();
                    var docDefinition = {
                        content: [{
                            image: data,
                            width: 500
                        }]
                    };
                    pdfMake.createPdf(docDefinition).download("customer-details.pdf");
                }
            });
        });
        function exportReportToExcel() {
            let table = document.getElementsByTagName("table"); // you can use document.getElementById('tableId') as well by providing id to the table tag
            TableToExcel.convert(table[0], { // html code may contain multiple tables so here we are refering to 1st table tag
                name: `export.xlsx`, // fileName you could use any name
                sheet: {
                    name: 'Sheet 1' // sheetName
                }
            });
        }