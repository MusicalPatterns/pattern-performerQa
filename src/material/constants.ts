// tslint:disable no-magic-numbers

import { as, Cardinal, Ms, negative, Translation } from '@musical-patterns/utilities'

const CENTER_BLOCKS_ON_ORIGIN: Cardinal = as.Cardinal(negative(4))

const MATERIAL_QA_DELAY: Translation<Ms> = as.Translation<Ms>(1000)

export {
    CENTER_BLOCKS_ON_ORIGIN,
    MATERIAL_QA_DELAY,
}
