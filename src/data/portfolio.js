/**
 * Données statiques du portfolio (version frontend-only).
 * Pour régénérer avec tous les extraits de code : lancer le backend (repo Site-Portfolio)
 * puis exécuter : node scripts/export-from-api.js
 */

export const profile = {
  id: 1,
  name: 'Benjamin Moine',
  title: {
    fr: "Développeur d'applications",
    en: 'Application developer',
  },
  bio: {
    fr: "Je conçois des applications web et des outils métier : Java et Spring Boot, Vue et React, Python, données, et la mise en production (Docker, CI/CD).\n\nTrois réalisations sont détaillées dans les projets : un stage sur un ERP, un site de rendez-vous avec paiement, une plateforme culturelle en cinq langues. Anglais C1.",
    en: "I build web applications and business tools: Java and Spring Boot, Vue and React, Python, data, and delivery (Docker, CI/CD).\n\nThree pieces of work are written up in the projects: an ERP internship, a booking site with payment, and a cultural platform in five languages. English C1.",
  },
  availability: {
    fr: "Basé à Tours. À l'écoute d'un poste de développeur d'applications.",
    en: 'Based in Tours. Open to application developer roles.',
  },
  location: 'Tours',
  email: 'superkoal@hotmail.com',
  phone: '0789202489',
  phoneHref: 'tel:+33789202489',
  linkedinUrl: 'https://www.linkedin.com/in/benjamin-moine-b4aa409a/',
  githubUrl: 'https://github.com/yglsan2',
}

export const projects = [
  {
    id: 3,
    title: { fr: 'Doki — bot RAG (stage Dokos)', en: 'Doki — RAG bot (Dokos internship)' },
    slug: 'dokilight',
    description: {
      fr: "Stage chez Dokos. Doki est l'assistant conversationnel du Desk : une application Frappe qui indexe les documents de l'ERP, répond avec citations, et ne crée un document qu'après confirmation.",
      en: 'Dokos internship. Doki is the Desk assistant: a Frappe app that indexes ERP documents, answers with citations, and creates a document only after confirmation.',
    },
    caseStudy: {
      problem: {
        fr: "Dans le Desk Dokos, retrouver une information métier (client, devis, stock) et préparer une écriture demande de naviguer dans l'ERP, avec le risque d'agir hors des droits de l'utilisateur.",
        en: 'In the Dokos Desk, finding a business fact (customer, quotation, stock) and preparing a write means clicking through the ERP, with the risk of acting outside the user\'s permissions.',
      },
      role: {
        fr: "Stage chez Dokos. Conception de Doki, une application Frappe branchée sur les documents de l'ERP.",
        en: 'Internship at Dokos. I designed Doki, a Frappe application connected to the ERP documents.',
      },
      decision: {
        fr: "Recherche hybride (embeddings et concepts) pour répondre avec des citations. Les écritures passent par frappe.new_doc et ne partent qu'après confirmation, une fois frappe.has_permission vérifié.",
        en: 'Hybrid retrieval (embeddings and concepts) so answers cite their sources. Writes go through frappe.new_doc and run only after confirmation, once frappe.has_permission has been checked.',
      },
      result: {
        fr: "L'assistant interroge clients, devis, commandes, factures et stock, cite ses sources, et refuse une action si l'utilisateur n'a pas le droit.",
        en: 'The assistant queries customers, quotations, orders, invoices and stock, cites its sources, and refuses an action when the user lacks permission.',
      },
    },
    type: 'SOFTWARE',
    technologies: ['Frappe', 'Python', 'RAG', 'DocTypes', 'PostgreSQL', 'pgvector'],
    teaser: {
      fr: 'Le détail et les extraits Frappe sont sur la fiche.',
      en: 'The write-up and the Frappe excerpts are on the project page.',
    },
    badge: 'Stage Dokos',
    sortOrder: 0,
    featured: true,
    projectUrl: null,
    repoUrl: 'https://github.com/yglsan2/DokiLight',
  },
  {
    id: 10,
    title: { fr: 'Site Hypnotisation (Chloé Deroy)', en: 'Hypnotherapy site (Chloé Deroy)' },
    slug: 'site-hypnotisation',
    description: {
      fr: "Site professionnel pour une hypnothérapeute : présentation, prise de rendez-vous et paiement.",
      en: 'Professional site for a hypnotherapist: presentation, booking and payment.',
    },
    caseStudy: {
      problem: {
        fr: "Une hypnothérapeute avait besoin d'un site professionnel : se présenter, prendre des rendez-vous et encaisser, avec un espace réservé au patient.",
        en: 'A hypnotherapist needed a professional site: a presentation, appointment booking, payment, and an area reserved for the patient.',
      },
      role: {
        fr: "Application web React (Vite, Tailwind) et API Spring Boot en Java 21.",
        en: 'React web app (Vite, Tailwind) and a Spring Boot API in Java 21.',
      },
      decision: {
        fr: "L'espace patient est authentifié par JWT. Le paiement Stripe est porté par le backend. Les données sont dans PostgreSQL, et le parcours tient compte du RGPD.",
        en: 'The patient area is authenticated with JWT. Stripe payment is handled by the backend. Data lives in PostgreSQL, and the flow takes GDPR into account.',
      },
      result: {
        fr: "Réservation, paiement et rendez-vous de l'utilisateur connecté dans la même application.",
        en: 'Booking, payment and the signed-in user\'s appointments in the same application.',
      },
    },
    type: 'WEBSITE',
    technologies: ['React', 'Vite', 'Tailwind', 'Spring Boot', 'Java 21', 'JWT', 'Stripe', 'PostgreSQL'],
    teaser: {
      fr: 'Miniature animée de l\'accueil, et le lien ouvre la vraie page.',
      en: 'Animated homepage thumbnail, and the link opens the real page.',
    },
    sortOrder: 1,
    projectUrl: '/hypnose/',
    repoUrl: 'https://github.com/yglsan2/SiteHypnotisation',
  },
  {
    id: 2,
    title: { fr: "Lumières d'Ukraine", en: "Lumières d'Ukraine" },
    slug: 'lumieres-ukraine',
    description: {
      fr: "Plateforme culturelle : bibliothèque, événements et adhésion, en cinq langues.",
      en: 'Cultural platform: library, events and membership, in five languages.',
    },
    caseStudy: {
      problem: {
        fr: "L'association avait besoin d'une plateforme culturelle — bibliothèque, événements, adhésion — pour un public qui ne partage pas une seule langue.",
        en: 'The association needed a cultural platform — library, events, membership — for an audience that does not share a single language.',
      },
      role: {
        fr: "Front Vue 3 et API Spring Boot avec JWT.",
        en: 'Vue 3 frontend and a Spring Boot API with JWT.',
      },
      decision: {
        fr: "vue-i18n sur cinq langues (français, anglais, ukrainien, allemand, polonais) : la langue du navigateur est reprise, puis mémorisée. La bibliothèque filtre par texte, catégorie et langue, et peut trier les livres par proximité.",
        en: 'vue-i18n across five languages (French, English, Ukrainian, German, Polish): the browser language is picked up, then remembered. The library filters by text, category and language, and can sort books by distance.',
      },
      result: {
        fr: "Le même site se lit en cinq langues, avec une carte d'adhésion et un catalogue filtrable.",
        en: 'The same site reads in five languages, with a membership card and a filterable catalogue.',
      },
    },
    teaser: {
      fr: 'Miniature animée de l\'accueil, et le lien ouvre la vraie page : livres flottants, cinq langues.',
      en: 'Animated homepage thumbnail, and the link opens the real page: floating books, five languages.',
    },
    type: 'WEBSITE',
    technologies: ['Vue 3', 'Vue I18n', 'Spring Boot', 'PostgreSQL'],
    sortOrder: 2,
    badge: null,
    projectUrl: '/lumieres/?lang=fr',
    repoUrl: 'https://github.com/yglsan2/Ukraine',
  },
  {
    id: 1,
    title: 'BarrelMCD (Python)',
    slug: 'barrelmcd-python',
    description: {
      fr: "Outil de modélisation MCD en Python. Interface PyQt5 (thème sombre, entités graphiques), schémas et export.",
      en: 'MCD modeling tool in Python. PyQt5 interface (dark theme, graphical entities), diagrams and export.',
    },
    type: 'SOFTWARE',
    technologies: ['Python', 'PyQt5', 'SQL'],
    sortOrder: 3,
    projectUrl: null,
    repoUrl: 'https://github.com/yglsan2/BarrelMCD-python',
  },
  { id: 4, title: 'Noublipo (NopList)', slug: 'noublipo', description: { fr: 'Liste de courses. L\'ajout rapide comprend une phrase (« Liste Auchan ajouter pomme, lait »), en plusieurs langues, avec un repli si Firebase n\'est pas joignable.', en: 'Shopping list. Quick add understands a sentence ("Liste Auchan ajouter pomme, lait") in several languages, and falls back to local storage if Firebase is unreachable.' }, type: 'SOFTWARE', technologies: ['Flutter', 'Dart'], sortOrder: 5, projectUrl: null, repoUrl: 'https://github.com/yglsan2/Noublipo' },
  { id: 5, title: 'ManyFaces', slug: 'manyfaces', description: { fr: 'Personnages et PNJ pour le jeu de rôle. Le lanceur de dés anime le jet, ajoute le bonus, compare au seuil, et traite les triples (1 et 6).', en: 'Characters and NPCs for tabletop role-playing. The dice roller animates the throw, adds the bonus, compares it with the threshold, and handles triples (1 and 6).' }, type: 'SOFTWARE', technologies: ['Flutter', 'Dart'], sortOrder: 6, projectUrl: null, repoUrl: 'https://github.com/yglsan2/RPGproject-Flutter-3-me-application-sous-flutter-' },
  { id: 6, title: 'MoodCast', slug: 'moodcast', description: { fr: 'Journal d\'humeur. L\'analyse vocale reste sur l\'appareil : amplitude et, si un wav est là, un modèle TFLite, avec des garde-fous (pas de « joie » sur une voix plate et faible).', en: 'Mood journal. Voice analysis stays on the device: amplitude and, when a wav is present, a TFLite model, with guards (no "joy" on a flat, quiet voice).' }, type: 'SOFTWARE', technologies: ['Flutter', 'Dart'], sortOrder: 7, projectUrl: null, repoUrl: 'https://github.com/yglsan2/MoodCast' },
  { id: 7, title: 'Carned Beef', slug: 'carned-beef', description: { fr: 'Boeuf jazz sur le même Wi-Fi. L\'hôte lance la grille, les autres suivent la même progression (0 à 1), indépendante de la taille d\'écran. Le décalage d\'horloge est lissé, et un écart trop grand recale la lecture.', en: 'Jazz jam on the same Wi-Fi. The host starts the chart, everyone else follows the same progress (0 to 1), independent of screen size. Clock offset is smoothed, and a large gap reseeks playback.' }, type: 'SOFTWARE', technologies: ['Flutter', 'Dart', 'Riverpod'], sortOrder: 8, projectUrl: null, repoUrl: null },
  { id: 8, title: 'PloufPlouf', slug: 'ploufplouf', description: { fr: 'Tirage d\'équipes pour la classe. L\'algorithme place d\'abord les binômes imposés, répare les incompatibilités, équilibre les effectifs, puis échange des élèves pour améliorer le score.', en: 'Classroom team draw. The algorithm places forced pairs first, fixes incompatibilities, balances headcount, then swaps students to improve the score.' }, type: 'SOFTWARE', technologies: ['Flutter', 'Dart'], sortOrder: 9, projectUrl: null, repoUrl: 'https://github.com/yglsan2/PloufPlouf' },
  { id: 9, title: 'Mes applications UserScript', slug: 'userscripts', description: { fr: 'Scripts pour le navigateur. Sur Lichess, un second clic avant 750 ms annule le geste sur l\'échiquier. Un bouton mémorise si la protection est active.', en: 'Browser scripts. On Lichess, a second click before 750 ms cancels the move on the board. A button remembers whether the protection is on.' }, type: 'OPEN_SOURCE', technologies: ['JavaScript', 'UserScript'], sortOrder: 10, projectUrl: null, repoUrl: 'https://github.com/yglsan2/Mes-applications-Userscript-JS-' },
]

