const state = {
  type: "consultation",
  subType: "Suivi",
  mode: "complet",
  mseMode: "rapide",
  output: "texte",
  gender: "femme",
  civility: "auto",
  selected: {},
  todoSet: ""
};

const STORAGE_KEY = "psynote_builder_v4_all";

const OPTIONS = {
  type: ["consultation", "urgences", "hospitalisation", "préadmission", "administratif", "mail"],
  subTypes: {
    consultation: [
      "Première consultation",
      "Suivi",
      "Note courte",
      "Courrier médecin traitant",
      "Consultation de crise",
      "Avis diagnostique"
    ],
    urgences: [
      "Évaluation urgences",
      "Décision / orientation"
    ],
    hospitalisation: [
      "Admission",
      "Semaine 1",
      "Semaine 2",
      "Évolution intermédiaire",
      "Sortie",
      "Synthèse d’hospitalisation"
    ],
    préadmission: [
      "Évaluation de préadmission",
      "Conclusion d’indication"
    ],
    administratif: [
      "Rapport mutuelle",
      "Rapport assurance / autre",
      "Attestation simple",
      "Attestation de présence",
      "Attestation de suivi",
      "Certificat médical",
      "Certificat incapacité",
      "Certificat circonstancié simple"
    ],
    mail: [
      "Réponse simple",
      "Réponse patient",
      "Réponse médecin / confrère",
      "Réponse institution / service social",
      "Transmission clinique brève",
      "Relance",
      "Envoi de document",
      "Report / reprogrammation",
      "Confirmation de rendez-vous"
    ]
  },

  mode: ["rapide", "complet"],
  mseMode: ["rapide", "complet"],
  output: ["texte", "questionnaire"],
  gender: ["femme", "homme"],
  civility: ["auto", "madame", "monsieur"],

  reasonChoices: [
    "anxiété",
    "humeur dépressive",
    "crise suicidaire",
    "idéations suicidaires",
    "insomnie",
    "demande de sevrage alcool",
    "consommations problématiques",
    "attaque de panique",
    "souffrance psychosociale",
    "évaluation diagnostique",
    "trouble du comportement",
    "décompensation anxieuse",
    "décompensation thymique",
    "conflit familial",
    "retentissement fonctionnel important"
  ],

  symptomChoices: [
    "ruminations",
    "anhédonie",
    "fatigabilité",
    "hypervigilance",
    "troubles du sommeil",
    "tension interne",
    "irritabilité",
    "aboulie",
    "repli",
    "hallucinations auditives rapportées",
    "angoisse",
    "sentiment d’épuisement",
    "baisse de l’élan",
    "culpabilité",
    "difficultés de concentration"
  ],

  planChoices: [
    "poursuite du suivi psychiatrique",
    "surveillance clinique",
    "évaluation addictologique",
    "travail psychoéducatif",
    "coordination avec le réseau",
    "contact familial si accord",
    "adaptation thérapeutique",
    "préparation de sortie",
    "plan de crise",
    "proposer hospitalisation",
    "mise en sécurité",
    "réévaluation rapide",
    "soutien ambulatoire",
    "orientation psychothérapie"
  ],

  alcoholFunctionQuickChoices: [
    "anxiolytique",
    "sommeil",
    "socialisation",
    "gestion émotion",
    "solitude",
    "ennui",
    "habitude",
    "impulsivité",
    "couper les pensées"
  ],

  alcType: [
    "bière",
    "vin",
    "alcool fort",
    "mixte",
    "apéritifs",
    "spiritueux"
  ],

  alcPattern: [
    "quotidien",
    "binge",
    "épisodique",
    "fluctuant",
    "majoré le soir",
    "majoré le week-end",
    "avec consommation matinale"
  ],

  alcFunction: [
    "anxiolytique",
    "aide au sommeil",
    "socialisation",
    "gestion émotion",
    "solitude",
    "ennui",
    "habitude",
    "impulsivité",
    "couper les pensées",
    "désinhibition",
    "automédication"
  ],

  alcDependence: [
    "craving",
    "perte de contrôle",
    "tolérance",
    "consommation matinale",
    "symptômes de sevrage",
    "retentissement social",
    "retentissement professionnel",
    "tentatives d’arrêt infructueuses",
    "augmentation progressive des quantités"
  ],

  alcWithdrawal: [
    "ambulatoire",
    "hospitalier",
    "DT",
    "convulsions",
    "échec de sevrage antérieur",
    "aucun antécédent de sevrage",
    "sevrage compliqué",
    "sevrage simple"
  ],

  otherSubstanceChoices: [
    "cannabis",
    "cocaïne",
    "benzodiazépines",
    "opiacés",
    "amphétamines",
    "MDMA",
    "tabac",
    "kétamine",
    "médicaments détournés"
  ],

  otherSubstanceFunctionChoices: [
    "anxiolytique",
    "stimulation",
    "désinhibition",
    "sommeil",
    "habitude",
    "gestion émotion",
    "socialisation",
    "automédication"
  ],

  riskQuickChoices: [
    "idées noires",
    "scénario",
    "intentionnalité",
    "moyens disponibles",
    "ATCD passage à l’acte",
    "facteurs de protection",
    "impulsivité",
    "ambivalence"
  ],

  riskIdeas: ["absence", "passives", "actives"],
  riskSeverity: ["faible", "modéré", "élevé"],

  riskProtection: [
    "famille",
    "enfants",
    "suivi médical",
    "demande d’aide",
    "projet futur",
    "foi",
    "animal de compagnie",
    "alliance thérapeutique"
  ],

  mseQuickChoices: [
    "bien orienté",
    "contact adéquat",
    "discours cohérent",
    "pensée organisée",
    "sans psychose manifeste",
    "sans ralentissement psychomoteur",
    "pas d’élément maniaque franc"
  ],

  mseContact: [
    "adéquat",
    "distant",
    "méfiant",
    "fuyant",
    "familier",
    "engageant",
    "pauvre"
  ],

  mseMood: [
    "triste",
    "anxieuse",
    "irritable",
    "labilité émotionnelle",
    "stable",
    "abaissée",
    "dysphorique",
    "fragile"
  ],

  mseAnxiety: [
    "diffuse",
    "ruminations",
    "attaque de panique",
    "tension interne",
    "angoisse majeure",
    "anticipatoire",
    "hypervigilance"
  ],

  mseThought: [
    "organisée",
    "ralentie",
    "ruminative",
    "diffluente",
    "délirante",
    "cohérente",
    "sans désorganisation",
    "centrée sur les difficultés actuelles"
  ],

  mseBehavior: [
    "adapté",
    "agité",
    "ralenti",
    "évitant",
    "hostile",
    "impulsif",
    "contenu",
    "coopérant"
  ],

  mseSleep: [
    "insomnie",
    "réveils nocturnes",
    "hypersomnie",
    "sommeil non réparateur",
    "normal",
    "endormissement difficile",
    "cauchemars"
  ],

  mseFood: [
    "normal",
    "diminution",
    "augmentation",
    "irrégulier",
    "appétit diminué",
    "appétit conservé"
  ],

  psyHousing: [
    "seul",
    "en couple",
    "chez les parents",
    "logement instable",
    "hébergé",
    "institution",
    "sans domicile fixe"
  ],

  psyWork: [
    "travail",
    "chômage",
    "mutuelle",
    "études",
    "incapacité",
    "sans activité",
    "arrêt de travail"
  ],

  psyNetwork: [
    "bon",
    "limité",
    "isolé",
    "soutien familial",
    "réseau conflictuel",
    "réseau ambulatoire présent"
  ],

  psyStress: [
    "financier",
    "familial",
    "professionnel",
    "isolement",
    "rupture",
    "judiciaire",
    "logement",
    "précarité",
    "charge mentale"
  ],

  mailQuickChoices: [
    "réponse courte",
    "transmission clinique",
    "report de rendez-vous",
    "confirmation",
    "envoi de document",
    "relance",
    "réponse à absence",
    "demande d’informations"
  ],

  todoTime: [
    "lundi matin",
    "lundi après-midi",
    "mardi matin",
    "mardi après-midi",
    "mercredi matin",
    "mercredi après-midi",
    "jeudi matin",
    "jeudi après-midi",
    "vendredi matin",
    "vendredi après-midi"
  ],

  todoType: [
    "rapport",
    "mail",
    "appel",
    "consultation",
    "administratif",
    "organisation",
    "lecture",
    "facturation",
    "préparation réunion",
    "suivi patient",
    "clôture dossier",
    "préadmission sevrage"
  ],

  todoPriority: ["haute", "moyenne", "basse"],

  todoSets: [
    "bloc rapports",
    "bloc mails et réponses",
    "bloc appels",
    "bloc consultations",
    "bloc administratif",
    "bloc organisation",
    "bloc lecture / préparation",
    "bloc facturation",
    "bloc clôture dossiers",
    "bloc préadmissions sevrage",
    "journée psychiatre mixte",
    "demi-journée légère",
    "demi-journée lourde"
  ],

  presets: [
    "Anxio-dépressif",
    "Crise suicidaire",
    "Sevrage alcool simple",
    "Sevrage alcool compliqué",
    "Insomnie / anxiété",
    "Trauma probable"
  ]
};

