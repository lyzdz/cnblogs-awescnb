import { pageName, cacheScript } from '@tools'
import { clipboard } from '@constants/urls'

function build() {
    for (let i = 0; i <= $('pre').length; i++) {
        $('pre')
            .eq(i)
            .wrapAll('<div class="copyItem"></div>')
        $('.copyItem').css('position', 'relative')
        $('pre')
            .eq(i)
            .before(
                '<div class="clipboard-button" id="copy_btn_' +
                    i +
                    ' " data-clipboard-target="#copy_target_' +
                    i +
                    '"title="复制"></div>',
            )
        $('pre')
            .eq(i)
            .attr('id', 'copy_target_' + i)
    }
    /* eslint-disable */
    var clipboard = new ClipboardJS('.clipboard-button')
    /* eslint-disable */
    clipboard.on('success', function(e) {
        e.trigger.innerHTML = '成功'
        setTimeout(function() {
            e.trigger.innerHTML = ''
        }, 2 * 1000)
        e.clearSelection()
    })
    clipboard.on('error', function(e) {
        e.trigger.innerHTML = '失败'
        setTimeout(function() {
            e.trigger.innerHTML = ''
        }, 2 * 1000)
        e.clearSelection()
    })
}

function copy() {
    if (pageName() !== 'post') return
    cacheScript(clipboard, build)
}

export default copy
