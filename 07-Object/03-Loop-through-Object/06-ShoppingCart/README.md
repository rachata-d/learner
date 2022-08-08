- ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
- นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
- สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

Build a program to recieve 4 inputs:

1. Item name
2. Amount
3. Price
4. Discount percentage

Collect all the key & value and create an object with it. If there are no discounts or the discount is equal to 0, the key-value for the discount is unnecessary

Create a function to calculate the final price of the object
