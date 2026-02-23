
var config = {
    style: 'style.json',
    accessToken: '3IIa8UU7dOJxyoGfLZ4Q3IIa8UU7dOJxyoGfLZ4Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Faros La Palma',
    subtitle: '4 grandes faros en La Palma',
    byline: 'By María Ariza, Docente Experta',
    footer: 'Modifica este pie de página',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Faro 1',
            image: 'Pega la url de la imagen 1',
            description: 'Descripción 1',
            location: {
                center: [-17.9350771462223, 28.5950082441444],
                zoom: 15,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Faro 2',
            image: 'Pega la url de la imagen 2',
            description: 'Descripción 2',
            location: {
                center: [-17.92368, 28.59755],
                zoom: 11.90,
                pitch: 0,
                bearing: 0,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Faro 3',
            image: 'Pega la url de la imagen 3',
            description: 'Descripción 3',
            location: {
                center: [-17.9350771462223, 28.5950082441444],
                zoom: 12.52,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Faro 4',
            image: 'Pega la url de la imagen 4',
            description: 'Descripción 4',
            location: {
                center: [-17.8408837424666, 28.448839267056],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
