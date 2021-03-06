import { pageName } from '@tools'
import { getBlogname, getCurrentPostUrl } from '@cnblog'
import { postSignatureConfig } from '@config/plugins'

// 设置随笔签名
const build = (content, licenseName, licenseLink) => {
    const agreement = licenseName.length
        ? licenseName
        : '知识共享署名-非商业性使用-禁止演绎 2.5 中国大陆'
    const author = getBlogname()
    const href = getCurrentPostUrl()

    let custom = ''
    for (let i = 0; i < content.length; i++) {
        custom += '<p>' + content[i] + '</p>'
    }
    const $signature = `<div id='post-signature'>
                        <p>本文作者：${author}</p>
                        <p>本文链接：${href}</p>
                        <p>版权声明：本作品采用${agreement}<a href='${licenseLink}'>许可协议</a>进行许可。</p>
                        ${custom}
                      </div>`
    $('#cnblogs_post_body').append($signature)
}

export default devOptions => {
    const {
        enable,
        content,
        licenseName,
        licenseLink,
    } = postSignatureConfig(devOptions)
    if (!enable) return
    if (pageName() !== 'post') return
    build(content, licenseName, licenseLink)
}
