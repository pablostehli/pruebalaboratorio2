var wms_layers = [];

var format_Prueba_0 = new ol.format.GeoJSON();
var features_Prueba_0 = format_Prueba_0.readFeatures(json_Prueba_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prueba_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prueba_0.addFeatures(features_Prueba_0);
var lyr_Prueba_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prueba_0, 
                style: style_Prueba_0,
                interactive: true,
    title: 'Prueba<br />\
    <img src="styles/legend/Prueba_0_0.png" /> Distribucion 0<br />\
    <img src="styles/legend/Prueba_0_1.png" /> Distribucion 1<br />\
    <img src="styles/legend/Prueba_0_2.png" /> Distribucion 2<br />\
    <img src="styles/legend/Prueba_0_3.png" /> Distribucion 3<br />'
        });
var format_linea_de_limite_070111_1 = new ol.format.GeoJSON();
var features_linea_de_limite_070111_1 = format_linea_de_limite_070111_1.readFeatures(json_linea_de_limite_070111_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linea_de_limite_070111_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linea_de_limite_070111_1.addFeatures(features_linea_de_limite_070111_1);
var lyr_linea_de_limite_070111_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linea_de_limite_070111_1, 
                style: style_linea_de_limite_070111_1,
                interactive: false,
                title: '<img src="styles/legend/linea_de_limite_070111_1.png" /> linea_de_limite_070111'
            });
var format_linea_de_limite_070110_2 = new ol.format.GeoJSON();
var features_linea_de_limite_070110_2 = format_linea_de_limite_070110_2.readFeatures(json_linea_de_limite_070110_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linea_de_limite_070110_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linea_de_limite_070110_2.addFeatures(features_linea_de_limite_070110_2);
var lyr_linea_de_limite_070110_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linea_de_limite_070110_2, 
                style: style_linea_de_limite_070110_2,
                interactive: false,
                title: '<img src="styles/legend/linea_de_limite_070110_2.png" /> linea_de_limite_070110'
            });

lyr_Prueba_0.setVisible(true);lyr_linea_de_limite_070111_1.setVisible(true);lyr_linea_de_limite_070110_2.setVisible(true);
var layersList = [lyr_Prueba_0,lyr_linea_de_limite_070111_1,lyr_linea_de_limite_070110_2];
lyr_Prueba_0.set('fieldAliases', {'DN': 'DN', });
lyr_linea_de_limite_070111_1.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'nam': 'nam', 'gna': 'gna', 'vlj': 'vlj', 'fdc': 'fdc', 'sag': 'sag', });
lyr_linea_de_limite_070110_2.set('fieldAliases', {'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'vlp': 'vlp', 'fdc': 'fdc', 'sag': 'sag', });
lyr_Prueba_0.set('fieldImages', {'DN': 'Range', });
lyr_linea_de_limite_070111_1.set('fieldImages', {'gid': 'Range', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'fna': 'TextEdit', 'nam': 'TextEdit', 'gna': 'TextEdit', 'vlj': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_linea_de_limite_070110_2.set('fieldImages', {'gid': 'Range', 'entidad': 'TextEdit', 'objeto': 'TextEdit', 'vlp': 'TextEdit', 'fdc': 'TextEdit', 'sag': 'TextEdit', });
lyr_Prueba_0.set('fieldLabels', {'DN': 'no label', });
lyr_linea_de_limite_070111_1.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'nam': 'no label', 'gna': 'no label', 'vlj': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_linea_de_limite_070110_2.set('fieldLabels', {'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'vlp': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_linea_de_limite_070110_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});