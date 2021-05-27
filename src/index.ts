export function getOwnerWindow(el: HTMLElement): Window {
  const doc = el.ownerDocument
  const id = 'script-for-inject-owner-window'
  let script = doc.getElementById(id) as HTMLScriptElement | null

  // @ts-ignore
  if (!el.ownerWindow && script) {
    script.id = ''
    script = null
  }

  if (!script) {
    script = doc.createElement('script')
    script.type = 'text/javascript'
    script.id = 'script-for-inject-owner-window'
    script.innerHTML = 'HTMLElement.prototype.ownerWindow = window;'
    doc.head.appendChild(script)
  }
  // @ts-ignore
  return el.ownerWindow
}
