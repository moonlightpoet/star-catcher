Cocos Creator实现官网教程中的案例
作者：月光诗人	Cocos Creator版本：1.2.0

首先，到官网上找到教程的位置。
下载出事项目。
解压到项目目录。
这里是项目目录，包含assets目录和project.json文件。
使用Cocos Creator打开这个项目。
Cocos Creator的资源管理器中包含我们需要的资源。
开始编写主角脚本。
将Player组件（JS文件）添加到主角节点上（Player节点）
编写跳跃和移动代码。
保存脚本，开始第一次运行程序。
出错了，在“控制台检查错误”。
为主角（Player）添加按键监测。
制作星星的Prefab。	--	Prefab制作后是可以从层级管理器中删除的，删除前会保存在资源管理器中。
添加游戏控制脚本。
修改Game脚本，在随机位置生成星星。
添加主角触碰星星的行为。
我们只要在Game脚本生成Star节点实例时，将Game组件的实例传入星星并保存起来就好了，之后我们可以随时通过game.player来访问到主角节点。
添加得分。
在game脚本中添加的反逻辑。
失败判定和重新开始。
加入星星渐隐的视觉效果。
加入音效。
亲测音效很好。
END。

项目github地址：https://github.com/moonlightpoet/star-catcher
