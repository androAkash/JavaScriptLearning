// 1️⃣ E-Commerce Orders
const orders = [
  {
    orderId: "A101",
    customer: "Riya",
    items: [
      { name: "Shoes", price: 2000, qty: 1 },
      { name: "Tshirt", price: 800, qty: 2 }
    ],
    status: "delivered"
  },
  {
    orderId: "A102",
    customer: "Raj",
    items: [
      { name: "Watch", price: 1500, qty: 1 },
      { name: "Cap", price: 400, qty: 3 }
    ],
    status: "pending"
  },
  {
    orderId: "A103",
    customer: "Simran",
    items: [
      { name: "Shoes", price: 2500, qty: 1 },
      { name: "Jeans", price: 1800, qty: 1 }
    ],
    status: "delivered"
  }
];
// Challenges:
// Find total sales of all delivered orders.
// Get list of customers who spent more than ₹2000.
// Sort all orders by total amount (highest → lowest).

function eCommerce(orders){
  return orders
  .filter(d=> d.status === "delivered")
  .reduce((totalSales,order)=>{
    const oderTotal = order.items.reduce((sum,item)=> sum + item.price * item.qty,0)
    return totalSales + oderTotal
  },0
)
}
console.log(eCommerce(orders)); 
//2️⃣ Students Performance (Nested Data)
const students = [
  {
    name: "Harsh",
    subjects: [
      { subject: "Math", marks: 88 },
      { subject: "Science", marks: 92 },
      { subject: "English", marks: 76 }
    ]
  },
  {
    name: "Riya",
    subjects: [
      { subject: "Math", marks: 95 },
      { subject: "Science", marks: 81 },
      { subject: "English", marks: 90 }
    ]
  },
  {
    name: "Raj",
    subjects: [
      { subject: "Math", marks: 55 },
      { subject: "Science", marks: 60 },
      { subject: "English", marks: 58 }
    ]
  }
];
//Find each student’s average marks using map + reduce.
// Find topper’s name (highest total marks).
// Get names of students who scored above 80 in all subjects (every).