/**
 * Données statiques du portfolio (générées par scripts/export-from-api.js).
 */

export const profile = {
  "id": 1,
  "name": "Benjamin Moine",
  "title": "Développeur d'applications",
  "bio": "Développeur passionné par les applications et l'infra. Expérience en Java (Jakarta EE, Spring Boot, Maven), Python, JavaScript, modélisation de données et DevOps (Docker, Kubernetes, Ansible, Jenkins, CI/CD). Méthodes agiles (Scrum), tests unitaires et déploiement. Anglais C1.",
  "email": null,
  "linkedinUrl": null,
  "githubUrl": "https://github.com/yglsan2"
}

export const projects = [
  {
    "id": 1,
    "title": "BarrelMCD (Python)",
    "slug": "barrelmcd-python",
    "description": "Outil de modélisation MCD en Python. Interface graphique (Tkinter), génération de schémas, export. Projet personnel complet et utilisable.",
    "type": "SOFTWARE",
    "technologies": [
      "Python",
      "Tkinter",
      "SQL"
    ],
    "sortOrder": 1,
    "projectUrl": null,
    "repoUrl": "https://github.com/yglsan2/BarrelMCD-python"
  },
  {
    "id": 2,
    "title": "Lumières d'Ukraine",
    "slug": "lumieres-ukraine",
    "description": "Plateforme culturelle : bibliothèque virtuelle et événements. Vue 3, i18n (FR, EN, UK, DE, PL), backend Spring Boot avec JWT.",
    "type": "WEBSITE",
    "technologies": [
      "Vue 3",
      "Pinia",
      "Vue I18n",
      "Spring Boot",
      "PostgreSQL"
    ],
    "sortOrder": 2,
    "projectUrl": null,
    "repoUrl": "https://github.com/yglsan2/Ukraine"
  },
  {
    "id": 3,
    "title": "DokiLight",
    "slug": "dokilight",
    "description": "Chatbot RAG (stage Dokos) : version light de Doki Expert. Recherche par mots-clés dans la doc, PostgreSQL/pgvector, Streamlit, scoring hybride sémantique + conceptuel.",
    "type": "SOFTWARE",
    "technologies": [
      "Python",
      "Streamlit",
      "PostgreSQL",
      "pgvector",
      "SentenceTransformer"
    ],
    "sortOrder": 3,
    "projectUrl": null,
    "repoUrl": "https://github.com/yglsan2/DokiLight"
  },
  {
    "id": 4,
    "title": "Noublipo (NopList)",
    "slug": "noublipo",
    "description": "Application liste de courses / shopping list.",
    "type": "SOFTWARE",
    "technologies": [
      "Flutter",
      "Dart"
    ],
    "sortOrder": 4,
    "projectUrl": null,
    "repoUrl": "https://github.com/yglsan2/Noublipo"
  },
  {
    "id": 5,
    "title": "ManyFaces",
    "slug": "manyfaces",
    "description": "Logiciel de création de personnages et PNJ pour jeux de rôle.",
    "type": "SOFTWARE",
    "technologies": [
      "Flutter",
      "Dart"
    ],
    "sortOrder": 5,
    "projectUrl": null,
    "repoUrl": "https://github.com/yglsan2/RPGproject-Flutter-3-me-application-sous-flutter-"
  },
  {
    "id": 6,
    "title": "MoodCast",
    "slug": "moodcast",
    "description": "Application Flutter (météo / ambiance).",
    "type": "SOFTWARE",
    "technologies": [
      "Flutter",
      "Dart"
    ],
    "sortOrder": 6,
    "projectUrl": null,
    "repoUrl": "https://github.com/yglsan2/MoodCast"
  },
  {
    "id": 7,
    "title": "Carned Beef",
    "slug": "carned-beef",
    "description": "Partage de partitions musicales.",
    "type": "SOFTWARE",
    "technologies": [
      "Flutter",
      "Dart"
    ],
    "sortOrder": 7,
    "projectUrl": null,
    "repoUrl": "https://github.com/yglsan2/CarnedBeef"
  },
  {
    "id": 8,
    "title": "PloufPlouf",
    "slug": "ploufplouf",
    "description": "Logiciel de tirage au sort pédagogique.",
    "type": "SOFTWARE",
    "technologies": [
      "Flutter",
      "Dart"
    ],
    "sortOrder": 8,
    "projectUrl": null,
    "repoUrl": "https://github.com/yglsan2/PloufPlouf"
  },
  {
    "id": 9,
    "title": "Mes applications UserScript",
    "slug": "userscripts",
    "description": "Ensemble d’extensions utilisateur en JavaScript (UserScript) : Lichess, etc.",
    "type": "OPEN_SOURCE",
    "technologies": [
      "JavaScript",
      "UserScript"
    ],
    "sortOrder": 9,
    "projectUrl": null,
    "repoUrl": "https://github.com/yglsan2/Mes-applications-Userscript-JS-"
  }
]