const TODO_SET_TEMPLATES = {
  "bloc rapports": [
    "Choisir les dossiers prioritaires",
    "Relire les notes cliniques",
    "Rédiger le rapport principal",
    "Vérifier traitement et plan",
    "Relire et corriger la version finale",
    "Envoyer / archiver"
  ],
  "bloc mails et réponses": [
    "Trier les messages urgents",
    "Répondre aux patients",
    "Répondre aux confrères",
    "Répondre aux institutions",
    "Vérifier les pièces jointes",
    "Archiver les échanges traités"
  ],
  "bloc appels": [
    "Lister les appels à faire",
    "Appeler les patients prioritaires",
    "Appeler le réseau / les confrères",
    "Noter les retours utiles",
    "Planifier les rappels nécessaires"
  ],
  "bloc consultations": [
    "Préparer la liste des consultations",
    "Relire les antécédents rapides",
    "Faire les consultations",
    "Rédiger les notes de suivi",
    "Adapter les plans thérapeutiques"
  ],
  "bloc administratif": [
    "Trier les documents en attente",
    "Rédiger attestations / certificats",
    "Compléter les formulaires",
    "Vérifier les envois",
    "Classer les documents"
  ],
  "bloc organisation": [
    "Lister les urgences de la demi-journée",
    "Réorganiser l’agenda",
    "Déplacer les rendez-vous nécessaires",
    "Préparer les points à ne pas oublier",
    "Mettre à jour la to do"
  ],
  "bloc lecture / préparation": [
    "Choisir le texte / article prioritaire",
    "Lire activement",
    "Extraire les points utiles",
    "Préparer le matériel de groupe / staff",
    "Noter les idées à réutiliser"
  ],
  "bloc facturation": [
    "Ouvrir la liste des actes",
    "Encoder les facturations",
    "Vérifier les oublis",
    "Contrôler les dossiers incomplets"
  ],
  "bloc clôture dossiers": [
    "Identifier les dossiers ouverts à clôturer",
    "Vérifier le dernier contact",
    "Compléter la note finale",
    "Archiver / fermer le dossier"
  ],
  "bloc préadmissions sevrage": [
    "Relire les demandes de préadmission",
    "Vérifier les consommations",
    "Évaluer l’indication",
    "Rédiger la conclusion",
    "Transmettre la décision"
  ],
  "journée psychiatre mixte": [
    "Répondre aux messages urgents",
    "Faire un rapport prioritaire",
    "Passer les appels essentiels",
    "Faire la consultation / préadmission prévue",
    "Traiter un bloc administratif",
    "Clôturer quelques dossiers"
  ],
  "demi-journée légère": [
    "Trier les tâches",
    "Répondre à 3-5 mails",
    "Faire 1 appel",
    "Clôturer 1 petit dossier",
    "Préparer la suite"
  ],
  "demi-journée lourde": [
    "Choisir 1 tâche majeure",
    "Faire le rapport prioritaire",
    "Traiter les mails urgents",
    "Passer les appels bloquants",
    "Faire le minimum administratif nécessaire"
  ]
};

const MULTI_GROUPS = new Set([
  "reasonChoices",
  "symptomChoices",
  "planChoices",
  "alcoholFunctionQuickChoices",
  "alcType",
  "alcPattern",
  "alcFunction",
  "alcDependence",
  "alcWithdrawal",
  "otherSubstanceChoices",
  "otherSubstanceFunctionChoices",
  "riskQuickChoices",
  "riskProtection",
  "mseQuickChoices",
  "mseContact",
  "mseMood",
  "mseAnxiety",
  "mseThought",
  "mseBehavior",
  "mseSleep",
  "mseFood",
  "psyHousing",
  "psyWork",
  "psyNetwork",
  "psyStress",
  "mailQuickChoices",
  "todoTime",
  "todoType",
  "todoPriority"
]);

for (const key of MULTI_GROUPS) state.selected[key] = [];
state.selected.riskIdeas = "";
state.selected.riskSeverity = "";
state.selected.type = state.type;
state.selected.subType = state.subType;
state.selected.mode = state.mode;
state.selected.mseMode = state.mseMode;
state.selected.output = state.output;
state.selected.gender = state.gender;
state.selected.civility = state.civility;

const $ = (id) => document.getElementById(id);

