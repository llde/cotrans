import { start } from './main'
import pixiv from './pixiv'
import pixivSettings from './pixiv/settings'
import twitter from './twitter'
import twitterSettings from './twitter/settings'
import misskey from './misskey'
import rawkuma from './rawkuma'
start(
  [
    pixiv,
    twitter,
    misskey,
    rawkuma,
  ],
  [
    pixivSettings,
    twitterSettings,
  ],
)
