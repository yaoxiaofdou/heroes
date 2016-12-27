"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        // hero 英雄数据
        var heroes = [
            { id: 11, name: 'Mr. Nice', isShow: true },
            { id: 12, name: 'Narco', isShow: true },
            { id: 13, name: 'Bombasto', isShow: true },
            { id: 14, name: 'Celeritas', isShow: true },
            { id: 15, name: 'Magneta', isShow: true },
            { id: 16, name: 'RubberMan', isShow: true },
            { id: 17, name: 'Dynama', isShow: true },
            { id: 18, name: 'Dr IQ', isShow: true },
            { id: 19, name: 'Magma', isShow: true },
            { id: 20, name: 'Tornado', isShow: true }
        ];
        // carousel img 数据
        var CarouselImgArr = [
            {
                src: "http://img0.imgtn.bdimg.com/it/u=1258756953,1836890361&fm=21&gp=0.jpg",
                name: "10剑客",
                isActive: false
            }, {
                src: "http://img4.imgtn.bdimg.com/it/u=3432344150,3031947666&fm=11&gp=0.jpg",
                name: "平行世界",
                isActive: false
            }, {
                src: "http://img5.imgtn.bdimg.com/it/u=22303573,3986178658&fm=21&gp=0.jpg",
                name: "就是厉害",
                isActive: false
            }, {
                src: "http://img1.imgtn.bdimg.com/it/u=1759431283,2426947470&fm=21&gp=0.jpg",
                name: "秋冬时尚",
                isActive: false
            }
        ];
        return {
            heroes: heroes,
            CarouselImgArr: CarouselImgArr,
        };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