function titleCase(s) {
  if (!s) return "";
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function cleanText(s) {
  return (s || "").replace(/\s+/g, " ").trim();
}

function sentence(str) {
  const s = cleanText(str);
  if (!s) return "";
  return /[.!?]$/.test(s) ? s : s + ".";
}

function joinClinical(arr) {
  const items = (arr || []).filter(Boolean);
  if (!items.length) return "";
  if (items.length === 1) return items[0];
  if (items.length === 2) return `${items[0]} et ${items[1]}`;
  return `${items.slice(0, -1).join(", ")} et ${items[items.length - 1]}`;
}

function cap(str) {
  const s = cleanText(str);
  return s ? s.charAt(0).toUpperCase() + s.slice(1) : "";
}

function linesToBullets(text) {
  return cleanText(text)
    ? text
        .split("\n")
        .map((x) => x.trim())
        .filter(Boolean)
        .map((x) => `- ${x}`)
        .join("\n")
    : "";
}

function setToday() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  $("docDate").value = `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}

function genderPack() {
  const isMale = state.gender === "homme";
  const civ =
    state.civility === "auto"
      ? isMale ? "Monsieur" : "Madame"
      : state.civility === "monsieur"
      ? "Monsieur"
      : "Madame";

  return {
    isMale,
    civ,
    patient: isMale ? "patient" : "patiente",
    Patient: isMale ? "Patient" : "Patiente",
    vu: isMale ? "vu" : "vue",
    hospitalisé: isMale ? "hospitalisé" : "hospitalisée",
    orienté: isMale ? "orienté" : "orientée",
    collaborant: isMale ? "collaborant" : "collaborante",
    présenté: isMale ? "présenté" : "présentée",
    suivi: isMale ? "suivi" : "suivie",
    calmeCollaborant: isMale ? "calme, collaborant" : "calme et collaborante"
  };
}

function getPatientLabel() {
  const g = genderPack();
  const name = cleanText($("patientName").value);
  return name ? `${g.civ} ${name}` : g.civ;
}

function isMulti(group) {
  return MULTI_GROUPS.has(group);
}

function toggleOption(group, value) {
  if (isMulti(group)) {
    const arr = state.selected[group];
    const i = arr.indexOf(value);
    if (i >= 0) arr.splice(i, 1);
    else arr.push(value);
  } else {
    state.selected[group] = value;
    if (group === "type") {
      state.type = value;
      const firstSub = OPTIONS.subTypes[value][0];
      state.subType = firstSub;
      state.selected.subType = firstSub;
      renderSubTypeMenu();
    }
    if (group === "subType") state.subType = value;
    if (group === "mode") state.mode = value;
    if (group === "mseMode") state.mseMode = value;
    if (group === "output") state.output = value;
    if (group === "gender") state.gender = value;
    if (group === "civility") state.civility = value;
  }

  syncVisibleValues();
  renderActiveStates();
  computeWarnings();
}

function renderMenu(containerId, options, group) {
  const el = $(containerId);
  el.innerHTML = options
    .map((opt) => {
      const active = state.selected[group] === opt ? "active" : "";
      return `<button class="menu-item ${active}" type="button" data-group="${group}" data-value="${opt}">${titleCase(opt)}</button>`;
    })
    .join("");
}

function renderChoiceGroup(containerId, options, group) {
  const el = $(containerId);
  if (!el) return;
  el.innerHTML = options
    .map((opt) => {
      const active = isMulti(group)
        ? state.selected[group].includes(opt)
        : state.selected[group] === opt;
      return `<button class="pill ${active ? "active" : ""}" type="button" data-group="${group}" data-value="${opt}">${opt}</button>`;
    })
    .join("");
}

function renderSubTypeMenu() {
  renderMenu("subTypeMenu", OPTIONS.subTypes[state.type], "subType");
}

function renderMenus() {
  renderMenu("mainTypeMenu", OPTIONS.type, "type");
  renderSubTypeMenu();
  renderMenu("writingModeMenu", OPTIONS.mode, "mode");
  renderMenu("mseModeMenu", OPTIONS.mseMode, "mseMode");
  renderMenu("outputModeMenu", OPTIONS.output, "output");
  renderMenu("genderMenu", OPTIONS.gender, "gender");
  renderMenu("civilityMenu", OPTIONS.civility, "civility");
}

function renderStaticGroups() {
  renderChoiceGroup("reasonChoices", OPTIONS.reasonChoices, "reasonChoices");
  renderChoiceGroup("symptomChoices", OPTIONS.symptomChoices, "symptomChoices");
  renderChoiceGroup("planChoices", OPTIONS.planChoices, "planChoices");
  renderChoiceGroup("alcoholFunctionQuickChoices", OPTIONS.alcoholFunctionQuickChoices, "alcoholFunctionQuickChoices");

  renderChoiceGroup("alcTypeChoices", OPTIONS.alcType, "alcType");
  renderChoiceGroup("alcPatternChoices", OPTIONS.alcPattern, "alcPattern");
  renderChoiceGroup("alcFunctionChoices", OPTIONS.alcFunction, "alcFunction");
  renderChoiceGroup("alcDependenceChoices", OPTIONS.alcDependence, "alcDependence");
  renderChoiceGroup("alcWithdrawalChoices", OPTIONS.alcWithdrawal, "alcWithdrawal");

  renderChoiceGroup("otherSubstanceChoices", OPTIONS.otherSubstanceChoices, "otherSubstanceChoices");
  renderChoiceGroup("otherSubstanceFunctionChoices", OPTIONS.otherSubstanceFunctionChoices, "otherSubstanceFunctionChoices");

  renderChoiceGroup("riskQuickChoices", OPTIONS.riskQuickChoices, "riskQuickChoices");
  renderChoiceGroup("riskIdeasChoices", OPTIONS.riskIdeas, "riskIdeas");
  renderChoiceGroup("riskSeverityChoices", OPTIONS.riskSeverity, "riskSeverity");
  renderChoiceGroup("riskProtectionChoices", OPTIONS.riskProtection, "riskProtection");

  renderChoiceGroup("mseQuickChoices", OPTIONS.mseQuickChoices, "mseQuickChoices");
  renderChoiceGroup("mseContactChoices", OPTIONS.mseContact, "mseContact");
  renderChoiceGroup("mseMoodChoices", OPTIONS.mseMood, "mseMood");
  renderChoiceGroup("mseAnxietyChoices", OPTIONS.mseAnxiety, "mseAnxiety");
  renderChoiceGroup("mseThoughtChoices", OPTIONS.mseThought, "mseThought");
  renderChoiceGroup("mseBehaviorChoices", OPTIONS.mseBehavior, "mseBehavior");
  renderChoiceGroup("mseSleepChoices", OPTIONS.mseSleep, "mseSleep");
  renderChoiceGroup("mseFoodChoices", OPTIONS.mseFood, "mseFood");

  renderChoiceGroup("psyHousingChoices", OPTIONS.psyHousing, "psyHousing");
  renderChoiceGroup("psyWorkChoices", OPTIONS.psyWork, "psyWork");
  renderChoiceGroup("psyNetworkChoices", OPTIONS.psyNetwork, "psyNetwork");
  renderChoiceGroup("psyStressChoices", OPTIONS.psyStress, "psyStress");

  renderChoiceGroup("mailQuickChoices", OPTIONS.mailQuickChoices, "mailQuickChoices");

  renderChoiceGroup("todoTimeChoices", OPTIONS.todoTime, "todoTime");
  renderChoiceGroup("todoTypeChoices", OPTIONS.todoType, "todoType");
  renderChoiceGroup("todoPriorityChoices", OPTIONS.todoPriority, "todoPriority");
}

function syncVisibleValues() {
  $("mainTypeValue").textContent = titleCase(state.type);
  $("subTypeValue").textContent = state.subType;
  $("writingModeValue").textContent = titleCase(state.mode);
  $("mseModeValue").textContent = titleCase(state.mseMode);
  $("outputModeValue").textContent = state.output === "texte" ? "Texte rédigé" : "Questionnaire";
  $("genderValue").textContent = titleCase(state.gender);
  $("civilityValue").textContent = state.civility === "auto" ? "Automatique" : titleCase(state.civility);

  $("metricType").textContent = titleCase(state.type);
  $("metricMode").textContent = titleCase(state.mode);
  $("metricOutput").textContent = state.output === "texte" ? "Texte" : "Questionnaire";
}

function renderActiveStates() {
  renderMenus();
  renderStaticGroups();
}

function fillTodoSetSelect() {
  const select = $("todoSetSelect");
  select.innerHTML = `<option value="">—</option>` + OPTIONS.todoSets.map(x => `<option value="${x}">${x}</option>`).join("");
}

function getReasonText() {
  const free = cleanText($("reason").value);
  const selected = state.selected.reasonChoices;
  if (free && selected.length) return `${free} (${selected.join(", ")})`;
  if (free) return free;
  if (selected.length) return selected.join(", ");
  return "motif non précisé";
}

function getPlanText() {
  const free = cleanText($("planFree").value);
  const selected = state.selected.planChoices;
  if (free && selected.length) return `${free} ${sentence(`Axes proposés : ${joinClinical(selected)}`)}`;
  if (free) return free;
  if (selected.length) return `Axes proposés : ${joinClinical(selected)}.`;
  return "";
}

function buildConsumptionParagraph() {
  const g = genderPack();

  const qty = cleanText($("alcQty").value);
  const last = cleanText($("alcLast").value);
  const start = cleanText($("alcStart").value);
  const character = cleanText($("alcCharacter").value);
  const free = cleanText($("alcFree").value);

  const types = state.selected.alcType;
  const patterns = state.selected.alcPattern;
  const functions = [...new Set([...state.selected.alcFunction, ...state.selected.alcoholFunctionQuickChoices])];
  const dependence = state.selected.alcDependence;
  const withdrawal = state.selected.alcWithdrawal;

  const otherSubs = state.selected.otherSubstanceChoices;
  const otherSubsFunctions = state.selected.otherSubstanceFunctionChoices;
  const otherSubsFree = cleanText($("otherSubstances").value);

  const hasAlcohol =
    qty || last || start || character || free ||
    types.length || patterns.length || functions.length || dependence.length || withdrawal.length;

  const hasOthers =
    otherSubs.length || otherSubsFunctions.length || otherSubsFree;

  if (!hasAlcohol && !hasOthers) {
    return "Aucune consommation problématique n’est actuellement rapportée.";
  }

  const blocks = [];

  if (hasAlcohol) {
    let txt = "Consommation d’alcool";

    const descriptors = [];
    if (types.length) descriptors.push(`de type ${joinClinical(types)}`);
    if (qty) descriptors.push(`estimée à ${qty}`);
    if (patterns.length) descriptors.push(`selon un mode ${joinClinical(patterns)}`);
    if (character) descriptors.push(`à caractère ${character}`);

    if (descriptors.length) txt += " " + descriptors.join(", ");
    txt += ". ";

    const temporal = [];
    if (last) temporal.push(`dernière consommation rapportée ${last}`);
    if (start) temporal.push(`début de consommation ${start}`);
    if (temporal.length) txt += sentence(cap(joinClinical(temporal))) + " ";

    if (functions.length) {
      txt += `${g.Patient} décrit une consommation à visée ${joinClinical(functions)}. `;
    }

    if (dependence.length) {
      txt += `Présence d’éléments évocateurs de dépendance avec ${joinClinical(dependence)}. `;
    }

    if (withdrawal.length) {
      txt += `Antécédents ou projet de sevrage : ${joinClinical(withdrawal)}. `;
    }

    if (free) txt += sentence(free) + " ";

    blocks.push(txt.trim());
  }

  if (hasOthers) {
    let txt = "";
    if (otherSubs.length) txt += `Autres consommations rapportées : ${joinClinical(otherSubs)}. `;
    if (otherSubsFunctions.length) txt += `Fonctions possibles associées : ${joinClinical(otherSubsFunctions)}. `;
    if (otherSubsFree) txt += sentence(otherSubsFree);
    blocks.push(txt.trim());
  }

  return blocks.join(" ");
}

function buildMSEParagraph() {
  const g = genderPack();

  const quick = state.selected.mseQuickChoices;
  const contact = state.selected.mseContact;
  const mood = state.selected.mseMood;
  const anxiety = state.selected.mseAnxiety;
  const thought = state.selected.mseThought;
  const behavior = state.selected.mseBehavior;
  const sleep = state.selected.mseSleep;
  const food = state.selected.mseFood;

  const orientation = cleanText($("mseOrientation").value);
  const presentation = cleanText($("msePresentation").value);
  const collaboration = cleanText($("mseCollaboration").value);
  const psychomotor = cleanText($("msePsychomotor").value);
  const speech = cleanText($("mseSpeech").value);
  const reality = cleanText($("mseReality").value);
  const perception = cleanText($("msePerception").value);
  const negative = cleanText($("mseNegative").value);
  const trauma = cleanText($("mseTrauma").value);
  const insight = cleanText($("mseInsight").value);

  if (state.mseMode === "rapide") {
    const items = [];
    items.push(orientation || `${g.Patient} bien ${g.orienté} dans le temps et l’espace`);
    if (contact.length) items.push(`contact ${joinClinical(contact)}`);
    if (mood.length) items.push(`humeur ${joinClinical(mood)}`);
    if (anxiety.length) items.push(`anxiété ${joinClinical(anxiety)}`);
    if (thought.length) items.push(`pensée ${joinClinical(thought)}`);
    if (quick.length) items.push(joinClinical(quick));
    return sentence(joinClinical(items));
  }

  let txt = `${orientation || `${g.Patient} bien ${g.orienté} dans le temps et l’espace`}, `;
  txt += contact.length ? `présentant un contact ${joinClinical(contact)}, ` : `présentant un contact adéquat, `;
  txt += presentation ? `une présentation ${presentation}, ` : `une présentation soignée, `;
  txt += collaboration ? `avec une collaboration ${collaboration}, ` : `avec une bonne collaboration, `;
  txt += psychomotor ? psychomotor : "sans ralentissement psychomoteur notable";
  txt += ". ";

  const central = [];
  if (speech) central.push(`discours ${speech}`);
  else central.push("discours cohérent et structuré");

  if (thought.length) central.push(`pensée ${joinClinical(thought)}`);
  else central.push("pensée organisée");

  if (reality) central.push(reality);
  else central.push("absence d’altération du rapport à la réalité");

  if (perception) central.push(perception);
  if (mood.length) central.push(`humeur ${joinClinical(mood)}`);
  if (anxiety.length) central.push(`anxiété ${joinClinical(anxiety)}`);
  if (negative) central.push(negative);
  if (trauma) central.push(trauma);

  txt += `On retrouve ${joinClinical(central)}. `;

  const end = [];
  if (insight) end.push(`insight / jugement ${insight}`);
  else end.push("insight globalement préservé");
  if (behavior.length) end.push(`comportement ${joinClinical(behavior)}`);
  if (sleep.length) end.push(`sommeil ${joinClinical(sleep)}`);
  if (food.length) end.push(`alimentation ${joinClinical(food)}`);

  txt += sentence(cap(joinClinical(end)));

  if (state.type !== "consultation") {
    const riskIdeas = state.selected.riskIdeas;
    const riskAttempts = cleanText($("riskAttempts").value);
    if (riskIdeas || riskAttempts) {
      let riskTxt = "";
      if (riskIdeas) {
        if (riskIdeas === "absence") riskTxt += "Absence d’idées noires rapportée. ";
        if (riskIdeas === "passives") riskTxt += "Présence d’idées noires passives. ";
        if (riskIdeas === "actives") riskTxt += "Présence d’idées suicidaires actives. ";
      }
      if (riskAttempts) riskTxt += `Antécédents de passage à l’acte : ${riskAttempts}.`;
      txt += " " + riskTxt.trim();
    }
  }

  return txt.trim();
}

function buildRiskParagraph() {
  if (state.type === "consultation") return "";

  const ideas = state.selected.riskIdeas;
  const severity = state.selected.riskSeverity;
  const protection = state.selected.riskProtection;
  const scenario = cleanText($("riskScenario").value);
  const attempts = cleanText($("riskAttempts").value);
  const quick = state.selected.riskQuickChoices;

  if (!ideas && !severity && !protection.length && !scenario && !attempts && !quick.length) {
    return "Absence d’élément suicidaire préoccupant rapporté à ce stade.";
  }

  let txt = "";
  if (ideas) txt += `Idéation suicidaire ${ideas}. `;
  if (severity) txt += `Niveau de gravité estimé à ${severity}. `;
  if (scenario) txt += `Scénario : ${scenario}. `;
  if (attempts) txt += `Antécédents de passage à l’acte : ${attempts}. `;
  if (protection.length) txt += `Facteurs de protection identifiés : ${joinClinical(protection)}. `;
  if (quick.length) txt += `Éléments de risque explorés : ${joinClinical(quick)}. `;
  return txt.trim();
}

function buildPsychosocialParagraph() {
  const housing = state.selected.psyHousing;
  const work = state.selected.psyWork;
  const network = state.selected.psyNetwork;
  const stress = state.selected.psyStress;
  const family = cleanText($("psFamily").value);
  const freeShort = cleanText($("psFreeShort").value);
  const free = cleanText($("psFree").value);

  const parts = [];
  if (housing.length) parts.push(`logement : ${joinClinical(housing)}`);
  if (work.length) parts.push(`situation socio-professionnelle : ${joinClinical(work)}`);
  if (network.length) parts.push(`réseau : ${joinClinical(network)}`);
  if (stress.length) parts.push(`facteurs de stress : ${joinClinical(stress)}`);
  if (family) parts.push(`famille : ${family}`);
  if (freeShort) parts.push(freeShort);

  let txt = parts.length ? sentence(cap(parts.join(", "))) : "Éléments psychosociaux à préciser.";
  if (free) txt += " " + sentence(free);
  return txt;
}

function buildHospitalEvolutionParagraph() {
  const subtype = state.subType;
  const anxiety = state.selected.mseAnxiety;
  const mood = state.selected.mseMood;
  const sleep = state.selected.mseSleep;
  const dependence = state.selected.alcDependence;
  const withdrawal = state.selected.alcWithdrawal;
  const qty = cleanText($("alcQty").value);
  const contextFree = cleanText($("contextFree").value);

  const residuals = [];
  if (anxiety.length) residuals.push(`anxiété ${joinClinical(anxiety)}`);
  if (sleep.length) residuals.push(`troubles du sommeil à type de ${joinClinical(sleep)}`);
  if (mood.length) residuals.push(`fragilité thymique avec humeur ${joinClinical(mood)}`);

  if (subtype === "Semaine 1") {
    let txt = "Évolution globalement favorable au terme de cette première semaine de prise en charge. ";
    if (qty || withdrawal.length) {
      txt += "Le sevrage alcoolique a été globalement bien toléré dans l’ensemble";
      if (withdrawal.length) txt += `, dans un contexte de ${joinClinical(withdrawal)}`;
      txt += ", sans complication aiguë rapportée. ";
    }
    if (residuals.length) {
      txt += `Persistance de manifestations résiduelles modérées, principalement à type de ${joinClinical(residuals)}. `;
    }
    if (dependence.length) {
      txt += `Le contexte addictologique reste marqué par ${joinClinical(dependence)}. `;
    }
    if (contextFree) txt += sentence(contextFree) + " ";
    return txt.trim();
  }

  if (subtype === "Semaine 2") {
    let txt = "Évolution globalement favorable avec poursuite du travail de consolidation. ";
    if (residuals.length) {
      txt += `Persistances symptomatiques encore présentes, surtout sous la forme de ${joinClinical(residuals)}, mais dans une intensité moindre. `;
    }
    txt += "Le travail porte davantage sur l’autonomie, le maintien des acquis et la préparation de la suite de la prise en charge. ";
    if (contextFree) txt += sentence(contextFree);
    return txt.trim();
  }

  if (subtype === "Admission") {
    return sentence(contextFree || "Hospitalisation motivée par une demande de sevrage, dans un contexte nécessitant une prise en charge encadrée et une évaluation clinique plus approfondie.");
  }

  return sentence(contextFree || "Évolution clinique à préciser.");
}

function buildHospitalDynamicParagraph() {
  if (state.mode === "rapide") {
    return "Bonne inscription dans le cadre de soins, avec participation aux entretiens.";
  }
  return "Le patient s’inscrit dans une démarche de réflexion autour de son fonctionnement et des facteurs ayant contribué à la consommation. Un travail d’élaboration a pu être initié, avec une implication satisfaisante dans les entretiens. Le cadre proposé apparaît contenant et favorise une mise à distance progressive des conduites problématiques.";
}

function buildTreatmentText() {
  const raw = $("treatment").value;
  if (!cleanText(raw)) return "Traitement à préciser.";
  return raw.includes("\n") ? linesToBullets(raw) : raw;
}

function buildAdministrativeText() {
  const patientLabel = getPatientLabel();
  const g = genderPack();
  const reason = getReasonText();
  const context = cleanText($("contextFree").value);
  const plan = cleanText($("planFree").value);
  const subtype = state.subType;

  if (subtype === "Attestation de présence") {
    return `Je soussigné certifie que ${patientLabel} s’est ${g.présenté} en consultation le ${$("docDate").value || "____"}.\n\nAttestation délivrée pour faire valoir ce que de droit.`;
  }

  if (subtype === "Attestation simple") {
    return `Je soussigné certifie que ${patientLabel} est actuellement ${g.suivi} en psychiatrie.\n\nCette attestation est délivrée à la demande de l’intéressé${g.isMale ? "" : "e"} pour faire valoir ce que de droit.`;
  }

  if (subtype === "Attestation de suivi") {
    return `Je soussigné certifie que ${patientLabel} bénéficie d’un suivi psychiatrique régulier.\n\nCette attestation est délivrée à la demande de l’intéressé${g.isMale ? "" : "e"} pour faire valoir ce que de droit.`;
  }

  if (subtype.includes("Certificat")) {
    return `Je soussigné certifie avoir examiné ${patientLabel}.\n\nÉTAT CLINIQUE\n\n${sentence(context || `L’examen clinique met en évidence une symptomatologie en lien avec ${reason}.`)}\n\nRETENTISSEMENT\n\n${sentence(plan || "Le retentissement fonctionnel est à considérer au regard du contexte clinique.")}\n\nCertificat établi à la demande de l’intéressé${g.isMale ? "" : "e"}.`;
  }

  return `CONTEXTE\n\n${sentence(context || `${patientLabel} est vu dans le cadre de ${reason}.`)}\n\nÉTAT CLINIQUE\n\n${buildMSEParagraph()}\n\nRETENTISSEMENT / PLAN\n\n${sentence(plan || "Évolution à réévaluer.")}`;
}

function buildMailText() {
  const to = cleanText($("recipient").value) || cleanText($("mailTo").value) || "Madame, Monsieur";
  const subject = cleanText($("subject").value) || "Sans objet";
  const context = cleanText($("mailContext").value);
  const body = cleanText($("mailBody").value) || cleanText($("planFree").value) || "Je reviens vers vous concernant votre demande.";
  const ask = cleanText($("mailAsk").value);
  const types = state.selected.mailQuickChoices;

  let txt = `Objet : ${subject}\n\nBonjour,\n\n${to},\n\n`;
  if (types.length) txt += `Type de réponse : ${joinClinical(types)}. `;
  if (context) txt += `${sentence(context)} `;
  txt += sentence(body);
  if (ask) txt += ` ${sentence(ask)}`;
  txt += `\n\nBien à vous.`;
  return txt;
}

function generateQuestionnaire() {
  const type = state.type;
  const subtype = state.subType;

  if (type === "hospitalisation" && subtype === "Semaine 1") {
    return `ÉVOLUTION GÉNÉRALE
................................................................
Tolérance du sevrage :
................................................................
Symptômes résiduels :
................................................................
Complications éventuelles :
................................................................

EXAMEN MENTAL
Orientation :
................................................................
Contact / présentation / collaboration :
................................................................
Psychomotricité :
................................................................
Discours / pensée / rapport à la réalité :
................................................................
Humeur / affect / anxiété :
................................................................
Comportement :
................................................................
Sommeil :
................................................................
Alimentation :
................................................................

DYNAMIQUE THÉRAPEUTIQUE
................................................................
................................................................
................................................................

TRAITEMENT
................................................................
................................................................
................................................................

PROJECTION / SUITE
................................................................
................................................................
................................................................`;
  }

  if (type === "hospitalisation" && subtype === "Semaine 2") {
    return `ÉVOLUTION
................................................................
................................................................
................................................................

EXAMEN MENTAL
Orientation :
................................................................
Contact :
................................................................
Humeur / anxiété :
................................................................
Pensée :
................................................................
Comportement / sommeil / alimentation :
................................................................

AUTONOMIE / CONSOLIDATION
................................................................
................................................................
................................................................

PRÉPARATION DE LA SUITE
................................................................
................................................................
................................................................`;
  }

  if (type === "consultation") {
    return `MOTIF ET CONTEXTE
................................................................
................................................................
................................................................

CLINIQUE
................................................................
................................................................
................................................................

EXAMEN MENTAL
Orientation :
................................................................
Contact :
................................................................
Humeur :
................................................................
Anxiété :
................................................................
Pensée :
................................................................
Sommeil / alimentation :
................................................................

CONSOMMATIONS
Type :
................................................................
Quantité / pattern :
................................................................
Fonction :
................................................................
Éléments de dépendance :
................................................................

PSYCHOSOCIAL
................................................................
................................................................
................................................................

PLAN
................................................................
................................................................
................................................................`;
  }

  if (type === "urgences") {
    return `MOTIF
................................................................
................................................................
................................................................

CONTEXTE / CIRCONSTANCES
................................................................
................................................................
................................................................

CLINIQUE
................................................................
................................................................
................................................................

EXAMEN MENTAL
Orientation :
................................................................
Contact / comportement :
................................................................
Humeur / anxiété :
................................................................
Pensée / réalité :
................................................................

RISQUE SUICIDAIRE
Idées :
................................................................
Gravité :
................................................................
Facteurs de protection :
................................................................

DÉCISION / ORIENTATION
................................................................
................................................................
................................................................`;
  }

  if (type === "préadmission") {
    return `DEMANDE DE SEVRAGE
................................................................
................................................................
................................................................

CONSOMMATIONS
Type :
................................................................
Quantité :
................................................................
Dernière prise :
................................................................
Début :
................................................................
Fonctions :
................................................................
ATCD de sevrage :
................................................................

EXAMEN MENTAL
................................................................
................................................................
................................................................

PSYCHOSOCIAL
................................................................
................................................................
................................................................

INDICATION
................................................................
................................................................
................................................................`;
  }

  if (type === "mail") {
    return `DESTINATAIRE
................................................................
OBJET
................................................................
CONTEXTE
................................................................
MESSAGE PRINCIPAL
................................................................
ACTION DEMANDÉE
................................................................`;
  }

  return `OBJET DU DOCUMENT
................................................................
CONTEXTE
................................................................
CLINIQUE / RETENTISSEMENT
................................................................
PLAN / FINALITÉ
................................................................`;
}

function generateTodoText() {
  const times = state.selected.todoTime || [];
  const types = state.selected.todoType || [];
  const priorities = state.selected.todoPriority || [];
  const estimate = cleanText($("todoEstimate").value);
  const notes = $("todoNotes").value.trim();
  const setName = state.todoSet;

  const sections = [];

  if (setName) {
    sections.push(`SET SÉLECTIONNÉ : ${setName.toUpperCase()}`);
    const template = TODO_SET_TEMPLATES[setName] || [];
    if (template.length) {
      sections.push(template.map((item) => `- ${item}`).join("\n"));
    }
  }

  if (times.length) {
    let block = "DEMI-JOURNÉES\n";
    for (const time of times) {
      block += `\n${time.toUpperCase()}\n`;
      if (types.length) {
        for (const item of types) {
          block += `- ${item}`;
          if (priorities.length) block += ` — priorité ${joinClinical(priorities)}`;
          if (estimate) block += ` — ${estimate}`;
          block += `\n`;
        }
      } else {
        block += `- tâches à préciser\n`;
      }
    }
    sections.push(block.trim());
  } else if (types.length) {
    let block = "TÂCHES\n";
    for (const item of types) {
      block += `- ${item}`;
      if (priorities.length) block += ` — priorité ${joinClinical(priorities)}`;
      if (estimate) block += ` — ${estimate}`;
      block += `\n`;
    }
    sections.push(block.trim());
  }

  if (notes) {
    sections.push(`NOTES LIBRES\n${notes}`);
  }

  if (!sections.length) {
    return "TO DO LIST\n\nAucune tâche renseignée.";
  }

  return `TO DO LIST\n\n${sections.join("\n\n")}`.trim();
}

function applyTodoSet(setName) {
  state.todoSet = setName;
  const template = TODO_SET_TEMPLATES[setName] || [];
  $("todoNotes").value = template.join("\n");
}

function applyPreset(name) {
  function setSingle(group, value) {
    state.selected[group] = value;
    if (group === "type") state.type = value;
    if (group === "subType") state.subType = value;
    if (group === "mode") state.mode = value;
    if (group === "mseMode") state.mseMode = value;
    if (group === "output") state.output = value;
    if (group === "gender") state.gender = value;
    if (group === "civility") state.civility = value;
  }

  function setMulti(group, values) {
    state.selected[group] = [...values];
  }

  if (name === "Anxio-dépressif") {
    setMulti("reasonChoices", ["anxiété", "humeur dépressive"]);
    setMulti("symptomChoices", ["ruminations", "anhédonie", "fatigabilité", "troubles du sommeil"]);
    setMulti("mseMood", ["triste", "anxieuse"]);
    setMulti("mseAnxiety", ["diffuse", "ruminations"]);
    setMulti("mseThought", ["organisée"]);
    setMulti("mseSleep", ["insomnie"]);
  }

  if (name === "Crise suicidaire") {
    setMulti("reasonChoices", ["crise suicidaire", "idéations suicidaires"]);
    setSingle("riskIdeas", "actives");
    setSingle("riskSeverity", "élevé");
  }

  if (name === "Sevrage alcool simple") {
    setSingle("type", "hospitalisation");
    setSingle("subType", "Admission");
    setMulti("reasonChoices", ["demande de sevrage alcool"]);
    setMulti("alcType", ["mixte"]);
    setMulti("alcPattern", ["quotidien"]);
    setMulti("alcWithdrawal", ["hospitalier", "sevrage simple"]);
    $("alcQty").value = "8 unités/jour";
  }

  if (name === "Sevrage alcool compliqué") {
    setSingle("type", "préadmission");
    setSingle("subType", "Évaluation de préadmission");
    setMulti("reasonChoices", ["demande de sevrage alcool"]);
    setMulti("alcType", ["mixte"]);
    setMulti("alcPattern", ["quotidien", "avec consommation matinale"]);
    setMulti("alcWithdrawal", ["DT", "convulsions", "hospitalier", "sevrage compliqué"]);
    setMulti("alcDependence", ["craving", "perte de contrôle", "tolérance", "symptômes de sevrage"]);
    $("alcQty").value = "15 unités/jour";
  }

  if (name === "Insomnie / anxiété") {
    setMulti("reasonChoices", ["anxiété", "insomnie"]);
    setMulti("mseAnxiety", ["diffuse"]);
    setMulti("mseSleep", ["insomnie", "endormissement difficile"]);
  }

  if (name === "Trauma probable") {
    setMulti("reasonChoices", ["évaluation diagnostique"]);
    setMulti("symptomChoices", ["hypervigilance"]);
    $("mseTrauma").value = "reviviscences, hypervigilance, évitement";
  }

  renderSubTypeMenu();
  syncVisibleValues();
  renderActiveStates();
  computeWarnings();
}

function generateText() {
  if (state.type === "mail") return buildMailText();
  if (state.type === "administratif") return buildAdministrativeText();
  if (state.output === "questionnaire") return generateQuestionnaire();

  const patientLabel = getPatientLabel();
  const g = genderPack();
  const reason = getReasonText();
  const context = cleanText($("contextFree").value);
  const treatment = buildTreatmentText();
  const plan = getPlanText();
  const consumption = buildConsumptionParagraph();
  const mse = buildMSEParagraph();
  const risk = buildRiskParagraph();
  const psychosocial = buildPsychosocialParagraph();

  if (state.type === "hospitalisation") {
    if (state.subType === "Semaine 1") {
      return `ÉVOLUTION GÉNÉRALE

${buildHospitalEvolutionParagraph()}

EXAMEN MENTAL

${mse}

DYNAMIQUE THÉRAPEUTIQUE

${buildHospitalDynamicParagraph()}

TRAITEMENT

${treatment}

PROJECTION / SUITE

${sentence(plan || "La suite de la prise en charge est envisagée comme une étape de consolidation, avec maintien des objectifs d’abstinence, poursuite du travail engagé et préparation à la continuité du suivi ambulatoire.")}`;
    }

    if (state.subType === "Semaine 2") {
      return `ÉVOLUTION

${buildHospitalEvolutionParagraph()}

EXAMEN MENTAL

${mse}

AUTONOMIE / CONSOLIDATION

${sentence(plan || "Travail autour de l’autonomie, de la consolidation et des repères au quotidien.")}

PRÉPARATION DE LA SUITE

${sentence("Préparation de la sortie et du suivi ambulatoire.")}`;
    }

    return `MOTIF ET CONTEXTE

${patientLabel} est ${g.hospitalisé} dans le cadre d’un sevrage pour ${reason}.

CONSOMMATIONS

${consumption}

EXAMEN MENTAL

${mse}

PSYCHOSOCIAL

${psychosocial}

PLAN

${sentence(plan || "Poursuite de la prise en charge et réévaluation clinique.")}`;
  }

  if (state.type === "consultation") {
    return `MOTIF ET CONTEXTE

Je vois en consultation ${patientLabel} pour ${reason}.

CLINIQUE

${sentence(context || "Éléments cliniques à préciser.")}

EXAMEN MENTAL

${mse}

CONSOMMATIONS

${consumption}

PSYCHOSOCIAL

${psychosocial}

PLAN

${sentence(plan || "Poursuite du suivi et réévaluation clinique.")}`;
  }

  if (state.type === "urgences") {
    return `MOTIF ET CONTEXTE

${patientLabel} est ${g.vu} aux urgences pour ${reason}.

CLINIQUE

${sentence(context || "Éléments cliniques à préciser.")}

EXAMEN MENTAL

${mse}

RISQUE

${risk}

DÉCISION / ORIENTATION

${sentence(plan || "Décision à préciser selon l’évaluation clinique.")}`;
  }

  if (state.type === "préadmission") {
    return `DEMANDE ET CONTEXTE

${patientLabel} est ${g.vu} en préadmission dans le cadre d’une demande de sevrage pour ${reason}.

CONSOMMATIONS

${consumption}

EXAMEN MENTAL

${mse}

PSYCHOSOCIAL

${psychosocial}

INDICATION

${sentence(plan || "Indication à discuter au regard des éléments cliniques et addictologiques.")}`;
  }

  return "Type de document non reconnu.";
}

function computeWarnings() {
  const warnings = [];

  if ((state.type === "hospitalisation" || state.type === "préadmission") && !state.selected.alcType.length && !cleanText($("alcQty").value)) {
    warnings.push("Contexte sevrage sans éléments de consommation alcool renseignés.");
  }

  if (state.type !== "consultation" && state.selected.riskIdeas === "actives" && !cleanText($("riskScenario").value)) {
    warnings.push("Idées suicidaires actives sans précision du scénario.");
  }

  if (state.type === "administratif" && state.subType.toLowerCase().includes("incapacité") && !cleanText($("planFree").value)) {
    warnings.push("Certificat d’incapacité sans retentissement fonctionnel explicité.");
  }

  $("warnings").innerHTML = warnings.length
    ? warnings.map((w) => `<div class="danger">• ${w}</div>`).join("")
    : "Aucune alerte pour le moment.";
}

function saveState() {
  const payload = {
    state,
    fields: {}
  };
  document.querySelectorAll("input, textarea, select").forEach((el) => {
    payload.fields[el.id] = el.value;
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return;

  const payload = JSON.parse(raw);
  Object.assign(state, payload.state);

  for (const [id, value] of Object.entries(payload.fields || {})) {
    if ($(id)) $(id).value = value;
  }

  renderSubTypeMenu();
  syncVisibleValues();
  renderActiveStates();
  computeWarnings();
}

function clearAll() {
  state.type = "consultation";
  state.subType = "Suivi";
  state.mode = "complet";
  state.mseMode = "rapide";
  state.output = "texte";
  state.gender = "femme";
  state.civility = "auto";
  state.todoSet = "";

  state.selected = {};
  for (const key of MULTI_GROUPS) state.selected[key] = [];
  state.selected.riskIdeas = "";
  state.selected.riskSeverity = "";
  state.selected.type = state.type;
  state.selected.subType = state.subType;
  state.selected.mode = state.mode;
  state.selected.mseMode = state.mseMode;
  state.selected.output = state.output;
  state.selected.gender = state.gender;
  state.selected.civility = state.civility;

  document.querySelectorAll("input, textarea").forEach((el) => (el.value = ""));
  $("todoSetSelect").value = "";
  setToday();
  $("output").value = "";

  renderSubTypeMenu();
  syncVisibleValues();
  renderActiveStates();
  computeWarnings();
}

function fillDemo() {
  clearAll();
  state.type = "hospitalisation";
  state.subType = "Semaine 1";
  state.gender = "homme";
  state.selected.type = "hospitalisation";
  state.selected.subType = "Semaine 1";
  state.selected.gender = "homme";
  state.selected.alcType = ["mixte"];
  state.selected.alcPattern = ["quotidien"];
  state.selected.alcWithdrawal = ["hospitalier", "sevrage simple"];
  state.selected.alcDependence = ["craving", "perte de contrôle", "tolérance"];
  state.selected.mseMood = ["abaissée"];
  state.selected.mseAnxiety = ["diffuse", "ruminations"];
  state.selected.mseSleep = ["insomnie"];
  state.selected.psyHousing = ["seul"];
  state.selected.psyWork = ["incapacité"];
  $("patientName").value = "X";
  $("patientAge").value = "42";
  $("alcQty").value = "8 unités/jour";
  $("contextFree").value = "Le sevrage alcoolique a été globalement bien toléré dans l’ensemble, sans complication aiguë rapportée.";
  $("treatment").value = "Sertraline 50 mg\nTrazodone 100 mg au coucher\nDiazépam selon schéma dégressif";
  $("planFree").value = "Poursuite du travail engagé, consolidation et préparation à la continuité du suivi ambulatoire";
  renderSubTypeMenu();
  syncVisibleValues();
  renderActiveStates();
  computeWarnings();
  $("output").value = generateText();
}

function toggleMenu(menuId) {
  document.querySelectorAll(".menu-dropdown").forEach((menu) => {
    if (menu.id !== menuId) menu.classList.add("hidden");
  });
  $(menuId).classList.toggle("hidden");
}

function closeMenus() {
  document.querySelectorAll(".menu-dropdown").forEach((menu) => menu.classList.add("hidden"));
}

function wirePresetButtons() {
  OPTIONS.presets.forEach((preset) => {
    const btn = document.createElement("button");
    btn.className = "secondary-btn";
    btn.type = "button";
    btn.textContent = preset;
    btn.addEventListener("click", () => applyPreset(preset));
    $("presetWrap").appendChild(btn);
  });
}

function wireTodoSetSelect() {
  const select = $("todoSetSelect");
  select.addEventListener("change", () => {
    state.todoSet = select.value;
    if (select.value) applyTodoSet(select.value);
  });
}

function wireEvents() {
  document.addEventListener("click", (e) => {
    const menuTrigger = e.target.closest("[data-menu-target]");
    if (menuTrigger) {
      e.stopPropagation();
      toggleMenu(menuTrigger.dataset.menuTarget);
      return;
    }

    const menuItem = e.target.closest(".menu-item");
    if (menuItem) {
      toggleOption(menuItem.dataset.group, menuItem.dataset.value);
      closeMenus();
      return;
    }

    const pill = e.target.closest(".pill");
    if (pill) {
      toggleOption(pill.dataset.group, pill.dataset.value);
      return;
    }

    const modalOpen = e.target.closest("[data-modal-open]");
    if (modalOpen) {
      $(modalOpen.dataset.modalOpen).classList.add("show");
      return;
    }

    if (e.target.matches("[data-close]")) {
      e.target.closest(".modal").classList.remove("show");
      return;
    }

    if (e.target.classList.contains("modal")) {
      e.target.classList.remove("show");
      return;
    }

    closeMenus();
  });

  $("sidebarOpenBtn").addEventListener("click", () => $("sidebar").classList.add("open"));
  $("sidebarCloseBtn").addEventListener("click", () => $("sidebar").classList.remove("open"));

  $("btnGenerate").addEventListener("click", () => {
    state.output = "texte";
    state.selected.output = "texte";
    syncVisibleValues();
    $("output").value = generateText();
  });

  $("btnQuestionnaire").addEventListener("click", () => {
    state.output = "questionnaire";
    state.selected.output = "questionnaire";
    syncVisibleValues();
    renderActiveStates();
    $("output").value = generateQuestionnaire();
  });

  $("btnTodoOutput").addEventListener("click", () => {
    $("output").value = generateTodoText();
  });

  $("btnCopy").addEventListener("click", async () => {
    await navigator.clipboard.writeText($("output").value || "");
  });

  $("btnPrintOnly").addEventListener("click", () => window.print());
  $("btnSave").addEventListener("click", saveState);
  $("btnLoad").addEventListener("click", loadState);
  $("btnClear").addEventListener("click", clearAll);
  $("btnDemo").addEventListener("click", fillDemo);
}

function init() {
  setToday();
  renderMenus();
  renderStaticGroups();
  fillTodoSetSelect();
  syncVisibleValues();
  wirePresetButtons();
  wireTodoSetSelect();
  wireEvents();
  computeWarnings();
}

init(); 
