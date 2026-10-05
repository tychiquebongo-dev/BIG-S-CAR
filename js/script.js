/**
 * BIG S CAR — JavaScript Interactif & Moteur de Vitrine Automobile
 * Concessionnaire de Véhicules de Prestige & de Luxe en Côte d'Ivoire
 * WhatsApp : +225 07 05 88 46 87 | Email : bigsccar@gmail.com
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Données du Catalogue Automobile (12 Véhicules de Luxe) ---
  const VEHICLES_DATA = [
    {
      id: 'merc-s-class',
      brand: 'Mercedes-Benz',
      model: 'Classe S 580 Limousine 4MATIC',
      year: 2025,
      price: 95000000,
      priceFormatted: '95 000 000 FCFA',
      category: 'Berline Prestige',
      engine: 'V8 4.0L Biturbo + EQ Boost',
      power: '503 ch',
      transmission: 'Automatique 9G-TRONIC',
      fuel: 'Essence MHEV',
      topSpeed: '250 km/h (bridée)',
      acceleration: '0-100 km/h en 4.4s',
      mileage: '0 km (Neuf)',
      badge: 'Disponible',
      badgeClass: 'badge-green',
      isPremium: true,
      image: 'assets/images/mercedes-s-class.jpg',
      usage: 'Idéale pour les déplacements professionnels de haut niveau, les dirigeants d’entreprise et les trajets VIP en souveraineté absolue.',
      description: 'La référence mondiale absolue de la berline de haute direction. Équipée de l’affichage tête haute avec réalité augmentée, sièges arrière exécutifs massants et climatisés, suspension active E-ACTIVE BODY CONTROL et insonorisation acoustique digne d’un auditorium.',
      features: [
        'Sellerie Cuir Nappa Exclusif',
        'Système Audio Burmester High-End 3D',
        'Pack Chauffeur Arrière Executive',
        'Éclairage Digital Light Haute Définition',
        'Suspension Pneumatique AIRMATIC'
      ]
    },
    {
      id: 'merc-amg-gt',
      brand: 'Mercedes-Benz',
      model: 'AMG GT 63 S 4MATIC+ Coupé',
      year: 2025,
      price: 125000000,
      priceFormatted: '125 000 000 FCFA',
      category: 'Coupé & Sportive',
      engine: 'V8 4.0L Biturbo AMG',
      power: '639 ch',
      transmission: 'AMG SPEEDSHIFT MCT 9G',
      fuel: 'Essence',
      topSpeed: '315 km/h',
      acceleration: '0-100 km/h en 3.2s',
      mileage: '0 km (Neuf)',
      badge: 'Performance',
      badgeClass: 'badge-gold',
      isPremium: true,
      image: 'assets/images/mercedes-amg-gt.jpg',
      usage: 'Idéale pour les passionnés de sensations fortes, les collectionneurs avertis et la conduite sportive de très haut standing.',
      description: 'Née sur le circuit, sculptée pour la route. Cette supercar polyvalente combine la rage mécanique de son V8 assemblé à la main avec une transmission intégrale intelligente et un pack aérodynamique en fibre de carbone véritable.',
      features: [
        'Pack Aérodynamique Carbone AMG',
        'Freins Carbone Céramique Haute Performance',
        'Système d’échappement Sport Actif AMG',
        'Mode RACE avec Drift Mode Intégré',
        'Volant AMG Performance Microfibre'
      ]
    },
    {
      id: 'bmw-7-series',
      brand: 'BMW',
      model: 'Série 7 760i xDrive Excellence',
      year: 2025,
      price: 88000000,
      priceFormatted: '88 000 000 FCFA',
      category: 'Berline Prestige',
      engine: 'V8 4.4L BMW TwinPower Turbo',
      power: '544 ch',
      transmission: 'Automatique Steptronic 8 rapports',
      fuel: 'Essence MHEV',
      topSpeed: '250 km/h',
      acceleration: '0-100 km/h en 4.2s',
      mileage: '0 km (Neuf)',
      badge: 'Disponible',
      badgeClass: 'badge-green',
      isPremium: true,
      image: 'assets/images/bmw-7-series.jpg',
      usage: 'Idéale pour les chefs d’entreprise, délégations officielles et longs voyages dans un confort digne d’un jet privé.',
      description: 'L’incarnation du luxe moderne avant-gardiste de Munich. Son habitacle arrière se transforme en salon de cinéma privé grâce au gigantesque BMW Theatre Screen de 31,3 pouces en résolution 8K.',
      features: [
        'BMW Theatre Screen 31.3" 8K Arrière',
        'Calandre illuminée Iconic Glow',
        'Système Sonore Bowers & Wilkins Diamond',
        'Portes automatiques à fermeture soft-close',
        'Toit panoramique Sky Lounge à LED'
      ]
    },
    {
      id: 'bmw-xm',
      brand: 'BMW',
      model: 'XM Label Red Édition Ultime',
      year: 2025,
      price: 138000000,
      priceFormatted: '138 000 000 FCFA',
      category: 'SUV Haut de Gamme',
      engine: 'V8 4.4L M Hybride Rechargeable',
      power: '748 ch',
      transmission: 'M Steptronic 8 avec Drivelogic',
      fuel: 'Hybride Rechargeable',
      topSpeed: '290 km/h (M Driver)',
      acceleration: '0-100 km/h en 3.8s',
      mileage: '0 km (Neuf)',
      badge: 'Édition Limitée',
      badgeClass: 'badge-gold',
      isPremium: true,
      image: 'assets/images/bmw-xm.jpg',
      usage: 'Le véhicule le plus puissant jamais produit par BMW M. Réservé à ceux qui recherchent une présence statutaire inégalable.',
      description: 'Un monstre de puissance électrifiée qui redéfinit l’autorité sur la route. Finition Toronto Red satinée, salon arrière M Lounge sculptural et performances de supercar dans un format imposant.',
      features: [
        'Motorisation M Hybrid 748 ch / 1000 Nm',
        'Habillage Cuir Vintage Fiona Red & Black',
        'Plafonnier 3D rétroéclairé prismatique',
        'Différentiel Sport M Actif',
        'Jantes 23 pouces forgées bicolores'
      ]
    },
    {
      id: 'audi-rsq8',
      brand: 'Audi',
      model: 'RS Q8 Carbon Black TFSI quattro',
      year: 2025,
      price: 98000000,
      priceFormatted: '98 000 000 FCFA',
      category: 'SUV Haut de Gamme',
      engine: 'V8 4.0L TFSI Bi-turbo',
      power: '600 ch',
      transmission: 'Tiptronic 8 rapports quattro',
      fuel: 'Essence',
      topSpeed: '305 km/h',
      acceleration: '0-100 km/h en 3.7s',
      mileage: '0 km (Neuf)',
      badge: 'Disponible',
      badgeClass: 'badge-green',
      isPremium: true,
      image: 'assets/images/audi-rsq8.jpg',
      usage: 'Idéale pour combiner prestige familial haut de gamme au quotidien et dynamisme de course le week-end.',
      description: 'Le SUV ultra-sportif d’Ingolstadt. Allure athlétique musclée, système quattro avec différentiel sport, roues arrière directrices et un habitacle numérique Audi Virtual Cockpit Plus ultra-intuitif.',
      features: [
        'Pack Carbone Extérieur & Intérieur',
        'Suspension pneumatique sport adaptative RS',
        'Roues arrière directrices dynamiques',
        'Phares HD Matrix LED Laser Audi',
        'Sièges sport RS ventilés Cuir Valcona'
      ]
    },
    {
      id: 'audi-a8',
      brand: 'Audi',
      model: 'A8 L 60 TFSI Horch Prestige Limousine',
      year: 2025,
      price: 82000000,
      priceFormatted: '82 000 000 FCFA',
      category: 'Berline Prestige',
      engine: 'V8 4.0L TFSI Biturbo 48V',
      power: '460 ch',
      transmission: 'Tiptronic 8 rapports quattro',
      fuel: 'Essence MHEV',
      topSpeed: '250 km/h',
      acceleration: '0-100 km/h en 4.5s',
      mileage: '0 km (Neuf)',
      badge: 'Disponible',
      badgeClass: 'badge-green',
      isPremium: false,
      image: 'assets/images/audi-a8.jpg',
      usage: 'Recommandée pour les protocoles officiels, ambassades et personnalités en quête d’élégance discrète et technologique.',
      description: 'La limousine exécutive par excellence. Son empattement allongé libère un espace aux jambes digne d’une suite d’hôtel, avec siège relaxation passager arrière avec massage des pieds chauffant intégré.',
      features: [
        'Siège relaxation arrière avec repose-pieds massant',
        'Châssis actif prédictif Audi AI',
        'Double vitrage acoustique renforcé',
        'Système Bang & Olufsen Advanced 3D Sound',
        'Climatisation automatique 4 zones Deluxe'
      ]
    },
    {
      id: 'porsche-cayenne',
      brand: 'Porsche',
      model: 'Cayenne Turbo GT Coupé',
      year: 2025,
      price: 118000000,
      priceFormatted: '118 000 000 FCFA',
      category: 'SUV Haut de Gamme',
      engine: 'V8 4.0L Biturbo Porsche Motorsport',
      power: '659 ch',
      transmission: 'Tiptronic S 8 rapports',
      fuel: 'Essence',
      topSpeed: '305 km/h',
      acceleration: '0-100 km/h en 3.3s',
      mileage: '0 km (Neuf)',
      badge: 'Performance',
      badgeClass: 'badge-gold',
      isPremium: true,
      image: 'assets/images/porsche-cayenne.jpg',
      usage: 'Idéale pour les puristes de la conduite Porsche désirant un SUV ultra-affûté sans aucun compromis.',
      description: 'Détenteur des records sur circuit, le Turbo GT est le sommet de la gamme Cayenne. Toit en carbone allégé, échappement en titane à double sortie centrale et châssis réglé sur mesure par Porsche Motorsport.',
      features: [
        'Ligne d’échappement sport en titane centrale',
        'Toit et diffuseur arrière en carbone massif',
        'Freins Porsche Ceramic Composite Brake (PCCB)',
        'Système antiroulis actif Porsche Dynamic Chassis (PDCC)',
        'Habillage intérieur Alcantara & Cuir GT'
      ]
    },
    {
      id: 'porsche-911',
      brand: 'Porsche',
      model: '911 Carrera 4 GTS (Génération 992.2)',
      year: 2025,
      price: 112000000,
      priceFormatted: '112 000 000 FCFA',
      category: 'Coupé & Sportive',
      engine: 'Flat-6 3.6L T-Hybrid Innovant',
      power: '541 ch',
      transmission: 'PDK 8 rapports double embrayage',
      fuel: 'Hybride Performance',
      topSpeed: '312 km/h',
      acceleration: '0-100 km/h en 3.0s',
      mileage: '0 km (Neuf)',
      badge: 'Exclusif',
      badgeClass: 'badge-gold',
      isPremium: true,
      image: 'assets/images/porsche-911.jpg',
      usage: 'L’icône mondiale du plaisir de conduire. Parfaite pour s’offrir une pièce d’orfèvrerie mécanique intemporelle.',
      description: 'La légende Porsche réinventée avec le système T-Hybrid électrifié sans temps de latence. Réponse instantanée à l’accélérateur, équilibre parfait et silhouette reconnaissable au premier regard.',
      features: [
        'Pack Sport Chrono avec Sélecteur de Mode',
        'Turbocompresseur électrique révolutionnaire',
        'Suspension PASM rabaissée de 10 mm',
        'Jantes 20/21 pouces GTS à écrou central',
        'Éclairage matriciel à LED HD 32 000 pixels'
      ]
    },
    {
      id: 'rr-autobio',
      brand: 'Range Rover',
      model: 'Autobiography P530 LWB V8',
      year: 2025,
      price: 122000000,
      priceFormatted: '122 000 000 FCFA',
      category: 'SUV Haut de Gamme',
      engine: 'V8 4.4L Twin Turbo V8',
      power: '530 ch',
      transmission: 'Automatique ZF 8 rapports intégrale',
      fuel: 'Essence',
      topSpeed: '250 km/h',
      acceleration: '0-100 km/h en 4.6s',
      mileage: '0 km (Neuf)',
      badge: 'Prestige',
      badgeClass: 'badge-gold',
      isPremium: true,
      image: 'assets/images/range-rover-autobiography.jpg',
      usage: 'Le souverain des routes africaines. Idéal pour les personnalités de premier plan, réceptions diplomatiques et déplacements d’exception.',
      description: 'L’apogée du raffinement britannique. L’Autobiography à empattement long offre un silence de roulement exceptionnel grâce à la réduction active du bruit dans les appuie-têtes et une suspension pneumatique prédictive.',
      features: [
        'Cuir Semi-Aniline SV Bespoke perforé',
        'Système audio Meridian Signature 1600W (35 HP)',
        'Sièges arrière Executive Class Comfort-Plus',
        '4 roues directrices avec braquage 7.3°',
        'Suspension pneumatique électronique active eHorizon'
      ]
    },
    {
      id: 'rr-sport',
      brand: 'Range Rover',
      model: 'Range Rover Sport SV Edition One',
      year: 2025,
      price: 108000000,
      priceFormatted: '108 000 000 FCFA',
      category: 'SUV Haut de Gamme',
      engine: 'V8 4.4L Twin Turbo MHEV',
      power: '635 ch',
      transmission: 'Automatique 8 rapports SV Command',
      fuel: 'Essence MHEV',
      topSpeed: '290 km/h',
      acceleration: '0-100 km/h en 3.6s',
      mileage: '0 km (Neuf)',
      badge: 'Disponible',
      badgeClass: 'badge-green',
      isPremium: true,
      image: 'assets/images/range-rover-sport.jpg',
      usage: 'Allie la prestance du Range Rover à l’agilité agressive d’un bolide d’ingénierie spéciale.',
      description: 'Le Range Rover le plus puissant et le plus dynamique jamais conçu. Doté de la révolutionnaire suspension 6D Dynamics interconnectée hydrauliquement qui élimine totalement le roulis sans barre antiroulis.',
      features: [
        'Suspension hydraulique 6D Dynamics',
        'Capot et éléments aérodynamiques en fibre de carbone',
        'Sièges SV Body and Soul avec transducteurs sensoriels',
        'Jantes ultra-légères 23 pouces carbone',
        'Système multimédia tactile Pivi Pro 13.1"'
      ]
    },
    {
      id: 'bentley-bentayga',
      brand: 'Bentley',
      model: 'Bentayga Azure V8 First Edition',
      year: 2025,
      price: 175000000,
      priceFormatted: '175 000 000 FCFA',
      category: 'SUV Haut de Gamme',
      engine: 'V8 4.0L Twin-Turbo Bentley',
      power: '550 ch',
      transmission: 'Automatique 8 rapports intégrale',
      fuel: 'Essence',
      topSpeed: '290 km/h',
      acceleration: '0-100 km/h en 4.5s',
      mileage: '0 km (Neuf)',
      badge: 'Ultra-Luxe',
      badgeClass: 'badge-gold',
      isPremium: true,
      image: 'assets/images/bentley-bentayga.jpg',
      usage: 'Créé pour les élites et capitaines d’industrie qui exigent l’artisanat de Crewe et un bien-être sans compromis.',
      description: 'L’incarnation du luxe serein. La version Azure met l’accent sur la relaxation avec des sièges à ajustement postural 22 voies, une climatisation intelligente et des finitions intérieures cousues main en ronce de noyer foncé.',
      features: [
        'Spécification Bien-Être des Sièges Arrière',
        'Cuir naturel capitonné au losange Azure',
        'Système Audio Naim for Bentley 1780W',
        'Système antiroulis actif 48V Bentley Dynamic Ride',
        'Horloge Breitling analogique incrustée sur la planche'
      ]
    },
    {
      id: 'bentley-cont-gt',
      brand: 'Bentley',
      model: 'Continental GT Speed Ultra Performance Hybrid',
      year: 2025,
      price: 195000000,
      priceFormatted: '195 000 000 FCFA',
      category: 'Coupé & Sportive',
      engine: 'V8 4.0L Ultra Performance Hybrid',
      power: '782 ch',
      transmission: 'Double embrayage 8 rapports',
      fuel: 'Hybride Haute Performance',
      topSpeed: '335 km/h',
      acceleration: '0-100 km/h en 3.2s',
      mileage: '0 km (Neuf)',
      badge: 'Chef-d’œuvre',
      badgeClass: 'badge-gold',
      isPremium: true,
      image: 'assets/images/bentley-continental-gt.jpg',
      usage: 'Grand Tourisme d’exception. La fusion parfaite entre haute couture automobile anglaise et souffle herculéen de 1000 Nm.',
      description: 'Le Grand Tourer le plus puissant des 105 ans d’histoire de Bentley. Une cathédrale de luxe mécanique habillée de boiseries nobles, de cuir sellier et propulsée par un groupe hybride surpuissant.',
      features: [
        'Groupe motopropulseur V8 Hybride 782 ch / 1000 Nm',
        'Écran rotatif signature Bentley Rotating Display',
        'Châssis Actif Bentley Performance avec 4 roues directrices',
        'Différentiel électronique à glissement limité (eLSD)',
        'Sellerie cuir personnalisée bicolore avec surpiqûres or'
      ]
    }
  ];

  // --- 2. Éléments du DOM ---
  const carGrid = document.getElementById('carGrid');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const categoryFilter = document.getElementById('categoryFilter');
  const priceFilter = document.getElementById('priceFilter');
  const fuelFilter = document.getElementById('fuelFilter');
  const brandPills = document.querySelectorAll('.brand-pill');
  const resultsCount = document.getElementById('resultsCount');
  const resetFiltersBtn = document.getElementById('resetFiltersBtn');

  // Modal elements
  const vehicleModal = document.getElementById('vehicleModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalImage = document.getElementById('modalImage');
  const modalBrand = document.getElementById('modalBrand');
  const modalModel = document.getElementById('modalModel');
  const modalPrice = document.getElementById('modalPrice');
  const modalYear = document.getElementById('modalYear');
  const modalPower = document.getElementById('modalPower');
  const modalEngine = document.getElementById('modalEngine');
  const modalTransmission = document.getElementById('modalTransmission');
  const modalFuel = document.getElementById('modalFuel');
  const modalCategory = document.getElementById('modalCategory');
  const modalSpeed = document.getElementById('modalSpeed');
  const modalAccel = document.getElementById('modalAccel');
  const modalMileage = document.getElementById('modalMileage');
  const modalDesc = document.getElementById('modalDesc');
  const modalUsage = document.getElementById('modalUsage');
  const modalFeaturesList = document.getElementById('modalFeaturesList');
  const modalWhatsappBtn = document.getElementById('modalWhatsappBtn');
  const modalEmailBtn = document.getElementById('modalEmailBtn');

  // Navigation & Interactive UI
  const header = document.getElementById('header');
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  const mobileOverlay = document.getElementById('mobileOverlay');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  const toastNotice = document.getElementById('toastNotice');
  const contactForm = document.getElementById('vipContactForm');

  // État des filtres
  let currentBrand = 'all';
  let currentSearch = '';
  let currentCategory = 'all';
  let currentPrice = 'all';
  let currentFuel = 'all';

  // --- 3. Rendu Dynamique des Véhicules ---
  function renderVehicles(vehicles) {
    if (!carGrid) return;
    carGrid.innerHTML = '';

    if (vehicles.length === 0) {
      carGrid.innerHTML = `
        <div class="no-results-box fade-reveal revealed">
          <div class="no-results-icon">
            <svg width="64" height="64" fill="none" stroke="currentColor" viewBox="0 0 24 24" style="margin: 0 auto;">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 style="font-size: 1.4rem; margin-bottom: 8px; color: var(--text-white);">Aucun véhicule trouvé</h3>
          <p style="color: var(--text-muted); max-width: 480px; margin: 0 auto 20px auto;">
            Aucun modèle ne correspond exactement à vos critères de recherche actuels. Vous pouvez réinitialiser les filtres ou nous contacter directement pour une commande sur-mesure.
          </p>
          <button class="btn btn-gold btn-sm" id="emptyResetBtn">Réinitialiser les filtres</button>
        </div>
      `;
      const emptyResetBtn = document.getElementById('emptyResetBtn');
      if (emptyResetBtn) {
        emptyResetBtn.addEventListener('click', resetAllFilters);
      }
      if (resultsCount) resultsCount.textContent = '0 véhicule trouvé';
      return;
    }

    if (resultsCount) {
      resultsCount.textContent = `${vehicles.length} véhicule${vehicles.length > 1 ? 's' : ''} disponible${vehicles.length > 1 ? 's' : ''}`;
    }

    vehicles.forEach((car, index) => {
      const card = document.createElement('article');
      card.className = 'car-card fade-reveal';
      card.style.animationDelay = `${(index % 6) * 0.08}s`;

      const whatsappText = encodeURIComponent(
        `Bonjour BIG S CAR, je suis intéressé par le véhicule : ${car.brand} ${car.model} (${car.priceFormatted}). Pouvez-vous me donner plus de détails sur sa disponibilité ?`
      );
      const whatsappUrl = `https://wa.me/2250705884687?text=${whatsappText}`;

      card.innerHTML = `
        <div class="card-image-box">
          <img src="${car.image}" alt="${car.brand} ${car.model} - BIG S CAR" class="card-img" loading="lazy" onerror="this.onerror=null; this.src='assets/images/hero-bg.jpg';">
          <div class="card-badge-container">
            <span class="badge ${car.badgeClass}">${car.badge}</span>
            ${car.isPremium ? '<span class="badge badge-gold">VIP Choice</span>' : ''}
          </div>
          <span class="card-year-tag">${car.year}</span>
        </div>

        <div class="card-body">
          <div class="card-brand-category">
            <span class="card-brand">${car.brand}</span>
            <span class="card-category">${car.category}</span>
          </div>

          <h3 class="card-model" title="${car.model}">${car.model}</h3>

          <div class="card-specs-row">
            <div class="spec-chip">
              <span class="spec-chip-label">Puissance</span>
              <span class="spec-chip-val">${car.power}</span>
            </div>
            <div class="spec-chip">
              <span class="spec-chip-label">Moteur</span>
              <span class="spec-chip-val" title="${car.engine}">${car.engine.split(' ')[0]}</span>
            </div>
            <div class="spec-chip">
              <span class="spec-chip-label">Boîte</span>
              <span class="spec-chip-val">Automatique</span>
            </div>
          </div>

          <p class="card-usage" title="${car.usage}">
            <strong>Utilisation :</strong> ${car.usage}
          </p>

          <div class="card-price-box">
            <div class="price-label">Prix catalogue</div>
            <div class="price-value">${car.priceFormatted}</div>
          </div>

          <div class="card-actions">
            <button class="btn-card-detail" data-car-id="${car.id}">
              <svg width="15" height="15" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
              Détails
            </button>
            <a href="${whatsappUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-contact" title="Discuter sur WhatsApp">
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
              </svg>
              Contacter
            </a>
          </div>
        </div>
      `;

      carGrid.appendChild(card);
    });

    // Écouteurs pour les boutons "Voir détails"
    document.querySelectorAll('.btn-card-detail').forEach(btn => {
      btn.addEventListener('click', () => {
        const carId = btn.getAttribute('data-car-id');
        openCarModal(carId);
      });
    });

    // Observer pour animations au scroll
    setupScrollObservers();
  }

  // --- 4. Filtrage & Recherche Réactive ---
  function applyFilters() {
    let filtered = VEHICLES_DATA.filter(car => {
      // Filtre de recherche textuelle
      const matchSearch = currentSearch === '' || 
        car.brand.toLowerCase().includes(currentSearch) ||
        car.model.toLowerCase().includes(currentSearch) ||
        car.category.toLowerCase().includes(currentSearch) ||
        car.engine.toLowerCase().includes(currentSearch);

      // Filtre de Marque
      const matchBrand = currentBrand === 'all' || car.brand.toLowerCase() === currentBrand.toLowerCase();

      // Filtre de Catégorie
      const matchCategory = currentCategory === 'all' || car.category === currentCategory;

      // Filtre de Prix
      let matchPrice = true;
      if (currentPrice === 'under-90') {
        matchPrice = car.price < 90000000;
      } else if (currentPrice === '90-120') {
        matchPrice = car.price >= 90000000 && car.price <= 120000000;
      } else if (currentPrice === 'above-120') {
        matchPrice = car.price > 120000000;
      }

      // Filtre de Carburant
      let matchFuel = true;
      if (currentFuel !== 'all') {
        matchFuel = car.fuel.toLowerCase().includes(currentFuel.toLowerCase());
      }

      return matchSearch && matchBrand && matchCategory && matchPrice && matchFuel;
    });

    renderVehicles(filtered);
  }

  function resetAllFilters() {
    currentBrand = 'all';
    currentSearch = '';
    currentCategory = 'all';
    currentPrice = 'all';
    currentFuel = 'all';

    if (searchInput) searchInput.value = '';
    if (searchClear) searchClear.style.display = 'none';
    if (categoryFilter) categoryFilter.value = 'all';
    if (priceFilter) priceFilter.value = 'all';
    if (fuelFilter) fuelFilter.value = 'all';

    brandPills.forEach(pill => {
      if (pill.getAttribute('data-brand') === 'all') {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    applyFilters();
    showToast('Filtres réinitialisés');
  }

  // Événements de recherche & filtres
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      if (searchClear) {
        searchClear.style.display = currentSearch ? 'block' : 'none';
      }
      applyFilters();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      searchInput.value = '';
      currentSearch = '';
      searchClear.style.display = 'none';
      applyFilters();
    });
  }

  brandPills.forEach(pill => {
    pill.addEventListener('click', () => {
      brandPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentBrand = pill.getAttribute('data-brand');
      applyFilters();
    });
  });

  if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
      currentCategory = e.target.value;
      applyFilters();
    });
  }

  if (priceFilter) {
    priceFilter.addEventListener('change', (e) => {
      currentPrice = e.target.value;
      applyFilters();
    });
  }

  if (fuelFilter) {
    fuelFilter.addEventListener('change', (e) => {
      currentFuel = e.target.value;
      applyFilters();
    });
  }

  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', resetAllFilters);
  }

  // --- 5. Modal Véhicule Détails ---
  function openCarModal(carId) {
    const car = VEHICLES_DATA.find(c => c.id === carId);
    if (!car || !vehicleModal) return;

    modalImage.src = car.image;
    modalImage.alt = `${car.brand} ${car.model}`;
    modalBrand.textContent = car.brand;
    modalModel.textContent = car.model;
    modalPrice.textContent = car.priceFormatted;

    modalYear.textContent = car.year;
    modalPower.textContent = car.power;
    modalEngine.textContent = car.engine;
    modalTransmission.textContent = car.transmission;
    modalFuel.textContent = car.fuel;
    modalCategory.textContent = car.category;
    modalSpeed.textContent = car.topSpeed;
    modalAccel.textContent = car.acceleration;
    modalMileage.textContent = car.mileage;

    modalDesc.textContent = car.description;
    modalUsage.textContent = car.usage;

    if (modalFeaturesList) {
      modalFeaturesList.innerHTML = car.features
        .map(f => `<li style="display: flex; align-items: center; gap: 8px; font-size: 0.88rem; color: var(--text-gray-100); margin-bottom: 6px;">
          <span style="color: var(--gold-primary);">✦</span> ${f}
        </li>`)
        .join('');
    }

    const waText = encodeURIComponent(
      `Bonjour BIG S CAR, je souhaite obtenir des informations exclusives et réserver un essai / une visite pour ce véhicule :\n• Modèle : ${car.brand} ${car.model}\n• Année : ${car.year}\n• Prix affiché : ${car.priceFormatted}\n\nMerci de m'indiquer la disponibilité et les modalités.`
    );
    modalWhatsappBtn.href = `https://wa.me/2250705884687?text=${waText}`;

    const mailSubject = encodeURIComponent(`Demande d'information - ${car.brand} ${car.model}`);
    const mailBody = encodeURIComponent(`Bonjour,\n\nJe suis intéressé par la ${car.brand} ${car.model} proposée à ${car.priceFormatted}.\nPourriez-vous me recontacter ?\n\nCordialement.`);
    modalEmailBtn.href = `mailto:bigsccar@gmail.com?subject=${mailSubject}&body=${mailBody}`;

    vehicleModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeCarModal() {
    if (!vehicleModal) return;
    vehicleModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeCarModal);
  }

  if (vehicleModal) {
    vehicleModal.addEventListener('click', (e) => {
      if (e.target === vehicleModal) {
        closeCarModal();
      }
    });
  }

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && vehicleModal && vehicleModal.classList.contains('active')) {
      closeCarModal();
    }
  });

  // --- 6. Filtrage depuis les cartes Marques ---
  window.filterByBrand = function(brandName) {
    currentBrand = brandName;
    brandPills.forEach(pill => {
      if (pill.getAttribute('data-brand').toLowerCase() === brandName.toLowerCase()) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });
    applyFilters();
    const vehiculesSec = document.getElementById('vehicules');
    if (vehiculesSec) {
      vehiculesSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // --- 7. Gestion de la Barre de Navigation & Menu Mobile ---
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollTopBtn) {
      if (window.scrollY > 450) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }
  });

  function toggleMobileMenu() {
    if (!hamburgerBtn || !mobileNavDrawer || !mobileOverlay) return;
    hamburgerBtn.classList.toggle('active');
    mobileNavDrawer.classList.toggle('open');
    mobileOverlay.classList.toggle('active');
    document.body.style.overflow = mobileNavDrawer.classList.contains('open') ? 'hidden' : '';
  }

  if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
  }

  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', toggleMobileMenu);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNavDrawer && mobileNavDrawer.classList.contains('open')) {
        toggleMobileMenu();
      }
    });
  });

  // Bouton Retour en Haut
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // --- 8. Formulaire de Contact VIP (Envoi WhatsApp / Email) ---
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const nom = document.getElementById('clientName')?.value.trim() || 'Client';
      const telephone = document.getElementById('clientPhone')?.value.trim() || 'Non renseigné';
      const vehicule = document.getElementById('clientCarTarget')?.value.trim() || 'Sélection générale';
      const message = document.getElementById('clientMessage')?.value.trim() || 'Demande de prise de contact';

      const waMsg = encodeURIComponent(
        `Bonjour BIG S CAR,\n\nNouvelle demande de contact via le site web :\n• Nom : ${nom}\n• Téléphone : ${telephone}\n• Véhicule ciblé : ${vehicule}\n• Message : ${message}`
      );

      showToast('Redirection vers WhatsApp en cours...');
      setTimeout(() => {
        window.open(`https://wa.me/2250705884687?text=${waMsg}`, '_blank');
        contactForm.reset();
      }, 700);
    });
  }

  // --- 9. Toast Notification Helper ---
  function showToast(message) {
    if (!toastNotice) return;
    toastNotice.querySelector('.toast-text').textContent = message;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3200);
  }
  window.showToast = showToast;

  // --- 10. Animations au Scroll (Intersection Observer) ---
  function setupScrollObservers() {
    const reveals = document.querySelectorAll('.fade-reveal:not(.revealed)');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
      });

      reveals.forEach(el => observer.observe(el));
    } else {
      reveals.forEach(el => el.classList.add('revealed'));
    }
  }

  // Initialisation du catalogue
  renderVehicles(VEHICLES_DATA);
  setupScrollObservers();
});
