import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecellsz.watch.guard',
  name: '乐康守护',
  groups: [
    {
      key: 0,
      name: '开屏广告',
      matchTime: 10000,
      actionMaximum: 1,
      resetMatch: 'app',
      priorityTime: 10000,
      rules:
        'FrameLayout > FrameLayout[childCount>2] > @View[clickable=true][visibleToUser=true] + TextView[visibleToUser=true][text=null]',
      snapshotUrls: 'https://i.gkd.li/i/14039510',
    },
  ],
});
