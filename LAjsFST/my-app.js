angular
    .module('app', ['ngAnimate'])
    .controller('dirController', function() {
        var dir = this;
        dir.list = [
            {name:'Albert',     age: 29, img:'https://lh3.googleusercontent.com/proxy/fcWdITDj_4Nq5rxWV_Ld5BtTT_Z-h5OaSxlLUoSScxOuhnfm7OPmARXqH-0Wf5dzI5Wm-HlQ-xOjdVL4Hv5RwctIlKw'},
            {name:'Balázs',     age: 35, img:'https://lh3.googleusercontent.com/proxy/KSNblN3er4C-iVgAHZC6DdBlD3XubLTCFjrUk_bB2pkejbh0cIPq1De1YPQ93TwnOXCdDNDN55SuDFE-X7TvTbR7DHw9gQQI0k0RsM-d2Rybxjq4L4tmDceYICyo'},
            {name:'Cecilia',    age: 13, img:'https://lh3.googleusercontent.com/proxy/ghfqovr1ADIHfsHEwDdoD8MwmnNwnnp7xkXVkPi4N6TmJaSu0IVuHJGtvZa_70hmxh3b1qBLOKdXfC6RkcfLdjORm0Hajvu3Xg23bl0'},
            {name:'Dóra',       age: 21, img:'https://24.hu/app/uploads/2012/05/Cseh-zaszlo.png'},
            {name:'Evelin',     age: 39, img:'https://ntn2020.uni-eszterhazy.hu/resource/image/menu/angolzaszlo.png'}
        ];
        dir.add = function() {
            dir.list.push({name:dir.name, age:dir.age})
        };
    });