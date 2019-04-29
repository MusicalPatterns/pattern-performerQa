// tslint:disable no-magic-numbers

import { as, Cardinal, Duration, musicalAs, negative } from '@musical-patterns/utilities'

const CENTER_BLOCKS_ON_ORIGIN: Cardinal = as.Cardinal(negative(4))

const MATERIAL_QA_DELAY: Duration = musicalAs.Duration(1000)

export {
    CENTER_BLOCKS_ON_ORIGIN,
    MATERIAL_QA_DELAY,
}
