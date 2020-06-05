import { bindListener, unbindListener } from './spaceKey'

const initial = {
  spaceKey: (checked) => (checked ? bindListener() : unbindListener()),
}

export default initial
