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
    "nav.gift": "Gift",
    "nav.honeyPot": "Honey Pot",
  
    // Hero
    "hero.date": "June 20, 2026",
    "hero.venue": "Funchal Cathedral and Quinta do Furão",
    "hero.description": "We invite you to share with us the joy of our love and the beginning of our journey together as husband and wife.",
    "hero.rsvp": "RSVP",
  
    // Ceremony
    "ceremony.title": "Ceremony",
    "ceremony.description": "We will exchange our vows at the historic Funchal Cathedral",
    "ceremony.cardDescription": "The cathedral in the heart of the city, a beautiful setting chosen for our ceremony.",
    "ceremony.time": "Ceremony: 2:30 PM",
    "ceremony.nearbyHotels": "Nearby Hotels",
    "ceremony.dressCode": "Dress Code",
    "ceremony.mapTitle": "Funchal Cathedral Map",
    "ceremony.mapDescription": "Funchal Cathedral",
  
    // Location
    "location.title": "Reception",
    "location.description": "Join us at Quinta do Furão as we continue the celebrations of our special day",
    "location.cardDescription": "A stunning venue surrounded by nature, perfect for our celebration.",
    "location.reception": "Cocktail 5:30 PM",
    "location.mapTitle": "Quinta do Furão Map",
  
    // Gift Section
    "giftSectiontitle": "The perfect gift",
    "giftSectiondescription": "Your presence is the greatest gift — but if you wish, here are two ideas: a physical gift or a contribution.",
    "giftSectionwishlist": "Gift List",
    "giftSectiongift": "Gift",
    "giftSectionhoneyPot": "Honey Pot",
    "giftSectiongoalProgress": "Goal progress",
    "giftSectiondonate": "Contribute",
  
    // Visit Madeira
    "visitMadeira.title": "Visit Madeira",
    "visitMadeira.description": "Explore what to do, where to eat, and how to get around.",
    "visitMadeira.activities": "Activities",
    "visitMadeira.activitiesDesc": "Explore the island’s stunning levada trails and mountain paths.",
    "visitMadeira.restaurants": "Restaurants",
    "visitMadeira.restaurantsDesc": "Visit our favorite restaurants on the island.",
    "visitMadeira.transportation": "Transportation",
    "visitMadeira.transportationDesc": "How to get around: car rentals, buses, taxis, and tips.",
    "visitMadeira.explore": "Explore",
  
    // Activities Page
    "activities.title": "Activities",
    "activities.description": "Discover amazing things to do in Madeira",
    "activities.explore": "Explore",
  
    // Activities
    "activities.hiking": "Hiking / Levada Walks",
    "activities.hikingDesc": "Our favorites: Pico Ruivo - Pico Areeiro, Caldeirão Verde, Ponta de São Lourenço.",
    "activities.beach": "Beach & Water Sports",
    "activities.beachDesc": "Suggestions: Porto Moniz natural pools, catamaran trip to Fajã dos Padres, and of course, if you have time: the wonderful golden island beach.",
    "activities.viewpoints": "Viewpoints & Gardens",
    "activities.viewpointsDesc": "Our favorites: Botanical Garden, Eira do Serrado, Cabo Girão.",
    "activities.iguarias": "Local Delicacies",
    "activities.iguariasDesc": "We may be biased, but there is no better queijada in the world. Try the honey cake and visit the St. António factory in the heart of the city. Don’t forget the limpets!",
    "activities.nightLife": "Nightlife",
    "activities.nightLifeDesc": "To enjoy Madeira’s nightlife: nothing better than Funchal’s Old Town, followed by the clubs, or a poncha in Câmara de Lobos.",
    "activities.diversos": "Various",
    "activities.diversosDesc": "For more relaxed (or not) plans, we suggest a Madeira wine tasting, a cable car ride, and a traditional Monte toboggan ride.",
  
    // Restaurants
    "restaurants.title": "Best Restaurants",
    "restaurants.description": "Discover our favorite dining spots in Madeira",
    "restaurants.kampo": "Kampo",
    "restaurants.kampoDesc": "Enjoy the chef’s counter and delight in the blend of flavors.",
    "restaurants.kampoLocation": "Funchal, Madeira",
    "restaurants.beerGarden": "Beer Garden",
    "restaurants.beerGardenDesc": "The traditional picado with a secret family sauce. Don’t underestimate the chocolate mousse — order it!",
    "restaurants.beerGardenLocation": "Funchal, Madeira",
    "restaurants.santoAntonio": "Santo António",
    "restaurants.santoAntonioDesc": "The best “Espetada” you can have, served with fried corn and bolo do caco.",
    "restaurants.santoAntonioLocation": "Câmara de Lobos, Estreito de Câmara de Lobos",
    "restaurants.aVista": "AVISTA",
    "restaurants.aVistaDesc": "The name says it all. Breakfast is just as good as dinner.",
    "restaurants.aVistaLocation": "Funchal, Madeira",
    "restaurants.nini": "Design Centre Nini Andrade Silva",
    "restaurants.niniDesc": "Start with a cocktail overlooking Funchal.",
    "restaurants.niniLocation": "Funchal, Madeira",
    "restaurants.others": "Other experiences",
    "restaurants.othersDesc": "Adega do Pomar, Terreiro, Gazebo, Il Gallo d'Oro, The Dining Room",
    "restaurants.othersLocation": "Camacha and Funchal, Madeira",
  
    // Maritimo
    "maritimo.title": "Marítimo",
    "maritimo.description": "It’s impossible to promote Madeira without mentioning the greatest club on the Portuguese islands",
    "maritimo.cardTitle": "Clube Sport Marítimo",
    "maritimo.cardDesc": "If interested: you can visit the museum, the stadium, and the club shops.",
    "maritimo.cardLocation": "To belong to Marítimo is to be twice Madeiran.",
  
    // Transportation
    "transportation.title": "Transportation",
    "transportation.description": "Information on how to get around Madeira",
    "transportation.weddingTransport": "Wedding Day Transportation",
    "transportation.weddingTransportDesc": "Transportation will be provided from the ceremony (Funchal) to Quinta do Furão and back.",
    "transportation.carRental": "Car Rental",
    "transportation.carRentalDesc": "The island is well equipped with many car rental companies. We recommend “Baía Car”: a friend who rents cars at a great price. Of course, you can also rent from well-known companies (Hertz, Europcar, etc.)",
  
    // Footer
    "footer.date": "June 20, 2026",
    "footer.venue": "Quinta do Furão, Santana, Madeira, Portugal",
    "footer.contact": "Contact us",
    "footer.copyright": "© 2026 Faria Trinca Wedding. Made with ❤️ for our special day.",
  
    // RSVP
    "rsvp.title": "RSVP",
    "rsvp.description": "We are so excited to celebrate our day with you! Your presence means so much to us, and we can’t wait to share this beautiful moment together. Please let us know if you will be attending!",
    "rsvp.kidsWelcomeTitle": "Children are welcome!",
    "rsvp.kidsWelcome": "We will have a professional babysitter available to entertain children aged 0–12 during the party and dinner, so parents can relax and enjoy.",
    "rsvp.transportationTitle": "Buses / Shuttles",
    "rsvp.transportation": "We will provide transportation from Funchal to the reception with return included. Please let us know if you would like to use this service so we can organize accordingly.",
    "rsvp.foodCardTitle": "Dietary Restrictions",
    "rsvp.foodCard": "Please let us know if you have any dietary restrictions so we can inform the chef.",
    "rsvp.formTitle": "Please respond by filling out the form below",
    "rsvp.firstName": "First Name",
    "rsvp.nameHelp": "Please write the name you want to see on the seating plan",
    "rsvp.lastName": "Last Name",
    "rsvp.email": "Email Address",
    "rsvp.willJoin": "Will you be attending?",
    "rsvp.yes": "Yes, I will attend!",
    "rsvp.no": "Sorry, I won’t be able to attend",
    "rsvp.needsTransportation": "Does your group need transportation?",
    "rsvp.selectTransportation": "Select if transportation is needed",
    "rsvp.transportationYes": "Yes, we need transportation",
    "rsvp.transportationNo": "No, we do not need transportation",
    "rsvp.guestCount": "How many people will attend besides you?",
    "rsvp.guestCountHelp": "Number of additional guests (excluding yourself)",
    "rsvp.justMe": "Just me",
    "rsvp.selectNumber": "Select number of people",
    "rsvp.foodRestrictionsTitle": "Dietary restrictions or preferences (of the person filling out the form)",
    "rsvp.selectDietary": "Select dietary preference",
    "rsvp.dietaryNone": "None",
    "rsvp.dietaryVegetarian": "Vegetarian",
    "rsvp.dietaryVegan": "Vegan",
    "rsvp.dietaryGlutenFree": "Gluten-free",
    "rsvp.dietaryDairyFree": "Dairy-free",
    "rsvp.dietaryNutAllergy": "Nut allergy",
    "rsvp.dietaryOther": "Other",
    "rsvp.specifyFoodRestrictions": "Please specify additional dietary restrictions or notes",
    "rsvp.describeFoodRestrictions": "Please describe any dietary restrictions or requirements...",
    "rsvp.additionalGuests": "Additional Guest Information",
    "rsvp.guest": "Guest",
    "rsvp.guestFirstName": "First Name",
    "rsvp.guestLastName": "Last Name",
    "rsvp.guestIsKid": "This guest is a child (0-12 years old)",
    "rsvp.guestFoodRestrictions": "Dietary restrictions or preferences",
    "rsvp.submit": "Submit RSVP",
    "rsvp.submitting": "Submitting...",
    "rsvp.thankYou": "Thank you!",
    "rsvp.thankYouMessage": "Your RSVP has been received. It will be a pleasure to celebrate with you! Please feel free to explore our website.",
  
    // Dress Code
    "dressCode.title": "Dress Code",
    "dressCode.description": "Choose your style and discover our dress code recommendations",
    "dressCode.women": "Women",
    "dressCode.womenDesc": "Elegant wedding attire",
    "dressCode.men": "Men",
    "dressCode.menDesc": "Formal tailcoat attire",
    "dressCode.viewDetails": "View details",
  
    // Dress Code Women
    "dressCodeWomen.title": "Dress Code for Women",
    "dressCodeWomen.description": "This page provides guidance to help guests choose formal and appropriate attire for our day. We want everyone to feel comfortable and elegant.",
    "dressCodeWomen.colorGuidelines": "Color Guidelines",
    "dressCodeWomen.avoidWhite": "Please avoid white and similar shades",
    "dressCodeWomen.avoidWhiteDesc": "To honor the bride and preserve the special meaning of white on this day, we kindly ask guests to avoid wearing white, ivory, cream, and very light neutral tones.",
    "dressCodeWomen.colorWhite": "White",
    "dressCodeWomen.colorIvory": "Ivory",
    "dressCodeWomen.colorOffWhite": "Off-white",
    "dressCodeWomen.colorCream": "Cream",
    "dressCodeWomen.otherColors": "All other colors are welcome",
    "dressCodeWomen.otherColorsDesc": "We know you will look amazing in whatever you choose to wear!",
    "dressCodeWomen.closing": "Thank you for taking the time to review our dress code guidelines. We can’t wait to celebrate with you!",
  
    // Dress Code Men
    "dressCodeMen.title": "Dress Code for Men",
    "dressCodeMen.description": "The groom will be wearing a tailcoat for the wedding. Therefore, he invites the guests on his side to also wear a tailcoat.",
    "dressCodeMen.howToWear": "How to wear a traditional tailcoat",
    "dressCodeMen.tailcoatJacket": "Tailcoat",
    "dressCodeMen.tailcoatJacketDesc": "A formal black tailcoat, or another color, with tails extending below the waist at the back.",
    "dressCodeMen.shirt": "Shirt",
    "dressCodeMen.shirtDesc": "A crisp white formal shirt with a wing collar or turned-down collar.",
    "dressCodeMen.waistcoat": "Waistcoat",
    "dressCodeMen.waistcoatDesc": "A matching waistcoat worn under the tailcoat, typically black or matching the coat.",
    "dressCodeMen.tie": "Tie",
    "dressCodeMen.tieDesc": "Tie of your choice.",
    "dressCodeMen.trousers": "Trousers",
    "dressCodeMen.trousersDesc": "Matching formal black trousers or formal patterned trousers.",
    "dressCodeMen.shoes": "Shoes",
    "dressCodeMen.shoesDesc": "Polished black formal shoes, typically Oxfords or similar formal footwear.",
    "dressCodeMen.examples": "Real Examples",
    "dressCodeMen.avoidInformal": "Please avoid informal attire",
    "dressCodeMen.avoidInformalDesc": "To maintain the formal atmosphere of our wedding, please avoid the following items:",
    "dressCodeMen.avoidSneakers": "Sneakers or casual footwear",
    "dressCodeMen.avoidTshirts": "T-shirts or casual shirts",
    "dressCodeMen.avoidPolo": "Polo shirts",
    "dressCodeMen.avoidJeans": "Jeans or casual trousers",
    "dressCodeMen.closing": "Thank you for taking the time to review our dress code guidelines. We can’t wait to celebrate with you!",
  
    // HoneyPot
    "honeyPot.title": "Honey Pot",
    "honeyPot.description": "If you choose to make a transfer and contribute to our honeymoon fund.",
    "honeyPot.goalProgress": "Goal progress",
    "honeyPot.donate": "Contribute",
    "honeyPot.modalTitle": "Contribute to our honey pot",
    "honeyPot.thankYouTitle": "Thank you",
    "honeyPot.thankYouMessage": "We are very grateful for your contribution/gift. The idea is for us to feel at home and among friends throughout the celebration, and we want you to enjoy it to the fullest as well.",
    "honeyPot.phoneNumber": "Mobile number",
    "honeyPot.accountHolder": "Account holder name",
    "honeyPot.reference": "Reference",
    "honeyPot.modalNote": "Note: If you are unable to contribute an amount, please let us know so we can find a solution.",
    "honeyPot.close": "Close",
  
    // Gift
    "gift.title": "Wedding Gifts",
    "gift.description": "Your presence is the greatest gift — but if you wish, here are two different approaches.",
    "gift.wishlist": "Gift List",
    "gift.wishlistDesc": "Here is a list of physical gifts you may offer us.",
    "gift.thankYouTitle": "Thank you!",
    "gift.thankYouMessage": "We are immensely grateful for your love and generosity.",
    "gift.gift": "View Gift List",
    "gift.modalTitle": "We live in Switzerland!",
    "gift.modalNote": "Dear guests, as we live in Switzerland, please make sure to send gifts with our name and to our address, and purchase from Swiss websites (preferably).",
    "gift.morada": "Miguel Simplicio Brinca Catalão Trinca - Route du Jura 41, 1700 Fribourg, Switzerland"
  },
  pt: {
    // Header
    "nav.home": "Início",
    "nav.activities": "Atividades",
    "nav.dressCode": "Código de vestuário",
    "nav.transportation": "Transporte",
    "nav.rsvp": "Confirmar Presença",
    "nav.gift": "Oferecer",
    "nav.honeyPot": "Honey Pot",
    
    // Hero
    "hero.date": "20 de Junho de 2026",
    "hero.venue": "Sé do Funchal e Quinta do Furão",
    "hero.description": "Convidamos-vos a partilhar connosco a alegria do nosso amor e o início da nossa caminhada juntos como marido e mulher.",
    "hero.rsvp": "Confirmar Presença",
    
    // Ceremony
    "ceremony.title": "Cerimónia",
    "ceremony.description": "Trocaremos os nossos votos na histórica Sé Catedral do Funchal",
    "ceremony.cardDescription": "A catedral no coração da cidade, um cenário lindo escolhido para a nossa cerimónia.",
    "ceremony.time": "Cerimónia: 14h30",
    "ceremony.nearbyHotels": "Hotéis Próximos",
    "ceremony.dressCode": "Código de Vestuário",
    "ceremony.mapTitle": "Mapa da Sé do Funchal",
    "ceremony.mapDescription": "Sé do Funchal",
    
    // Location
    "location.title": "Copo d'água",
    "location.description": "Juntem-se a nós na Quinta do Furão para continuarmos as festividades do nosso dia especial",
    "location.cardDescription": "Um local deslumbrante rodeado pela natureza, perfeito para a nossa celebração.",
    "location.reception": "Cocktail 17h30",
    "location.mapTitle": "Mapa da Quinta do Furão",
    
    // Gift
    "giftSectiontitle": "O presente perfeito",
    "giftSectiondescription": "A vossa presença é o melhor presente — mas se desejarem, aqui estão duas ideias: prenda física ou contribuição.",
    "giftSectionwishlist": "Lista de Presentes",
    "giftSectiongift": "Oferecer",
    "giftSectionhoneyPot": "Honey Pot",
    "giftSectiongoalProgress": "Progresso do objetivo",
    "giftSectiondonate": "Contribuir",
    
    // VisitMadeira
    "visitMadeira.title": "Visitar a Madeira",
    "visitMadeira.description": "Explore o que fazer, onde comer e como se deslocar.",
    "visitMadeira.activities": "Atividades",
    "visitMadeira.activitiesDesc": "Explore os trilhos deslumbrantes das levadas e caminhos das montanhas da ilha.",
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
    "activities.hiking": "Caminhadas/levadas",
    "activities.hikingDesc": "As nossas preferidas : Pico Ruivo - Pico Areeiro, Caldeirão Verde, Ponta de São Lourenço.",
    "activities.beach": "Praia e desportos aquáticos",
    "activities.beachDesc": "Sugestões : piscinas naturais do Porto Moniz, passeio de catamarã até à Fajã dos Padres, e claro se tiverem tempo: a maravilhosa praia da ilha dourada.",
    "activities.viewpoints": "Miradouros e jardins",
    "activities.viewpointsDesc": "Os nossos favoritos : Jardim botânico, Eira do Serrado, Cabo Girão.",
    "activities.iguarias": "Iguarias",
    "activities.iguariasDesc": "Somos suspeitos, mas não há melhor queijada no mundo. Prove o bolo de mel e visite a fábrica de St. António no coração da cidade. Não se esqueça das lapas!",
    "activities.nightLife": "Vida noturna",
    "activities.nightLifeDesc": "Para aproveitar a noite madeirense: nada melhor que a zona velha do Funchal, seguida duma passagem nas discotecas, ou uma poncha na vila de Câmara de Lobos.",
    "activities.diversos": "Diversos",
    "activities.diversosDesc": "Para planos mais tranquilos (ou não), propomos uma prova de vinho Madeira, com um passeio de teleférico e uma descida de carros do Monte.",
    
    // Restaurants
    "restaurants.title": "Os melhores restaurantes",
    "restaurants.description": "Descubra os nossos locais de refeição favoritos na Madeira",
    "restaurants.kampo": "Kampo",
    "restaurants.kampoDesc": "Aproveite o balcão do chef e delicie-se com as misturas de sabores providenciadas.",
    "restaurants.kampoLocation": "Funchal, Madeira",
    "restaurants.beerGarden": "Beer Garden",
    "restaurants.beerGardenDesc": "O tradicional picado cujo molho vem dum segredo de família. Não subestime a mousse de chocolate - peça-a!",
    "restaurants.beerGardenLocation": "Funchal, Madeira",
    "restaurants.santoAntonio": "Santo António",
    "restaurants.santoAntonioDesc": "A melhor \"Espetada\" que pode comer, acompanhada de milho frito e bolo do caco.",
    "restaurants.santoAntonioLocation": "Câmara de Lobos, Estreito de Câmara de lobos",
    "restaurants.aVista": "AVISTA",
    "restaurants.aVistaDesc": "O nome diz tudo. O pequeno-almoço não fica atrás do jantar.",
    "restaurants.aVistaLocation": "Funchal, Madeira",
    "restaurants.nini": "Design Centre Nini Andrade Silva",
    "restaurants.niniDesc": "Comece com um cocktail sobre a vista do Funchal.",
    "restaurants.niniLocation": "Funchal, Madeira",  
    "restaurants.others": "Outras experiências",
    "restaurants.othersDesc": "Adega do Pomar, Terreiro, Gazebo, Il Gallo d'Oro, The Dinning Room",
    "restaurants.othersLocation": "Camacha e Funchal, Madeira",

    //Maritimo
    "maritimo.title": "Marítimo",
    "maritimo.description": "Não é possível promover a Madeira sem falar do maior das ilhas de Portugal",
    "maritimo.cardTitle": "Clube Sport Marítimo",
    "maritimo.cardDesc": "Se estiver interessado: é possível visitar o museu, o estádio e as lojas do clube.",
    "maritimo.cardLocation": "Pertencer ao Marítimo é ser duas vezes madeirense.",

    // Transportation
    "transportation.title": "Transporte",
    "transportation.description": "Informações sobre como se deslocar na Madeira",
    "transportation.weddingTransport": "Transporte no dia do casamento",
    "transportation.weddingTransportDesc": "Haverá transporte desde a cerimónia (Funchal) para a Quinta do Furão e regresso.",
    "transportation.carRental": "Aluguer de carros",
    "transportation.carRentalDesc": "A ilha está bem equipada com inúmeras empresas de aluguer de carros. Recomendamos \"Baía Car\": um amigo que aluga carros a um ótimo preço. E claro que também pode alugar nas empresas mais comuns (Hertz, Europcar, etc.)",
    
    // Footer
    "footer.date": "20 de Junho de 2026",
    "footer.venue": "Quinta do Furão, Santana, Madeira, Portugal",
    "footer.contact": "Contacte-nos",
    "footer.copyright": "© 2026 Casamento Faria Trinca. Feito com ❤️ para o nosso dia especial.",
    
    // RSVP
    "rsvp.title": "Confirmar Presença",
    "rsvp.description": "Estamos muito entusiasmados por celebrar o nosso dia convosco! A vossa presença significa muito para nós, e mal podemos esperar para partilhar este momento bonito juntos. Por favor, digam-nos se vão estar presentes!",
    "rsvp.kidsWelcomeTitle": "Crianças são bem-vindas!",
    "rsvp.kidsWelcome": "Teremos uma cuidadora profissional disponível para entreter crianças dos 0 aos 12 anos durante a festa e jantar, de forma a que os pais possam desfrutar sem preocupações.",
    "rsvp.transportationTitle": "Autocarros / Shuttles",
    "rsvp.transportation": "Forneceremos transporte do Funchal para a festa com regresso incluído. Digam-nos se gostariam de usar este serviço, para que o possamos organizar adequadamente.",
    "rsvp.foodCardTitle": "Restrições Alimentares",
    "rsvp.foodCard": "Avisem-nos caso tenham alguma restrição alimentar, para que a possamos transmitir ao chef.",
    "rsvp.formTitle": "Por favor, respondam preenchendo o formulário abaixo",
    "rsvp.firstName": "Primeiro Nome",
    "rsvp.nameHelp": " Por favor escreva o nome que quer ver no seating plan",
    "rsvp.lastName": "Último Nome",
    "rsvp.email": "Endereço de Email",
    "rsvp.willJoin": "Vão estar presentes?",
    "rsvp.yes": "Sim, estarei presente!",
    "rsvp.no": "Desculpa, não posso estar presente",
    "rsvp.needsTransportation": "O vosso grupo precisa de transporte?",
    "rsvp.selectTransportation": "Selecione se necessita de transporte",
    "rsvp.transportationYes": "Sim, precisamos de transporte",
    "rsvp.transportationNo": "Não, não precisamos de transporte",
    "rsvp.guestCount": "Quantas pessoas vão estar presentes além de si?",
    "rsvp.guestCountHelp": "Número de convidados adicionais (excluindo você)",
    "rsvp.justMe" : "Apenas eu",
    "rsvp.selectNumber": "Selecione o número de pessoas",
    "rsvp.foodRestrictionsTitle": "Restrições alimentares ou preferências dietéticas (de quem está a preencher)",
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
    "rsvp.guestFoodRestrictions": "Restrições alimentares ou preferências dietéticas",
    "rsvp.submit": "Submeter RSVP",
    "rsvp.submitting": "A submeter...",
    "rsvp.thankYou": "Obrigado!",
    "rsvp.thankYouMessage": "O vosso RSVP foi recebido. Será um prazer celebrar convosco! Por favor sintam-se à vontade de explorar o nosso website",
    
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
    "dressCodeWomen.description": "Esta página fornece orientações para ajudar os convidados a escolher vestuário formal e apropriado para o nosso dia. Queremos que todos se sintam confortáveis e elegantes.",
    "dressCodeWomen.colorGuidelines": "Diretrizes de Cores",
    "dressCodeWomen.avoidWhite": "Por favor, evitem branco e tons semelhantes",
    "dressCodeWomen.avoidWhiteDesc": "Para honrar a noiva e manter o significado especial do branco neste dia, pedimos gentilmente que os convidados evitem usar branco, marfim, creme e tons neutros muito claros.",
    "dressCodeWomen.colorWhite": "Branco",
    "dressCodeWomen.colorIvory": "Marfim",
    "dressCodeWomen.colorOffWhite": "Off-white",
    "dressCodeWomen.colorCream": "Creme",
    "dressCodeWomen.otherColors": "Todas as outras cores são bem-vindas",
    "dressCodeWomen.otherColorsDesc": "Sabemos que vão ficar incríveis em qualquer coisa que usem!",
    "dressCodeWomen.closing": "Obrigado por terem tirado tempo para rever as nossas diretrizes de código de vestuário. Mal podemos esperar para celebrar convosco!",
    
    // Dress Code Men
    "dressCodeMen.title": "Código de Vestuário para Homens",
    "dressCodeMen.description": "O noivo vai usar um fraque como fato de casamento. Deste modo, convida os convidados da sua parte a vestirem também um fraque.",
    "dressCodeMen.howToWear": "Como usar uma fraque tradicional",
    "dressCodeMen.tailcoatJacket": "Fraque",
    "dressCodeMen.tailcoatJacketDesc": "Um fraque formal preto, ou outra cor com caudas que se estendem abaixo da cintura nas costas.",
    "dressCodeMen.shirt": "Camisa",
    "dressCodeMen.shirtDesc": "Uma camisa formal branca e nítida com colarinho de asa ou colarinho virado.",
    "dressCodeMen.waistcoat": "Colete",
    "dressCodeMen.waistcoatDesc": "Um colete correspondente usado sob a casaca, tipicamente preto ou correspondente à casaca.",
    "dressCodeMen.tie": "Gravata",
    "dressCodeMen.tieDesc": "Gravata à escolha.",
    "dressCodeMen.trousers": "Calças",
    "dressCodeMen.trousersDesc": "Calças formais pretas correspondentes ou calça fantasia.",
    "dressCodeMen.shoes": "Sapatos",
    "dressCodeMen.shoesDesc": "Sapatos formais pretos polidos, tipicamente Oxfords ou calçado formal similar.",
    "dressCodeMen.examples": "Exemplos Reais",
    "dressCodeMen.avoidInformal": "Por favor, evitem vestuário informal",
    "dressCodeMen.avoidInformalDesc": "Para manter a atmosfera formal do nosso casamento, por favor evitem os seguintes itens:",
    "dressCodeMen.avoidSneakers": "Sapatilhas ou calçado casual",
    "dressCodeMen.avoidTshirts": "T-shirts ou camisas casuais",
    "dressCodeMen.avoidPolo": "Camisas polo",
    "dressCodeMen.avoidJeans": "Jeans ou calças casuais",
    "dressCodeMen.closing": "Obrigado por terem tirado tempo para rever as nossas diretrizes de código de vestuário. Mal podemos esperar para celebrar convosco!",

    // HoneyPot
    "honeyPot.title": "Honey Pot",
    "honeyPot.description": "Caso optem por fazer uma transferêrncia e contribuir para os fundos da nossa lua-de-mel.",
    "honeyPot.goalProgress": "Progresso do objetivo",
    "honeyPot.donate": "Oferecer",
    "honeyPot.modalTitle": "Contribuir para o nosso honey pot",
    "honeyPot.thankYouTitle": "Obrigado",
    "honeyPot.thankYouMessage": "Estamos muito agradecidos pela vossa contribuição/oferta. A ideia é que nos sintamos em casa e entre amigos durante toda a celebração, e por isso queremos que desfrutem também ao máximo.",
    "honeyPot.phoneNumber": "Número de telemóvel",
    "honeyPot.accountHolder": "Nome do titular da conta",
    "honeyPot.reference": "Referência",
    "honeyPot.modalNote": "Nota: Se não for possível doar uma quantia, por favor digam-nos, de forma a que possamos arranjar uma solução.",
    "honeyPot.close": "Fechar",

    // Gift
    "gift.title": "Presentes de Casamento",
    "gift.description": "A vossa presença é o melhor presente - mas se desejarem, aqui estão duas abordagens diferentes.",
    "gift.wishlist": "Lista de Presentes",
    "gift.wishlistDesc": "Aqui deixamos uma lista de prendas físicas que nos podem oferecer.",
    "gift.thankYouTitle": "Obrigado!",
    "gift.thankYouMessage": "Somos imensamente gratos pelo vosso carinho e generosidade.",
    "gift.gift": "Ver Lista de Presentes",
    "gift.modalTitle": "Vivemos na Suíça!",
    "gift.modalNote": "Caros convidados, como vivemos na Suíça por favor tenham a atenção de enviar os presentes com o nosso nome e para a nossa morada e comprar por sites suíços (preferencialmente)",
    "gift.morada": "Miguel Simplicio Brinca Catalão Trinca - Route du Jura 41, 1700 Fribourg, Suisse"

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

