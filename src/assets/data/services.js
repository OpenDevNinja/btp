
import imgService1 from "../image/img/v.jpg";
import imgService2 from "../image/img/sryry.jpg";
import imgService3 from "../image/img/A.png";
import imgService4 from "../image/img/img.jpg";
import imgService5 from "../image/image_6.jpg";

const services = [
    {
        slug: "conception-architecturale",
        title: "Conception Architecturale",
        description: "Création de plans innovants et fonctionnels adaptés à vos besoins spécifiques.",
        detailedDescription: "Nous offrons des services de conception architecturale de pointe, transformant vos idées en designs réalisables et innovants qui combinent esthétique, fonctionnalité et durabilité.",
        advantages: [
            "Designs personnalisés et créatifs",
            "Approche innovante et technologique",
            "Optimisation de l'espace",
            "Conformité aux normes réglementaires"
        ],
        process: [
            "Consultation avec le maître d'ouvrage pour le recueil des idées afin d'établir le programme architectural, visite du site et vérification du domaine.",
            "Études préliminaires et esquisses",
            "Développement des plans détaillés",
            "Validation et ajustements",
            "Livraison de l'avant-projet détaillé (APD)"
        ],
        bgColor: "bg-indigo-50",
        accentColor: "text-indigo-600",
        imgSrc: imgService2,
    },
    {
        slug: "etude-de-projets",
        title: "Étude de Projets",
        description: "Analyse approfondie et conseil stratégique pour la réussite de vos projets de construction.",
        detailedDescription: "Nous réalisons des études de projets complètes, offrant une analyse stratégique détaillée pour minimiser les risques et maximiser le potentiel de vos projets de construction.",
        advantages: [
            "Analyse de faisabilité approfondie",
            "Gestion des risques anticipée",
            "Optimisation financière",
            "Conseil stratégique personnalisé"
        ],
        process: [
            "Étude géotechnique du sol devant aboutir au projet.",
            "Études de structure.",
            "Évaluation financière du projet.",
        
            "Rapport détaillé et recommandations stratégiques" 
        ],
        bgColor: "bg-teal-50",
        accentColor: "text-teal-600",
        imgSrc: imgService1,
    },
    {
        slug: "construction-btp",
        title: "Travaux de Bâtiment et Travaux Publics",
        description: "Réalisation complète de tous types de constructions, du résidentiel à l'industriel.",
        detailedDescription: "Notre expertise en BTP couvre une large gamme de projets, offrant des solutions de construction complètes, de la conception à la réalisation finale dans tous les secteurs.",
        advantages: [
            "Expertise multisectorielle",
            "Qualité de construction supérieure",
            "Respect des délais et budgets",
            "Solutions techniques innovantes"
        ],
        process: [
            "Analyse des besoins spécifiques",
            "Planification et réalisation du planning des travaux.",
            "Préparation du terrain",
            "Exécution des travaux",
            "Contrôle qualité et réception"
        ],
        bgColor: "bg-yellow-50",
        accentColor: "text-yellow-600",
        imgSrc: imgService3,
    },
    {
        slug: "assistance-conseils",
         title: "Assistance et Conseils",
        description: "Accompagnement personnalisé à chaque étape de votre projet de construction.",
        detailedDescription: "Nous proposons un accompagnement sur-mesure, vous guidant expertement à travers chaque phase de votre projet de construction, de la conception initiale à la livraison finale.",
        advantages: [
            "Conseil personnalisé",
            "Support technique complet",
            "Résolution proactive des problèmes",
            "Communication transparente"
        ],
        process: [
            "Définition des objectifs du projet",
            "Diagnostic et recommandations",
            "Suivi et coordination",
            "Gestion des interventions",
            "Bilan et optimisation continue"
        ],
        bgColor: "bg-green-50",
        accentColor: "text-green-600",
        imgSrc: imgService4,
    },
    {
        slug: "topographie",
        title: "Topographie",
        description: "Relevés précis et études de terrain pour une planification optimale de vos projets.",
        detailedDescription: "Nos services de topographie utilisent les technologies les plus avancées pour fournir des relevés précis, essentiels à la planification et à la réalisation de vos projets de construction.",
        advantages: [
            "Précision des relevés",
            "Technologies de pointe",
            "Analyse détaillée du terrain",
            "Support à la décision"
        ],
        process: [
            "Collecte des données initiales",
            "Relevés terrain avec équipements de précision",
            "Analyse et traitement des données",
            "Cartographie détaillée",
            "Rapport et recommandations"
        ],
        bgColor: "bg-purple-50",
        accentColor: "text-purple-600"
    },
    {
        slug: "renovation-rehabilitation",
        title: "Rénovation et Réhabilitation",
        description: "Transformation et modernisation de bâtiments existants avec expertise et créativité.",
        detailedDescription: "Nous offrons des solutions de rénovation complètes qui préservent l'essence originelle de vos bâtiments tout en les modernisant avec des technologies et des designs contemporains.",
        advantages: [
            "Préservation du patrimoine",
            "Modernisation technique",
            "Amélioration énergétique",
            "Design contemporain"
        ],
        process: [
            "Diagnostic structural",
            "Conception du projet de rénovation",
            "Planification des interventions",
            "Travaux de réhabilitation",
            "Finitions et mise aux normes"
        ],
        bgColor: "bg-blue-50",
        accentColor: "text-blue-600"
    },
    
];
export default services;