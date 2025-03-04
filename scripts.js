<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Braeden Murphy | Portfolio</title>
    <link rel="stylesheet" href="styles.css">
    <script defer src="scripts.js"></script>
    <style>
        /* General Styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }
        body {
            background-color: white;
            color: #333;
        }
        
        /* Navbar */
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px;
            background: white;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            position: fixed;
            width: 100%;
            top: 0;
            left: 0;
            z-index: 1000;
        }
        .logo {
            font-size: 24px;
            font-weight: bold;
            color: purple;
        }
        .nav-links {
            list-style: none;
            display: flex;
        }
        .nav-links li {
            margin: 0 15px;
        }
        .nav-links a {
            text-decoration: none;
            color: #333;
            font-size: 18px;
            transition: color 0.3s;
        }
        .nav-links a:hover {
            color: purple;
        }
        .menu-toggle {
            display: none;
            background: none;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }
        
        /* Hero Section */
        .hero {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 100vh;
            background: #f4f4f4;
        }
        .hero-content h1 {
            font-size: 48px;
        }
        .hero-content h1 span {
            color: purple;
            font-weight: bold;
        }
        .hero-content h2 {
            font-size: 32px;
            color: #555;
        }
        .hero-content p {
            margin: 20px 0;
            font-size: 18px;
            color: #666;
        }
        
        /* Sections */
        section {
            padding: 80px 10%;
        }
        h2 {
            font-size: 32px;
            color: purple;
            text-align: center;
            margin-bottom: 20px;
        }
        p {
            font-size: 18px;
            color: #555;
            text-align: center;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .menu-toggle {
                display: block;
            }
            .nav-links {
                display: none;
                flex-direction: column;
                background: white;
                position: absolute;
                top: 60px;
                right: 20px;
                width: 200px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            }
            .nav-links.active {
                display: flex;
            }
        }
    </style>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const menuToggle = document.querySelector(".menu-toggle");
            const navLinks = document.querySelector(".nav-links");
            
            menuToggle.addEventListener("click", function() {
                navLinks.classList.toggle("active");
            });
        });
    </script>
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="logo">Braeden Murphy</div>
            <ul class="nav-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <button class="menu-toggle">☰</button>
        </nav>
    </header>
    
    <section id="home" class="hero">
        <div class="hero-content">
            <h1>Hi, I'm <span>Braeden Murphy</span></h1>
            <h2>Interactive Multimedia Designer</h2>
            <p>Crafting visually compelling and user-centric digital experiences.</p>
            <div class="buttons">
                <a href="#projects" class="btn primary">View My Work</a>
                <a href="#contact" class="btn secondary">Contact Me</a>
            </div>
        </div>
    </section>
    
    <section id="about" class="about">
        <h2>About Me</h2>
        <p>I'm an Interactive Multimedia Designer and SMAD major at James Madison University with a passion for creating visually compelling and user-centric digital experiences. Proficient in Adobe Creative Suite, Figma, GitHub, and Bootstrap, with hands-on experience in app development and web design.</p>
        <p>Seeking opportunities to leverage my design skills and technical expertise to create impactful digital solutions and enhance user interactions.</p>
    </section>
    
    <section id="projects" class="projects">
        <h2>Projects</h2>
        <p>Coming soon! I'll showcase my work here.</p>
    </section>
    
    <section id="contact" class="contact">
        <h2>Contact Me</h2>
        <p>Let's connect! More details coming soon.</p>
    </section>
</body>
</html>
