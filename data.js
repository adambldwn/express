
const data = {
  users: [
    {
      name: 'ibrahim',
      email: 'admin@example.com',
      password: 1234,
      isAdmin: true,
      isSeller: true,
      seller: {
        name: 'Puma',
        logo: '/images/logo1.png',
        description: 'best seller',
        rating: 4.5,
        numReviews: 120,
      },
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: 1234,
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'APPLE MNHF2ZM/A EarPods',
      category: 'Kopfhörer',
      image: '/images/applemnhf2z.webp',
      price: 19,
      countInStock: 10,
      brand: 'Apple',
      rating: 4.8,
      numReviews: 15,
      description: 'Mit Fernbedienung und Mikrofon, von Apple entwickelt, tiefere, sattere Bässe, besserer Schutz vor Schweiß und Wasser, Wiedergabe von Musik und Videos steuern, Anrufe annehmen und beenden',
    },
    {
      name: 'JBL T210, In-ear Kopfhörer Schwarz',
      category: 'Kopfhörer',
      image: '/images/k.webp',
      price: 16,
      countInStock: 20,
      brand: 'JBL',
      rating: 4.5,
      numReviews: 30,
      description: 'Steuere deine Lieblingsmusik mit der Ein-Tasten-Fernbedienung und nimm Anrufe problemlos mit dem integrierten Mikrofon entgegen.',
    },
    {
      name: 'SONY MDR-EX15LP, In-ear Kopfhörer Schwarz',
      category: 'Kopfhörer',
      image: '/images/sonymdr.webp',
      price: 8,
      countInStock: 50,
      brand: 'Sony',
      rating: 4.3,
      numReviews: 17,
      description: 'Starker 9 mm Neodymium Magnet sorgt für satte Bässe und voluminösen Klangcharakter',
    },
    {
      name: 'SENNHEISER RS 127-8, Over-ear Kopfhörer Schwarz',
      category: 'Kopfhörer',
      image: '/images/sennheiser.webp',
      price: 119,
      countInStock: 15,
      brand: 'Sennheiser',
      rating: 4.8,
      numReviews: 35,
      description: 'Hervorragendes Klangbild für Musik und TV, Automatische Sendersuche, Sender dient gleichzeitig als Lade- und Aufbewahrungsstation',
    },
    {
      name: 'PHILIPS SHK2000BL/00, On-ear Kopfhörer Blau/Grün',
      category: 'Kopfhörer',
      image: '/images/philips.webp',
      price: 18,
      countInStock: 30,
      brand: 'Philips',
      rating: 4.5,
      numReviews: 80,
      description: 'Ergonomischer, verstellbarer Bügel; 32 mm Neodym-Lautsprechertreiber; Ohrpolster mit Geräuschisolierung; weiche Ohrpolster; ultraleichter Bügel;',
    },
    {
      name: 'BEATS Solo Pro, On-ear Kopfhörer Bluetooth Schwarz',
      category: 'Kopfhörer',
      image: '/images/beats.webp',
      price: 198,
      countInStock: 40,
      brand: 'BEATS',
      rating: 4.9,
      numReviews: 40,
      description: 'Dank der aktiven Noise Cancelling-Funktion sowie der Audiokalibrierung in Echtzeit können Sie die Umgebungsgeräusche ausblenden und sich voll und ganz auf Ihre Musik konzentrieren. Die verbesserte Akustik sorgt zusätzlich dafür, dass Sie überall den besten Sound genießen können.',
    },
    {
      name: 'SAMSUNG SM-R180 Galaxy Buds Live, In-ear Kopfhörer Bluetooth Schwarz',
      category: 'Kopfhörer',
      image: '/images/samsung.webp',
      price: 90,
      countInStock: 45,
      brand: 'Samsung',
      rating: 4.4,
      numReviews: 32,
      description: 'Dank der aktiven Noise Cancelling-Funktion sowie der Audiokalibrierung in Echtzeit können Sie die Umgebungsgeräusche ausblenden und sich voll und ganz auf Ihre Musik konzentrieren. Die verbesserte Akustik sorgt zusätzlich dafür, dass Sie überall den besten Sound genießen können.',
    },
    {
      name: 'LG OLED65CX9LA OLED TV',
      category: 'Smart TVS',
      image: '/images/smartlg.webp',
      price: 322,
      countInStock: 58,
      brand: 'LG',
      rating: 4.7,
      numReviews: 32,
      description: 'Dank 8 Millionen selbstleuchtender Pixel erleben Sie das perfekte Schwarz der LG OLED TVs und eine Milliarde kraftvoller Farben. Cinema HDR unterstützt alle gängigen HDR-Formate, wie HDR10 Pro, HLG, und Dolby Vision IQ. Für kinogleiche Bildqualität im heimischen Wohnzimmer!',
    },
    {
      name: 'TELEFUNKEN D32F551R1CWI LED TV',
      category: 'Smart TVS',
      image: '/images/telefunken.webp',
      price: 209,
      countInStock: 47,
      brand: 'TELEFUNKEN',
      rating: 4.8,
      numReviews: 32,
      description: 'Cinema HDR unterstützt alle gängigen HDR-Formate, wie HDR10 Pro, HLG, und Dolby Vision IQ. Für kinogleiche Bildqualität im heimischen Wohnzimmer!',
    },
    {
      name: 'LG 55NANO917NA NanoCell LCD TV',
      category: 'Smart TVS',
      image: '/images/lgnano.webp',
      price: 799,
      countInStock: 12,
      brand: 'LG',
      rating: 4.9,
      numReviews: 32,
      description: 'Dank 8 Millionen selbstleuchtender Pixel erleben Sie das perfekte Schwarz der LG OLED TVs und eine Milliarde kraftvoller Farben. Cinema HDR unterstützt alle gängigen HDR-Formate, wie HDR10 Pro, HLG, und Dolby Vision IQ. Für kinogleiche Bildqualität im heimischen Wohnzimmer!',
    },
    {
      name: 'SONY KD-55XH9005 LED TV ',
      category: 'Smart TVS',
      image: '/images/sonykd55.webp',
      price: 869,
      countInStock: 12,
      brand: 'SONY',
      rating: 4.5,
      numReviews: 36,
      description: 'Beim Kauf eines vorrätigen bzw. sofort verfügbaren Sony Aktions-TV-Geräts (Modelle KD55XH9005B, KD55XH9005S oder KD55X7055B) direkt in einem MediaMarkt in Deutschland oder bei Bestellung im MediaMarkt Onlineshop und Selbstabholung in einem Markt zwischen dem 22.03. und 11.04.2021 erhalten Sie einen Sony SRS-XB12 Lautsprecher kostenlos dazu',
    },
    {
      name: 'HISENSE 50A7100F LED TV ',
      category: 'Smart TVS',
      image: '/images/hisense.webp',
      price: 388,
      countInStock: 25,
      brand: 'HISENSE',
      rating: 4.6,
      numReviews: 36,
      description: 'Beim Kauf eines vorrätigen bzw. sofort verfügbaren 3x HDMI 2.0, 2x USB 2.0, 1x S/PDIF Output, 2x RF Tuner, 1x Composite (AV) Input, Lan, WiFi, Bluetooth direkt in einem MediaMarkt in Deutschland oder bei Bestellung im MediaMarkt Onlineshop und Selbstabholung in einem Markt zwischen dem 22.03. und 11.04.2021 erhalten Sie einen Sony SRS-XB12 Lautsprecher kostenlos dazu',
    },
    {
      name: 'PHILIPS 58PUS8545/12 LED TV',
      category: 'Smart TVS',
      image: '/images/philips58pu.webp',
      price: 849,
      countInStock: 26,
      brand: 'PHILIPS',
      rating: 4.6,
      numReviews: 36,
      description: 'Flaches Gehäuse. Atemberaubendes Licht.Klarer Sound. Verstehen Sie jedes Wort.',
    },
    {
      name: 'TOSHIBA 32WD3C63DA LED TV ',
      category: 'Smart TVS',
      image: '/images/toshiba.webp',
      price: 849,
      countInStock: 26,
      brand: 'TOSHIBA',
      rating: 4.6,
      numReviews: 36,
      description: 'Flaches Gehäuse. Atemberaubendes Licht.Klarer Sound. Verstehen Sie jedes Wort.',
    },
    {
      name: 'SAMSUNG Galaxy A52 128 GB Awesome Black Dual SIM',
      category: 'Smartphones',
      image: '/images/galaxya52.webp',
      price: 849,
      countInStock: 26,
      brand: 'SAMSUNG',
      rating: 4.8,
      numReviews: 36,
      description: 'Bestellen Sie im Zeitraum vom 17.03., 15 Uhr bis zum 08.04.21, 23:59 ein Samsung Galaxy A52 | A52 5G oder Galaxy A72. Nach Ihrem Kauf erhalten Sie über Samsung die Galaxy Buds + Kopfhörer gratis dazu!',
    },
    {
      name: 'SAMSUNG Galaxy XCover 5 Enterprise Edition',
      category: 'Smartphones',
      image: '/images/galaxyxcover.webp',
      price: 279,
      countInStock: 35,
      brand: 'SAMSUNG',
      rating: 4.8,
      numReviews: 20,
      description: 'Schnell mal einen Termin vereinbaren oder einen Plausch mit einem geliebten Menschen halten: Das Smartphone SAMSUNG Galaxy XCover 5 Enterprise Edition ermöglicht Kommunikation immer und überall. Schließlich verleiht auch die schwarze Farbe dem Handy ein geschmackvolles Äußeres.',
    },
    {
      name: 'SAMSUNG Galaxy S20 FE 128 GB Cloud Navy Dual SIM',
      category: 'Smartphones',
      image: '/images/galaxys20.webp',
      price: 625,
      countInStock: 35,
      brand: 'SAMSUNG',
      rating: 4.9,
      numReviews: 20,
      description: 'Erleben Sie kompromisslose Performance: Mit der S20-Technologie garantiert Samsung maßgeschneiderte Features fürs anspruchsvolles Fotografieren, Spielen oder Social Media.',
    },
    {
      name: 'APPLE iPhone 11 128 GB Schwarz Dual SIM',
      category: 'Smartphones',
      image: '/images/apple11.webp',
      price: 629,
      countInStock: 42,
      brand: 'APPLE',
      rating: 4.7,
      numReviews: 22,
      description: 'Das Smartphone ist mit dem Betriebssystem iOS 13 ausgestattet. Für besonders flottes Internet können Sie auf folgende Standards zurückgreifen: 2G (GSM), 3G (UMTS) und 4G (LTE).',
    },
    {
      name: 'APPLE iPhone 12 5G 128 GB Weiß Dual SIM',
      category: 'Smartphones',
      image: '/images/apple12.webp',
      price: 879,
      countInStock: 42,
      brand: 'APPLE',
      rating: 4.7,
      numReviews: 22,
      description: 'Das beste iPhone Display aller Zeiten für unglaublichen Kontrast und höhere Auflösung. Und mit Ceramic Shield für eine viermal bessere Sturzfestigkeit',
    },
    {
      name: 'APPLE iPhone 12 5G 64 GB Grün Dual SIM',
      category: 'Smartphones',
      image: '/images/apple1264.webp',
      price: 809,
      countInStock: 78,
      brand: 'APPLE',
      rating: 4.7,
      numReviews: 42,
      description: 'A14 Bionic ist der schnellste Chip in einem Smartphone. Mit einer 16-Core Neural Engine, die jede Sekunde Billionen von Rechen­operationen mit links erledigt. Und mit einer superhohen Effizienz für eine fantastische Batterielaufzeit.',
    },
    {
      name: 'APPLE iPhone SE NE 256 GB Schwarz Dual SIM',
      category: 'Smartphones',
      image: '/images/applese.webp',
      price: 622,
      countInStock: 57,
      brand: 'APPLE',
      rating: 4.9,
      numReviews: 37,
      description: 'A14 Bionic ist der schnellste Chip in einem Smartphone. Mit einer 16-Core Neural Engine, die jede Sekunde Billionen von Rechen­operationen mit links erledigt. Und mit einer superhohen Effizienz für eine fantastische Batterielaufzeit.',
    },
    {
      name: 'ACER Chromebook Spin 311',
      category: 'Notebooks',
      image: '/images/acer.webp',
      price: 259,
      countInStock: 55,
      brand: 'ACER',
      rating: 4.7,
      numReviews: 35,
      description: 'A14 Bionic ist der schnellste Chip in einem Smartphone. Mit einer 16-Core Neural Engine, die jede Sekunde Billionen von Rechen­operationen mit links erledigt. Und mit einer superhohen Effizienz für eine fantastische Batterielaufzeit.',
    },
    {
      name: 'ASUS VivoBook 15 R565JA-EJ283T',
      category: 'Notebooks',
      image: '/images/asus.webp',
      price: 599,
      countInStock: 56,
      brand: 'ASUS',
      rating: 4.8,
      numReviews: 35,
      description: 'Intel®️ Core™️ i5-1035G1 Prozessor (bis zu 3,60 GHz mit Intel®️ Turbo-Boost-Technik 2.0, 6 MB Intel®️ Cache',
    },
   
    {
      name: 'LENOVO Yoga 7i EVO',
      category: 'Notebooks',
      image: '/images/lenovoyoga.webp',
      price: 969,
      countInStock: 28,
      brand: 'LENOVO',
      rating: 4.9,
      numReviews: 36,
      description: 'Das Lenovo Yoga 7i Convertible-Notebook hinterlässt schon beim ersten Kennenlernen einen starken Eindruck. Das schicke, schlanke und edle Vollmetallgehäuse, lange Akkulaufzeiten und die Intel Evo Plattform mit Intel Core Hochleistungsprozessoren der 11. Generation machen aus dem Yoga 7i ein rundum überzeugendes Gesamtpaket. Dazu kommen die schon fast sprichwörtliche Vielseitigkeit mit vier Anwendungsmodes, brillante Full-HD Displays mit optionalem VESA400 HDR und der überzeugende Klang mit nach vorne gerichteten Dolby Atmos Lautsprechern. Wo immer Sie auch unterwegs sind - Arbeiten, Posten, Surfen, Gaming, Videos oder Musik genießen... mit dem Yoga 7i sind Sie flexibel wie nie zuvor.',
    },
    {
      name: 'MEDION AKOYA®️ S15449 (MD62096)',
      category: 'Notebooks',
      image: '/images/medion.webp',
      price: 849,
      countInStock: 21,
      brand: 'MEDION',
      rating: 4.6,
      numReviews: 36,
      description: 'Das Lenovo Yoga 7i Convertible-Notebook hinterlässt schon beim ersten Kennenlernen einen starken Eindruck. Das schicke, schlanke und edle Vollmetallgehäuse, lange Akkulaufzeiten und die Intel Evo Plattform mit Intel Core Hochleistungsprozessoren der 11. Generation machen aus dem Yoga 7i ein rundum überzeugendes Gesamtpaket. Dazu kommen die schon fast sprichwörtliche Vielseitigkeit mit vier Anwendungsmodes, brillante Full-HD Displays mit optionalem VESA400 HDR und der überzeugende Klang mit nach vorne gerichteten Dolby Atmos Lautsprechern. Wo immer Sie auch unterwegs sind - Arbeiten, Posten, Surfen, Gaming, Videos oder Musik genießen... mit dem Yoga 7i sind Sie flexibel wie nie zuvor.',
    },
    {
      name: 'SONY PlayStation 4™️ 500GB Black',
      category: 'Gaming',
      image: '/images/sonyplay1.webp',
      price: 299,
      countInStock: 22,
      brand: 'MEDION',
      rating: 4.6,
      numReviews: 36,
      description: 'Durch eine umfassende Überarbeitung der internen Design-Architektur der neuen PS4 wurden die Abmessungen um mehr als 30% im Vergleich zum Vorgänger-Modell und das Gewicht um 25% im Vergleich zum ersten und um 16% zum aktuellen PS4-Modell reduziert.',
    },
    {
      name: 'SONY PlayStation 4™️ 500GB Black',
      category: 'Gaming',
      image: '/images/sonyplay1.webp',
      price: 299,
      countInStock: 22,
      brand: 'SONY',
      rating: 4.6,
      numReviews: 36,
      description: 'Durch eine umfassende Überarbeitung der internen Design-Architektur der neuen PS4 wurden die Abmessungen um mehr als 30% im Vergleich zum Vorgänger-Modell und das Gewicht um 25% im Vergleich zum ersten und um 16% zum aktuellen PS4-Modell reduziert.',
    },
    {
      name: 'SONY PlayStation VR Virtual Reality Brille Virtual Reality Brille',
      category: 'Gaming',
      image: '/images/vr2.webp',
      price: 199,
      countInStock: 19,
      brand: 'SONY',
      rating: 4.6,
      numReviews: 36,
      description: 'Das klassische schwarze Design dieses Produkts kombiniert gekonnt Stil und Eleganz. Praktisch ist das Gewicht von 0,17 kg. Beim Tragen werden Sie das Produkt daher fast nicht wahrnehmen.',
    },
   
  ],
};
module.exports=data;