import { pageName, userAgent } from '@/assets/js/tools'
import { getRandomProperty } from '@/assets/js/tools'
import urls from '@/constants/urls'
import live2dModels from '@/constants/live2dModels'

// 看板娘
const setLive2d = () => {
    const options = userOptions.live2d
    if (!options.enable) return
    if (options.page !== pageName() && options.page !== 'all') return
    if (options.agent !== userAgent() && options.agent !== 'all') return

    const live2dCDN = urls.CDN.live2d
    let model =
        options.model === 'random'
            ? live2dModels[getRandomProperty(live2dModels)]
            : live2dModels[options.model]
    console.log('live2d model：', model)
    const url = `${live2dCDN.url}@${live2dCDN.version}/${model}`
    const $live2d = `<canvas style="position:fixed;${options.position}:0;bottom:0;z-index:3" width="${options.width}" height="${options.height}" id="model"></canvas>`
    $('body').append($live2d)
    $.getScript('https://guangzan.gitee.io/awescnb/assets/js/live2d.min.js', () => {
        loadlive2d('model', url)
    })
}

export default setLive2d