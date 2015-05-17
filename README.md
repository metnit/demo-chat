# demo-chat
Demo-chat 
พัฒนาโดยใช้ html5  Jquery ใช้ firebase เป็นฐานข้อมูล โหลดไปสามารถใช้งานได้ทัน 
การใช้งาน เข้าไปที่ไฟล์ chat.js ไปที่บรรทัด ที่6 
      var firebaseUrl = 'https://metnit-comment.firebaseio.com';
      แก้ไข้ firebaseUrl เป็นของเรา โดยการเข้าไปสมัครที่เว็ป firebase ทำการ create app แล้วจะได้ 
      Url มา นำมาใส่แทนของเก่า
      ส่วนบรรทัดที่ 7 var commentRef = new Firebase(firebaseUrl).child('comment');
      ใช้สำหรับกำหนดชื่อฐานข้อมูล สามารถเปลี่ยนชื่อได้ตรงนี้เลย 
เมื่อแก้ไข้เสร็จ เริ่มใช้งานได้ทันที  เหมาะสำหรับนำไปพัฒนาต่อ