export const skills = [
  {
    "id": 1,
    "name": "Java",
    "category": "Backend",
    "level": 90,
    "sortOrder": 1,
    "keywords": [
      "Jakarta EE",
      "Spring Boot",
      "JPA",
      "Maven"
    ]
  },
  {
    "id": 2,
    "name": "Spring Boot",
    "category": "Backend",
    "level": 88,
    "sortOrder": 2,
    "keywords": [
      "REST",
      "Security",
      "Data JPA",
      "Validation"
    ]
  },
  {
    "id": 3,
    "name": "Python",
    "category": "Backend",
    "level": 85,
    "sortOrder": 3,
    "keywords": [
      "Streamlit",
      "pgvector",
      "Dokos"
    ]
  },
  {
    "id": 4,
    "name": "Tomcat",
    "category": "Backend",
    "level": 75,
    "sortOrder": 4,
    "keywords": [
      "Serveur d'applications",
      "Java EE"
    ]
  },
  {
    "id": 5,
    "name": "Frappe / ERPNext",
    "category": "Backend",
    "level": 70,
    "sortOrder": 5,
    "keywords": [
      "Framework Python",
      "ERP",
      "Frappe"
    ]
  },
  {
    "id": 6,
    "name": "Chatbot RAG",
    "category": "Backend",
    "level": 78,
    "sortOrder": 6,
    "keywords": [
      "DokiLight",
      "Recherche sémantique",
      "pgvector",
      "Scoring hybride"
    ]
  },
  {
    "id": 12,
    "name": "PostgreSQL",
    "category": "Data",
    "level": 80,
    "sortOrder": 1,
    "keywords": [
      "SQL",
      "pgvector",
      "Migrations"
    ]
  },
  {
    "id": 13,
    "name": "MySQL",
    "category": "Data",
    "level": 75,
    "sortOrder": 2,
    "keywords": [
      "SQL",
      "SGBD"
    ]
  },
  {
    "id": 14,
    "name": "SQL Server",
    "category": "Data",
    "level": 70,
    "sortOrder": 3,
    "keywords": [
      "Microsoft",
      "T-SQL",
      "SGBD"
    ]
  },
  {
    "id": 15,
    "name": "Docker",
    "category": "DevOps",
    "level": 78,
    "sortOrder": 1,
    "keywords": [
      "Conteneurisation",
      "Déploiement"
    ]
  },
  {
    "id": 16,
    "name": "Kubernetes",
    "category": "DevOps",
    "level": 70,
    "sortOrder": 2,
    "keywords": [
      "Orchestration",
      "Pods"
    ]
  },
  {
    "id": 17,
    "name": "Ansible",
    "category": "DevOps",
    "level": 72,
    "sortOrder": 3,
    "keywords": [
      "Load balancing",
      "Déploiement"
    ]
  },
  {
    "id": 18,
    "name": "Jenkins",
    "category": "DevOps",
    "level": 75,
    "sortOrder": 4,
    "keywords": [
      "CI",
      "Pipelines"
    ]
  },
  {
    "id": 19,
    "name": "GitHub Actions / CI-CD",
    "category": "DevOps",
    "level": 80,
    "sortOrder": 5,
    "keywords": [
      "CI/CD",
      "Workflows"
    ]
  },
  {
    "id": 20,
    "name": "GitLab",
    "category": "DevOps",
    "level": 78,
    "sortOrder": 6,
    "keywords": [
      "CI/CD",
      "Registry",
      "Dépôts"
    ]
  },
  {
    "id": 21,
    "name": "Prometheus",
    "category": "DevOps",
    "level": 72,
    "sortOrder": 7,
    "keywords": [
      "Monitoring",
      "Métriques",
      "Alerting"
    ]
  },
  {
    "id": 22,
    "name": "Grafana",
    "category": "DevOps",
    "level": 72,
    "sortOrder": 8,
    "keywords": [
      "Tableaux de bord",
      "Visualisation",
      "Monitoring"
    ]
  },
  {
    "id": 23,
    "name": "AWS",
    "category": "DevOps",
    "level": 68,
    "sortOrder": 9,
    "keywords": [
      "Cloud",
      "EC2",
      "S3",
      "Déploiement"
    ]
  },
  {
    "id": 24,
    "name": "VirtualBox",
    "category": "DevOps",
    "level": 75,
    "sortOrder": 10,
    "keywords": [
      "Virtualisation",
      "VM",
      "Environnements de test"
    ]
  },
  {
    "id": 25,
    "name": "SSH",
    "category": "DevOps",
    "level": 82,
    "sortOrder": 11,
    "keywords": [
      "Sécurisation",
      "Accès distant",
      "Clés",
      "Tunnels"
    ]
  },
  {
    "id": 7,
    "name": "Vue.js",
    "category": "Frontend",
    "level": 88,
    "sortOrder": 1,
    "keywords": [
      "Vue 3",
      "Composition API",
      "Pinia",
      "Vite",
      "I18n"
    ]
  },
  {
    "id": 8,
    "name": "Tailwind CSS",
    "category": "Frontend",
    "level": 85,
    "sortOrder": 2,
    "keywords": [
      "Utility-first",
      "Responsive"
    ]
  },
  {
    "id": 9,
    "name": "JavaScript",
    "category": "Frontend",
    "level": 86,
    "sortOrder": 3,
    "keywords": [
      "ES6+",
      "UserScript",
      "DOM",
      "Fetch"
    ]
  },
  {
    "id": 10,
    "name": "HTML / CSS",
    "category": "Frontend",
    "level": 88,
    "sortOrder": 4,
    "keywords": [
      "Sémantique",
      "Accessibilité",
      "Responsive"
    ]
  },
  {
    "id": 11,
    "name": "Flutter / Dart",
    "category": "Mobile",
    "level": 82,
    "sortOrder": 1,
    "keywords": [
      "MoodCast",
      "Carned Beef",
      "Noublipo",
      "ManyFaces",
      "PloufPlouf"
    ]
  },
  {
    "id": 26,
    "name": "SCRUM",
    "category": "Méthodes",
    "level": 85,
    "sortOrder": 1,
    "keywords": [
      "Agilité",
      "Sprints"
    ]
  },
  {
    "id": 27,
    "name": "Kanban",
    "category": "Méthodes",
    "level": 82,
    "sortOrder": 2,
    "keywords": [
      "Agilité",
      "Flux",
      "Tableaux"
    ]
  },
  {
    "id": 28,
    "name": "Git",
    "category": "Outils",
    "level": 88,
    "sortOrder": 1,
    "keywords": [
      "GitHub",
      "GitLab",
      "CI/CD"
    ]
  },
  {
    "id": 29,
    "name": "Bash",
    "category": "Outils",
    "level": 80,
    "sortOrder": 2,
    "keywords": [
      "Lignes de commande",
      "Scripting",
      "Linux"
    ]
  },
  {
    "id": 30,
    "name": "SonarQube",
    "category": "Outils",
    "level": 72,
    "sortOrder": 3,
    "keywords": [
      "Qualité de code",
      "Vérifications",
      "Dette technique"
    ]
  }
]

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
    "section": "État partagé (Pinia)",
    "title": "Store Pinia : état réactif et valeur dérivée (computed)",
    "slug": "ukraine-store-pinia",
    "language": "typescript",
    "description": "Un store Pinia contient des données (ref) et des fonctions. Ici : count (nombre), doubleCount (calculé automatiquement : count × 2), increment() pour modifier count. Toute la partie front peut utiliser ce store pour partager cet état.",
    "code": "import { ref, computed } from 'vue'\nimport { defineStore } from 'pinia'\n\nexport const useCounterStore = defineStore('counter', () => {\n  const count = ref(0)\n  const doubleCount = computed(() => count.value * 2)\n  function increment() {\n    count.value++\n  }\n  return { count, doubleCount, increment }\n})",
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
    "sortOrder": 1
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
    "sortOrder": 2
  },
  {
    "id": 17,
    "projectId": 9,
    "section": "UserScript Lichess",
    "title": "En-tête et persistance : GM_getValue / GM_setValue",
    "slug": "userscript-lichess-meta",
    "language": "javascript",
    "description": "Métadonnées UserScript (Tampermonkey) et persistance de l'état du bouton anti-misclic entre les sessions.",
    "code": "// ==UserScript==\n// @name         Lichess Anti-Misclic\n// @namespace    http://tampermonkey.net/\n// @version      2\n// @description  Ajoute un délai anti-misclick sur Lichess avec un bouton d'activation\n// @author       yglsan\n// @match        https://lichess.org/*\n// @grant        GM_setValue\n// @grant        GM_getValue\n// @license      OpenGPL 3.0\n// ==/UserScript==\n\n(function() {\n    'use strict';\n    let antiMisclickEnabled = GM_getValue(\"antiMisclickEnabled\", true);\n\n    function toggleMisclickProtection() {\n        antiMisclickEnabled = !antiMisclickEnabled;\n        GM_setValue(\"antiMisclickEnabled\", antiMisclickEnabled);\n        updateButton();\n    }\n\n    function updateButton() {\n        const button = document.getElementById(\"toggleMisclickButton\");\n        if (!button) return;\n        button.innerText = antiMisclickEnabled ? \"🔴 Anti-Misclick ON\" : \"⚫ Anti-Misclick OFF\";\n        button.style.backgroundColor = antiMisclickEnabled ? \"#28a745\" : \"#dc3545\";\n    }\n    // ...\n})();",
    "sortOrder": 1
  },
  {
    "id": 18,
    "projectId": 9,
    "section": "UserScript Lichess",
    "title": "Détection du misclic : délai 750 ms, highlight de la case",
    "slug": "userscript-lichess-logic",
    "language": "javascript",
    "description": "Logique anti-misclic : si deux clics sur l'échiquier en moins de 750 ms, le second est ignoré ; sinon le coup est validé.",
    "code": "const clickDelay = 750; // ms\nconst highlightColor = \"rgba(255, 0, 0, 0.5)\";\nlet selectedSquare = null;\nlet lastClickTime = 0;\n\ndocument.addEventListener('click', (event) => {\n    if (!antiMisclickEnabled) return;\n    const now = Date.now();\n    const square = event.target.closest('.square');\n    if (!square) return;\n\n    if (selectedSquare) {\n        if (now - lastClickTime < clickDelay) {\n            console.log(\"Misclick détecté : mouvement annulé !\");\n            resetSelection();\n            return;\n        }\n        console.log(\"Coup validé : \" + selectedSquare.dataset.san + \" -> \" + square.dataset.san);\n        resetSelection();\n    } else {\n        selectedSquare = square;\n        lastClickTime = now;\n        highlightSquare(selectedSquare);\n    }\n});\n\nfunction highlightSquare(square) {\n    square.style.backgroundColor = highlightColor;\n    setTimeout(() => {\n        if (square === selectedSquare) square.style.backgroundColor = \"\";\n    }, clickDelay);\n}\n\nfunction resetSelection() {\n    if (selectedSquare) selectedSquare.style.backgroundColor = \"\";\n    selectedSquare = null;\n}",
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
    "title": "Main : initialisation des services (achats, pubs, son, échantillons), ProviderScope, MaterialApp.router",
    "slug": "carnedbeef-main",
    "language": "dart",
    "description": "Bootstrap asynchrone des services métier (PurchaseService, AdsService, SoundService, FreeSamplesService), puis app avec Riverpod (ConsumerWidget), thème et go_router.",
    "code": "void main() async {\n  WidgetsFlutterBinding.ensureInitialized();\n  try {\n    await PurchaseService().initialize();\n    await AdsService().initialize();\n    await SoundService().initialize();\n    await FreeSamplesService().importFreeSamplesIfNeeded();\n    runApp(\n      const ProviderScope(\n        child: CarnedBeefApp(),\n      ),\n    );\n  } catch (e, stackTrace) {\n    rethrow;\n  }\n}\n\nclass CarnedBeefApp extends ConsumerWidget {\n  const CarnedBeefApp({super.key});\n  @override\n  Widget build(BuildContext context, WidgetRef ref) {\n    final smartThemeMode = ref.watch(smartThemeModeProvider);\n    final locale = ref.watch(localeProvider);\n    return MaterialApp.router(\n      title: 'Carned Beef',\n      debugShowCheckedModeBanner: false,\n      theme: AppThemeEnhanced.lightTheme,\n      darkTheme: AppThemeEnhanced.darkTheme,\n      themeMode: smartThemeMode,\n      locale: locale,\n      localizationsDelegates: [\n        AppLocalizations.delegate,\n        GlobalMaterialLocalizations.delegate,\n        GlobalWidgetsLocalizations.delegate,\n        GlobalCupertinoLocalizations.delegate,\n      ],\n      supportedLocales: AppLocalizations.supportedLocales,\n      routerConfig: AppRouter.router,\n    );\n  }\n}",
    "sortOrder": 1
  },
  {
    "id": 23,
    "projectId": 8,
    "section": "Point d'entrée et UI",
    "title": "MaterialApp : thème Material 3 (ColorScheme), ScrollConfiguration (BouncingScrollPhysics)",
    "slug": "ploufplouf-theme",
    "language": "dart",
    "description": "Application avec thème clair/sombre (ColorScheme.fromSeed), cartes et boutons arrondis, et ScrollConfiguration pour un défilement tactile fluide sur mobile.",
    "code": "class PloufPloufApp extends StatelessWidget {\n  const PloufPloufApp({super.key});\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'PloufPlouf',\n      debugShowCheckedModeBanner: false,\n      theme: _buildTheme(Brightness.light),\n      darkTheme: _buildTheme(Brightness.dark),\n      themeMode: ThemeMode.system,\n      builder: (context, child) {\n        return ScrollConfiguration(\n          behavior: ScrollConfiguration.of(context).copyWith(\n            physics: const BouncingScrollPhysics(\n              parent: AlwaysScrollableScrollPhysics(),\n            ),\n            scrollbars: true,\n            overscroll: true,\n          ),\n          child: child!,\n        );\n      },\n      home: const TirageEquipesPage(),\n    );\n  }\n  static ThemeData _buildTheme(Brightness brightness) {\n    final isDark = brightness == Brightness.dark;\n    final colorScheme = ColorScheme.fromSeed(\n      seedColor: const Color(0xFF1E3A5F),\n      brightness: brightness,\n      primary: const Color(0xFF1E3A5F),\n      secondary: const Color(0xFF3B5998),\n      surface: isDark ? const Color(0xFF1E1E1E) : const Color(0xFFF5F5F5),\n    );\n    return ThemeData(\n      useMaterial3: true,\n      colorScheme: colorScheme,\n      fontFamily: 'Roboto',\n      appBarTheme: AppBarTheme(centerTitle: true, elevation: 0, ...),\n      cardTheme: CardThemeData(\n        elevation: isDark ? 0 : 2,\n        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(20)),\n        ...),\n      filledButtonTheme: FilledButtonThemeData(\n        style: FilledButton.styleFrom(\n          minimumSize: const Size(72, 48),\n          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(14)),\n          ...),\n      ),\n    );\n  }\n}",
    "sortOrder": 1
  },
  {
    "id": 24,
    "projectId": 8,
    "section": "Modèle et logique",
    "title": "Classe Eleve et répartition équilibrée (genre, incompatibilités, semi-choix)",
    "slug": "ploufplouf-equipes",
    "language": "dart",
    "description": "",
    "code": "class Eleve {\n  String prenom;\n  String nom;\n  bool participe;\n  bool volontaire;\n  String? genre; // \"F\" = fille, \"M\" = garçon\n\n  Eleve({this.prenom = '', this.nom = '', this.participe = false, this.volontaire = false, this.genre});\n\n  String get displayName {\n    final p = prenom.trim();\n    final n = nom.trim();\n    if (p.isEmpty && n.isEmpty) return '';\n    if (p.isEmpty) return n;\n    if (n.isEmpty) return p;\n    return '$p $n';\n  }\n}\n\nvoid _faireEquipes(int nbEquipes) {\n  final participantIndices = [for (var i = 0; i < _eleves.length; i++) if (_eleves[i].participe) i];\n  if (participantIndices.length < nbEquipes) { /* SnackBar erreur */ return; }\n  final equipesIndices = List.generate(nbEquipes, (_) => <int>[]);\n\n  if (_repartirFillesGarcons) {\n    final filles = [for (final i in participantIndices) if (_eleves[i].genre == 'F') i];\n    final garcons = [for (final i in participantIndices) if (_eleves[i].genre == 'M') i];\n    final autres = [for (final i in participantIndices) if (_eleves[i].genre != 'F' && _eleves[i].genre != 'M') i];\n    filles.shuffle(_random);\n    garcons.shuffle(_random);\n    autres.shuffle(_random);\n    for (var i = 0; i < filles.length; i++) equipesIndices[i % nbEquipes].add(filles[i]);\n    for (var i = 0; i < garcons.length; i++) equipesIndices[i % nbEquipes].add(garcons[i]);\n    for (var i = 0; i < autres.length; i++) equipesIndices[i % nbEquipes].add(autres[i]);\n    violations = _corrigerIncompatiblesDansEquipes(equipesIndices, nbEquipes);\n  } else {\n    participantIndices.shuffle(_random);\n    for (final idx in participantIndices) {\n      var bestTeam = -1, bestSize = -1;\n      for (var t = 0; t < nbEquipes; t++) {\n        if (!_estIncompatibleAvecEquipe(idx, equipesIndices[t])) {\n          final size = equipesIndices[t].length;\n          if (bestTeam == -1 || size < bestSize) { bestTeam = t; bestSize = size; }\n        }\n      }\n      if (bestTeam == -1) { /* équipe la moins remplie */ }\n      equipesIndices[bestTeam].add(idx);\n    }\n  }\n  setState(() { _equipesResultat = ...; });\n}",
    "sortOrder": 2
  }
]
