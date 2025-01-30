var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_NIDdetruits2024_1 = new ol.format.GeoJSON();
var features_NIDdetruits2024_1 = format_NIDdetruits2024_1.readFeatures(json_NIDdetruits2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NIDdetruits2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NIDdetruits2024_1.addFeatures(features_NIDdetruits2024_1);
var lyr_NIDdetruits2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NIDdetruits2024_1, 
                style: style_NIDdetruits2024_1,
                popuplayertitle: 'NID detruits 2024',
                interactive: false,
                title: '<img src="styles/legend/NIDdetruits2024_1.png" /> NID detruits 2024'
            });
var format_AdherentsGDSA_2 = new ol.format.GeoJSON();
var features_AdherentsGDSA_2 = format_AdherentsGDSA_2.readFeatures(json_AdherentsGDSA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdherentsGDSA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdherentsGDSA_2.addFeatures(features_AdherentsGDSA_2);
var lyr_AdherentsGDSA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdherentsGDSA_2, 
                style: style_AdherentsGDSA_2,
                popuplayertitle: 'Adherents GDSA',
                interactive: false,
                title: '<img src="styles/legend/AdherentsGDSA_2.png" /> Adherents GDSA'
            });
var format_Adhrentpigeagemaillageadherents_gdsa_3 = new ol.format.GeoJSON();
var features_Adhrentpigeagemaillageadherents_gdsa_3 = format_Adhrentpigeagemaillageadherents_gdsa_3.readFeatures(json_Adhrentpigeagemaillageadherents_gdsa_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adhrentpigeagemaillageadherents_gdsa_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adhrentpigeagemaillageadherents_gdsa_3.addFeatures(features_Adhrentpigeagemaillageadherents_gdsa_3);
var lyr_Adhrentpigeagemaillageadherents_gdsa_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adhrentpigeagemaillageadherents_gdsa_3, 
                style: style_Adhrentpigeagemaillageadherents_gdsa_3,
                popuplayertitle: 'Adhérent piégeage maillage — adherents_gdsa',
                interactive: true,
                title: '<img src="styles/legend/Adhrentpigeagemaillageadherents_gdsa_3.png" /> Adhérent piégeage maillage — adherents_gdsa'
            });
var format_Zonepigeage2_4 = new ol.format.GeoJSON();
var features_Zonepigeage2_4 = format_Zonepigeage2_4.readFeatures(json_Zonepigeage2_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonepigeage2_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonepigeage2_4.addFeatures(features_Zonepigeage2_4);
var lyr_Zonepigeage2_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonepigeage2_4, 
                style: style_Zonepigeage2_4,
                popuplayertitle: 'Zone piégeage 2',
                interactive: false,
                title: '<img src="styles/legend/Zonepigeage2_4.png" /> Zone piégeage 2'
            });
var format_golocalisationpigesJabeprode_5 = new ol.format.GeoJSON();
var features_golocalisationpigesJabeprode_5 = format_golocalisationpigesJabeprode_5.readFeatures(json_golocalisationpigesJabeprode_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_golocalisationpigesJabeprode_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_golocalisationpigesJabeprode_5.addFeatures(features_golocalisationpigesJabeprode_5);
var lyr_golocalisationpigesJabeprode_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_golocalisationpigesJabeprode_5, 
                style: style_golocalisationpigesJabeprode_5,
                popuplayertitle: 'géolocalisation pièges Jabeprode',
                interactive: true,
                title: '<img src="styles/legend/golocalisationpigesJabeprode_5.png" /> géolocalisation pièges Jabeprode'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_NIDdetruits2024_1.setVisible(true);lyr_AdherentsGDSA_2.setVisible(true);lyr_Adhrentpigeagemaillageadherents_gdsa_3.setVisible(true);lyr_Zonepigeage2_4.setVisible(true);lyr_golocalisationpigesJabeprode_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_NIDdetruits2024_1,lyr_AdherentsGDSA_2,lyr_Adhrentpigeagemaillageadherents_gdsa_3,lyr_Zonepigeage2_4,lyr_golocalisationpigesJabeprode_5];
