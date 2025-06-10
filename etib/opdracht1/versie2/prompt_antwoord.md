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

M.a.w.: je zal trainen om mappings uit te voeren. Geef de testdata in van de salesorder, en laat de deliverygegevens genereren. Bij het veld 'item' in de delivery output moet de naam van het product ipv de item id

# Antwoord

Pr
Uitstekend! Op basis van de bijgevoegde afbeelding en jouw testdata, zal ik de sales orders converteren naar deliveries zoals een ERP-systeem dat zou doen.

Belangrijke regels uit de mapping:
• Delivery ID = "DD" + YYYY + Order ID + auto-increment nummer (per leverdatum).
• Items bevatten de productnamen.
• Leveringsdatum wordt in YYYYMMDD-formaat gezet.
• Totaalprijs incl. BTW = (aantal _prijs per stuk)_ (100 + BTW%) / 100.

⸻

✉️ Deliverygegevens gegenereerd uit Sales Orders

Delivery 1
• Delivery ID: DD202510011
• Order ID: 1001
• Leveringsdatum: 20250312
• Items: Boekenrek
• Totaalprijs incl. BTW: €106,00

Delivery 2
• Delivery ID: DD202510012
• Order ID: 1001
• Leveringsdatum: 20250315
• Items: Koffiemachine, Koffiefilters
• Totaalprijs incl. BTW:
• Koffiemachine: €181,50
• Koffiefilters (3 × €5): €18,15
• Totaal: €199,65

Delivery 3
• Delivery ID: DD202510113
• Order ID: 1011
• Leveringsdatum: 20250318
• Items: Waterkoker, Snijplank
• Totaalprijs incl. BTW:
• Waterkoker: €60,50
• Snijplank: €18,15
• Totaal: €78,65

Delivery 4
• Delivery ID: DD202510024
• Order ID: 1002
• Leveringsdatum: 20250313
• Items: Fietshelm
• Totaalprijs incl. BTW: €121,00

⚠️ Let op: Fietslicht is een Backorder, dus komt niet in de delivery.

Delivery 5
• Delivery ID: DD202510035
• Order ID: 1003
• Leveringsdatum: 20250314
• Items: Bloembollen, Tuinkabouter
• Totaalprijs incl. BTW:
• Bloembollen (10 × €2): €21,20
• Tuinkabouter: €30,25
• Totaal: €51,45

Delivery 6
• Delivery ID: DD202510126
• Order ID: 1012
• Leveringsdatum: 20250319
• Items: Gieter
• Totaalprijs incl. BTW: €24,20

Hier is de CSV-output van de gegenereerde Deliverygegevens op basis van de salesorders:

Delivery ID,Order ID,Leveringsdatum,Items,Totaalprijs incl. BTW
DD202510011,1001,20250312,"Boekenrek",106.00
DD202510012,1001,20250315,"Koffiemachine; Koffiefilters",199.65
DD202510113,1011,20250318,"Waterkoker; Snijplank",78.65
DD202510024,1002,20250313,"Fietshelm",121.00
DD202510035,1003,20250314,"Bloembollen; Tuinkabouter",51.45
DD202510126,1012,20250319,"Gieter",24.20
