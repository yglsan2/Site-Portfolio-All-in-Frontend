/**
 * Données statiques du portfolio (version frontend-only).
 * Pour régénérer avec tous les extraits de code : lancer le backend (repo Site-Portfolio)
 * puis exécuter : node scripts/export-from-api.js
 */

export const profile = {
  id: 1,
  name: 'Benjamin Moine',
  title: "Développeur d'applications",
  bio: "Développeur passionné par les applications et l'infra. Expérience en Java (Jakarta EE, Spring Boot, Maven), Python, JavaScript, modélisation de données et DevOps (Docker, Kubernetes, Ansible, Jenkins, CI/CD). Méthodes agiles (Scrum), tests unitaires et déploiement. Anglais C1.",
  email: null,
  linkedinUrl: null,
  githubUrl: 'https://github.com/yglsan2'
}

export const projects = [
  { id: 1, title: "BarrelMCD (Python)", slug: "barrelmcd-python", description: "Outil de modélisation MCD en Python. Interface graphique (Tkinter), génération de schémas, export. Projet personnel complet et utilisable.", type: "SOFTWARE", technologies: ["Python", "Tkinter", "SQL"], sortOrder: 1, projectUrl: null, repoUrl: "https://github.com/yglsan2/BarrelMCD-python" },
  { id: 2, title: "Lumières d'Ukraine", slug: "lumieres-ukraine", description: "Plateforme culturelle : bibliothèque virtuelle et événements. Vue 3, i18n (FR, EN, UK, DE, PL), backend Spring Boot avec JWT.", type: "WEBSITE", technologies: ["Vue 3", "Pinia", "Vue I18n", "Spring Boot", "PostgreSQL"], sortOrder: 2, projectUrl: null, repoUrl: "https://github.com/yglsan2/Ukraine" },
  { id: 3, title: "DokiLight", slug: "dokilight", description: "Chatbot RAG (stage Dokos) : version light de Doki Expert. Recherche par mots-clés dans la doc, PostgreSQL/pgvector, Streamlit, scoring hybride sémantique + conceptuel.", type: "SOFTWARE", technologies: ["Python", "Streamlit", "PostgreSQL", "pgvector", "SentenceTransformer"], sortOrder: 3, projectUrl: null, repoUrl: "https://github.com/yglsan2/DokiLight" },
  { id: 4, title: "Noublipo (NopList)", slug: "noublipo", description: "Application liste de courses / shopping list.", type: "SOFTWARE", technologies: ["Flutter", "Dart"], sortOrder: 4, projectUrl: null, repoUrl: "https://github.com/yglsan2/Noublipo" },
  { id: 5, title: "ManyFaces", slug: "manyfaces", description: "Logiciel de création de personnages et PNJ pour jeux de rôle.", type: "SOFTWARE", technologies: ["Flutter", "Dart"], sortOrder: 5, projectUrl: null, repoUrl: "https://github.com/yglsan2/RPGproject-Flutter-3-me-application-sous-flutter-" },
  { id: 6, title: "MoodCast", slug: "moodcast", description: "Application Flutter (météo / ambiance).", type: "SOFTWARE", technologies: ["Flutter", "Dart"], sortOrder: 6, projectUrl: null, repoUrl: "https://github.com/yglsan2/MoodCast" },
  { id: 7, title: "Carned Beef", slug: "carned-beef", description: "Partage de partitions musicales.", type: "SOFTWARE", technologies: ["Flutter", "Dart"], sortOrder: 7, projectUrl: null, repoUrl: "https://github.com/yglsan2/CarnedBeef" },
  { id: 8, title: "PloufPlouf", slug: "ploufplouf", description: "Logiciel de tirage au sort pédagogique.", type: "SOFTWARE", technologies: ["Flutter", "Dart"], sortOrder: 8, projectUrl: null, repoUrl: "https://github.com/yglsan2/PloufPlouf" },
  { id: 9, title: "Mes applications UserScript", slug: "userscripts", description: "Ensemble d'extensions utilisateur en JavaScript (UserScript) : Lichess, etc.", type: "OPEN_SOURCE", technologies: ["JavaScript", "UserScript"], sortOrder: 9, projectUrl: null, repoUrl: "https://github.com/yglsan2/Mes-applications-Userscript-JS-" }
]

