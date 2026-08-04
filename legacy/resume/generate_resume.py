from fpdf import FPDF

pdf = FPDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()
pdf.set_margins(18, 18, 18)

pdf.set_font("Helvetica", "B", 20)
pdf.set_text_color(0, 51, 102)
pdf.cell(0, 10, "AJITH KUMAR S", ln=True, align="C")
pdf.set_font("Helvetica", "", 11)
pdf.set_text_color(0, 0, 0)
pdf.cell(0, 6, "Java Full Stack Developer", ln=True, align="C")
pdf.set_font("Helvetica", "", 9)
pdf.cell(
    0,
    5,
    "7338773239 | ajith67200@gmail.com | linkedin.com/in/ajith-kumar-66946a21a | github.com/AjithKumar-67200",
    ln=True,
    align="C",
)
pdf.ln(4)


def section(title):
    pdf.set_font("Helvetica", "B", 12)
    pdf.set_text_color(0, 51, 102)
    pdf.cell(0, 7, title, ln=True)
    pdf.set_draw_color(0, 51, 102)
    pdf.line(pdf.get_x(), pdf.get_y(), pdf.get_x() + 174, pdf.get_y())
    pdf.ln(3)
    pdf.set_text_color(0, 0, 0)


def body(text):
    pdf.set_font("Helvetica", "", 9)
    pdf.multi_cell(0, 4.5, text)
    pdf.ln(2)


def bullet(text):
    pdf.set_font("Helvetica", "", 9)
    pdf.multi_cell(0, 4.5, "- " + text)
    pdf.ln(1)


section("Professional Summary")
body(
    "Java Full Stack Developer with 2+ years of experience designing and delivering scalable microservices, "
    "RESTful APIs, and full-stack applications using Java, Spring Boot, React.js, and Laravel. Proven expertise "
    "in backend development, distributed systems, MySQL database design, Hibernate/JPA, Redis caching, and query "
    "optimization for high-throughput logistics platforms processing 5,000+ daily transactions. Experienced in "
    "system design, Spring Security, JWT authentication, CI/CD pipelines, performance optimization, and Agile "
    "delivery environments. Skilled at leveraging AI-assisted development tools to accelerate productivity and "
    "elevate code quality."
)

section("Technical Skills")
body("Languages: Java, JavaScript, SQL")
body("Frameworks: Spring Boot, Spring MVC, Spring Security, Hibernate/JPA, React.js")
body("Databases: MySQL, MongoDB, Redis")
body("Tools: Git, Maven, Postman, JMeter, Swagger, Cursor, Antigravity, Claude")
body("Operating Systems: Windows, Linux")
body(
    "Concepts: Microservices Architecture, Distributed Systems, System Design, REST APIs, Backend Development, "
    "JWT Authentication, Spring Security, Query Optimization, Caching (Redis), Performance Optimization, "
    "Production Support, Exception Handling, Logging, Agile, CI/CD Basics"
)

section("Professional Experience")
pdf.set_font("Helvetica", "B", 10)
pdf.cell(0, 5, "Voyage Software Technologies, Chennai", ln=True)
pdf.set_font("Helvetica", "I", 9)
pdf.cell(0, 5, "April 2024 - Present", ln=True, align="R")
pdf.ln(2)

pdf.set_font("Helvetica", "B", 9)
pdf.cell(0, 5, "Project: ShipCRM", ln=True)
pdf.set_font("Helvetica", "I", 8)
pdf.cell(
    0,
    4,
    "Tech Stack: Java, Spring Boot, React.js, Flutter, MySQL, MongoDB, Redis, SSE, JWT",
    ln=True,
)
pdf.ln(1)
for item in [
    "Engineered scalable RESTful APIs for a microservices-based logistics CRM platform, supporting end-to-end shipment processing, real-time tracking, and customer management workflows.",
    "Architected MySQL schema and optimized complex queries via indexing and execution plan analysis; leveraged MongoDB for flexible, high-volume document storage.",
    "Spearheaded development of a Flutter-based Driver App for real-time shipment tracking using Server-Sent Events (SSE).",
    "Integrated Redis caching layer to reduce backend response times and decrease database load.",
    "Implemented role-based access control (RBAC) using Spring Security and JWT authentication across microservices.",
]:
    bullet(item)

pdf.ln(1)
pdf.set_font("Helvetica", "B", 9)
pdf.cell(0, 5, "Project: SoluShip", ln=True)
pdf.set_font("Helvetica", "I", 8)
pdf.cell(
    0,
    4,
    "Tech Stack: Java, Spring Boot, Laravel, MySQL, MongoDB, REST APIs, JWT",
    ln=True,
)
pdf.ln(1)
for item in [
    "Delivered core shipment management modules on a distributed system handling 5,000+ daily transactions across 10+ integrated carrier systems with 99.5% uptime.",
    "Engineered and maintained 20+ secure RESTful APIs with robust input validation, JWT authentication, and RBAC.",
    "Integrated 10+ external carrier and e-commerce platforms including Day & Ross, UPS, DHL, FedEx, Shopify, SEKO360, 3PL providers, and WooCommerce.",
    "Achieved 35% application performance improvement by refactoring legacy code, optimizing SQL queries, and eliminating N+1 database access patterns.",
    "Provided production support with Grafana dashboards to sustain 99.5% system uptime across business-critical workflows.",
]:
    bullet(item)

section("Key Projects")
body(
    "ShipCRM - A microservices-based logistics CRM platform built with Java, Spring Boot, and React.js, featuring "
    "real-time shipment tracking via SSE, Redis caching, RBAC with Spring Security and JWT, EDI invoice processing, "
    "and automated report generation through scheduled background jobs."
)
body(
    "SoluShip - A distributed shipping automation platform built with Java, Spring Boot, and Laravel, integrating "
    "10+ carrier APIs for real-time tracking, automated label generation, and rate comparison, supporting 5,000+ "
    "daily transactions."
)

section("Education")
pdf.set_font("Helvetica", "B", 9)
pdf.cell(0, 5, "Bachelor of Engineering in Mechanical Engineering", ln=True)
pdf.set_font("Helvetica", "", 9)
pdf.cell(0, 5, "Jaya Engineering College, Chennai - 2021", ln=True)

output_path = r"c:\Users\AK\OneDrive\Documents\portfolio1\Personal-Portfolio\resume\Ajith_Kumar_S_Resume.pdf"
pdf.output(output_path)
print(f"Created: {output_path}")
