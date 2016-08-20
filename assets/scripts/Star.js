cc.Class({
    extends: cc.Component,

    properties: {
        // 星星和主角之间的距离小于这个数值时，就会完成收集
        pickRadius: 0
    },
    
    getPlayerDistance: function () {
        // 根据player节点位置判断距离
        var playerPos = this.game.player.getPosition();
        // 根据亮点位置计算亮点之间距离
        var dist = cc.pDistance(this.node.position, playerPos);
        return dist;
    },
    
    onPicked: function () {
        // 当星星被收集时，调用Game脚本中的接口，生成一个新的星星
        this.game.spawnNewStar();
        // 调用game脚本的得分方法
        this.game.gainScore();
        // 然后销毁当前星星节点
        this.node.destroy();
    },
    
    onLoad: function () {
        
    },
    
    update: function (dt) {
        // 每帧判断和主角之间的距离是否小于收集距离
        if (this.getPlayerDistance() < this.pickRadius) {
            // 调用手机行为
            this.onPicked();
            return;
        }
        // 根据Game脚本中的计时器更新星星的透明度
        // var opacityRatio = 1 - this.game.timer / this.game.starDuration;
        // var minOpacity = 50;
        // this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
    },
});