export const skills = [
  { id: 1, name: "Java", category: "Backend", level: 90, sortOrder: 1, keywords: ["Jakarta EE", "Spring Boot", "JPA", "Maven"] },
  { id: 2, name: "Spring Boot", category: "Backend", level: 88, sortOrder: 2, keywords: ["REST", "Security", "Data JPA", "Validation"] },
  { id: 3, name: "Python", category: "Backend", level: 85, sortOrder: 3, keywords: ["Streamlit", "pgvector", "Dokos"] },
  { id: 4, name: "Tomcat", category: "Backend", level: 75, sortOrder: 4, keywords: ["Serveur d'applications", "Java EE"] },
  { id: 5, name: "Frappe / ERPNext", category: "Backend", level: 70, sortOrder: 5, keywords: ["Framework Python", "ERP", "Frappe"] },
  { id: 6, name: "Chatbot RAG", category: "Backend", level: 78, sortOrder: 6, keywords: ["DokiLight", "Recherche sémantique", "pgvector", "Scoring hybride"] },
  { id: 7, name: "Vue.js", category: "Frontend", level: 88, sortOrder: 1, keywords: ["Vue 3", "Composition API", "Pinia", "Vite", "I18n"] },
  { id: 8, name: "Tailwind CSS", category: "Frontend", level: 85, sortOrder: 2, keywords: ["Utility-first", "Responsive"] },
  { id: 9, name: "JavaScript", category: "Frontend", level: 86, sortOrder: 3, keywords: ["ES6+", "UserScript", "DOM", "Fetch"] },
  { id: 10, name: "HTML / CSS", category: "Frontend", level: 88, sortOrder: 4, keywords: ["Sémantique", "Accessibilité", "Responsive"] },
  { id: 11, name: "Flutter / Dart", category: "Mobile", level: 82, sortOrder: 1, keywords: ["MoodCast", "Carned Beef", "Noublipo", "ManyFaces", "PloufPlouf"] },
  { id: 12, name: "PostgreSQL", category: "Data", level: 80, sortOrder: 1, keywords: ["SQL", "pgvector", "Migrations"] },
  { id: 13, name: "MySQL", category: "Data", level: 75, sortOrder: 2, keywords: ["SQL", "SGBD"] },
  { id: 14, name: "SQL Server", category: "Data", level: 70, sortOrder: 3, keywords: ["Microsoft", "T-SQL", "SGBD"] },
  { id: 15, name: "Docker", category: "DevOps", level: 78, sortOrder: 1, keywords: ["Conteneurisation", "Déploiement"] },
  { id: 16, name: "Kubernetes", category: "DevOps", level: 70, sortOrder: 2, keywords: ["Orchestration", "Pods"] },
  { id: 17, name: "Ansible", category: "DevOps", level: 72, sortOrder: 3, keywords: ["Load balancing", "Déploiement"] },
  { id: 18, name: "Jenkins", category: "DevOps", level: 75, sortOrder: 4, keywords: ["CI", "Pipelines"] },
  { id: 19, name: "GitHub Actions / CI-CD", category: "DevOps", level: 80, sortOrder: 5, keywords: ["CI/CD", "Workflows"] },
  { id: 20, name: "GitLab", category: "DevOps", level: 78, sortOrder: 6, keywords: ["CI/CD", "Registry", "Dépôts"] },
  { id: 21, name: "Prometheus", category: "DevOps", level: 72, sortOrder: 7, keywords: ["Monitoring", "Métriques", "Alerting"] },
  { id: 22, name: "Grafana", category: "DevOps", level: 72, sortOrder: 8, keywords: ["Tableaux de bord", "Visualisation", "Monitoring"] },
  { id: 23, name: "AWS", category: "DevOps", level: 68, sortOrder: 9, keywords: ["Cloud", "EC2", "S3", "Déploiement"] },
  { id: 24, name: "VirtualBox", category: "DevOps", level: 75, sortOrder: 10, keywords: ["Virtualisation", "VM", "Environnements de test"] },
  { id: 25, name: "SSH", category: "DevOps", level: 82, sortOrder: 11, keywords: ["Sécurisation", "Accès distant", "Clés", "Tunnels"] },
  { id: 26, name: "SCRUM", category: "Méthodes", level: 85, sortOrder: 1, keywords: ["Agilité", "Sprints"] },
  { id: 27, name: "Kanban", category: "Méthodes", level: 82, sortOrder: 2, keywords: ["Agilité", "Flux", "Tableaux"] },
  { id: 28, name: "Git", category: "Outils", level: 88, sortOrder: 1, keywords: ["GitHub", "GitLab", "CI/CD"] },
  { id: 29, name: "Bash", category: "Outils", level: 80, sortOrder: 2, keywords: ["Lignes de commande", "Scripting", "Linux"] },
  { id: 30, name: "SonarQube", category: "Outils", level: 72, sortOrder: 3, keywords: ["Qualité de code", "Vérifications", "Dette technique"] }
]

/** Liste des extraits de code. Remplie par défaut vide ; pour tout remplir : lancer le backend puis node scripts/export-from-api.js */
export const snippets = []