export const skills = [
  { id: 1, name: "Java", category: "Backend", level: 90, sortOrder: 1, keywords: ["Jakarta EE", "Spring Boot", "JPA", "Maven"] },
  { id: 2, name: "Spring Boot", category: "Backend", level: 88, sortOrder: 2, keywords: ["REST", "Security", "Data JPA", "Validation"] },
  { id: 3, name: "Python", category: "Backend", level: 85, sortOrder: 3, keywords: ["Streamlit", "pgvector", "Dokos"] },
  { id: 4, name: "Tomcat", category: "Backend", level: 75, sortOrder: 4, keywords: ["Serveur d'applications", "Java EE"] },
  { id: 5, name: "Frappe / ERPNext", category: "Backend", level: 70, sortOrder: 5, keywords: ["Stage Dokos", "DocTypes", "hooks", "whitelist", "Permissions"] },
  { id: 6, name: "Chatbot RAG", category: "Backend", level: 78, sortOrder: 6, keywords: ["Doki", "Stage Dokos", "Recherche hybride", "pgvector", "Citations"] },
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

/** Extraits Site Hypnotisation (backend Java Spring Boot + frontend React) */
/** Liste des extraits de code (identiques au site complet Site-Portfolio) */
export const snippets = [
  {
    "id": 1,
    "projectId": 1,
    "section": "Point d'entrée",
    "title": "Application PyQt5 : main, thème sombre, fenêtre principale",
    "slug": "barrel-main",
    "language": "python",
    "description": "Point d'entrée réel de BarrelMCD : configuration Wayland, chargement du thème sombre et affichage de la MainWindow.",
    "code": "#!/usr/bin/env python3\n# -*- coding: utf-8 -*-\n\"\"\" Application principale BarrelMCD \"\"\"\n\nimport os, sys\nos.environ['QT_QPA_PLATFORM'] = 'xcb'\n\nfrom PyQt5.QtWidgets import QApplication\nfrom views.main_window import MainWindow\nfrom views.dark_theme import DarkTheme\n\ndef main():\n    app = QApplication(sys.argv)\n    app.setApplicationName(\"BarrelMCD\")\n    app.setApplicationVersion(\"1.0.0\")\n    DarkTheme.apply_dark_theme(app)\n    window = MainWindow()\n    window.show()\n    sys.exit(app.exec_())\n\nif __name__ == \"__main__\":\n    main()",
    "sortOrder": 1
  },
  {
    "id": 2,
    "projectId": 1,
    "section": "Modèle de données",
    "title": "Classe Attribute : sérialisation to_dict / from_dict",
    "slug": "barrel-attribute",
    "language": "python",
    "description": "Représentation d'un attribut MCD avec type, clé primaire et contraintes ; sérialisation pour sauvegarde/chargement.",
    "code": "class Attribute:\n    \"\"\"Classe représentant un attribut d'entité MCD\"\"\"\n\n    def __init__(self, name=\"\", type_name=\"VARCHAR(255)\", is_primary_key=False):\n        self.name = name\n        self.type = type_name\n        self.is_primary_key = is_primary_key\n        self.is_required = False\n        self.default_value = None\n        self.constraints = []\n\n    def to_dict(self):\n        return {\n            \"name\": self.name,\n            \"type\": self.type,\n            \"is_primary_key\": self.is_primary_key,\n            \"is_required\": self.is_required,\n            \"default_value\": self.default_value,\n            \"constraints\": self.constraints.copy()\n        }\n\n    @classmethod\n    def from_dict(cls, data):\n        attr = cls(\n            name=data.get(\"name\", \"\"),\n            type_name=data.get(\"type\", \"VARCHAR(255)\"),\n            is_primary_key=data.get(\"is_primary_key\", False)\n        )\n        attr.is_required = data.get(\"is_required\", False)\n        attr.constraints = data.get(\"constraints\", [])\n        return attr",
    "sortOrder": 2
  },
  {
    "id": 3,
    "projectId": 1,
    "section": "Vue et signaux",
    "title": "Entité MCD : signaux PyQt, ajout d'attribut, mise à jour layout",
    "slug": "barrel-entity",
    "language": "python",
    "description": "Entité graphique avec signaux (renommage, attributs), gestion des attributs et recalcul de la hauteur.",
    "code": "class EntitySignals(QObject):\n    entity_renamed = pyqtSignal(str, str)\n    attribute_added = pyqtSignal(str, str)\n    attribute_removed = pyqtSignal(str)\n\nclass Entity(QGraphicsItem):\n    def add_attribute(self, name, type_name, is_primary_key=False, nullable=True, default_value=None):\n        attribute = {\n            \"name\": name, \"type\": type_name, \"is_primary_key\": is_primary_key,\n            \"nullable\": nullable, \"default_value\": default_value\n        }\n        self.attributes.append(attribute)\n        self.update_layout()\n        self.signals.attribute_added.emit(name, type_name)\n        self.update()\n\n    def update_layout(self):\n        total_height = 50 + len(self.attributes) * self.attribute_height + self.padding\n        if total_height < self.min_height:\n            total_height = self.min_height\n        self.height = total_height\n        self.update()",
    "sortOrder": 3
  },
  {
    "id": 4,
    "projectId": 1,
    "section": "UI et thème",
    "title": "Thème sombre : palette de couleurs et application à l'app",
    "slug": "barrel-dark-theme",
    "language": "python",
    "description": "Classe DarkTheme du dépôt : dictionnaire COLORS (entités, relations, scrollbar), application via QPalette et stylesheet Fusion.",
    "code": "class DarkTheme:\n    COLORS = {\n        \"background\": \"#0A0A0A\",\n        \"surface\": \"#1A1A1A\",\n        \"text_primary\": \"#FFFFFF\",\n        \"primary\": \"#00D4FF\",\n        \"entity_bg\": \"#1E2A3A\",\n        \"entity_border\": \"#2E3A4A\",\n        \"entity_selected\": \"#00D4FF\",\n        \"relation_bg\": \"#4A1E3A\",\n        \"pk_color\": \"#FF6B35\",\n    }\n\n    @classmethod\n    def apply_dark_theme(cls, app: QApplication):\n        palette = QPalette()\n        palette.setColor(QPalette.Window, QColor(cls.COLORS[\"background\"]))\n        palette.setColor(QPalette.WindowText, QColor(cls.COLORS[\"text_primary\"]))\n        palette.setColor(QPalette.Base, QColor(cls.COLORS[\"surface\"]))\n        palette.setColor(QPalette.Highlight, QColor(cls.COLORS[\"primary\"]))\n        app.setPalette(palette)\n        app.setStyle(\"Fusion\")\n        app.setStyleSheet(cls._get_modern_dark_stylesheet())",
    "sortOrder": 4
  },
  {
    "id": 5,
    "projectId": 1,
    "section": "DevOps / lancement",
    "title": "Script run_api.sh : venv, dépendances, uvicorn",
    "slug": "barrel-run-api",
    "language": "shell",
    "description": "Lancement de l'API BarrelMCD (FastAPI) : création du venv si absent, pip install, uvicorn sur le port 8000.",
    "code": "#!/bin/bash\nset -e\ncd \"$(dirname \"$0\")\"\nVENV_DIR=\".venv\"\n\nif [ ! -d \"$VENV_DIR\" ]; then\n  echo \"Création de l'environnement virtuel...\"\n  python3 -m venv \"$VENV_DIR\"\nfi\n\necho \"Installation des dépendances API...\"\n\"$VENV_DIR/bin/pip\" install -q -r api/requirements.txt\n\necho \"Démarrage de l'API sur http://127.0.0.0:8000\"\nexec \"$VENV_DIR/bin/python\" -m uvicorn api.main:app --reload --host 0.0.0.0 --port 8000",
    "sortOrder": 5
  },
  {
    "id": 6,
    "projectId": 1,
    "section": "Modèle et export",
    "title": "Export des données entité pour sauvegarde (get_data)",
    "slug": "barrel-entity-get-data",
    "language": "python",
    "description": "Méthode get_data() de l'entité MCD : sérialisation nom, position, attributs et flag is_weak pour export .bar / JSON.",
    "code": "def get_data(self):\n    \"\"\"Retourne les données de l'entité pour export\"\"\"\n    return {\n        \"name\": self.name,\n        \"position\": {\"x\": self.pos().x(), \"y\": self.pos().y()},\n        \"attributes\": self.attributes.copy(),\n        \"is_weak\": self.is_weak\n    }",
    "sortOrder": 6
  },
  {
    "id": 7,
    "projectId": 1,
    "section": "Vue et signaux",
    "title": "Dessin de l'entité (paint) : dégradé, titre, attributs avec préfixe PK",
    "slug": "barrel-entity-paint",
    "language": "python",
    "description": "Méthode paint() de Entity : antialiasing, rectangle avec dégradé, titre centré, ligne de séparation, liste d'attributs avec icône clé primaire.",
    "code": "def paint(self, painter, option, widget):\n    painter.setRenderHint(QPainter.Antialiasing, True)\n    rect = self.boundingRect()\n    corner_radius = 8\n\n    from PyQt5.QtGui import QLinearGradient\n    gradient = QLinearGradient(rect.topLeft(), rect.bottomLeft())\n    if self.is_selected:\n        gradient.setColorAt(0, QColor(self.selected_color).lighter(120))\n        gradient.setColorAt(1, QColor(self.selected_color))\n    else:\n        gradient.setColorAt(0, QColor(self.bg_color).lighter(110))\n        gradient.setColorAt(1, self.bg_color)\n    painter.setBrush(QBrush(gradient))\n    painter.setPen(QPen(self.border_color, 2))\n    painter.drawRoundedRect(rect, corner_radius, corner_radius)\n\n    painter.setFont(self.title_font)\n    title_rect = QRectF(self.padding, self.padding, self.width - 2 * self.padding, 30)\n    painter.drawText(title_rect, Qt.AlignCenter, self.name)\n    painter.drawLine(self.padding, 40, self.width - self.padding, 40)\n\n    y_offset = 50\n    for attribute in self.attributes:\n        prefix = \"🔑 \" if attribute['is_primary_key'] else \"\"\n        text = f\"{prefix}{attribute['name']}: {attribute['type']}\"\n        painter.drawText(self.padding, y_offset, text)\n        y_offset += self.attribute_height",
    "sortOrder": 7
  },
  {
    "id": 8,
    "projectId": 2,
    "section": "Point d'entrée frontend",
    "title": "Démarrage de l'app Vue : router + i18n",
    "slug": "ukraine-main",
    "language": "javascript",
    "description": "Fichier main.js du dépôt : on crée l'application Vue, on lui attache le routeur (pages) et l'i18n (langues), puis on l'affiche dans la page (#app). C'est le point de départ de tout le front.",
    "code": "import './assets/main.css'\nimport { createApp } from 'vue'\nimport App from './App.vue'\nimport router from './router'\nimport i18n from './i18n'\n\nconst app = createApp(App)\napp.use(router)\napp.use(i18n)\napp.mount('#app')",
    "sortOrder": 1
  },
  {
    "id": 9,
    "projectId": 2,
    "section": "Routage",
    "title": "Définition des routes : Livres, Événements, Adhésion, Chatbot…",
    "slug": "ukraine-router",
    "language": "javascript",
    "description": "Chaque route associe une URL (path) à une page (component). Ainsi /books affiche BooksView, /events affiche EventsView. Le routeur évite de recharger toute la page : on change juste la vue affichée (SPA).",
    "code": "import { createRouter, createWebHistory } from 'vue-router'\nimport HomeView from '../views/HomeView.vue'\nimport BooksView from '../views/BooksView.vue'\nimport EventsView from '../views/EventsView.vue'\nimport AssociationView from '../views/AssociationView.vue'\nimport ChatbotView from '../views/ChatbotView.vue'\nimport AboutView from '../views/AboutView.vue'\nimport MembershipView from '../views/MembershipView.vue'\n\nconst router = createRouter({\n  history: createWebHistory(import.meta.env.BASE_URL),\n  routes: [\n    { path: '/', name: 'home', component: HomeView },\n    { path: '/books', name: 'books', component: BooksView },\n    { path: '/events', name: 'events', component: EventsView },\n    { path: '/association', name: 'association', component: AssociationView },\n    { path: '/chatbot', name: 'chatbot', component: ChatbotView },\n    { path: '/about', name: 'about', component: AboutView },\n    { path: '/membership', name: 'membership', component: MembershipView },\n  ],\n})\nexport default router",
    "sortOrder": 2
  },
  {
    "id": 10,
    "projectId": 2,
    "section": "Internationalisation (i18n)",
    "title": "5 langues : détection navigateur et changement de langue",
    "slug": "ukraine-i18n",
    "language": "javascript",
    "description": "On crée l'i18n avec les 5 langues (fr, en, uk, de, pl). getDefaultLocale() lit d'abord la langue sauvegardée (localStorage), sinon la langue du navigateur, sinon français. setLocale() change la langue et la sauvegarde pour la prochaine visite.",
    "code": "import { createI18n } from 'vue-i18n'\nimport fr from './locales/fr.js'\nimport en from './locales/en.js'\nimport uk from './locales/uk.js'\nimport de from './locales/de.js'\nimport pl from './locales/pl.js'\n\nconst messages = { fr, en, uk, de, pl }\n\nfunction getDefaultLocale() {\n  const savedLocale = localStorage.getItem('locale')\n  if (savedLocale && messages[savedLocale]) return savedLocale\n  const browserLocale = navigator.language.split('-')[0]\n  if (messages[browserLocale]) return browserLocale\n  return 'fr'\n}\n\nconst i18n = createI18n({\n  legacy: false,\n  locale: getDefaultLocale(),\n  fallbackLocale: 'fr',\n  messages,\n})\n\nexport function setLocale(locale) {\n  if (messages[locale]) {\n    i18n.global.locale.value = locale\n    localStorage.setItem('locale', locale)\n    document.documentElement.lang = locale\n  }\n}\nexport default i18n",
    "sortOrder": 3
  },
  {
    "id": 11,
    "projectId": 2,
    "section": "Internationalisation (i18n)",
    "title": "Fichier de traduction français : structure nav, accueil, livres",
    "slug": "ukraine-locale-fr",
    "language": "javascript",
    "description": "Chaque langue a un fichier (fr.js, en.js, etc.) qui exporte un objet. Les clés (nav, home, books…) sont utilisées dans les composants avec $t('nav.books') pour afficher le bon texte selon la langue choisie.",
    "code": "export default {\n  meta: {\n    languageName: 'Français',\n    nativeName: 'Français',\n    flag: '🇫🇷',\n  },\n  nav: {\n    home: 'Accueil',\n    books: 'Livres',\n    events: 'Événements',\n    association: 'Association',\n    chatbot: 'Chatbot',\n    about: 'À propos',\n    membership: 'Adhésion',\n    selectLanguage: 'Choisir la langue',\n  },\n  home: {\n    hero: {\n      title: \"Les Lumières d'Ukraine\",\n      subtitle: \"Découvrez la richesse culturelle...\",\n      exploreButton: 'Explorer',\n      joinButton: 'Rejoindre',\n    },\n    stats: { members: 'Membres', books: 'Livres', events: 'Événements' },\n  },\n  books: {\n    title: 'Bibliothèque Ukrainienne',\n    search: 'Rechercher un livre...',\n    addBook: 'Ajouter un livre',\n  },\n}",
    "sortOrder": 4
  },
  {
    "id": 12,
    "projectId": 2,
    "section": "Bibliothèque",
    "title": "Filtre des livres : recherche, catégorie, langue, proximité",
    "slug": "ukraine-books-filter",
    "language": "javascript",
    "description": "Extrait de BooksView.vue : le catalogue filtre le titre et l'auteur, la catégorie et la langue. Si une position est connue, les livres sont triés par distance.",
    "code": "const filteredBooks = computed(() => {\n  let filtered = books.value.filter((book) => {\n    const matchesSearch =\n      !searchQuery.value ||\n      book.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||\n      book.author.toLowerCase().includes(searchQuery.value.toLowerCase())\n    const matchesCategory = !selectedCategory.value || book.category === selectedCategory.value\n    const matchesLanguage = !selectedLanguage.value || book.language === selectedLanguage.value\n    return matchesSearch && matchesCategory && matchesLanguage\n  })\n\n  if (userCoordinates.value && userLocation.value) {\n    filtered.sort((a, b) => {\n      if (!a.location || !b.location) return 0\n      const distanceA = calculateDistance(\n        userCoordinates.value.lat, userCoordinates.value.lng,\n        a.location.coordinates.lat, a.location.coordinates.lng\n      )\n      const distanceB = calculateDistance(\n        userCoordinates.value.lat, userCoordinates.value.lng,\n        b.location.coordinates.lat, b.location.coordinates.lng\n      )\n      return distanceA - distanceB\n    })\n  }\n  return filtered\n})\n\nfunction calculateDistance(lat1, lon1, lat2, lon2) {\n  const R = 6371\n  const dLat = (lat2 - lat1) * Math.PI / 180\n  const dLon = (lon2 - lon1) * Math.PI / 180\n  const a = Math.sin(dLat / 2) ** 2\n    + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLon / 2) ** 2\n  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))\n}",
    "sortOrder": 5
  },
  {
    "id": 13,
    "projectId": 2,
    "section": "Backend Spring Boot",
    "title": "Application principale : cache, tâches asynchrones, planification",
    "slug": "ukraine-spring-app",
    "language": "java",
    "description": "Classe de démarrage du backend. @SpringBootApplication active Spring Boot. @EnableCaching permet de mettre en cache des résultats (ex. liste de livres). @EnableAsync et @EnableScheduling permettent d'exécuter des tâches en arrière-plan ou à intervalles.",
    "code": "package com.ukraine;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.cache.annotation.EnableCaching;\nimport org.springframework.scheduling.annotation.EnableAsync;\nimport org.springframework.scheduling.annotation.EnableScheduling;\n\n@SpringBootApplication\n@EnableCaching\n@EnableAsync\n@EnableScheduling\npublic class LumieresUkraineApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(LumieresUkraineApplication.class, args);\n    }\n}",
    "sortOrder": 6
  },
  {
    "id": 14,
    "projectId": 2,
    "section": "Backend Spring Boot",
    "title": "API REST : génération de cartes d'adhésion et envoi par email",
    "slug": "ukraine-spring-controller",
    "language": "java",
    "description": "Ce contrôleur expose des endpoints REST sous /api/membership. Par exemple : POST /generate-card génère une carte, POST /send-card l'envoie par email, GET /generate-number crée un numéro d'adhésion unique. Chaque méthode appelle le service métier puis renvoie une réponse HTTP (200 OK ou 400).",
    "code": "@RestController\n@RequestMapping(\"/api/membership\")\n@CrossOrigin(origins = \"*\")\npublic class MembershipController {\n\n    @Autowired\n    private MembershipService membershipService;\n    @Autowired\n    private EmailService emailService;\n\n    @PostMapping(\"/generate-card\")\n    public ResponseEntity<?> generateMembershipCard(@RequestBody MembershipCardRequest request) {\n        try {\n            MembershipCardResponse response = membershipService.generateMembershipCard(request);\n            return ResponseEntity.ok(response);\n        } catch (Exception e) {\n            return ResponseEntity.badRequest().build();\n        }\n    }\n\n    @PostMapping(\"/send-card\")\n    public ResponseEntity<?> sendMembershipCard(@RequestBody MembershipCardRequest request) {\n        try {\n            MembershipCardResponse cardResponse = membershipService.generateMembershipCard(request);\n            emailService.sendMembershipCard(\n                request.getEmailData().getTo(),\n                request.getEmailData().getSubject(),\n                request.getEmailData().getMessage(),\n                cardResponse.getFrontImageUrl(),\n                cardResponse.getBackImageUrl(),\n                request.getMemberData()\n            );\n            return ResponseEntity.ok(Map.of(\n                \"message\", \"Carte d'adhésion envoyée avec succès\",\n                \"memberNumber\", request.getMemberData().getMemberNumber()\n            ));\n        } catch (Exception e) {\n            return ResponseEntity.badRequest().body(Map.of(\"error\", e.getMessage()));\n        }\n    }\n\n    @GetMapping(\"/generate-number\")\n    public ResponseEntity<?> generateMembershipNumber() {\n        try {\n            String memberNumber = membershipService.generateUniqueMembershipNumber();\n            return ResponseEntity.ok(Map.of(\"memberNumber\", memberNumber));\n        } catch (Exception e) {\n            return ResponseEntity.badRequest().build();\n        }\n    }\n}",
    "sortOrder": 7
  },
  {
    "id": 15,
    "projectId": 3,
    "section": "RAG et pgvector",
    "title": "Test RAG : connexion PostgreSQL, embedding, similarité vectorielle",
    "slug": "dokilight-test-rag",
    "language": "python",
    "description": "Script réel du dépôt : vérification pgvector, chargement du modèle sentence-transformers et requête de similarité.",
    "code": "import psycopg\nfrom psycopg.rows import dict_row\nfrom sentence_transformers import SentenceTransformer\nimport json\n\ndef test_rag():\n    conn = psycopg.connect(host='localhost', port=5432, dbname='doki_light', user='doki_user', password='doki_password')\n\n    with conn.cursor() as cursor:\n        cursor.execute(\"SELECT * FROM pg_extension WHERE extname = 'vector';\")\n        if not cursor.fetchone():\n            print(\"Extension pgvector non trouvée\")\n            return\n\n    model = SentenceTransformer('all-MiniLM-L6-v2')\n    test_text = \"Ceci est un test de recherche vectorielle\"\n    embedding = model.encode(test_text)\n\n    with conn.cursor(row_factory=dict_row) as cursor:\n        embedding_json = json.dumps(embedding.tolist())\n        cursor.execute(\"\"\"\n            SELECT e.chunk_text, d.filename,\n                   1 - (e.embedding <=> %s::vector) as similarity\n            FROM embeddings e\n            JOIN documents d ON e.document_id = d.id\n            ORDER BY e.embedding <=> %s::vector\n            LIMIT 3\n        \"\"\", (embedding_json, embedding_json))\n        results = cursor.fetchall()\n    conn.close()",
    "sortOrder": 7
  },
  {
    "id": 16,
    "projectId": 3,
    "section": "Lancement",
    "title": "Lancement Streamlit : vérification des dépendances, subprocess",
    "slug": "dokilight-launch",
    "language": "python",
    "description": "Bootstrap de l'interface Doki Light : vérif des imports (streamlit, psycopg, sentence_transformers, ollama) puis lancement sur le port 8501.",
    "code": "#!/usr/bin/env python3\n\"\"\" Script de lancement pour Doki Light - Version Streamlit \"\"\"\n\nimport subprocess\nimport sys\n\ndef main():\n    try:\n        import streamlit\n        import psycopg\n        import sentence_transformers\n        import ollama\n        print(\"Toutes les dépendances sont installées\")\n    except ImportError as e:\n        print(f\"Dépendance manquante: {e}\")\n        return False\n\n    subprocess.run([\n        sys.executable, \"-m\", \"streamlit\", \"run\",\n        \"doki_light_streamlit.py\",\n        \"--server.port\", \"8501\",\n        \"--server.address\", \"localhost\"\n    ])\n    return True\n\nif __name__ == \"__main__\":\n    success = main()\n    sys.exit(0 if success else 1)",
    "sortOrder": 8
  },
  {
    "id": 2001,
    "projectId": 3,
    "section": "Framework Frappe",
    "title": "hooks.py : événements de documents, planificateur et permissions",
    "slug": "doki-frappe-hooks",
    "language": "python",
    "description": "Point d'accroche de l'application Frappe. Chaque insertion ou mise à jour d'un document ERP déclenche l'indexation du bot. Le planificateur surveille factures en retard et stock bas. Les conversations restent filtrées par utilisateur.",
    "code": "doc_events = {\n    \"*\": {\n        \"after_insert\": \"doki_light.api.indexing.on_document_change\",\n        \"on_update\": \"doki_light.api.indexing.on_document_change\",\n        \"on_trash\": \"doki_light.api.indexing.on_document_trash\",\n    }\n}\n\nscheduler_events = {\n    \"hourly\": [\n        \"doki_light.insights.jobs.detect_overdue_invoices\",\n        \"doki_light.insights.jobs.detect_pending_deliveries\",\n    ],\n    \"daily\": [\n        \"doki_light.insights.jobs.detect_low_stock\",\n        \"doki_light.insights.jobs.detect_expiring_quotations\",\n    ],\n}\n\npermission_query_conditions = {\n    \"Doki Conversation\": \"doki_light.permissions.conversation_query\",\n}\n\nhas_permission = {\n    \"Doki Conversation\": \"doki_light.permissions.conversation_has_permission\",\n}",
    "sortOrder": 1
  },
  {
    "id": 2002,
    "projectId": 3,
    "section": "Framework Frappe",
    "title": "API whitelist : envoyer un message et lister les conversations",
    "slug": "doki-frappe-whitelist",
    "language": "python",
    "description": "Méthodes exposées au Desk avec @frappe.whitelist. frappe.session.user limite la liste au propriétaire. frappe.get_doc charge la conversation, puis frappe.throw refuse l'accès si l'utilisateur n'est ni le propriétaire ni System Manager.",
    "code": "import frappe\nfrom frappe import _\n\n@frappe.whitelist()\ndef send_message(message: str, conversation: str | None = None, agent: str | None = None):\n    return handle_message(message=message, conversation=conversation, agent=agent)\n\n@frappe.whitelist()\ndef list_conversations(limit: int = 30):\n    user = frappe.session.user\n    return frappe.get_all(\n        \"Doki Conversation\",\n        filters={\"user\": user},\n        fields=[\"name\", \"title\", \"agent\", \"status\", \"modified\"],\n        order_by=\"modified desc\",\n        limit_page_length=int(limit or 30),\n    )\n\n@frappe.whitelist()\ndef get_conversation(name: str):\n    doc = frappe.get_doc(\"Doki Conversation\", name)\n    if doc.user != frappe.session.user and \"System Manager\" not in frappe.get_roles():\n        frappe.throw(_(\"Accès refusé\"), frappe.PermissionError)\n    return {\"name\": doc.name, \"title\": doc.title, \"messages\": doc.messages}",
    "sortOrder": 2
  },
  {
    "id": 2003,
    "projectId": 3,
    "section": "Framework Frappe",
    "title": "DocType Doki Settings : validate() et Single DocType",
    "slug": "doki-frappe-settings",
    "language": "python",
    "description": "Contrôleur du Single DocType de réglage. validate() borne taille des chunks, top-k et seuil de confiance du RAG. get_settings() lit le document avec frappe.get_single, ou le crée avec frappe.new_doc s'il n'existe pas encore.",
    "code": "import frappe\nfrom frappe.model.document import Document\n\nclass DokiSettings(Document):\n    def validate(self):\n        self.chunk_size = max(100, int(self.chunk_size or 400))\n        self.chunk_overlap = max(0, min(int(self.chunk_overlap or 50), self.chunk_size // 2))\n        self.top_k = max(1, min(int(self.top_k or 6), 20))\n        self.min_score = max(0.0, min(float(self.min_score or 0.28), 1.0))\n        self.confidence_threshold = max(0.1, min(float(self.confidence_threshold or 0.42), 0.9))\n\ndef get_settings():\n    if not frappe.db.exists(\"DocType\", \"Doki Settings\"):\n        return None\n    try:\n        return frappe.get_single(\"Doki Settings\")\n    except frappe.DoesNotExistError:\n        doc = frappe.new_doc(\"Doki Settings\")\n        doc.insert(ignore_permissions=True)\n        frappe.db.commit()\n        return doc",
    "sortOrder": 3
  },
  {
    "id": 2004,
    "projectId": 3,
    "section": "Framework Frappe",
    "title": "Indexation RAG : hook, file d'attente et insertion des chunks",
    "slug": "doki-frappe-indexing",
    "language": "python",
    "description": "Quand un devis ou une facture change, le hook enqueue l'indexation après le commit. index_document relit le document avec frappe.get_doc, le découpe, puis enregistre chaque chunk comme DocType Doki Document Chunk.",
    "code": "def on_document_change(doc, method=None):\n    if not _should_index(doc.doctype):\n        return\n    frappe.enqueue(\n        \"doki_light.api.indexing.index_document\",\n        queue=\"short\",\n        doctype=doc.doctype,\n        name=doc.name,\n        enqueue_after_commit=True,\n        deduplicate=True,\n        job_id=f\"doki_index::{doc.doctype}::{doc.name}\",\n    )\n\ndef index_document(doctype: str, name: str):\n    if not frappe.db.exists(doctype, name):\n        return\n    doc = frappe.get_doc(doctype, name)\n    text = document_to_text(doctype, doc.as_dict())\n    chunks = chunk_text(text, chunk_size=400, overlap=50)\n    vectors = embed_texts(chunks)\n    for idx, chunk in enumerate(chunks):\n        row = frappe.get_doc({\n            \"doctype\": \"Doki Document Chunk\",\n            \"ref_doctype\": doctype,\n            \"ref_name\": name,\n            \"chunk_index\": idx,\n            \"chunk_text\": chunk,\n            \"embedding_json\": dump_embedding(vectors[idx]),\n            \"title\": doc.name,\n        })\n        row.insert(ignore_permissions=True)\n    frappe.db.commit()",
    "sortOrder": 4
  },
  {
    "id": 2005,
    "projectId": 3,
    "section": "Framework Frappe",
    "title": "Recherche du bot : frappe.get_all filtré par les droits",
    "slug": "doki-frappe-retrieval",
    "language": "python",
    "description": "Le RAG ne renvoie que les chunks dont l'utilisateur peut lire le document source. frappe.has_permission est appelé sur le DocType, puis sur le document (client, facture, article) avant le calcul de similarité.",
    "code": "user = user or frappe.session.user\nrows = frappe.get_all(\n    \"Doki Document Chunk\",\n    fields=[\"name\", \"ref_doctype\", \"ref_name\", \"chunk_text\", \"embedding_json\", \"title\", \"concepts\"],\n    order_by=\"modified desc\",\n    limit_page_length=int(max_candidates or 1200),\n)\n\nvectors, valid_rows = [], []\nfor row in rows:\n    if not frappe.has_permission(row.ref_doctype, \"read\", user=user):\n        continue\n    if not frappe.db.exists(row.ref_doctype, row.ref_name):\n        continue\n    if not frappe.has_permission(row.ref_doctype, \"read\", doc=row.ref_name, user=user):\n        continue\n    arr = load_embedding_array(row.embedding_json)\n    if arr is None:\n        continue\n    vectors.append(arr)\n    valid_rows.append(row)\n\nmatrix = np.vstack(vectors)\nsemantic_scores = matrix_cosine(query_embedding, matrix)",
    "sortOrder": 5
  },
  {
    "id": 2006,
    "projectId": 3,
    "section": "Framework Frappe",
    "title": "Action métier : créer une commande avec frappe.new_doc",
    "slug": "doki-frappe-sales-order",
    "language": "python",
    "description": "Après confirmation de l'utilisateur, le bot crée un Sales Order. frappe.has_permission bloque la création si le rôle ne le permet pas. frappe.new_doc, doc.append(\"items\") puis doc.insert() enregistrent le brouillon dans l'ERP.",
    "code": "def execute(payload: dict) -> dict:\n    if not frappe.db.exists(\"DocType\", \"Sales Order\"):\n        frappe.throw(_(\"Le DocType Sales Order n'est pas disponible\"))\n    if not frappe.has_permission(\"Sales Order\", \"create\"):\n        frappe.throw(_(\"Permission insuffisante\"), frappe.PermissionError)\n\n    customer = payload.get(\"customer\")\n    if not customer:\n        frappe.throw(_(\"Client manquant\"))\n\n    doc = frappe.new_doc(\"Sales Order\")\n    doc.customer = customer\n    if payload.get(\"item_code\"):\n        doc.append(\"items\", {\n            \"item_code\": payload[\"item_code\"],\n            \"qty\": float(payload.get(\"qty\") or 1),\n        })\n    doc.insert()\n    return {\n        \"doctype\": \"Sales Order\",\n        \"name\": doc.name,\n        \"route\": f\"/app/sales-order/{doc.name}\",\n        \"message\": _(\"Commande {0} créée en brouillon\").format(doc.name),\n    }",
    "sortOrder": 6
  },
  {
    "id": 17,
    "projectId": 9,
    "section": "UserScript Lichess",
    "title": "toggleMisclickProtection et updateButton",
    "slug": "userscript-lichess-meta",
    "language": "javascript",
    "description": "Fonctions entières du script Lichess. L'état est lu et écrit avec GM_getValue et GM_setValue. Le bouton affiche ON ou OFF.",
    "code": "        function toggleMisclickProtection() {\n            antiMisclickEnabled = !antiMisclickEnabled;\n            GM_setValue(\"antiMisclickEnabled\", antiMisclickEnabled);\n            updateButton();\n        }\n     \n        // Mise à jour du texte et couleur du bouton\n        function updateButton() {\n            const button = document.getElementById(\"toggleMisclickButton\");\n            if (!button) return;\n            button.innerText = antiMisclickEnabled ? \"🔴 Anti-Misclick ON\" : \"⚫ Anti-Misclick OFF\";\n            button.style.backgroundColor = antiMisclickEnabled ? \"#28a745\" : \"#dc3545\"; // Vert pour ON, Rouge pour OFF\n        }",
    "sortOrder": 1
  },
  {
    "id": 18,
    "projectId": 9,
    "section": "UserScript Lichess",
    "title": "Clic sur l'échiquier : délai, surbrillance, annulation",
    "slug": "userscript-lichess-logic",
    "language": "javascript",
    "description": "Écouteur et fonctions entières du script Lichess. Un second clic avant 750 ms annule le geste. highlightSquare et resetSelection vont avec.",
    "code": "        // Écouteur de clics sur l'échiquier\n        document.addEventListener('click', (event) => {\n            if (!antiMisclickEnabled) return; // Si désactivé, ne fait rien\n     \n            const now = Date.now();\n            const square = event.target.closest('.square');\n     \n            if (!square) return;\n     \n            if (selectedSquare) {\n                if (now - lastClickTime < clickDelay) {\n                    console.log(\"⏳ Misclick détecté : mouvement annulé !\");\n                    resetSelection();\n                    return;\n                }\n                console.log(`✅ Coup validé : ${selectedSquare.dataset.san} -> ${square.dataset.san}`);\n                resetSelection();\n            } else {\n                selectedSquare = square;\n                lastClickTime = now;\n                highlightSquare(selectedSquare);\n                console.log(`🎯 Pièce sélectionnée sur ${square.dataset.san}`);\n            }\n        });\n     \n        // Mise en surbrillance de la case sélectionnée\n        function highlightSquare(square) {\n            square.style.backgroundColor = highlightColor;\n            setTimeout(() => {\n                if (square === selectedSquare) {\n                    square.style.backgroundColor = \"\";\n                }\n            }, clickDelay);\n        }\n     \n        // Réinitialisation de la sélection\n        function resetSelection() {\n            if (selectedSquare) {\n                selectedSquare.style.backgroundColor = \"\";\n            }\n            selectedSquare = null;\n        }",
    "sortOrder": 2
  },
  {
    "id": 19,
    "projectId": 4,
    "section": "Point d'entrée",
    "title": "Bootstrap : Firebase, SharedPreferences, MultiProvider (liste, rappels, gamification)",
    "slug": "noublipo-main",
    "language": "dart",
    "description": "Initialisation asynchrone : Firebase (sync multi-appareils), StorageService, ReminderService, et injection de nombreux providers (ListProvider, PremiumProvider, GamificationProvider, etc.).",
    "code": "void main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  SyncService? syncService;\n  try {\n    await Firebase.initializeApp();\n    syncService = SyncService();\n  } catch (_) {\n    syncService = null; // Mode local si Firebase indisponible\n  }\n  final prefs = await SharedPreferences.getInstance();\n  final storage = StorageService(prefs);\n  final reminderService = ReminderService();\n  final planningProvider = PlanningProvider(storage, reminderService);\n  final birthdaysProvider = BirthdaysProvider(storage, reminderService);\n  runApp(\n    MultiProvider(\n      providers: [\n        Provider.value(value: storage),\n        ChangeNotifierProvider(create: (_) => PremiumProvider(storage)),\n        ChangeNotifierProvider.value(value: planningProvider),\n        ChangeNotifierProvider.value(value: birthdaysProvider),\n        ChangeNotifierProvider(create: (_) => ListProvider(storage, syncService, reminderService, planningProvider.updateRecurringLastChecked)),\n        ChangeNotifierProvider(create: (_) => CategoryNamesProvider(storage)),\n        ChangeNotifierProvider(create: (_) => SettingsProvider(storage)),\n        ChangeNotifierProvider(create: (_) => GamificationProvider(storage)),\n        ChangeNotifierProvider(create: (_) => ConsumptionProfileProvider(storage)),\n      ],\n      child: const NoublipoApp(),\n    ),\n  );\n}",
    "sortOrder": 1
  },
  {
    "id": 20,
    "projectId": 5,
    "section": "Point d'entrée",
    "title": "Main : ErrorWidget personnalisé, SharedPreferences, MultiProvider (Game, Character, Locale)",
    "slug": "manyfaces-main",
    "language": "dart",
    "description": "Démarrage avec ErrorWidget.builder pour afficher les erreurs en production (texte copiable), puis MultiProvider avec GameProvider, CharacterProvider et LocaleProvider pour l'i18n.",
    "code": "void main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  ErrorWidget.builder = (FlutterErrorDetails details) {\n    return Material(\n      color: Colors.red.shade900,\n      child: SafeArea(\n        child: Padding(\n          padding: const EdgeInsets.all(16),\n          child: Column(\n            crossAxisAlignment: CrossAxisAlignment.start,\n            children: [\n              const Text('ERREUR (copiez ce texte)', style: TextStyle(color: Colors.white, fontWeight: FontWeight.bold)),\n              SizedBox(\n                height: 300,\n                child: SingleChildScrollView(\n                  child: SelectableText(\n                    '${details.exception}\\\\n\\\\n${details.stack ?? ''}',\n                    style: const TextStyle(color: Colors.white, fontFamily: 'monospace'),\n                  ),\n                ),\n              ),\n            ],\n          ),\n        ),\n      ),\n    );\n  };\n  final prefs = await SharedPreferences.getInstance();\n  runApp(MyApp(prefs: prefs));\n}\n\nclass MyApp extends StatelessWidget {\n  final SharedPreferences prefs;\n  const MyApp({super.key, required this.prefs});\n  @override\n  Widget build(BuildContext context) {\n    return MultiProvider(\n      providers: [\n        ChangeNotifierProvider(create: (_) => GameProvider(prefs)),\n        ChangeNotifierProvider(create: (_) => CharacterProvider()),\n        ChangeNotifierProvider(create: (_) => LocaleProvider(prefs)),\n      ],\n      child: Consumer<LocaleProvider>(\n        builder: (context, localeProvider, _) {\n          return MaterialApp(\n            title: 'ManyFaces',\n            theme: AppTheme.lightTheme,\n            darkTheme: AppTheme.darkTheme,\n            themeMode: ThemeMode.system,\n            locale: localeProvider.locale,\n            supportedLocales: AppTranslations.supportedLocales,\n            localizationsDelegates: const [\n              GlobalMaterialLocalizations.delegate,\n              AppLocalizations.delegate,\n            ],\n            home: const HomeScreen(),\n          );\n        },\n      ),\n    );\n  }\n}",
    "sortOrder": 1
  },
  {
    "id": 21,
    "projectId": 6,
    "section": "Point d'entrée",
    "title": "Main : initialisation locale (date FR), NotificationService, MaterialApp",
    "slug": "moodcast-main",
    "language": "dart",
    "description": "Point d'entrée minimal : formatage des dates en français, mise à jour des rappels de routine via NotificationService, puis lancement de l'app avec thème et HomeShell.",
    "code": "void main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  await initializeDateFormatting('fr_FR', null);\n  await NotificationService.updateRoutineReminders();\n  runApp(const MoodCastApp());\n}\n\nclass MoodCastApp extends StatelessWidget {\n  const MoodCastApp({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'MoodCast & WorldFlow',\n      debugShowCheckedModeBanner: false,\n      theme: AppTheme.light,\n      home: const HomeShell(),\n    );\n  }\n}",
    "sortOrder": 1
  },
  {
    "id": 22,
    "projectId": 7,
    "section": "Point d'entrée",
    "title": "Démarrage : locale, SQLite, routeur, services ensuite",
    "slug": "carnedbeef-main",
    "language": "dart",
    "description": "Extrait de lib/main.dart. L'écran s'ouvre avant les services. Achats, publicités, son et grilles gratuites partent dans _initializeServicesInBackground.",
    "code": "final container = ProviderContainer(\n  overrides: [\n    localeProvider.overrideWith((ref) => LocaleNotifier(initialLocale: _initialLocale)),\n  ],\n);\n\nrunApp(\n  UncontrolledProviderScope(\n    container: container,\n    child: const CarnedBeefApp(),\n  ),\n);\n\n_initializeServicesInBackground(container);\n\nFuture<void> _initializeServicesInBackground(ProviderContainer container) async {\n  try {\n    if (kDebugMode) debugPrint('🔧 [MAIN] Initialisation des services en arrière-plan...');\n\n    Future<void>.delayed(Duration.zero, () async {\n      try {\n        await FreeSamplesService().importFreeSamplesIfNeeded().timeout(\n          const Duration(seconds: 30),\n          onTimeout: () {\n            if (kDebugMode) debugPrint('⏱ [MAIN] Import grilles gratuites timeout');\n          },\n        );\n        try {\n          container.read(gridsNotifierProvider.notifier).loadGrids();\n        } catch (_) {\n          // Liste pas encore observée : ignoré\n        }\n        if (kDebugMode) debugPrint('✅ [MAIN] Grilles gratuites prêtes');\n      } catch (e) {\n        if (kDebugMode) debugPrint('❌ [MAIN] Import grilles: $e');\n      }\n    });\n\n    await SoundService().initialize();\n\n    await PurchaseService().initialize().timeout(\n      const Duration(seconds: 10),\n      onTimeout: () {\n        if (kDebugMode) debugPrint('⏱ [MAIN] PurchaseService init timeout');\n      },\n    );\n\n    await AdsService().initialize().timeout(\n      const Duration(seconds: 10),\n      onTimeout: () {\n        if (kDebugMode) debugPrint('⏱ [MAIN] AdsService init timeout');\n      },\n    );\n\n    if (kDebugMode) debugPrint('✅ [MAIN] Services initialisés');\n  } catch (e, stackTrace) {\n    if (kDebugMode) {\n      debugPrint('❌ [MAIN] Erreur init services (non bloquante): $e');\n      debugPrint('Stack trace: $stackTrace');\n    }\n  }\n}",
    "sortOrder": 1
  },
  {
    "id": 23,
    "projectId": 8,
    "section": "Thème",
    "title": "AppTheme._build : Material 3 selon la luminosité et l'accent",
    "slug": "ploufplouf-theme",
    "language": "dart",
    "description": "Méthode entière de lib/theme/app_theme.dart. Le thème clair ou sombre part de la couleur navy, puis applique l'accent choisi dans les préférences.",
    "code": "  static ThemeData _build(Brightness brightness, Color accent) {\n    final isDark = brightness == Brightness.dark;\n    final scheme = ColorScheme.fromSeed(\n      seedColor: navy,\n      brightness: brightness,\n      primary: isDark ? accent : navy,\n      secondary: accent,\n      tertiary: coral,\n      surface: isDark ? const Color(0xFF151A22) : paper,\n    );\n\n    return ThemeData(\n      useMaterial3: true,\n      colorScheme: scheme,\n      brightness: brightness,\n      scaffoldBackgroundColor: Colors.transparent,\n      appBarTheme: AppBarTheme(\n        centerTitle: true,\n        elevation: 0,\n        scrolledUnderElevation: 0,\n        backgroundColor: scheme.surface,\n        foregroundColor: scheme.onSurface,\n        titleTextStyle: TextStyle(\n          fontSize: 22,\n          fontWeight: FontWeight.w800,\n          color: isDark ? accent : navy,\n          letterSpacing: -0.3,\n        ),\n      ),\n      cardTheme: CardThemeData(\n        elevation: 0,\n        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),\n        color: isDark\n            ? scheme.surfaceContainerHighest.withValues(alpha: 0.4)\n            : Colors.white,\n        clipBehavior: Clip.antiAlias,\n      ),\n      filledButtonTheme: FilledButtonThemeData(\n        style: FilledButton.styleFrom(\n          backgroundColor: isDark ? accent : navy,\n          foregroundColor: Colors.white,\n          padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 16),\n          minimumSize: const Size(56, 48),\n          shape:\n              RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),\n          textStyle:\n              const TextStyle(fontWeight: FontWeight.w700, fontSize: 15),\n        ),\n      ),\n      chipTheme: ChipThemeData(\n        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(12)),\n        selectedColor: accent.withValues(alpha: 0.25),\n        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 8),\n      ),\n      snackBarTheme: SnackBarThemeData(\n        behavior: SnackBarBehavior.floating,\n        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),\n      ),\n      dialogTheme: DialogThemeData(\n        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),\n      ),\n      bottomSheetTheme: const BottomSheetThemeData(\n        showDragHandle: true,\n        shape: RoundedRectangleBorder(\n          borderRadius: BorderRadius.vertical(top: Radius.circular(24)),\n        ),\n      ),\n      inputDecorationTheme: InputDecorationTheme(\n        filled: true,\n        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),\n        contentPadding:\n            const EdgeInsets.symmetric(horizontal: 16, vertical: 14),\n      ),\n    );\n  }",
    "sortOrder": 1
  },
  {
    "id": 24,
    "projectId": 8,
    "section": "Tirage",
    "title": "drawBestOf : plusieurs graines, on garde le coût le plus bas",
    "slug": "ploufplouf-equipes",
    "language": "dart",
    "description": "Méthode entière de lib/services/team_drawer.dart. Chaque essai relance draw(). Le coût additionne les violations et l'équilibre des équipes. Le meilleur tirage est renvoyé.",
    "code": "  TeamDrawResult drawBestOf({\n    required List<Eleve> eleves,\n    required List<int> participantIndices,\n    required TeamDrawOptions options,\n    required List<String> nomsEquipes,\n    int essais = 6,\n  }) {\n    final n = essais.clamp(1, 48);\n    TeamDrawResult? best;\n    var bestCost = 1 << 30;\n    for (var e = 0; e < n; e++) {\n      final drawer = TeamDrawer(Random(_random.nextInt(1 << 30)));\n      final r = drawer.draw(\n        eleves: eleves,\n        participantIndices: participantIndices,\n        options: options,\n        nomsEquipes: nomsEquipes,\n      );\n      final cost = r.violations * 10000 +\n          _coutGlobalEquipes(r.equipesIndices, eleves, options);\n      if (best == null || cost < bestCost) {\n        best = r;\n        bestCost = cost;\n      }\n    }\n    return best!;\n  }",
    "sortOrder": 2
  },
  {"id":1001,"projectId":10,"section":"Backend Spring Boot","title":"Application principale : Spring Boot 3, JPA Auditing","slug":"hypno-application","language":"java","description":"Point d'entrée du backend : @SpringBootApplication, @EnableJpaAuditing pour les champs createdAt/updatedAt sur les entités JPA.","code":"package com.therapie;\n\nimport org.springframework.boot.SpringApplication;\nimport org.springframework.boot.autoconfigure.SpringBootApplication;\nimport org.springframework.data.jpa.repository.config.EnableJpaAuditing;\n\n@SpringBootApplication\n@EnableJpaAuditing\npublic class TherapieAppApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(TherapieAppApplication.class, args);\n    }\n}","sortOrder":1},
  {"id":1002,"projectId":10,"section":"Sécurité Java","title":"Configuration Spring Security : JWT, CORS, rôles","slug":"hypno-security-config","language":"java","description":"SecurityFilterChain : désactivation CSRF, session stateless, routes /api/auth/** et /api/public/** en permitAll, /api/admin/** réservé ADMIN, filtre JWT.","code":"@Bean\npublic SecurityFilterChain filterChain(HttpSecurity http) throws Exception {\n    http\n        .csrf(csrf -> csrf.disable())\n        .cors(cors -> cors.configurationSource(corsConfigurationSource()))\n        .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))\n        .authorizeHttpRequests(auth -> auth\n            .requestMatchers(\"/api/auth/**\", \"/api/public/**\").permitAll()\n            .requestMatchers(\"/api/admin/**\").hasRole(\"ADMIN\")\n            .anyRequest().authenticated()\n        )\n        .addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);\n    return http.build();\n}","sortOrder":2},
  {"id":1003,"projectId":10,"section":"Authentification JWT","title":"AuthController : inscription et login avec JWT","slug":"hypno-auth-controller","language":"java","description":"REST /api/auth : register (validation @Valid, encodage mot de passe BCrypt, génération token JWT), login (authentification puis token).","code":"@PostMapping(\"/register\")\npublic ResponseEntity<?> register(@Valid @RequestBody RegisterRequest request) {\n    if (userRepository.existsByEmail(request.getEmail())) {\n        return ResponseEntity.badRequest().body(\"Email already exists\");\n    }\n    User user = new User();\n    user.setEmail(request.getEmail());\n    user.setPassword(passwordEncoder.encode(request.getPassword()));\n    user.setFirstName(request.getFirstName());\n    user.setLastName(request.getLastName());\n    user.setLanguage(request.getLanguage() != null ? request.getLanguage() : User.Language.FR);\n    userRepository.save(user);\n    Authentication authentication = authenticationManager.authenticate(\n        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));\n    String token = tokenProvider.generateToken(authentication);\n    return ResponseEntity.ok(new AuthResponse(token, \"User registered successfully\"));\n}\n\n@PostMapping(\"/login\")\npublic ResponseEntity<?> login(@Valid @RequestBody LoginRequest request) {\n    Authentication authentication = authenticationManager.authenticate(\n        new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));\n    String token = tokenProvider.generateToken(authentication);\n    return ResponseEntity.ok(new AuthResponse(token, \"Login successful\"));\n}","sortOrder":3},
  {"id":1004,"projectId":10,"section":"Sécurité Java","title":"JwtTokenProvider : génération et validation des tokens","slug":"hypno-jwt-provider","language":"java","description":"Génération de token JWT (subject = email, expiration configurable), parsing et validation avec clé HMAC (app.jwt.secret).","code":"public String generateToken(Authentication authentication) {\n    String email = authentication.getName();\n    Date now = new Date();\n    Date expiryDate = new Date(now.getTime() + jwtExpiration);\n    return Jwts.builder()\n        .subject(email)\n        .issuedAt(now)\n        .expiration(expiryDate)\n        .signWith(getSigningKey())\n        .compact();\n}\n\npublic String getEmailFromToken(String token) {\n    Claims claims = Jwts.parser()\n        .verifyWith(getSigningKey())\n        .build()\n        .parseSignedClaims(token)\n        .getPayload();\n    return claims.getSubject();\n}\n\npublic boolean validateToken(String token) {\n    try {\n        Jwts.parser().verifyWith(getSigningKey()).build().parseSignedClaims(token);\n        return true;\n    } catch (JwtException | IllegalArgumentException e) {\n        return false;\n    }\n}","sortOrder":4},
  {"id":1005,"projectId":10,"section":"API REST Java","title":"AppointmentController : CRUD rendez-vous sécurisé","slug":"hypno-appointment-controller","language":"java","description":"REST /api/appointments : GET (liste de l'utilisateur), POST (création avec Authentication), GET /{id}, PUT /{id}/cancel. Utilisateur récupéré via JWT.","code":"@GetMapping\npublic ResponseEntity<?> getUserAppointments(Authentication authentication) {\n    String email = authentication.getName();\n    User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException(\"User not found\"));\n    List<Appointment> appointments = appointmentService.getUserAppointments(user.getId());\n    return ResponseEntity.ok(appointments);\n}\n\n@PostMapping\npublic ResponseEntity<?> createAppointment(@Valid @RequestBody AppointmentRequest request, Authentication authentication) {\n    String email = authentication.getName();\n    User user = userRepository.findByEmail(email).orElseThrow(() -> new RuntimeException(\"User not found\"));\n    Appointment appointment = appointmentService.createAppointment(user.getId(), request.getServiceType(), request.getScheduledAt(), request.getPrice());\n    return ResponseEntity.ok(appointment);\n}","sortOrder":5},
  {"id":1006,"projectId":10,"section":"Paiement Stripe","title":"StripeController : PaymentIntent et abonnements","slug":"hypno-stripe-controller","language":"java","description":"Endpoints /api/stripe : create-payment-intent (paiement unique), create-subscription (abonnement Stripe). Gestion StripeException et réponses HTTP structurées.","code":"@PostMapping(\"/create-payment-intent\")\npublic ResponseEntity<?> createPaymentIntent(@RequestBody PaymentRequest request) {\n    try {\n        Map<String, Object> response = stripeService.createPaymentIntent(\n            request.getAmount(),\n            request.getCurrency() != null ? request.getCurrency() : \"eur\",\n            request.getDescription()\n        );\n        return ResponseEntity.ok(response);\n    } catch (StripeException e) {\n        Map<String, String> error = new HashMap<>();\n        error.put(\"error\", e.getMessage());\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);\n    }\n}\n\n@PostMapping(\"/create-subscription\")\npublic ResponseEntity<?> createSubscription(@RequestBody SubscriptionRequest request) {\n    try {\n        Subscription subscription = stripeService.createSubscription(request.getCustomerId(), request.getPriceId());\n        Map<String, Object> response = new HashMap<>();\n        response.put(\"subscriptionId\", subscription.getId());\n        response.put(\"clientSecret\", subscription.getLatestInvoiceObject().getPaymentIntent().getClientSecret());\n        return ResponseEntity.ok(response);\n    } catch (StripeException e) {\n        Map<String, String> error = new HashMap<>();\n        error.put(\"error\", e.getMessage());\n        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(error);\n    }\n}","sortOrder":6},
  {"id":1007,"projectId":10,"section":"Modèle JPA","title":"Entité Appointment : JPA, enums, audit","slug":"hypno-model-appointment","language":"java","description":"Entité JPA rendez-vous : relation ManyToOne User, ServiceType (CONSULTATION, HYPNOSIS, COACHING), statuts (PENDING, CONFIRMED…), Stripe paymentIntentId, @CreatedDate / @LastModifiedDate.","code":"@Entity\n@Table(name = \"appointments\")\n@Data\n@NoArgsConstructor\n@AllArgsConstructor\n@EntityListeners(AuditingEntityListener.class)\npublic class Appointment {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    @ManyToOne(fetch = FetchType.LAZY)\n    @JoinColumn(name = \"user_id\", nullable = false)\n    private User user;\n    @Enumerated(EnumType.STRING)\n    private ServiceType serviceType;\n    private LocalDateTime scheduledAt;\n    @Enumerated(EnumType.STRING)\n    private AppointmentStatus status = AppointmentStatus.PENDING;\n    private String videoLink;\n    private Double price;\n    @Enumerated(EnumType.STRING)\n    private PaymentStatus paymentStatus = PaymentStatus.PENDING;\n    private String paymentIntentId; // Stripe\n    @CreatedDate\n    @Column(nullable = false, updatable = false)\n    private LocalDateTime createdAt;\n    @LastModifiedDate\n    private LocalDateTime updatedAt;\n\n    public enum ServiceType { CONSULTATION, HYPNOSIS, COACHING, FOLLOW_UP }\n    public enum AppointmentStatus { PENDING, CONFIRMED, COMPLETED, CANCELLED }\n    public enum PaymentStatus { PENDING, PAID, FAILED, REFUNDED }\n}","sortOrder":7},
  {"id":1008,"projectId":10,"section":"Gestion des erreurs","title":"GlobalExceptionHandler : validation et erreurs métier","slug":"hypno-exception-handler","language":"java","description":"@RestControllerAdvice : MethodArgumentNotValidException (champs en erreur), BadCredentialsException (401), RuntimeException et Exception générique. Réponses JSON structurées.","code":"@ExceptionHandler(MethodArgumentNotValidException.class)\npublic ResponseEntity<Map<String, Object>> handleValidationExceptions(MethodArgumentNotValidException ex) {\n    Map<String, String> errors = new HashMap<>();\n    ex.getBindingResult().getAllErrors().forEach((error) -> {\n        String fieldName = ((FieldError) error).getField();\n        String errorMessage = error.getDefaultMessage();\n        errors.put(fieldName, errorMessage);\n    });\n    Map<String, Object> response = new HashMap<>();\n    response.put(\"error\", \"Validation failed\");\n    response.put(\"errors\", errors);\n    response.put(\"status\", HttpStatus.BAD_REQUEST.value());\n    return ResponseEntity.badRequest().body(response);\n}\n\n@ExceptionHandler(BadCredentialsException.class)\npublic ResponseEntity<Map<String, Object>> handleBadCredentials(BadCredentialsException ex) {\n    Map<String, Object> response = new HashMap<>();\n    response.put(\"error\", \"Invalid email or password\");\n    response.put(\"status\", HttpStatus.UNAUTHORIZED.value());\n    return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(response);\n}","sortOrder":8},
  {"id":1009,"projectId":10,"section":"Frontend React","title":"Client API : axios, intercepteur JWT, modules par ressource","slug":"hypno-frontend-api","language":"javascript","description":"Client axios avec baseURL, intercepteur request (Bearer token depuis authStore), intercepteur response (401 → logout + redirect login). APIs auth, user, appointments, content, stripe, etc.","code":"const api = axios.create({\n  baseURL: API_URL,\n  headers: { 'Content-Type': 'application/json' },\n});\n\napi.interceptors.request.use(\n  (config) => {\n    const token = useAuthStore.getState().token;\n    if (token) config.headers.Authorization = `Bearer ${token}`;\n    return config;\n  },\n  (error) => Promise.reject(error)\n);\n\napi.interceptors.response.use(\n  (response) => response,\n  (error) => {\n    if (error.response?.status === 401) {\n      useAuthStore.getState().logout();\n      window.location.href = '/login';\n    }\n    return Promise.reject(error);\n  }\n);\n\nexport const authAPI = {\n  login: (data) => api.post('/auth/login', data),\n  register: (data) => api.post('/auth/register', data),\n};\nexport const appointmentsAPI = {\n  getAll: () => api.get('/appointments'),\n  create: (data) => api.post('/appointments', data),\n  cancel: (id) => api.put(`/appointments/${id}/cancel`),\n};","sortOrder":9},
  {"id":1010,"projectId":10,"section":"Frontend React","title":"Vite : proxy API vers le backend Spring Boot","slug":"hypno-vite-config","language":"javascript","description":"Configuration Vite avec plugin React et proxy /api vers localhost:8080 pour éviter les problèmes CORS en développement.","code":"import { defineConfig } from 'vite'\nimport react from '@vitejs/plugin-react'\n\nexport default defineConfig({\n  plugins: [react()],\n  server: {\n    port: 5173,\n    proxy: {\n      '/api': {\n        target: 'http://localhost:8080',\n        changeOrigin: true,\n      },\n    },\n  },\n})","sortOrder":10},
  {"id":3010,"projectId":4,"section":"Ajout rapide","title":"QuickAddParser.parse : liste nommée ou articles seuls","slug":"noublipo-quick-add","language":"dart","description":"Extrait de lib/core/utils/quick_add_parser.dart. La phrase est découpée selon les mots « liste » et « ajouter » (et leurs équivalents), du plus long au plus court.","code":"static QuickAddResult parse(\n  String input, {\n  String? listKeyword,\n  String? addKeyword,\n}) {\n  String s = input.trim();\n  if (s.isEmpty) return const QuickAddResult(items: []);\n  s = _normalizeSpaces(s);\n\n  final listKeywords = <String>[\n    if (listKeyword != null && listKeyword.trim().isNotEmpty) listKeyword.trim(),\n    ...builtInListKeywords,\n  ];\n  listKeywords.sort((a, b) => b.length.compareTo(a.length));\n\n  final addKeywords = <String>[\n    if (addKeyword != null && addKeyword.trim().isNotEmpty) addKeyword.trim(),\n    ...builtInAddKeywords,\n  ];\n  addKeywords.sort((a, b) => b.length.compareTo(a.length));\n\n  for (final kw in listKeywords) {\n    final prefixLen = _prefixLength(s, kw);\n    if (prefixLen == null) continue;\n    var afterListe = s.substring(prefixLen).trim();\n    if (afterListe.isEmpty) return const QuickAddResult(items: []);\n\n    final ajouterIdx = _indexOfAnyWord(afterListe, addKeywords);\n    final colonIdx = _indexOfItemColon(afterListe);\n    final sep = _findSeparator(ajouterIdx, colonIdx, afterListe, addKeywords);\n    if (sep != null) {\n      final listName = afterListe.substring(0, sep.start).trim();\n      final itemsStr = afterListe.substring(sep.end).trim();\n      if (listName.isEmpty) return _itemsOnly(itemsStr);\n      return QuickAddResult(\n        listName: capitalizePhraseSafely(listName),\n        items: _splitItems(itemsStr),\n      );\n    }\n  }\n\n  return _itemsOnly(s);\n}","sortOrder":2},
  {"id":3011,"projectId":5,"section":"Dés","title":"Jet : animation, seuil, triples 1 et 6","slug":"manyfaces-dice","language":"dart","description":"Extrait de lib/widgets/dice_roller.dart. Le total est la somme des dés plus le bonus. La réussite compare ce total au seuil (caractéristique × nombre de dés).","code":"Future<void> _rollDice() async {\n  if (_isRolling) return;\n  setState(() {\n    _isRolling = true;\n    _lastRoll = null;\n  });\n\n  _diceAnimationController.forward(from: 0);\n  final timer = Timer.periodic(const Duration(milliseconds: 100), (timer) {\n    if (mounted) {\n      setState(() {\n        _rollingDice = List.generate(_numDice, (_) => RollD6.roll());\n      });\n    }\n  });\n\n  await Future.delayed(const Duration(milliseconds: 800));\n  timer.cancel();\n\n  List<int> rolled = List.generate(_numDice, (_) => RollD6.roll());\n  if (_numDice == 3 && mounted) {\n    final characterType = context.read<CharacterProvider>().currentCharacter?.type;\n    final rnd = Random().nextDouble();\n    if (characterType == 'Ange' || characterType == 'Humain') {\n      if (rnd < 0.005) rolled = [1, 1, 1];\n    } else if (characterType == 'Démon') {\n      if (rnd < 0.005) rolled = [6, 6, 6];\n    }\n  }\n  final total = rolled.reduce((a, b) => a + b) + _bonus;\n  final threshold = _selectedCharacteristic * _numDice;\n  final isTriple = _numDice == 3 && rolled[0] == rolled[1] && rolled[1] == rolled[2];\n\n  setState(() {\n    _lastRoll = rolled;\n    _total = total;\n    _isSuccess = total <= threshold;\n    _isTriple1 = isTriple && rolled[0] == 1;\n    _isTriple6 = isTriple && rolled[0] == 6;\n    _isRolling = false;\n    _rollingDice = rolled;\n  });\n}","sortOrder":2},
  {"id":3012,"projectId":6,"section":"Voix","title":"Analyse locale : amplitude, puis TFLite si un wav est présent","slug":"moodcast-voice","language":"dart","description":"Extrait de lib/services/voice_mood_analyzer.dart. Sans fichier wav, seul le signal d'amplitude est utilisé. Une erreur du modèle renvoie cette analyse.","code":"static Future<MoodAnalysisResult> analyzeHybrid({\n  required String? wavPath,\n  required List<Amplitude> samples,\n  required int durationSeconds,\n}) async {\n  final ampOnly = mergeWithApi(null, samples, durationSeconds);\n  if (wavPath == null || !wavPath.toLowerCase().endsWith('.wav')) {\n    return ampOnly;\n  }\n  try {\n    final ser = await SerEmotionTflite.instance.classify(wavPath);\n    if (ser == null) return ampOnly;\n    return _fuseSerWithAmplitude(ser, ampOnly, samples, durationSeconds);\n  } catch (_) {\n    return ampOnly;\n  }\n}","sortOrder":2},
  {"id":3013,"projectId":8,"section":"Équipes","title":"TeamDrawer.draw : binômes, incompatibilités, effectifs, échanges","slug":"ploufplouf-drawer","language":"dart","description":"Méthode entière de lib/services/team_drawer.dart. Binômes, placement, incompatibilités, effectifs, échanges, puis le résultat renvoyé.","code":"  TeamDrawResult draw({\n    required List<Eleve> eleves,\n    required List<int> participantIndices,\n    required TeamDrawOptions options,\n    required List<String> nomsEquipes,\n  }) {\n    final nbEquipes = options.nbEquipes;\n    if (nbEquipes < 1 || participantIndices.isEmpty) {\n      return TeamDrawResult(\n        equipesIndices: List.generate(nbEquipes, (_) => <int>[]),\n        equipesNoms: List.generate(nbEquipes, (_) => <String>[]),\n        nomsEquipes: List<String>.from(nomsEquipes),\n      );\n    }\n\n    final equipes = List.generate(nbEquipes, (_) => <int>[]);\n    final assigne = <int>{};\n    var violations = 0;\n\n    // ── 1. Binômes / chaînes ♥ d’abord ───────────────────────────────────\n    violations += _placerCoeurs(\n      eleves: eleves,\n      participantIndices: participantIndices,\n      equipes: equipes,\n      assigne: assigne,\n      options: options,\n    );\n\n    // ── 2. Reste : ordre priorisé puis scoring multi-critères ────────────\n    final restants = [\n      for (final i in participantIndices)\n        if (!assigne.contains(i)) i,\n    ];\n    _ordonnerPlacement(restants, eleves, options);\n\n    for (final idx in restants) {\n      final placed = _placerOptimal(\n        idx,\n        equipes,\n        eleves,\n        options,\n        hardOnly: false,\n      );\n      if (placed.violation) violations++;\n      assigne.add(idx);\n    }\n\n    // ── 3. Réparer ✕ durs ────────────────────────────────────────────────\n    violations += _corrigerIncompatibles(equipes, options, eleves);\n\n    // ── 4. Effectifs |max−min| ≤ 1 ───────────────────────────────────────\n    _equilibrerTailles(equipes, eleves, options);\n\n    // ── 5. Raffinement local (échanges qui améliorent le score) ──────────\n    _raffiner(equipes, eleves, options);\n\n    // Comptage final des violations dures restantes.\n    violations = _compterViolationsDures(equipes, options, eleves);\n\n    final equipesNoms = [\n      for (final team in equipes)\n        [for (final i in team) eleves[i].labelAt(i)],\n    ];\n\n    return TeamDrawResult(\n      equipesIndices: equipes,\n      equipesNoms: equipesNoms,\n      nomsEquipes: List<String>.from(nomsEquipes),\n      violations: violations,\n    );\n  }","sortOrder":3},
  {"id":3014,"projectId":7,"section":"Jam","title":"Progression partagée : horloge lissée, recalage si l'écart est grand","slug":"carnedbeef-transport","language":"dart","description":"Extrait de lib/features/jam/services/jam_musical_transport.dart. La position est une progression de 0 à 1. Chaque appareil la convertit en pixels selon son écran.","code":"double progressAt(DateTime utc) {\n  if (!isPlaying || anchorUtc == null) {\n    return progress.clamp(0.0, 1.0);\n  }\n  final now = utc.add(Duration(milliseconds: clockOffsetMs));\n  var elapsedSec = now.difference(anchorUtc!).inMicroseconds / 1e6;\n  if (elapsedSec < 0) elapsedSec = 0;\n  final delta = elapsedSec * speedFactor / totalDurationSeconds;\n  return (progressAtAnchor + delta).clamp(0.0, 1.0);\n}\n\nvoid applyClockSample(int hostTimeMs) {\n  final local = DateTime.now().millisecondsSinceEpoch;\n  final sample = hostTimeMs - local;\n  clockOffsetMs = (clockOffsetMs * 0.85 + sample * 0.15).round();\n}\n\nvoid applyDriftCorrection(double hostProgress, DateTime utc) {\n  final local = progressAt(utc);\n  final error = hostProgress - local;\n  if (error.abs() < 0.0015) return;\n  if (error.abs() > 0.04) {\n    seek(hostProgress, reanchorUtc: isPlaying ? utc : null);\n    return;\n  }\n  if (isPlaying && anchorUtc != null) {\n    progressAtAnchor += error * 0.2;\n    progress = progressAt(utc);\n  } else {\n    progress = hostProgress;\n  }\n}","sortOrder":2},
  {"id":3015,"projectId":7,"section":"Accords","title":"transposeChord : dièses, bémols, ou armure du morceau","slug":"carnedbeef-transpose","language":"dart","description":"Extrait de lib/core/utils/transposition.dart. Bb reste en bémols, F# en dièses. Une fondamentale naturelle suit l'armure du morceau.","code":"static String transposeChord(\n  String chord,\n  int semitones, {\n  bool globalPreferFlats = false,\n}) {\n  if (chord.isEmpty || semitones == 0) return chord;\n\n  final sym = chord.trim().replaceAll('♯', '#').replaceAll('♭', 'b');\n  if (ChordParser.isNoChordSymbol(sym) || ChordParser.isGridStructureSymbol(sym)) {\n    return chord;\n  }\n\n  final m = RegExp(r'^([A-G](?:#|b)?)(.*)$').firstMatch(sym);\n  if (m == null) return chord;\n\n  final root = m.group(1)!;\n  final suffix = m.group(2) ?? '';\n\n  final pc = _pitchClassFromRoot(root);\n  if (pc == null) return chord;\n\n  var newPc = (pc + semitones) % 12;\n  if (newPc < 0) newPc += 12;\n\n  final bool useFlats;\n  if (root.length >= 2 && root[1] == 'b') {\n    useFlats = true;\n  } else if (root.contains('#')) {\n    useFlats = false;\n  } else {\n    useFlats = globalPreferFlats;\n  }\n\n  final newRoot = _spellPitchClass(newPc, useFlats);\n  return newRoot + suffix;\n}","sortOrder":3}

]
