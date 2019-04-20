// tslint:disable no-magic-numbers

import { as, Ms, negative, Translation } from '@musical-patterns/utilities'

const CENTER_BLOCKS_ON_ORIGIN: Translation = as.Translation(negative(4))

const MATERIAL_QA_DELAY: Ms = as.Ms(1000)

export {
    CENTER_BLOCKS_ON_ORIGIN,
    MATERIAL_QA_DELAY,
}
