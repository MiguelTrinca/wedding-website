"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "pt"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Translation keys
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Header
    "nav.home": "Home",
    "nav.activities": "Activities",
    "nav.dressCode": "Dress Code",
    "nav.transportation": "Transportation",
    "nav.rsvp": "RSVP",
    
    // Hero
    "hero.date": "June 20th, 2026",
    "hero.venue": "Quinta do Furao",
    "hero.description": "Join us as we celebrate our love and begin our journey together as husband and wife.",
    "hero.rsvp": "RSVP Now",
    
    // Ceremony
    "ceremony.title": "Ceremony",
    "ceremony.description": "We will exchange vows at the historic Sé do Funchal Cathedral",
    "ceremony.cardDescription": "The cathedral in the heart of Funchal, a beautiful setting for our ceremony",
    "ceremony.time": "Ceremony: 2:30 PM",
    "ceremony.nearbyHotels": "Nearby Hotels",
    "ceremony.dressCode": "Dress Code",
    "ceremony.mapTitle": "Se do Funchal Map",
    "ceremony.mapDescription": "Sé do Funchal Cathedral",
    
    // Location
    "location.title": "Our Venue",
    "location.description": "Join us at the beautiful Quinta do Furao for our special day",
    "location.cardDescription": "A stunning venue surrounded by nature, perfect for our celebration",
    "location.reception": "Reception: 5:00 PM",
    "location.mapTitle": "Quinta do Furao Map",
    
    // Gift
    "gift.title": "The perfect gitf",
    "gift.description": "Your presence is the best present — but if you insist, here are two ideas.",
    "gift.wishlist": "Wishlist",
    "gift.gift": "Gift",
    "gift.honeyPot": "Honey Pot",
    "gift.goalProgress": "Goal progress",
    "gift.donate": "Donate",
    
    // VisitMadeira
    "visitMadeira.title": "Visit Madeira",
    "visitMadeira.description": "Explore what to do, where to eat, and how to get around.",
    "visitMadeira.activities": "Activities",
    "visitMadeira.activitiesDesc": "Discover hikes, viewpoints, and ocean adventures across Madeira.",
    "visitMadeira.restaurants": "Restaurants",
    "visitMadeira.restaurantsDesc": "Visit our favorite restaurants of the island.",
    "visitMadeira.transportation": "Transportation",
    "visitMadeira.transportationDesc": "How to get around: car rentals, buses, taxis, and tips.",
    "visitMadeira.explore": "Explore",
    
    // Activities Page
    "activities.title": "Activities",
    "activities.description": "Discover amazing things to do in Madeira",
    "activities.explore": "Explore",
    
    // Activities
    "activities.hiking": "Hiking",
    "activities.hikingDesc": "Explore Madeira's stunning levada trails and mountain paths",
    "activities.beach": "Beach & Swimming",
    "activities.beachDesc": "Enjoy the beautiful beaches and natural pools",
    "activities.viewpoints": "Viewpoints",
    "activities.viewpointsDesc": "Visit breathtaking viewpoints across the island",
    "activities.waterSports": "Water Sports",
    "activities.waterSportsDesc": "Try diving, surfing, or whale watching",
    "activities.gardens": "Gardens",
    "activities.gardensDesc": "Explore Madeira's beautiful botanical and tropical gardens",
    "activities.cableCar": "Cable Car",
    "activities.cableCarDesc": "Take a scenic cable car ride with panoramic views",
    "activities.wineTasting": "Wine Tasting",
    "activities.wineTastingDesc": "Sample Madeira's famous wines and local cuisine",
    "activities.fishing": "Fishing",
    "activities.fishingDesc": "Experience deep sea fishing in the Atlantic",
    
    // Restaurants
    "restaurants.title": "Our Top 3 Restaurants",
    "restaurants.description": "Discover our favorite dining spots in Madeira",
    "restaurants.kampo": "Kampo",
    "restaurants.kampoDesc": "Eat well and sleep",
    "restaurants.kampoLocation": "Funchal, Madeira",
    "restaurants.beerGarden": "Beer Garden",
    "restaurants.beerGardenDesc": "Must try the chocolate mousse and eat a \"Picado\"",
    "restaurants.beerGardenLocation": "Funchal, Madeira",
    "restaurants.santoAntonio": "Santo Antonio",
    "restaurants.santoAntonioDesc": "The best \"Espetada\" that you can eat",
    "restaurants.santoAntonioLocation": "Madeira",
    
    // Transportation
    "transportation.title": "Transportation",
    "transportation.description": "Information about getting around Madeira",
    "transportation.weddingTransport": "Wedding Transportation",
    "transportation.weddingTransportDesc": "There will be transportation from the Ceremony (Funchal) to the Venue (Quinta do Furao) and back.",
    "transportation.carRental": "Car Rental",
    "transportation.carRentalDesc": "The island is well equipped with numerous car renting companies. We recommend \"Baia Car\" a friend that rents cars for great price. And of course you can also rent a car in most common rent a car company. Like Hertz, Europcar etc.",
    
    // Footer
    "footer.date": "June 20th, 2026",
    "footer.venue": "Quinta do Furao, Madeira, Portugal",
    "footer.contact": "Contact Us",
    "footer.copyright": "© 2024 Beatriz & Miguel Wedding. Made with ❤️ for our special day.",
    
    // RSVP
    "rsvp.title": "RSVP",
    "rsvp.description": "We are so excited to celebrate our special day with you! Your presence means the world to us, and we can't wait to share this beautiful moment together. Please let us know if you'll be joining us for our wedding celebration.",
    "rsvp.kidsWelcome": "👶 Kids Welcome! We'll have a professional nanny available to entertain children ages 0-12 during the celebration, so parents can enjoy the festivities worry-free.",
    "rsvp.transportation": "🚌 Transportation! We'll provide transportation from the hotel to the venue and back. Let us know if you would like to use this service, so that we can arrange accordingly.",
    "rsvp.foodRestrictions": "🍔 Food Restrictions! Let us know if you have any food restrictions, so that we can accommodate you.",
    "rsvp.formTitle": "Please respond by filling out the form below",
    "rsvp.firstName": "First Name",
    "rsvp.lastName": "Last Name",
    "rsvp.email": "Email Address",
    "rsvp.willJoin": "Will you be joining us?",
    "rsvp.yes": "Yes, I'll be there!",
    "rsvp.no": "Sorry, I can't make it",
    "rsvp.needsTransportation": "Does your party need transportation?",
    "rsvp.transportationYes": "Yes, we need transportation",
    "rsvp.transportationNo": "No, we don't need transportation",
    "rsvp.guestCount": "How many people will be joining besides yourself?",
    "rsvp.selectNumber": "Select number of people",
    "rsvp.foodRestrictionsTitle": "Food Restrictions or Dietary Preferences (Yourself)",
    "rsvp.selectDietary": "Select dietary preference",
    "rsvp.dietaryNone": "None",
    "rsvp.dietaryVegetarian": "Vegetarian",
    "rsvp.dietaryVegan": "Vegan",
    "rsvp.dietaryGlutenFree": "Gluten-free",
    "rsvp.dietaryDairyFree": "Dairy-free",
    "rsvp.dietaryNutAllergy": "Nut Allergy",
    "rsvp.dietaryOther": "Other",
    "rsvp.specifyFoodRestrictions": "Please specify additional food restrictions or notes",
    "rsvp.describeFoodRestrictions": "Please describe any food restrictions or dietary requirements...",
    "rsvp.additionalGuests": "Additional Guest Information",
    "rsvp.guest": "Guest",
    "rsvp.guestFirstName": "First Name",
    "rsvp.guestLastName": "Last Name",
    "rsvp.guestIsKid": "This guest is a child (0-12 years old)",
    "rsvp.guestFoodRestrictions": "Food Restrictions or Dietary Preferences",
    "rsvp.submit": "Submit RSVP",
    "rsvp.thankYou": "Thank You!",
    "rsvp.thankYouMessage": "Your RSVP has been received. We can't wait to celebrate with you!",
    
    // Dress Code
    "dressCode.title": "Dress Code",
    "dressCode.description": "Choose your style and discover our dress code recommendations",
    "dressCode.women": "Women",
    "dressCode.womenDesc": "Elegant wedding attire",
    "dressCode.men": "Men",
    "dressCode.menDesc": "Formal tail coat attire",
    "dressCode.viewDetails": "View details",
    
    // Dress Code Women
    "dressCodeWomen.title": "Women's Dress Code",
    "dressCodeWomen.description": "This page provides guidance to help guests choose appropriate formal attire for our special day. We want everyone to feel comfortable and elegant while respecting our wedding party's color choices.",
    "dressCodeWomen.formalAttire": "Formal Attire",
    "dressCodeWomen.formalAttireDesc1": "We invite our guests to dress in formal attire that reflects the elegance of this special occasion.",
    "dressCodeWomen.recommended": "Recommended attire includes:",
    "dressCodeWomen.recommended1": "Long dresses and elegant evening gowns",
    "dressCodeWomen.recommended2": "Refined fabrics such as silk, chiffon, satin, or lace",
    "dressCodeWomen.recommended3": "Sophisticated silhouettes that complement the formal setting",
    "dressCodeWomen.recommended4": "Classic and timeless styles that celebrate the occasion",
    "dressCodeWomen.formalAttireDesc2": "The goal is to look polished and celebratory while ensuring the focus remains on the wedding party's chosen color palette.",
    "dressCodeWomen.examples": "Examples of Formal Attire",
    "dressCodeWomen.colorGuidelines": "Color Guidelines",
    "dressCodeWomen.avoidWhite": "Please Avoid White and White-Like Shades",
    "dressCodeWomen.avoidWhiteDesc": "To honor the bride and maintain the special significance of white on this day, we kindly ask that guests avoid wearing white, ivory, cream, and very light neutral tones.",
    "dressCodeWomen.colorWhite": "White",
    "dressCodeWomen.colorIvory": "Ivory",
    "dressCodeWomen.colorOffWhite": "Off-white",
    "dressCodeWomen.colorCream": "Cream",
    "dressCodeWomen.otherColors": "All Other Formal Colors Are Welcome",
    "dressCodeWomen.otherColorsDesc": "We encourage guests to choose elegant colors outside shades of white. Feel free to explore beautiful jewel tones, rich neutrals, and sophisticated hues that make you feel confident and celebratory. We know you will look amazing in anything you wear!",
    "dressCodeWomen.closing": "Thank you for taking the time to review our dress code guidelines. We truly appreciate your effort to respect these choices and help make our wedding day as beautiful and harmonious as possible. We can't wait to celebrate with you!",
    
    // Dress Code Men
    "dressCodeMen.title": "Men's Dress Code",
    "dressCodeMen.description": "This page outlines the expected formal attire for male guests attending our wedding celebration.",
    "dressCodeMen.formalRequired": "Formal Attire Required",
    "dressCodeMen.formalRequiredDesc": "Our wedding is a formal event that requires traditional formalwear. We ask that all male guests adhere to the dress code to maintain the elegance and formality of the occasion.",
    "dressCodeMen.tailcoat": "Tailcoat for the Groom's Guests",
    "dressCodeMen.tailcoatDesc": "Grooms' guests are required to wear a traditional tailcoat. This is a key part of the formal dress code and helps create a cohesive and elegant atmosphere for our special day.",
    "dressCodeMen.howToWear": "How to Wear a Traditional Tailcoat",
    "dressCodeMen.tailcoatJacket": "Tailcoat Jacket",
    "dressCodeMen.tailcoatJacketDesc": "A formal black tailcoat with tails extending below the waist at the back.",
    "dressCodeMen.shirt": "Shirt",
    "dressCodeMen.shirtDesc": "A crisp white formal dress shirt with a wing collar or turndown collar.",
    "dressCodeMen.waistcoat": "Waistcoat",
    "dressCodeMen.waistcoatDesc": "A matching waistcoat (vest) worn under the tailcoat, typically in black or matching the tailcoat.",
    "dressCodeMen.tie": "Tie / Bow Tie",
    "dressCodeMen.tieDesc": "A formal white bow tie or black tie, properly tied and centered.",
    "dressCodeMen.trousers": "Trousers",
    "dressCodeMen.trousersDesc": "Matching formal black trousers with a proper fit, typically with a stripe down the side.",
    "dressCodeMen.shoes": "Shoes",
    "dressCodeMen.shoesDesc": "Polished black formal dress shoes, typically Oxfords or similar formal footwear.",
    "dressCodeMen.examples": "Real-Life Examples",
    "dressCodeMen.avoidWhite": "Please Avoid White and White-Like Shades",
    "dressCodeMen.avoidWhiteDesc": "To honor the bride and maintain the special significance of white on this day, we kindly ask that guests avoid wearing white, ivory, cream, or very light neutral tones in any part of their attire.",
    "dressCodeMen.avoidInformal": "Please Avoid Informal Attire",
    "dressCodeMen.avoidInformalDesc": "To maintain the formal atmosphere of our wedding, please avoid the following items:",
    "dressCodeMen.avoidSneakers": "Sneakers or casual footwear",
    "dressCodeMen.avoidTshirts": "T-shirts or casual shirts",
    "dressCodeMen.avoidPolo": "Polo shirts",
    "dressCodeMen.avoidJeans": "Jeans or casual trousers",
    "dressCodeMen.closing": "Thank you for taking the time to review our dress code guidelines. We truly appreciate your effort to follow these requirements and help make our wedding day as beautiful and harmonious as possible. We can't wait to celebrate with you!",

    // HoneyPot
    "honeyPot.title": "Honey Pot",
    "honeyPot.description": "We are so excited to celebrate our special day with you! Your presence means the world to us, and we can't wait to share this beautiful moment together. Please let us know if you'll be joining us for our wedding celebration.",
    "honeyPot.goalProgress": "Goal Progress",
    "honeyPot.progressMessage": "We are so excited to celebrate our special day with you! Your presence means the world to us, and we can't wait to share this beautiful moment together. Please let us know if you'll be joining us for our wedding celebration.",
    "honeyPot.donate": "Donate",
    "honeyPot.thankYouTitle": "Thank You",
    "honeyPot.thankYouMessage": "We are so excited to celebrate our special day with you! Your presence means the world to us, and we can't wait to share this beautiful moment together. Please let us know if you'll be joining us for our wedding celebration.",
    "honeyPot.modalTitle": "Donate to our Honey Pot",
    "honeyPot.phoneNumber": "Phone Number",
    "honeyPot.accountHolder": "Account Holder",
    "honeyPot.reference": "Reference",
    "honeyPot.modalNote": "Note: If you are not able to donate, please let us know so we can arrange a different way for you to contribute to our special day.",
    "honeyPot.close": "Close",

  },
  pt: {
    // Header
    "nav.home": "Início",
    "nav.activities": "Atividades",
    "nav.dressCode": "Código de Vestuário",
    "nav.transportation": "Transporte",
    "nav.rsvp": "RSVP",
    
    // Hero
    "hero.date": "20 de Junho de 2026",
    "hero.venue": "Quinta do Furao",
    "hero.description": "Juntem-se a nós enquanto celebramos o nosso amor e começamos a nossa jornada juntos como marido e mulher.",
    "hero.rsvp": "Confirmar Presença",
    
    // Ceremony
    "ceremony.title": "Cerimónia",
    "ceremony.description": "Trocaremos os nossos votos na histórica Sé do Funchal",
    "ceremony.cardDescription": "A catedral no coração do Funchal, um cenário lindo para a nossa cerimónia",
    "ceremony.time": "Cerimónia: 14:30",
    "ceremony.nearbyHotels": "Hotéis Próximos",
    "ceremony.dressCode": "Código de Vestuário",
    "ceremony.mapTitle": "Mapa da Sé do Funchal",
    "ceremony.mapDescription": "Sé do Funchal",
    
    // Location
    "location.title": "O Nosso Local",
    "location.description": "Juntem-se a nós na bela Quinta do Furao para o nosso dia especial",
    "location.cardDescription": "Um local deslumbrante rodeado pela natureza, perfeito para a nossa celebração",
    "location.reception": "Recepção: 17:00",
    "location.mapTitle": "Mapa da Quinta do Furao",
    
    // Gift
    "gift.title": "O presente perfeito",
    "gift.description": "A vossa presença é o melhor presente — mas se insistirem, aqui estão duas ideias.",
    "gift.wishlist": "Lista de Desejos",
    "gift.gift": "Presentear",
    "gift.honeyPot": "Pote de Mel",
    "gift.goalProgress": "Progresso do objetivo",
    "gift.donate": "Doar",
    
    // VisitMadeira
    "visitMadeira.title": "Visitar a Madeira",
    "visitMadeira.description": "Explore o que fazer, onde comer e como se deslocar.",
    "visitMadeira.activities": "Atividades",
    "visitMadeira.activitiesDesc": "Descubra caminhadas, miradouros e aventuras oceânicas pela Madeira.",
    "visitMadeira.restaurants": "Restaurantes",
    "visitMadeira.restaurantsDesc": "Visite os nossos restaurantes favoritos da ilha.",
    "visitMadeira.transportation": "Transporte",
    "visitMadeira.transportationDesc": "Como se deslocar: aluguer de carros, autocarros, táxis e dicas.",
    "visitMadeira.explore": "Explorar",
    
    // Activities Page
    "activities.title": "Atividades",
    "activities.description": "Descubra coisas incríveis para fazer na Madeira",
    "activities.explore": "Explorar",
    
    // Activities
    "activities.hiking": "Caminhadas",
    "activities.hikingDesc": "Explore os trilhos deslumbrantes das levadas e caminhos de montanha da Madeira",
    "activities.beach": "Praia e Natação",
    "activities.beachDesc": "Desfrute das belas praias e piscinas naturais",
    "activities.viewpoints": "Miradouros",
    "activities.viewpointsDesc": "Visite miradouros deslumbrantes pela ilha",
    "activities.waterSports": "Desportos Aquáticos",
    "activities.waterSportsDesc": "Experimente mergulho, surf ou observação de baleias",
    "activities.gardens": "Jardins",
    "activities.gardensDesc": "Explore os belos jardins botânicos e tropicais da Madeira",
    "activities.cableCar": "Teleférico",
    "activities.cableCarDesc": "Faça uma viagem panorâmica de teleférico com vistas deslumbrantes",
    "activities.wineTasting": "Prova de Vinhos",
    "activities.wineTastingDesc": "Prove os famosos vinhos da Madeira e a culinária local",
    "activities.fishing": "Pesca",
    "activities.fishingDesc": "Experimente a pesca em alto mar no Atlântico",
    
    // Restaurants
    "restaurants.title": "Os Nossos 3 Melhores Restaurantes",
    "restaurants.description": "Descubra os nossos locais de refeição favoritos na Madeira",
    "restaurants.kampo": "Kampo",
    "restaurants.kampoDesc": "Coma bem e durma",
    "restaurants.kampoLocation": "Funchal, Madeira",
    "restaurants.beerGarden": "Beer Garden",
    "restaurants.beerGardenDesc": "Deve experimentar o mousse de chocolate e comer um \"Picado\"",
    "restaurants.beerGardenLocation": "Funchal, Madeira",
    "restaurants.santoAntonio": "Santo Antonio",
    "restaurants.santoAntonioDesc": "A melhor \"Espetada\" que pode comer",
    "restaurants.santoAntonioLocation": "Madeira",
    
    // Transportation
    "transportation.title": "Transporte",
    "transportation.description": "Informações sobre como se deslocar na Madeira",
    "transportation.weddingTransport": "Transporte do Casamento",
    "transportation.weddingTransportDesc": "Haverá transporte da Cerimónia (Funchal) para o Local (Quinta do Furao) e de volta.",
    "transportation.carRental": "Aluguer de Carros",
    "transportation.carRentalDesc": "A ilha está bem equipada com inúmeras empresas de aluguer de carros. Recomendamos \"Baia Car\" um amigo que aluga carros a um ótimo preço. E claro, também pode alugar um carro nas empresas de aluguer de carros mais comuns. Como Hertz, Europcar, etc.",
    
    // Footer
    "footer.date": "20 de Junho de 2026",
    "footer.venue": "Quinta do Furao, Madeira, Portugal",
    "footer.contact": "Contacte-nos",
    "footer.copyright": "© 2024 Casamento Beatriz & Miguel. Feito com ❤️ para o nosso dia especial.",
    
    // RSVP
    "rsvp.title": "RSVP",
    "rsvp.description": "Estamos muito entusiasmados por celebrar o nosso dia especial convosco! A vossa presença significa tudo para nós, e mal podemos esperar para partilhar este momento bonito juntos. Por favor, digam-nos se vão estar presentes na nossa celebração de casamento.",
    "rsvp.kidsWelcome": "👶 Crianças Bem-vindas! Teremos uma ama profissional disponível para entreter crianças dos 0 aos 12 anos durante a celebração, para que os pais possam desfrutar das festividades sem preocupações.",
    "rsvp.transportation": "🚌 Transporte! Forneceremos transporte do hotel para o local e de volta. Digam-nos se gostariam de usar este serviço, para que possamos organizar adequadamente.",
    "rsvp.foodRestrictions": "🍔 Restrições Alimentares! Digam-nos se têm alguma restrição alimentar, para que possamos acomodar-vos.",
    "rsvp.formTitle": "Por favor, respondam preenchendo o formulário abaixo",
    "rsvp.firstName": "Primeiro Nome",
    "rsvp.lastName": "Último Nome",
    "rsvp.email": "Endereço de Email",
    "rsvp.willJoin": "Vão estar presentes?",
    "rsvp.yes": "Sim, estarei presente!",
    "rsvp.no": "Desculpa, não posso estar presente",
    "rsvp.needsTransportation": "O vosso grupo precisa de transporte?",
    "rsvp.transportationYes": "Sim, precisamos de transporte",
    "rsvp.transportationNo": "Não, não precisamos de transporte",
    "rsvp.guestCount": "Quantas pessoas vão estar presentes além de si?",
    "rsvp.selectNumber": "Selecione o número de pessoas",
    "rsvp.foodRestrictionsTitle": "Restrições Alimentares ou Preferências Dietéticas (Si Próprio)",
    "rsvp.selectDietary": "Selecione a preferência dietética",
    "rsvp.dietaryNone": "Nenhuma",
    "rsvp.dietaryVegetarian": "Vegetariano",
    "rsvp.dietaryVegan": "Vegano",
    "rsvp.dietaryGlutenFree": "Sem glúten",
    "rsvp.dietaryDairyFree": "Sem lactose",
    "rsvp.dietaryNutAllergy": "Alergia a Frutos Secos",
    "rsvp.dietaryOther": "Outro",
    "rsvp.specifyFoodRestrictions": "Por favor, especifique restrições alimentares adicionais ou notas",
    "rsvp.describeFoodRestrictions": "Por favor, descreva quaisquer restrições alimentares ou requisitos dietéticos...",
    "rsvp.additionalGuests": "Informação de Convidados Adicionais",
    "rsvp.guest": "Convidado",
    "rsvp.guestFirstName": "Primeiro Nome",
    "rsvp.guestLastName": "Último Nome",
    "rsvp.guestIsKid": "Este convidado é uma criança (0-12 anos)",
    "rsvp.guestFoodRestrictions": "Restrições Alimentares ou Preferências Dietéticas",
    "rsvp.submit": "Submeter RSVP",
    "rsvp.thankYou": "Obrigado!",
    "rsvp.thankYouMessage": "O vosso RSVP foi recebido. Mal podemos esperar para celebrar convosco!",
    
    // Dress Code
    "dressCode.title": "Código de Vestuário",
    "dressCode.description": "Escolham o vosso estilo e descubram as nossas recomendações de código de vestuário",
    "dressCode.women": "Mulheres",
    "dressCode.womenDesc": "Vestuário elegante para casamento",
    "dressCode.men": "Homens",
    "dressCode.menDesc": "Vestuário formal de casaca",
    "dressCode.viewDetails": "Ver detalhes",
    
    // Dress Code Women
    "dressCodeWomen.title": "Código de Vestuário para Mulheres",
    "dressCodeWomen.description": "Esta página fornece orientações para ajudar os convidados a escolher vestuário formal apropriado para o nosso dia especial. Queremos que todos se sintam confortáveis e elegantes, respeitando as escolhas de cores do nosso casamento.",
    "dressCodeWomen.formalAttire": "Vestuário Formal",
    "dressCodeWomen.formalAttireDesc1": "Convidamos os nossos convidados a vestirem-se com vestuário formal que reflita a elegância desta ocasião especial.",
    "dressCodeWomen.recommended": "Vestuário recomendado inclui:",
    "dressCodeWomen.recommended1": "Vestidos longos e vestidos de noite elegantes",
    "dressCodeWomen.recommended2": "Tecidos refinados como seda, chiffon, cetim ou renda",
    "dressCodeWomen.recommended3": "Silhuetas sofisticadas que complementam o ambiente formal",
    "dressCodeWomen.recommended4": "Estilos clássicos e atemporais que celebram a ocasião",
    "dressCodeWomen.formalAttireDesc2": "O objetivo é parecer polido e celebratório, garantindo que o foco permaneça na paleta de cores escolhida pelo casamento.",
    "dressCodeWomen.examples": "Exemplos de Vestuário Formal",
    "dressCodeWomen.colorGuidelines": "Diretrizes de Cores",
    "dressCodeWomen.avoidWhite": "Por Favor, Evitem Branco e Tons Semelhantes ao Branco",
    "dressCodeWomen.avoidWhiteDesc": "Para honrar a noiva e manter o significado especial do branco neste dia, pedimos gentilmente que os convidados evitem usar branco, marfim, creme e tons neutros muito claros.",
    "dressCodeWomen.colorWhite": "Branco",
    "dressCodeWomen.colorIvory": "Marfim",
    "dressCodeWomen.colorOffWhite": "Off-white",
    "dressCodeWomen.colorCream": "Creme",
    "dressCodeWomen.otherColors": "Todas as Outras Cores Formais São Bem-vindas",
    "dressCodeWomen.otherColorsDesc": "Encorajamos os convidados a escolher cores elegantes fora dos tons de branco. Sintam-se à vontade para explorar tons de joias bonitos, neutros ricos e matizes sofisticados que vos façam sentir confiantes e celebratórios. Sabemos que vão ficar incríveis em qualquer coisa que usem!",
    "dressCodeWomen.closing": "Obrigado por terem tirado tempo para rever as nossas diretrizes de código de vestuário. Apreciamos verdadeiramente o vosso esforço para respeitar estas escolhas e ajudar a tornar o nosso dia de casamento o mais bonito e harmonioso possível. Mal podemos esperar para celebrar convosco!",
    
    // Dress Code Men
    "dressCodeMen.title": "Código de Vestuário para Homens",
    "dressCodeMen.description": "Esta página descreve o vestuário formal esperado para convidados masculinos que participam na nossa celebração de casamento.",
    "dressCodeMen.formalRequired": "Vestuário Formal Obrigatório",
    "dressCodeMen.formalRequiredDesc": "O nosso casamento é um evento formal que requer vestuário formal tradicional. Pedimos que todos os convidados masculinos adiram ao código de vestuário para manter a elegância e formalidade da ocasião.",
    "dressCodeMen.tailcoat": "Casaca para os Convidados do Noivo",
    "dressCodeMen.tailcoatDesc": "Os convidados do noivo são obrigados a usar uma casaca tradicional. Esta é uma parte fundamental do código de vestuário formal e ajuda a criar uma atmosfera coesa e elegante para o nosso dia especial.",
    "dressCodeMen.howToWear": "Como Usar uma Casaca Tradicional",
    "dressCodeMen.tailcoatJacket": "Casaca",
    "dressCodeMen.tailcoatJacketDesc": "Uma casaca formal preta com caudas que se estendem abaixo da cintura nas costas.",
    "dressCodeMen.shirt": "Camisa",
    "dressCodeMen.shirtDesc": "Uma camisa formal branca e nítida com colarinho de asa ou colarinho virado.",
    "dressCodeMen.waistcoat": "Colete",
    "dressCodeMen.waistcoatDesc": "Um colete correspondente usado sob a casaca, tipicamente preto ou correspondente à casaca.",
    "dressCodeMen.tie": "Gravata / Laço",
    "dressCodeMen.tieDesc": "Um laço branco formal ou gravata preta, devidamente atado e centrado.",
    "dressCodeMen.trousers": "Calças",
    "dressCodeMen.trousersDesc": "Calças formais pretas correspondentes com um ajuste adequado, tipicamente com uma risca lateral.",
    "dressCodeMen.shoes": "Sapatos",
    "dressCodeMen.shoesDesc": "Sapatos formais pretos polidos, tipicamente Oxfords ou calçado formal similar.",
    "dressCodeMen.examples": "Exemplos Reais",
    "dressCodeMen.avoidWhite": "Por Favor, Evitem Branco e Tons Semelhantes ao Branco",
    "dressCodeMen.avoidWhiteDesc": "Para honrar a noiva e manter o significado especial do branco neste dia, pedimos gentilmente que os convidados evitem usar branco, marfim, creme ou tons neutros muito claros em qualquer parte do seu vestuário.",
    "dressCodeMen.avoidInformal": "Por Favor, Evitem Vestuário Informal",
    "dressCodeMen.avoidInformalDesc": "Para manter a atmosfera formal do nosso casamento, por favor evitem os seguintes itens:",
    "dressCodeMen.avoidSneakers": "Sapatilhas ou calçado casual",
    "dressCodeMen.avoidTshirts": "T-shirts ou camisas casuais",
    "dressCodeMen.avoidPolo": "Camisas polo",
    "dressCodeMen.avoidJeans": "Jeans ou calças casuais",
    "dressCodeMen.closing": "Obrigado por terem tirado tempo para rever as nossas diretrizes de código de vestuário. Apreciamos verdadeiramente o vosso esforço para seguir estes requisitos e ajudar a tornar o nosso dia de casamento o mais bonito e harmonioso possível. Mal podemos esperar para celebrar convosco!",

    // HoneyPot
    "honeyPot.title": "Pote de Mel",
    "honeyPot.description": "Estamos muito entusiasmados por celebrar o nosso dia especial convosco! A vossa presença significa tudo para nós, e mal podemos esperar para partilhar este momento bonito juntos. Por favor, digam-nos se vão estar presentes na nossa celebração de casamento.",
    "honeyPot.goalProgress": "Progresso do objetivo",
    "honeyPot.donate": "Doar",
    "honeyPot.modalTitle": "Doar para o nosso Pote de Mel",
    "honeyPot.thankYouTitle": "Obrigado",
    "honeyPot.thankYouMessage": "Estamos muito entusiasmados por celebrar o nosso dia especial convosco! A vossa presença significa tudo para nós, e mal podemos esperar para partilhar este momento bonito juntos. Por favor, digam-nos se vão estar presentes na nossa celebração de casamento.",
    "honeyPot.phoneNumber": "Número de Telemóvel",
    "honeyPot.accountHolder": "Nome do Titular da Conta",
    "honeyPot.reference": "Referência",
    "honeyPot.modalNote": "Nota: Se não é possível doar, por favor digam-nos para que possamos arranjar uma forma diferente para vós contribuir para o nosso dia especial.",
    "honeyPot.close": "Fechar",
  },
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem("language", lang)
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

