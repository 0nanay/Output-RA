ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([786631.872406, 832312.414979, 822982.200757, 858486.326522]);
var wms_layers = [];


        var lyr_CartoDark_0 = new ol.layer.Tile({
            'title': 'Carto Dark',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRIShadedRelief_1 = new ol.layer.Tile({
            'title': 'ESRI Shaded Relief',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Shaded_Relief/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OSMStandard_2 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_3 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Waterwaysasuncion_4 = new ol.format.GeoJSON();
var features_Waterwaysasuncion_4 = format_Waterwaysasuncion_4.readFeatures(json_Waterwaysasuncion_4, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Waterwaysasuncion_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Waterwaysasuncion_4.addFeatures(features_Waterwaysasuncion_4);
var lyr_Waterwaysasuncion_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Waterwaysasuncion_4, 
                style: style_Waterwaysasuncion_4,
                popuplayertitle: 'Waterways asuncion',
                interactive: false,
                title: '<img src="styles/legend/Waterwaysasuncion_4.png" /> Waterways asuncion'
            });
var format_RiceproductionandFloodSusceptibilityAnalysis_5 = new ol.format.GeoJSON();
var features_RiceproductionandFloodSusceptibilityAnalysis_5 = format_RiceproductionandFloodSusceptibilityAnalysis_5.readFeatures(json_RiceproductionandFloodSusceptibilityAnalysis_5, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_RiceproductionandFloodSusceptibilityAnalysis_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RiceproductionandFloodSusceptibilityAnalysis_5.addFeatures(features_RiceproductionandFloodSusceptibilityAnalysis_5);
var lyr_RiceproductionandFloodSusceptibilityAnalysis_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RiceproductionandFloodSusceptibilityAnalysis_5, 
                style: style_RiceproductionandFloodSusceptibilityAnalysis_5,
                popuplayertitle: 'Rice production and Flood Susceptibility Analysis',
                interactive: true,
    title: 'Rice production and Flood Susceptibility Analysis<br />\
    <img src="styles/legend/RiceproductionandFloodSusceptibilityAnalysis_5_0.png" /> High Flood Susceptibility<br />\
    <img src="styles/legend/RiceproductionandFloodSusceptibilityAnalysis_5_1.png" /> Low Flood Susceptibility<br />\
    <img src="styles/legend/RiceproductionandFloodSusceptibilityAnalysis_5_2.png" /> Moderate Flood Susceptibility<br />\
    <img src="styles/legend/RiceproductionandFloodSusceptibilityAnalysis_5_3.png" /> Not Applicable<br />\
    <img src="styles/legend/RiceproductionandFloodSusceptibilityAnalysis_5_4.png" /> Very High Flood Susceptibility<br />' });
var format_Riceproductionarea_6 = new ol.format.GeoJSON();
var features_Riceproductionarea_6 = format_Riceproductionarea_6.readFeatures(json_Riceproductionarea_6, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_Riceproductionarea_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riceproductionarea_6.addFeatures(features_Riceproductionarea_6);
var lyr_Riceproductionarea_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Riceproductionarea_6, 
                style: style_Riceproductionarea_6,
                popuplayertitle: 'Rice production area',
                interactive: false,
                title: '<img src="styles/legend/Riceproductionarea_6.png" /> Rice production area'
            });
var format_BarangayBoundary_7 = new ol.format.GeoJSON();
var features_BarangayBoundary_7 = format_BarangayBoundary_7.readFeatures(json_BarangayBoundary_7, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_BarangayBoundary_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BarangayBoundary_7.addFeatures(features_BarangayBoundary_7);
var lyr_BarangayBoundary_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BarangayBoundary_7, 
                style: style_BarangayBoundary_7,
                popuplayertitle: 'Barangay Boundary',
                interactive: true,
                title: '<img src="styles/legend/BarangayBoundary_7.png" /> Barangay Boundary'
            });
