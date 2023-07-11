import { MantineProvider } from '@mantine/core';
import './App.less'
import { Notifications } from '@mantine/notifications';
import { WantMore } from './components/want-more';
import { useGlobalStore } from './composerables/state';
import Watermark from 'watermark-plus';
import { useEffect } from 'react';
import { useRoutes } from 'react-router';
import ALLRoutes from './routes/index';
import GoEasy from 'goeasy';
import { createContext } from 'react'

export const Context = createContext('')

const App = () => {

  let routes = useRoutes(ALLRoutes);

  const goEasy = GoEasy.getInstance({
    host: 'hangzhou.goeasy.io', //新加坡host：singapore.goeasy.io
    appkey: "BC-72aab2528b3d4ecbb9beaa95f2fefb57", //替换为您的应用appkey
    modules: ['pubsub']
  });

  useEffect(() => {

    goEasy.connect({
      onSuccess: function () { //连接成功
        console.log("GoEasy connect successfully.") //连接成功
      },
      onFailed: function (error) { //连接失败
        console.log("Failed to connect GoEasy, code:" + error.code + ",error:" + error.content);
      }
    });

    goEasy.pubsub.subscribe({
      channel: "test_channel",//替换为您自己的channel
      onMessage: function (message) { //收到消息
        
        window.alert(message.content)
      },
      onSuccess: function () {
        console.log("Channel订阅成功。");
      },
      onFailed: function (error) {
        console.log("Channel订阅失败, 错误编码：" + error.code + " 错误信息：" + error.content)
      }
    });
  }, [])

  return (
    <Context.Provider value={goEasy}>
      {routes}
    </Context.Provider>
    // <Shell />
    // <MantineProvider withGlobalStyles withNormalizeCSS>
    //   <Notifications position="top-right"/>
    //   {/* { wantMore ? <WantMore /> : null} */}
    // </MantineProvider>
  );
}

export default App