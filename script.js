// Events Data (You can add more events here)
const events = [
  {
    title: "wonderla trip",
    date: "21th August 2025",
    dept: " ECE",
    desc: "A trip to wonderla and industrial visit where you get certificates.",
    contact: "Dr. Dakshayini (ECE) - ********"
  },
  {
    title: "Freshers Day",
    date: "5th September 2025",
    dept: "All Departments",
    desc: "Welcoming ceremony for the new batch of students.",
    contact: "Cultural Committee - 9123456789"
  },
  {
    title: "Technical Seminar on AI",
    date: "12th September 2025",
    dept: "Electronics & Communication",
    desc: "A seminar on latest trends in Artificial Intelligence.",
    contact: "Dr. Priya (ECE) - 9988776655"
  },
  {
    title: "Industrial Visit",
    date: "25th September 2025",
    dept: "Mechanical Engineering",
    desc: "Visit to BHEL manufacturing plant for practical exposure.",
    contact: "Prof. Arjun (Mech) - 9765432109"
  },
  {
    title: "College Trip",
    date: "10th October 2025",
    dept: "All Departments",
    desc: "A fun-filled educational trip for students.",
    contact: "Student Council - 9345678901"
  }
];

// Load Events into HTML
const eventList = document.getElementById("event-list");

events.forEach(event => {
  const card = document.createElement("div");
  card.classList.add("event-card");
  
  card.innerHTML = `
    <div class="event-title">${event.title}</div>
    <div class="event-date"><b>Date:</b> ${event.date}</div>
    <div class="event-dept"><b>Department:</b> ${event.dept}</div>
    <div class="event-desc">${event.desc}</div>
    <div class="event-contact"><b>Contact:</b> ${event.contact}</div>
  `;
  
  eventList.appendChild(card);
});
