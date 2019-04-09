// tslint:disable no-magic-numbers

import { Ms, negative, to, Translation } from '@musical-patterns/utilities'

const CENTER_BLOCKS_ON_ORIGIN: Translation = to.Translation(negative(4))

const PERFORMER_QA_DELAY: Ms = to.Ms(1000)

export {
    CENTER_BLOCKS_ON_ORIGIN,
    PERFORMER_QA_DELAY,
}
