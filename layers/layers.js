var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'Снеговой район',
                interactive: true,
    title: 'Снеговой район<br />\
    <img src="styles/legend/_1_0.png" /> I<br />\
    <img src="styles/legend/_1_1.png" /> II<br />\
    <img src="styles/legend/_1_2.png" /> III<br />\
    <img src="styles/legend/_1_3.png" /> IV<br />\
    <img src="styles/legend/_1_4.png" /> V<br />\
    <img src="styles/legend/_1_5.png" /> VI<br />\
    <img src="styles/legend/_1_6.png" /> VII<br />\
    <img src="styles/legend/_1_7.png" /> VIII<br />\
    <img src="styles/legend/_1_8.png" /> <br />' });
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Города'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Снег'});
var group_ = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Ветер'});

lyr_OSMStandard_0.setVisible(true);lyr__1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr__1];
lyr__1.set('fieldAliases', {'fid': 'fid', 'region_typ': 'Тип региона', 'region': 'Регион', 'district': 'Район', 'city': 'Город', 'federal': 'Федеральный округ', 'snow_reg': 'Снеговой район', 'wind_reg': 'Ветровой район', 'snow_load': 'Снеговая нагрузка', });
lyr__1.set('fieldImages', {'fid': 'TextEdit', 'region_typ': 'UniqueValues', 'region': 'TextEdit', 'district': 'UniqueValues', 'city': 'TextEdit', 'federal': 'UniqueValues', 'snow_reg': 'UniqueValues', 'wind_reg': 'UniqueValues', 'snow_load': 'Range', });
lyr__1.set('fieldLabels', {'fid': 'hidden field', 'region_typ': 'hidden field', 'region': 'inline label - visible with data', 'district': 'hidden field', 'city': 'inline label - visible with data', 'federal': 'hidden field', 'snow_reg': 'inline label - visible with data', 'wind_reg': 'header label - visible with data', 'snow_load': 'inline label - visible with data', });
lyr__1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});