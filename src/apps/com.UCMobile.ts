import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.UCMobile',
  name: 'UC浏览器',
  groups: [
    {
      key: -1,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      actionMaximumKey: 0,
      priorityTime: 10000,
      rules: [
        {
          key: 0,
          fastQuery: true,
          anyMatches: [
            '@View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0] <n FrameLayout[childCount>2][text=null][desc=null] >(n+6) [text*="第三方应用" || text*="扭动手机" || text*="点击或上滑" || text*="省钱好物"][visibleToUser=true]',
            'FrameLayout > FrameLayout[childCount>2][text=null][desc=null] > @View[text=null][clickable=true][childCount=0][visibleToUser=true][width<200&&height<200] +(1,2) TextView[index=parent.childCount.minus(1)][childCount=0][visibleToUser=true]',
          ],
          snapshotUrls: 'https://i.gkd.li/i/13188653',
        },
        {
          key: 1,
          matches:
            '[id="android:id/content"] > FrameLayout[childCount=4] >3 FrameLayout[childCount=4] > RelativeLayout[childCount=1] > View[childCount=0][text=null][clickable=true]',
          snapshotUrls: 'https://i.gkd.li/i/13197655',
        },
        {
          key: 2,
          fastQuery: true,
          position: {
            left: 'width * 0.9',
            top: 'width * 0.1676',
          },
          matches: '[id="com.UCMobile.adn_jingdong_sdk:id/animation_view"]',
          exampleUrls: 'https://e.gkd.li/92da64ad-5b08-4343-bec2-bb6a7e0bb92d',
          snapshotUrls: 'https://i.gkd.li/i/16494884',
        },
      ],
    },
    {
      key: 0,
      name: '分段广告-信息流广告',
      activityIds: 'com.uc.browser.InnerUCMobile',
      rules: [
        {
          key: 0,
          matches:
            'TextView[text="广告"] +n ImageView[desc="不感兴趣"][visibleToUser=true]',
          snapshotUrls: [
            'https://i.gkd.li/i/12880737',
            'https://i.gkd.li/i/12881751', // 限定 visibleToUser=true，尽量减少对正常浏览信息的干扰
          ],
        },
        {
          preKeys: [0],
          key: 1,
          matches: '[text^="屏蔽"][text$="广告"]',
          snapshotUrls: [
            'https://i.gkd.li/i/12880772',
            'https://i.gkd.li/i/12881307',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '权限提示-通知权限',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      rules: [
        {
          activityIds: 'com.uc.browser.InnerUCMobile',
          matches: '@ImageView - LinearLayout >n [text="开启消息通知"]',
          snapshotUrls: 'https://i.gkd.li/i/12880812',
        },
      ],
    },
    {
      key: 11,
      name: '其他-请求添加桌面快捷方式弹窗',
      desc: '点击关闭',
      rules: [
        {
          activityIds: 'com.uc.browser.InnerUCMobile',
          matches: '@ImageView + [text^="添加"][text$="到桌面"]',
          snapshotUrls: 'https://i.gkd.li/i/12880983',
        },
      ],
    },
  ],
});
