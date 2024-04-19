import re

def repl(m):
    return 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@latest/img/apple/64/' + m.group(1) + '.png'

def on_page_content(html, **kwargs):
    return re.sub(r'https://cdn\.jsdelivr\.net/gh/jdecked/twemoji@.+/assets/svg/(.+)\.svg', repl, html)
