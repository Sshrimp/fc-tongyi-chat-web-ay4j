import React, { useContext } from 'react'
import { Context } from '../../App';

const HomePage = () => {
    const goEasy = useContext(Context) as any;

    const woaini = () => {
        goEasy.pubsub.publish({
            channel: "test_channel",//替换为您自己的channel
            message: "爱你宝贝!",//替换为您想要发送的消息内容
            onSuccess:function(){
                console.log("消息发布成功。");
            },
            onFailed: function (error) {
                console.log("消息发送失败，错误编码："+error.code+" 错误信息："+error.content);
            }})
    }

    return <div className="HM-blood-home-page">
        <button onClick={() => {woaini()}}>123123</button>
    </div>

};

export default HomePage