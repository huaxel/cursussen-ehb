# Prompt

Fungeer als een ERP systeem dat een conversie maakt van de sales order naar de delivery.

Je kan gebruik maken van deze testdata en foto in bijlage.

Customer ID Order ID Item ID Product Aantal Prijs per stuk (EUR) BTW (%) Leverdatum
C001 1001 1 Boekenrek 1 100 6 2025-03-12
C001 1001 2 Koffiemachine 1 150 21 2025-03-15
C001 1001 3 Koffiefilters 3 5 21 2025-03-15
C001 1011 26 Waterkoker 1 50 21 2025-03-18
C001 1011 27 Snijplank 1 15 21 2025-03-18
C002 1002 4 Fietshelm 2 50 21 2025-03-13
C002 1002 5 Fietslicht 1 30 21 Backorder
C003 1003 6 Bloembollen 10 2 6 2025-03-14
C003 1003 7 Tuinkabouter 1 25 21 2025-03-14
C003 1012 28 Gieter 1 20 21 2025-03-19

M.a.w.: je zal trainen om mappings uit te voeren. Geef de testdata in van de salesorder, en laat de deliverygegevens genereren

# Antwoord

Prima! Op basis van het diagram en de testdata genereer ik de Delivery-gegevens uit de Sales Orders.

🔁 Mappingregels (zoals in het diagram):
• Delivery ID = "DD" + YYYY (uit leverdatum) + Order ID + Leveringsnummer (auto-id)
• Order ID = blijft hetzelfde
• Leveringsdatum = van het item
• Items = lijst van Item IDs per levering
• Totaalprijs incl. BTW = (aantal _prijs per stuk)_ (100 + btw) / 100

📦 Geconverteerde Delivery Gegevens

Delivery 1
• Delivery ID: DD202510011
• Order ID: 1001
• Leveringsdatum: 2025-03-12
• Items: [1]
• Totaalprijs incl. BTW: (1×100)×(100+6)/100 = 106 EUR

Delivery 2
• Delivery ID: DD202510012
• Order ID: 1001
• Leveringsdatum: 2025-03-15
• Items: [2, 3]
• Totaalprijs incl. BTW:
• Item 2: (1×150)×1.21 = 181.50
• Item 3: (3×5)×1.21 = 18.15
• Totaal: 199.65 EUR

Delivery 3
• Delivery ID: DD202510113
• Order ID: 1011
• Leveringsdatum: 2025-03-18
• Items: [26, 27]
• Totaalprijs incl. BTW:
• Item 26: (1×50)×1.21 = 60.50
• Item 27: (1×15)×1.21 = 18.15
• Totaal: 78.65 EUR

Delivery 4
• Delivery ID: DD202510024
• Order ID: 1002
• Leveringsdatum: 2025-03-13
• Items: [4]
• Totaalprijs incl. BTW: (2×50)×1.21 = 121 EUR

🔁 Backorder (niet geleverd):
• Item 5 uit Order 1002 (Fietslicht, leverdatum: Backorder) wordt niet meegenomen in de deliveries.

Delivery 5
• Delivery ID: DD202510035
• Order ID: 1003
• Leveringsdatum: 2025-03-14
• Items: [6, 7]
• Totaalprijs incl. BTW:
• Item 6: (10×2)×1.06 = 21.20
• Item 7: (1×25)×1.21 = 30.25
• Totaal: 51.45 EUR

Delivery 6
• Delivery ID: DD202510126
• Order ID: 1012
• Leveringsdatum: 2025-03-19
• Items: [28]
• Totaalprijs incl. BTW: (1×20)×1.21 = 24.20 EUR