var format_MunicipalityofAsuncion_8 = new ol.format.GeoJSON();
var features_MunicipalityofAsuncion_8 = format_MunicipalityofAsuncion_8.readFeatures(json_MunicipalityofAsuncion_8, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_MunicipalityofAsuncion_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MunicipalityofAsuncion_8.addFeatures(features_MunicipalityofAsuncion_8);
var lyr_MunicipalityofAsuncion_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MunicipalityofAsuncion_8, 
                style: style_MunicipalityofAsuncion_8,
                popuplayertitle: 'Municipality of Asuncion',
                interactive: false,
                title: '<img src="styles/legend/MunicipalityofAsuncion_8.png" /> Municipality of Asuncion'
            });

lyr_CartoDark_0.setVisible(false);lyr_ESRIShadedRelief_1.setVisible(false);lyr_OSMStandard_2.setVisible(false);lyr_GoogleSatellite_3.setVisible(true);lyr_Waterwaysasuncion_4.setVisible(true);lyr_RiceproductionandFloodSusceptibilityAnalysis_5.setVisible(false);lyr_Riceproductionarea_6.setVisible(true);lyr_BarangayBoundary_7.setVisible(true);lyr_MunicipalityofAsuncion_8.setVisible(false);
var layersList = [lyr_CartoDark_0,lyr_ESRIShadedRelief_1,lyr_OSMStandard_2,lyr_GoogleSatellite_3,lyr_Waterwaysasuncion_4,lyr_RiceproductionandFloodSusceptibilityAnalysis_5,lyr_Riceproductionarea_6,lyr_BarangayBoundary_7,lyr_MunicipalityofAsuncion_8];
lyr_Waterwaysasuncion_4.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'width': 'width', });
lyr_RiceproductionandFloodSusceptibilityAnalysis_5.set('fieldAliases', {'FloodSusc': 'FloodSusc', 'SUSC': 'SUSC', 'BARANGAY': 'BARANGAY', 'Area': 'Area', });
lyr_Riceproductionarea_6.set('fieldAliases', {'DN': 'DN', });
lyr_BarangayBoundary_7.set('fieldAliases', {'ID': 'ID', 'BARANGAY': 'BARANGAY', 'Yield': 'Yield', });
lyr_MunicipalityofAsuncion_8.set('fieldAliases', {'ID': 'ID', 'Municipali': 'Municipali', 'Area_has': 'Area_has', });
lyr_Waterwaysasuncion_4.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'width': 'Range', });
lyr_RiceproductionandFloodSusceptibilityAnalysis_5.set('fieldImages', {'FloodSusc': 'TextEdit', 'SUSC': 'TextEdit', 'BARANGAY': 'TextEdit', 'Area': 'TextEdit', });
lyr_Riceproductionarea_6.set('fieldImages', {'DN': 'Range', });
lyr_BarangayBoundary_7.set('fieldImages', {'ID': '', 'BARANGAY': '', 'Yield': '', });
lyr_MunicipalityofAsuncion_8.set('fieldImages', {'ID': 'TextEdit', 'Municipali': 'TextEdit', 'Area_has': 'TextEdit', });
lyr_Waterwaysasuncion_4.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'type': 'no label', 'width': 'no label', });
lyr_RiceproductionandFloodSusceptibilityAnalysis_5.set('fieldLabels', {'FloodSusc': 'inline label - visible with data', 'SUSC': 'hidden field', 'BARANGAY': 'inline label - visible with data', 'Area': 'inline label - visible with data', });
lyr_Riceproductionarea_6.set('fieldLabels', {'DN': 'no label', });
lyr_BarangayBoundary_7.set('fieldLabels', {'ID': 'hidden field', 'BARANGAY': 'inline label - visible with data', 'Yield': 'inline label - visible with data', });
lyr_MunicipalityofAsuncion_8.set('fieldLabels', {'ID': 'no label', 'Municipali': 'no label', 'Area_has': 'no label', });
lyr_MunicipalityofAsuncion_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});