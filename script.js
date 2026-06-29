// Translations
const translations = {
    en: {
        // Navigation
        nav_home: "Home",
        nav_research: "Research",
        nav_teaching: "Teaching",
        nav_publications: "Publications",
        nav_contact: "Contact",
        
        // Home Section
        home_title: "Welcome to My Website",
        home_subtitle: "Researcher & Educator",
        home_description: "I am a researcher passionate about advancing knowledge and sharing it with others. This website showcases my academic work, research interests, and teaching activities.",
        home_cta_research: "View My Research",
        home_cta_contact: "Get in Touch",
        
        // Research Section
        research_title: "Research",
        research_description: "My research focuses on various topics within my field. Below are some of my current research areas and projects.",
        research_area1_title: "Research Area 1",
        research_area1_desc: "Description of your first research area and ongoing projects.",
        research_area2_title: "Research Area 2",
        research_area2_desc: "Description of your second research area and key findings.",
        research_area3_title: "Research Area 3",
        research_area3_desc: "Description of your third research area and future directions.",
        
        // Teaching Section
        teaching_title: "Teaching",
        teaching_description: "I am committed to education and have taught various courses at different levels.",
        teaching_course1_title: "Course 1",
        teaching_course1_level: "Undergraduate Level",
        teaching_course1_desc: "Description of the course content and learning objectives.",
        teaching_course2_title: "Course 2",
        teaching_course2_level: "Graduate Level",
        teaching_course2_desc: "Description of the course content and learning objectives.",
        teaching_course3_title: "Course 3",
        teaching_course3_level: "Workshop/Seminar",
        teaching_course3_desc: "Description of the workshop or seminar topics.",
        
        // Publications Section
        publications_title: "Publications",
        publications_description: "Selected publications and academic contributions.",
        publication1_title: "Publication Title 1",
        publication1_authors: "Authors",
        publication1_venue: "Journal/Conference Name, Year",
        publication2_title: "Publication Title 2",
        publication2_authors: "Authors",
        publication2_venue: "Journal/Conference Name, Year",
        publication3_title: "Publication Title 3",
        publication3_authors: "Authors",
        publication3_venue: "Journal/Conference Name, Year",
        publication_link: "View Paper",
        
        // Contact Section
        contact_title: "Contact",
        contact_description: "Feel free to reach out for collaborations, questions, or opportunities.",
        contact_email: "Email",
        contact_office: "Office",
        contact_office_location: "Your Office Location",
        contact_social: "Social Media",
        
        // Footer
        footer_rights: "All rights reserved."
    },
    pt: {
        // Navigation
        nav_home: "Início",
        nav_research: "Pesquisa",
        nav_teaching: "Ensino",
        nav_publications: "Publicações",
        nav_contact: "Contato",
        
        // Home Section
        home_title: "Bem-vindo ao Meu Website",
        home_subtitle: "Pesquisador & Educador",
        home_description: "Sou um pesquisador apaixonado por avançar o conhecimento e compartilhá-lo com outros. Este website apresenta meu trabalho acadêmico, interesses de pesquisa e atividades de ensino.",
        home_cta_research: "Ver Minha Pesquisa",
        home_cta_contact: "Entre em Contato",
        
        // Research Section
        research_title: "Pesquisa",
        research_description: "Minha pesquisa se concentra em vários tópicos dentro da minha área. Abaixo estão algumas das minhas áreas de pesquisa e projetos atuais.",
        research_area1_title: "Área de Pesquisa 1",
        research_area1_desc: "Descrição da sua primeira área de pesquisa e projetos em andamento.",
        research_area2_title: "Área de Pesquisa 2",
        research_area2_desc: "Descrição da sua segunda área de pesquisa e principais descobertas.",
        research_area3_title: "Área de Pesquisa 3",
        research_area3_desc: "Descrição da sua terceira área de pesquisa e direções futuras.",
        
        // Teaching Section
        teaching_title: "Ensino",
        teaching_description: "Sou comprometido com a educação e ministrei vários cursos em diferentes níveis.",
        teaching_course1_title: "Curso 1",
        teaching_course1_level: "Nível de Graduação",
        teaching_course1_desc: "Descrição do conteúdo do curso e objetivos de aprendizagem.",
        teaching_course2_title: "Curso 2",
        teaching_course2_level: "Nível de Pós-Graduação",
        teaching_course2_desc: "Descrição do conteúdo do curso e objetivos de aprendizagem.",
        teaching_course3_title: "Curso 3",
        teaching_course3_level: "Workshop/Seminário",
        teaching_course3_desc: "Descrição dos tópicos do workshop ou seminário.",
        
        // Publications Section
        publications_title: "Publicações",
        publications_description: "Publicações selecionadas e contribuições acadêmicas.",
        publication1_title: "Título da Publicação 1",
        publication1_authors: "Autores",
        publication1_venue: "Nome do Jornal/Conferência, Ano",
        publication2_title: "Título da Publicação 2",
        publication2_authors: "Autores",
        publication2_venue: "Nome do Jornal/Conferência, Ano",
        publication3_title: "Título da Publicação 3",
        publication3_authors: "Autores",
        publication3_venue: "Nome do Jornal/Conferência, Ano",
        publication_link: "Ver Artigo",
        
        // Contact Section
        contact_title: "Contato",
        contact_description: "Sinta-se à vontade para entrar em contato para colaborações, perguntas ou oportunidades.",
        contact_email: "E-mail",
        contact_office: "Escritório",
        contact_office_location: "Localização do Seu Escritório",
        contact_social: "Redes Sociais",
        
        // Footer
        footer_rights: "Todos os direitos reservados."
    }
};

// Current language
let currentLang = 'en';

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Animate hamburger
        const spans = hamburger.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const spans = hamburger.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });
    
    // Language switcher
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            if (lang !== currentLang) {
                currentLang = lang;
                switchLanguage(lang);
                
                // Update active button
                langButtons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                
                // Update HTML lang attribute
                document.documentElement.lang = lang;
            }
        });
    });
    
    // Smooth scroll with offset for fixed navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Highlight active nav link on scroll
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.style.color = '';
            if (link.getAttribute('href') === '#' + current) {
                link.style.color = 'var(--primary-color)';
            }
        });
    });
    
    // Load saved language preference
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && translations[savedLang]) {
        currentLang = savedLang;
        switchLanguage(savedLang);
        langButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === savedLang) {
                btn.classList.add('active');
            }
        });
        document.documentElement.lang = savedLang;
    }
});

// Switch language function
function switchLanguage(lang) {
    if (!translations[lang]) return;
    
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Save language preference
    localStorage.setItem('preferredLanguage', lang);
}
