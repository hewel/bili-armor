import { bindListener, unbindListener } from './spaceKey'
import { applyStyle, removeStyle } from './uploadBtn'

const initial = {
  spaceKey: (checked) => (checked ? bindListener() : unbindListener()),
  upload: (checked) => (checked ? applyStyle() : removeStyle()),
}

export default initial