lyr_NIDdetruits2024_1.set('fieldAliases', {'D�partement': 'D�partement', 'N�': 'N�', 'Date cr�ation': 'Date cr�ation', 'Heure cr�ation': 'Heure cr�ation', 'Date MAJ': 'Date MAJ', 'Heure MAJ': 'Heure MAJ', 'Statut': 'Statut', 'Motif': 'Motif', 'Dupliqu� avec le signalement n�': 'Dupliqu� avec le signalement n�', 'Type': 'Type', 'Proximit� de ruche(s) d\'abeilles (� moins de 2 kms)': 'Proximit� de ruche(s) d\'abeilles (� moins de 2 kms)', 'Je suis le propri�taire ou locataire du terrain': 'Je suis le propri�taire ou locataire du terrain', 'Pr�nom': 'Pr�nom', 'Nom': 'Nom', 'Ville': 'Ville', 'Code postal': 'Code postal', 'Code INSEE': 'Code INSEE', 'Suivi': 'Suivi', 'T�l�phone': 'T�l�phone', 'email': 'email', 'R�f�rent': 'R�f�rent', 'D�sinsectiseur': 'D�sinsectiseur', 'Gestionnaires de Secteur': 'Gestionnaires de Secteur', 'Secteur': 'Secteur', 'Communaut� de communes': 'Communaut� de communes', 'Statut de prise en charge': 'Statut de prise en charge', 'latitude': 'latitude', 'longitude': 'longitude', 'Position approximative': 'Position approximative', 'Archiv�': 'Archiv�', 'date': 'date', 'Mis � jour le': 'Mis � jour le', 'Adresse': 'Adresse', 'Proche d\'un site sensible': 'Proche d\'un site sensible', 'Sur quel support se trouve-t-il ?': 'Sur quel support se trouve-t-il ?', 'Pr�cisez le type de support de nid': 'Pr�cisez le type de support de nid', 'A quelle hauteur se trouve-t-il ? (en m)': 'A quelle hauteur se trouve-t-il ? (en m)', 'Diam�tre estim� du nid (en cm)': 'Diam�tre estim� du nid (en cm)', 'Nid actif': 'Nid actif', 'Nom Propri�taire': 'Nom Propri�taire', 'Pr�nom Propri�taire': 'Pr�nom Propri�taire', 'T�l�phone Propri�taire': 'T�l�phone Propri�taire', 'Email Propri�taire': 'Email Propri�taire', 'La parcelle est-elle cl�tur�e ?': 'La parcelle est-elle cl�tur�e ?', 'Est-il accessible avec un v�hicule ?': 'Est-il accessible avec un v�hicule ?', 'Distance (en m) par rapport � la voie de circulation': 'Distance (en m) par rapport � la voie de circulation', 'Date d\'intervention': 'Date d\'intervention', 'Date de traitement de la colonie': 'Date de traitement de la colonie', 'D�truit avec emploi d\'insecticide': 'D�truit avec emploi d\'insecticide', 'Nom de l\'insecticide': 'Nom de l\'insecticide', 'Traitement du nid': 'Traitement du nid', 'Pr�cisez la m�thode de destruction du nid': 'Pr�cisez la m�thode de destruction du nid', 'Date d\'�limination': 'Date d\'�limination', 'M�thode d\'�limination du nid': 'M�thode d\'�limination du nid', 'Pr�cisez la m�thode d\'�limination du nid sans insecticide': 'Pr�cisez la m�thode d\'�limination du nid sans insecticide', 'Pr�cisez la m�thode d\'�limination du nid avec insecticide': 'Pr�cisez la m�thode d\'�limination du nid avec insecticide', 'Nid d�croch�': 'Nid d�croch�', 'Date de d�crochage': 'Date de d�crochage', 'Raison de non d�crochage': 'Raison de non d�crochage', 'Commentaire d\'origine': 'Commentaire d\'origine', });
lyr_AdherentsGDSA_2.set('fieldAliases', {'Immatriculation': 'Immatriculation', 'Adresse': 'Adresse', 'Adresse (suite)': 'Adresse (suite)', 'Commune': 'Commune', 'Code postal': 'Code postal', 'Code INSEE': 'Code INSEE', 'field_7': 'field_7', 'latitude': 'latitude', 'longitude': 'longitude', 'result_score': 'result_score', 'result_score_next': 'result_score_next', });
lyr_Adhrentpigeagemaillageadherents_gdsa_3.set('fieldAliases', {'fid': 'fid', 'Immatriculation': 'Immatriculation', 'Adresse': 'Adresse', 'Adresse (suite)': 'Adresse (suite)', 'Commune': 'Commune', 'Code postal': 'Code postal', 'Code INSEE': 'Code INSEE', 'field_7': 'field_7', 'latitude': 'latitude', 'longitude': 'longitude', 'result_score': 'result_score', 'result_score_next': 'result_score_next', });
lyr_Zonepigeage2_4.set('fieldAliases', {'id': 'id', });
lyr_golocalisationpigesJabeprode_5.set('fieldAliases', {'nbre-piege': 'nbre-piege', 'Codepostal': 'Codepostal', 'ville': 'ville', 'frelons-pieges': 'frelons-pieges', 'Nbe non cibl�s pieges': 'Nbe non cibl�s pieges', 'insectes-non-cibles': 'insectes-non-cibles', 'latitude': 'latitude', 'longitude': 'longitude', 'Test': 'Test', });
lyr_NIDdetruits2024_1.set('fieldImages', {'D�partement': 'Range', 'N�': 'Range', 'Date cr�ation': 'TextEdit', 'Heure cr�ation': 'DateTime', 'Date MAJ': 'TextEdit', 'Heure MAJ': 'DateTime', 'Statut': 'TextEdit', 'Motif': 'TextEdit', 'Dupliqu� avec le signalement n�': 'TextEdit', 'Type': 'TextEdit', 'Proximit� de ruche(s) d\'abeilles (� moins de 2 kms)': 'TextEdit', 'Je suis le propri�taire ou locataire du terrain': 'TextEdit', 'Pr�nom': 'TextEdit', 'Nom': 'TextEdit', 'Ville': 'TextEdit', 'Code postal': 'Range', 'Code INSEE': 'Range', 'Suivi': 'TextEdit', 'T�l�phone': 'Range', 'email': 'TextEdit', 'R�f�rent': 'TextEdit', 'D�sinsectiseur': 'TextEdit', 'Gestionnaires de Secteur': 'TextEdit', 'Secteur': 'TextEdit', 'Communaut� de communes': 'TextEdit', 'Statut de prise en charge': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Position approximative': 'TextEdit', 'Archiv�': 'TextEdit', 'date': 'TextEdit', 'Mis � jour le': 'TextEdit', 'Adresse': 'TextEdit', 'Proche d\'un site sensible': 'TextEdit', 'Sur quel support se trouve-t-il ?': 'TextEdit', 'Pr�cisez le type de support de nid': 'TextEdit', 'A quelle hauteur se trouve-t-il ? (en m)': 'Range', 'Diam�tre estim� du nid (en cm)': 'Range', 'Nid actif': 'TextEdit', 'Nom Propri�taire': 'TextEdit', 'Pr�nom Propri�taire': 'TextEdit', 'T�l�phone Propri�taire': 'Range', 'Email Propri�taire': 'TextEdit', 'La parcelle est-elle cl�tur�e ?': 'TextEdit', 'Est-il accessible avec un v�hicule ?': 'TextEdit', 'Distance (en m) par rapport � la voie de circulation': 'Range', 'Date d\'intervention': 'TextEdit', 'Date de traitement de la colonie': 'TextEdit', 'D�truit avec emploi d\'insecticide': 'TextEdit', 'Nom de l\'insecticide': 'TextEdit', 'Traitement du nid': 'TextEdit', 'Pr�cisez la m�thode de destruction du nid': 'TextEdit', 'Date d\'�limination': 'TextEdit', 'M�thode d\'�limination du nid': 'TextEdit', 'Pr�cisez la m�thode d\'�limination du nid sans insecticide': 'TextEdit', 'Pr�cisez la m�thode d\'�limination du nid avec insecticide': 'TextEdit', 'Nid d�croch�': 'TextEdit', 'Date de d�crochage': 'TextEdit', 'Raison de non d�crochage': 'TextEdit', 'Commentaire d\'origine': 'TextEdit', });
lyr_AdherentsGDSA_2.set('fieldImages', {'Immatriculation': 'TextEdit', 'Adresse': 'TextEdit', 'Adresse (suite)': 'TextEdit', 'Commune': 'TextEdit', 'Code postal': 'Range', 'Code INSEE': 'Range', 'field_7': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'result_score': 'TextEdit', 'result_score_next': 'TextEdit', });
lyr_Adhrentpigeagemaillageadherents_gdsa_3.set('fieldImages', {'fid': 'TextEdit', 'Immatriculation': 'TextEdit', 'Adresse': 'TextEdit', 'Adresse (suite)': 'TextEdit', 'Commune': 'TextEdit', 'Code postal': 'Range', 'Code INSEE': 'Range', 'field_7': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'result_score': 'TextEdit', 'result_score_next': 'TextEdit', });
lyr_Zonepigeage2_4.set('fieldImages', {'id': 'TextEdit', });
lyr_golocalisationpigesJabeprode_5.set('fieldImages', {'nbre-piege': 'Range', 'Codepostal': 'Range', 'ville': 'TextEdit', 'frelons-pieges': 'TextEdit', 'Nbe non cibl�s pieges': 'TextEdit', 'insectes-non-cibles': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Test': 'TextEdit', });
lyr_NIDdetruits2024_1.set('fieldLabels', {'D�partement': 'no label', 'N�': 'no label', 'Date cr�ation': 'no label', 'Heure cr�ation': 'no label', 'Date MAJ': 'no label', 'Heure MAJ': 'no label', 'Statut': 'no label', 'Motif': 'no label', 'Dupliqu� avec le signalement n�': 'no label', 'Type': 'no label', 'Proximit� de ruche(s) d\'abeilles (� moins de 2 kms)': 'no label', 'Je suis le propri�taire ou locataire du terrain': 'no label', 'Pr�nom': 'no label', 'Nom': 'no label', 'Ville': 'no label', 'Code postal': 'no label', 'Code INSEE': 'no label', 'Suivi': 'no label', 'T�l�phone': 'no label', 'email': 'no label', 'R�f�rent': 'no label', 'D�sinsectiseur': 'no label', 'Gestionnaires de Secteur': 'no label', 'Secteur': 'no label', 'Communaut� de communes': 'no label', 'Statut de prise en charge': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'Position approximative': 'no label', 'Archiv�': 'no label', 'date': 'no label', 'Mis � jour le': 'no label', 'Adresse': 'no label', 'Proche d\'un site sensible': 'no label', 'Sur quel support se trouve-t-il ?': 'no label', 'Pr�cisez le type de support de nid': 'no label', 'A quelle hauteur se trouve-t-il ? (en m)': 'no label', 'Diam�tre estim� du nid (en cm)': 'no label', 'Nid actif': 'no label', 'Nom Propri�taire': 'no label', 'Pr�nom Propri�taire': 'no label', 'T�l�phone Propri�taire': 'no label', 'Email Propri�taire': 'no label', 'La parcelle est-elle cl�tur�e ?': 'no label', 'Est-il accessible avec un v�hicule ?': 'no label', 'Distance (en m) par rapport � la voie de circulation': 'no label', 'Date d\'intervention': 'no label', 'Date de traitement de la colonie': 'no label', 'D�truit avec emploi d\'insecticide': 'no label', 'Nom de l\'insecticide': 'no label', 'Traitement du nid': 'no label', 'Pr�cisez la m�thode de destruction du nid': 'no label', 'Date d\'�limination': 'no label', 'M�thode d\'�limination du nid': 'no label', 'Pr�cisez la m�thode d\'�limination du nid sans insecticide': 'no label', 'Pr�cisez la m�thode d\'�limination du nid avec insecticide': 'no label', 'Nid d�croch�': 'no label', 'Date de d�crochage': 'no label', 'Raison de non d�crochage': 'no label', 'Commentaire d\'origine': 'no label', });
lyr_AdherentsGDSA_2.set('fieldLabels', {'Immatriculation': 'inline label - always visible', 'Adresse': 'no label', 'Adresse (suite)': 'no label', 'Commune': 'no label', 'Code postal': 'no label', 'Code INSEE': 'no label', 'field_7': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'result_score': 'no label', 'result_score_next': 'no label', });
lyr_Adhrentpigeagemaillageadherents_gdsa_3.set('fieldLabels', {'fid': 'no label', 'Immatriculation': 'inline label - always visible', 'Adresse': 'no label', 'Adresse (suite)': 'no label', 'Commune': 'no label', 'Code postal': 'no label', 'Code INSEE': 'no label', 'field_7': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'result_score': 'no label', 'result_score_next': 'no label', });
lyr_Zonepigeage2_4.set('fieldLabels', {'id': 'no label', });
lyr_golocalisationpigesJabeprode_5.set('fieldLabels', {'nbre-piege': 'inline label - always visible', 'Codepostal': 'no label', 'ville': 'no label', 'frelons-pieges': 'no label', 'Nbe non cibl�s pieges': 'no label', 'insectes-non-cibles': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'Test': 'no label', });
lyr_golocalisationpigesJabeprode_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});